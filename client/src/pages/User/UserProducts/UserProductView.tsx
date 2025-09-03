import React, { useEffect, useState } from 'react';
import { useToast } from '@context/toastContext';
import { useAtom, useSetAtom } from 'jotai';
import { editModeAtom, userAtom } from '@utilities/atoms';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ProductApi } from '@apis/ProductApi';
import { Product } from '@models/Product';
import { UserApi } from '@apis/UserApi';
import { UserProductApi } from '@apis/UserProductApi';
import { GroceryListItem } from '@models/GroceryListItem';
import { Configuration } from '@generated/runtime';
import { AddShoppingCartIcon, HighlightOffIcon, RemoveShoppingCartIcon, SearchIcon } from '@imports/MaterialUIIcons';
import { sendSMS } from '@hooks/SendSMS';
import API_BASE_PATH from '@config/apiConfig';
import styles from '../UserView.module.scss';

const UserProductPage: React.FC = () => {
	const toast = useToast()
	const location = useLocation();
	type Suggestion = Product | { id: 'new'; name: string };
	const [groceryList, setGroceryList] = useState<GroceryListItem[]>([]);
	const [products, setProducts] = useState<Product[]>([]);
    const unhandledTypedList = location.state?.unhandledTypedList as string;
	const [typedList, setTypedList] = useState<string>(unhandledTypedList ?? '');
	const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
	const [storeId, setStoreId] = useState<number>(1);
	const [user] = useAtom(userAtom);
	const setUserAtom = useSetAtom(userAtom);
  	const [editMode] = useAtom(editModeAtom);
	const [openEmailModal, setOpenEmailModal] = useState(false);
	const [emailInput, setEmailInput] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		const fetchUserProducts = async () => {
			try {
				const userProductApi = new UserProductApi(
					new Configuration({ basePath: API_BASE_PATH })
				);
				const response = await userProductApi.getGroceryListItemsByUserId({userId: user?.id ?? 0});
				const data = response.map((groceryListItem: GroceryListItem) => ({
					...groceryListItem,
					id: groceryListItem.userProductId,
				}));
				setGroceryList(data);
			} catch (error: any) {
				console.error('Error fetching products:', error);
				const errorMessage =
					error.response?.data?.message || 'Failed to fetch products. Please check your network connection or server status.';
				toast(errorMessage, 'error');
			}
		};
		const fetchProducts = async () => {
			try {
				const productApi = new ProductApi(
					new Configuration({ basePath: API_BASE_PATH })
				);
				const response = await productApi.getProducts();
				const data = response.map((product: Product) => ({
					...product,
					id: product.id,
				}));
				setProducts(data);
			} catch (error: any) {
				console.error('Error fetching products:', error);
				const errorMessage =
					error.response?.data?.message || 'Failed to fetch products. Please check your network connection or server status.';
				toast(errorMessage, 'error');
			}
		};
		const checkTypedList = async () => {
			if (typedList != '') {
				checkForMatch(typedList);
			}
		};
		fetchUserProducts();
		fetchProducts();
		checkTypedList();
	}, [user, navigate]);

	const checkForMatch = (e: string) => {
		const userInput = e;
		setTypedList(userInput);

		if (userInput.length > 1) {
			const filtered = products.filter((product) =>
				product.name?.toLowerCase().includes(userInput.toLowerCase())
			);

			const exactMatch = products.some(
				(product) => product.name?.toLowerCase() === userInput.toLowerCase()
			);

			if (userInput.includes(',')) {
				const firstWord = userInput.split(",")[0];
				const extendedSuggestions: Suggestion[] = exactMatch
				? filtered
				: [...filtered, { id: 'new', name: `Add "${firstWord}" as a new product` }];

				setSuggestions(extendedSuggestions);
			} else {
				const extendedSuggestions: Suggestion[] = exactMatch
					? filtered
					: [...filtered, { id: 'new', name: `Add "${userInput}" as a new product` }];

				setSuggestions(extendedSuggestions);
			}
		} else {
			setSuggestions([]);
		}
	};

	const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
		e.preventDefault();

		const pastedText = e.clipboardData.getData('text');
		const transformed = pastedText
		.split(/[\n\r,]+/) // split on newlines or commas
		.map(s => s.trim())
		.filter(Boolean)
		.join(', ');

		const input = e.target as HTMLInputElement;
		const cursorPos = input.selectionStart ?? typedList.length;
		const newValue =
		typedList.slice(0, cursorPos) + transformed + typedList.slice(cursorPos);

		setTypedList(newValue);
		handleAddUserProducts(newValue);
	};

	const handleAddUserProducts = (e: string, newStoreId?: number) => {
		const productsList = e;
		setTypedList(productsList);

    	const effectiveStoreId = newStoreId ?? storeId;
		if (newStoreId) {
			setStoreId(newStoreId);
		}

		const addUserProducts = async () => {
			try {
				const userProductApi = new UserProductApi(
					new Configuration({ basePath: API_BASE_PATH })
				);
				const userId = user?.id || 0;
				const response = await userProductApi.addUserProducts({ userProductsCriteria: { userId, storeId: effectiveStoreId, productsList } });
				const data = response.groceryListItems?.map((groceryListItem: GroceryListItem) => ({
					...groceryListItem,
					id: groceryListItem.userProductId,
				})) ?? [];
				setGroceryList(data);
				checkForMatch(response.unhandledProductsList ?? '');
				setTypedList(response.unhandledProductsList ?? '');
			} catch (error: any) {
				console.error('Error adding products:', error);
				const errorMessage =
					error.response?.data?.message || 'Failed to add products. Please check your network connection or server status.';
				toast(errorMessage, 'error');
			}
		};
		addUserProducts();
	};

	const handleAddNewProduct = async (newProductName: string) => {
		try {
			const [firstProduct, unhandledProductsList] = newProductName.split(/,(.+)/).filter(Boolean);
			const name = firstProduct.split(' ')
				.map(word => word.charAt(0).toUpperCase() + word.slice(1))
				.join(' ');

			navigate(`/userproducts/add`, {
				state: { product: { name, id: 0 }, storeId: storeId, unhandledProductsList }
			});
		} catch (error) {
			console.error('Error adding new product:', error);
				toast('Error adding new product:', 'error');
		}
	};

	const handleProductNameClick = (groceryListItem: GroceryListItem) => {
		try {
			const initialGroceryListItem = groceryList.find(p => p.userProductId === groceryListItem.userProductId);
			if (initialGroceryListItem) {
				navigate(`/userproducts/details`, {
					state: { initialGroceryListItem }
				});
			} else {
				toast('Product details not found.', 'error');
			}
		} catch (error) {
			console.error('Error navigating to product details:', error);
			toast('Error navigating to product details.', 'error');
		}
	}

	const handleUserProductInCart = async (groceryListItem: GroceryListItem) => {
		try {
			const userProductApi = new UserProductApi(
				new Configuration({ basePath: API_BASE_PATH })
			);
			groceryListItem.inCart = !groceryListItem.inCart;
			const success = await userProductApi.saveGroceryListItem({ groceryListItem });
			if (success) {
				setGroceryList(prevList =>
					prevList.map(item =>
						item.userProductId === groceryListItem.userProductId ? { ...item, inCart: groceryListItem.inCart } : item
					)
				);
			} else {
				toast('Failed to update cart status. Please try again.', 'error');
			}
		} catch (error: any) {
			console.error('Error adding product to cart:', error);
			const errorMessage =
				error.response?.data?.message || 'Failed to add product to cart. Please check your network connection or server status.';
			toast(errorMessage, 'error');
		}
	}

	const handleDeleteUserProduct = async (userProductId: number) => {
		try {
			const userProductApi = new UserProductApi(
				new Configuration({ basePath: API_BASE_PATH })
			);
			await userProductApi.deleteUserProduct({ userProductId });

			if (user) {
				const response = await userProductApi.getGroceryListItemsByUserId({userId: user.id ?? 0});
				const data = response.map((groceryListItem: GroceryListItem) => ({
					...groceryListItem,
					id: groceryListItem.userProductId,
				}));
				setGroceryList(data);
			}
		} catch (error: any) {
			console.error('Error deleting product:', error);
			const errorMessage =
				error.response?.data?.message || 'Failed to delete product. Please check your network connection or server status.';
			toast(errorMessage, 'error');
		}
	};

	const handleAddFavorites = async () => {
		try {
			const userProductApi = new UserProductApi(
				new Configuration({ basePath: API_BASE_PATH })
			);
			const userId = user?.id || 0;

			const groceryListItems = await userProductApi.addFavoriteUserProducts({ userProductsCriteria: { userId, storeId, productsList: '' } });
			const data = groceryListItems?.map((groceryListItem: GroceryListItem) => ({
				...groceryListItem,
				id: groceryListItem.userProductId,
			})) ?? [];
			if (!data.some(item => item.isFavorite)) {
				toast('You have 0 products favorited.', 'info');
			}			
			setGroceryList(data);
			setSuggestions([]);
			setTypedList('');
		} catch (error: any) {
			console.error('Error adding favorite products:', error);
			const errorMessage =
				error.response?.data?.message || 'Failed to add favorite products. Please check your network connection or server status.';
			toast(errorMessage, 'error');
		}
	}

	const handleShareList = async (emailString: string) => {
		try {
			const userApi = new UserApi(
				new Configuration({ basePath: API_BASE_PATH })
			);
			
			if (user) {
				const response = await userApi.saveUserShareList({ userListShareRequest: {userId: user.id, emailString } });
				setUserAtom(response);
				console.log('User Share List updated.');
				toast('User Share List updated.', 'success');
			}
		} catch (error: any) {
			console.error('Error updating User Share List:', error);
			const errorMessage =
				error.response?.data?.message || 'Failed to update User Share List.';
			toast(errorMessage, 'error');
		}
	};

	const columns: GridColDef[] = [
		{ field: 'aisleName', headerName: 'Aisle', width: 55, sortable: false, disableColumnMenu: true },
		{
			field: 'productName',
			headerName: 'Name',
			flex: 1,
			sortable: false,
			disableColumnMenu: true,
			renderCell: (params) => {
				const data = params.row.notes ? params.value + ' (' + params.row.notes + ')' : params.value;
				return (
				<span
				onClick={() => handleProductNameClick(params.row)}
				style={{
					cursor: 'pointer',
					textDecoration: 'underline',
					color: 'var(--text-primary)',
				}}
				>
				{data}
				</span>
			)},
		},
		{ field: 'quantity', headerName: 'Qty', width: 45, sortable: false, disableColumnMenu: true },
		{
			field: 'actions',
			headerName: '',
			width: 50,
			sortable: false,
			disableColumnMenu: true,
			renderCell: (params) => (
				editMode ? 
					<IconButton
						onClick={() => handleDeleteUserProduct(params.row.userProductId)}
						style={{ color: 'var(--text-primary)', border: 'none', cursor: 'pointer', paddingBottom: '1rem' }}
					>
						<HighlightOffIcon />
					</IconButton> :
					<IconButton
						onClick={() => handleUserProductInCart(params.row)}
						style={{ color: 'var(--text-primary)', border: 'none', cursor: 'pointer', paddingBottom: '1rem' }}
					>
						{params.row.inCart ? <RemoveShoppingCartIcon/> : <AddShoppingCartIcon />}
					</IconButton>
			),
		},
	];

	return (
		<div className={styles.mainContainer}>
			<div className={styles.searchBarContainer}>
				<div className={styles.searchBar}>
					<TextField
						label="Add Products"
						variant="outlined"
						fullWidth
						margin="normal"
						value={typedList}
						onChange={(e) => checkForMatch(e.target.value)}
						onPaste={handlePaste}
					/>
					<IconButton
						onClick={(e) => handleAddUserProducts(typedList)}
						className={styles.iconButton}
					>
						<SearchIcon />
					</IconButton>
				</div>
				{suggestions.length > 0 && (
					<ul className="suggestions-dropdown">
						{suggestions.map((product) => (
							<li
								key={product.id}
								onClick={() =>
									product.id === 'new'
										? handleAddNewProduct(typedList)
										: handleAddUserProducts(product.name ?? '')
								}
							>
								{product.name}
							</li>
						))}
					</ul>
				)}
			</div>
			<div className={styles.gridContainer}>
				<DataGrid
					rows={groceryList}
					columns={columns}
					getCellClassName={(params) =>
						params.row.inCart ? styles.lineThrough : ''
					}
				/>
			</div>
			<div className={styles.actionsContainer}>
				<div className={styles.actions}>
					{editMode ?
						<>
							<Button
								variant="outlined"
								onClick={handleAddFavorites}
								sx={{
									backgroundColor: 'transparent',
									color: 'inherit',
									'&:hover': {
										backgroundColor: 'var(--background-container)',
									},
								}}
							>
								Add Favorites
							</Button>
							{user?.sharedListUserIds && user?.sharedListUserIds.length > 0 ?
								<Button variant="outlined" onClick={() => handleShareList('')}>
									Unshare List
								</Button>
								:
								<Button
									variant="outlined"
									onClick={() => setOpenEmailModal(true)}
								>
									Share List
								</Button>
							}
							<Button
								variant="outlined"
								onClick={() => sendSMS(groceryList)}
								sx={{
									backgroundColor: 'transparent',
									color: 'inherit',
									'&:hover': {
										backgroundColor: 'var(--background-container)',
									},
								}}
							>
								Text List
							</Button>
							<Dialog open={openEmailModal} onClose={() => setOpenEmailModal(false)}>
								<DialogTitle>Enter Email Addresses</DialogTitle>
								<DialogContent>
									<TextField
									autoFocus
									margin="dense"
									label="Emails (comma-separated)"
									type="text"
									fullWidth
									variant="outlined"
									value={emailInput}
									onChange={(e) => setEmailInput(e.target.value)}
									placeholder="example1@email.com, example2@email.com"
									/>
								</DialogContent>
								<DialogActions>
									<Button onClick={() => setOpenEmailModal(false)}>Cancel</Button>
									<Button
									onClick={() => {
										const cleanedEmails = emailInput
										.split(',')
										.map(email => email.trim())
										.filter(email => email.length > 0);
										const emailString = cleanedEmails.join(',');
    									handleShareList(emailString);
										setOpenEmailModal(false);
										setEmailInput('');
									}}
									>
									Share
									</Button>
								</DialogActions>
							</Dialog>
						</>
						:
						<>
						<Button
							variant="outlined"
							onClick={() => handleAddUserProducts('', 1)}
							className={storeId === 1 ? styles.activeStore : styles.defaultStore}
						>
							A-Z
						</Button>
						<Button
							variant="outlined"
							onClick={() => handleAddUserProducts('', 2)}
							className={storeId === 2 ? styles.activeStore : styles.defaultStore}
						>
							Festival Foods (De Pere)
						</Button>
						<Button
							variant="outlined"
							onClick={() => handleAddUserProducts('', 3)}
							className={storeId === 3 ? styles.activeStore : styles.defaultStore}
						>
							Aldi (De Pere)
						</Button>
					</>}
				</div>
				<Link to="/user">Return to User Dashboard</Link>
			</div>
		</div>
	);
};

export default UserProductPage;
