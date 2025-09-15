import React, { useEffect, useState } from 'react';
import { useSetAtom } from 'jotai';
import { globalLoadingAtom } from '@utilities/atoms';
import { useNavigateWithLoading } from '@hooks/HandleNavigateWithLoading';
import { Button, IconButton } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ProductApi } from '@apis/ProductApi';
import { Product } from '@models/Product';
import { Configuration } from '@generated/runtime';
import { EditIcon } from '@imports/MaterialUIIcons';
import { useToast } from '@context/toastContext';
import API_BASE_PATH from '@config/apiConfig';
import styles from '../AdminView.module.scss';

const ProductPage: React.FC = () => {
	const toast = useToast()
	const [products, setProducts] = useState<Product[]>([]);
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [showSearch, setShowSearch] = useState<boolean>(false);
	const setLoading = useSetAtom(globalLoadingAtom);
	const navigateWithLoading = useNavigateWithLoading();

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setLoading(true);
				const productApi = new ProductApi(
					new Configuration({ basePath: API_BASE_PATH})
				);
				const response = await productApi.getProducts();
				const data = response.map((product: Product) => ({
					...product,
					id: product.id,
				}));
				setProducts(data);
				setFilteredProducts(data);
			} catch (error: any) {
				console.error('Error fetching products:', error);
				const errorMessage =
					error.response?.data?.message || 'Failed to fetch products. Please check your network connection or server status.';
				toast(errorMessage, 'error');
			} finally {
                setLoading(false);
            }
		};
		fetchProducts();
	}, []);

	useEffect(() => {
		const filtered = products.filter((product) =>
			product.name?.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredProducts(filtered);
	}, [searchTerm, products]);

	const handleAddNewProduct = () => {
		navigateWithLoading('/admin/product/details', { state: { product: { id: 0 } } });
	};

	const columns: GridColDef[] = [
		{ field: 'id', headerName: 'ID', width: 55, disableColumnMenu: true },
		{ field: 'name', headerName: 'Name', flex: 1, disableColumnMenu: true },
		{
			field: 'actions',
			headerName: '',
			width: 50,
			disableColumnMenu: true,
			renderCell: (params) => (
				<IconButton
					onClick={() => navigateWithLoading(`/admin/product/details`, { state: { product: params.row } })}
					style={{ color: 'var(--text-primary)', border: 'none', cursor: 'pointer', paddingBottom: '1rem' }}
				>
					<EditIcon />
				</IconButton>
			),
		},
	];

	return (
		<div className={styles.mainContainer}>
			<TextField
				className={showSearch ? styles.searchBarFocus : styles.searchBar}
				label={showSearch ? "Search Products" : "Products"}
				variant="outlined"
				fullWidth
				margin="normal"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				onFocus={() => setShowSearch(true)}
				onBlur={() => {
					if (!searchTerm.trim()) setShowSearch(false);
				}}
			/>
			<div className={styles.gridContainer}>
				<DataGrid
					rows={filteredProducts}
					columns={columns}
					initialState={{
						pagination: {
							paginationModel: { pageSize: 25 },
							},
						sorting: {
							sortModel: [{ field: 'name', sort: 'asc' }],
						},
					}}
					pageSizeOptions={[25, 50, 100]}
				/>
			</div>
			<div className={styles.actionsContainer}>
				<Button variant="outlined" onClick={handleAddNewProduct}>Add New Product</Button>
				<Link to="/admin">Return to Admin Dashboard</Link>
			</div>
		</div>
	);
};

export default ProductPage;
