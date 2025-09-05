import React, { useEffect, useState } from 'react';
import { useToast } from '@context/toastContext';
import { useAtom } from 'jotai';
import { sharerIdAtom, userAtom } from '@utilities/atoms';
import { Button, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useNavigate, Link } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { UserProductApi } from '@apis/UserProductApi';
import { GroceryListItem } from '@models/GroceryListItem';
import { Configuration } from '@generated/runtime';
import { AddCircleOutlineIcon, SearchIcon } from '@imports/MaterialUIIcons';
import { sendSMS } from '@utilities/sendSMS';
import API_BASE_PATH from '@config/apiConfig';
import styles from '../UserView.module.scss';

const SharedUserProductPage: React.FC = () => {
	const toast = useToast()
	const [groceryList, setGroceryList] = useState<GroceryListItem[]>([]);
	const [mergedList, setMergedList] = useState<GroceryListItem[]>([]);
	const [storeId] = useState<number>(1);
	const [user] = useAtom(userAtom);
	const [sharerId] = useAtom(sharerIdAtom);
	const navigate = useNavigate();
	const typedList = '';

	useEffect(() => {
		const fetchUserProducts = async () => {
			try {
				const userProductApi = new UserProductApi(
					new Configuration({ basePath: API_BASE_PATH})
				);
				const response = await userProductApi.getGroceryListItemsByUserId({userId: sharerId ?? 0});
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
		fetchUserProducts();
	}, [user, navigate]);

	const handleMergeUserProducts = (e: GroceryListItem[] | undefined) => {
		const mergeUserProducts = async () => {
			try {
				const userProductApi = new UserProductApi(
					new Configuration({ basePath: API_BASE_PATH})
				);
				const userId = user?.id || 0;
				const incomingItems = e ?? groceryList;
				const itemsToMerge = incomingItems.filter(
					item => !mergedList.some(merged => merged.userProductId === item.userProductId)
				);
				const response = await userProductApi.mergeUserProducts({ userProductsMergeCriteria: { userId, storeId: storeId, groceryListItems: itemsToMerge } });
				response.map((groceryListItem: GroceryListItem) => ({
					...groceryListItem,
					id: groceryListItem.userProductId,
				})) ?? [];
				navigate(`/userProducts/shared`, { state: { sharerId: sharerId } })
				setMergedList([...mergedList, ...itemsToMerge]);
				toast('The shared list has been merged.', 'success');
			} catch (error: any) {
				console.error('Error adding products:', error);
				const errorMessage =
					error.response?.data?.message || 'Failed to add products. Please check your network connection or server status.';
				toast(errorMessage, 'error');
			}
		};
		mergeUserProducts();
	};

	const columns: GridColDef[] = [
		{ field: 'aisleName', headerName: 'Aisle', width: 55, disableColumnMenu: true },
		{
			field: 'productName',
			headerName: 'Name',
			flex: 1,
			disableColumnMenu: true,
			renderCell: (params) => {
				const data = params.row.notes ? params.value + ' (' + params.row.notes + ')' : params.value;
				return (
					<span>{data}</span>
			)},
		},
		{ field: 'quantity', headerName: 'Qty', width: 45, disableColumnMenu: true },
		{
			field: 'actions',
			headerName: '',
			width: 50,
			disableColumnMenu: true,
			renderCell: (params) => {
				const isMerged = mergedList.some(item => item.userProductId === params.row.userProductId);

				return (
					<IconButton
						onClick={() => handleMergeUserProducts([params.row])}
						disabled={isMerged}
						style={{
							color: 'var(--text-primary)',
							border: 'none',
							cursor: isMerged ? 'not-allowed' : 'pointer',
							paddingBottom: '1rem',
							opacity: isMerged ? 0.5 : 1
						}}
					>
						<AddCircleOutlineIcon />
					</IconButton>
				);
			},
		},
	];

	return (
		<div className={styles.mainContainer}>
			<div className={`${styles.searchBarContainer} ${styles.disabled}`}>
				<div className={styles.searchBar}>
					<TextField
						label="Add Products"
						variant="outlined"
						fullWidth
						margin="normal"
						value={typedList}
						disabled
					/>
					<IconButton
						className={styles.iconButton}
						disabled
					>
						<SearchIcon />
					</IconButton>
				</div>
			</div>
			<div className={styles.gridContainer}>
				<DataGrid
					rows={groceryList}
					columns={columns}
					getCellClassName={(params) => {
						const isInMergedList = mergedList.some(
						(item) => item.userProductId === params.row.userProductId
						);
						return isInMergedList ? styles.lineThrough : '';
					}}
				/>
			</div>
			<div className={styles.actionsContainer}>
				<div className={styles.actions}>
					<Button
						variant="outlined"
						onClick={() => handleMergeUserProducts(undefined)}
					>
						Merge List
					</Button>
					<Button
						variant="outlined"
						onClick={() =>sendSMS(groceryList)}
					>
						Text List
					</Button>
				</div>
				<Link to="/user">Return to User Dashboard</Link>
			</div>
		</div>
	);
};

export default SharedUserProductPage;
