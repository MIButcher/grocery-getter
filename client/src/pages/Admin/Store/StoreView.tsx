import React, { useEffect, useState } from 'react';
import { useSetAtom } from 'jotai';
import { globalLoadingAtom } from '@utilities/atoms';
import { useNavigateWithLoading } from '@hooks/HandleNavigateWithLoading';
import { Link } from 'react-router-dom';
import { Button, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { StoreApi } from '@apis/StoreApi';
import { Store } from '@models/Store';
import { Configuration } from '@generated/runtime';
import { EditIcon } from '@imports/MaterialUIIcons';
import { useToast } from '@context/toastContext';
import API_BASE_PATH from '@config/apiConfig';
import styles from '../AdminView.module.scss';

const StorePage: React.FC = () => {
	const toast = useToast()
	const [stores, setStores] = useState<Store[]>([]);
	const setLoading = useSetAtom(globalLoadingAtom);
	const navigateWithLoading = useNavigateWithLoading();

	useEffect(() => {
		const fetchStores = async () => {
			try {
				setLoading(true);
				const storeApi = new StoreApi(
					new Configuration({ basePath: API_BASE_PATH})
				);
				const response = await storeApi.getStores();
				const data = response.map((store: Store) => ({
					...store,
					id: store.id,
				}));
				setStores(data);
			} catch (error: any) {
				console.error('Error fetching stores:', error);
				const errorMessage =
					error.response?.data?.message || 'Failed to fetch stores. Please check your network connection or server status.';
				toast(errorMessage, 'error');
			} finally {
				setLoading(false);
			}
		};
		fetchStores();
	}, []);

	const handleAddNewStore = () => {
		navigateWithLoading('/admin/store/details', { state: { store: { id: 0 } } });
	};

	const columns: GridColDef[] = [
		{ field: 'id', headerName: 'ID', width: 50, disableColumnMenu: true },
		{ field: 'name', headerName: 'Name', flex: 1, disableColumnMenu: true },
		{
			field: 'actions',
			headerName: '',
			width: 50,
			disableColumnMenu: true,
			renderCell: (params) => (
				<IconButton
					onClick={() => navigateWithLoading(`/admin/store/details`, { state: { store: params.row } })}
					style={{ color: 'var(--text-primary)', border: 'none', cursor: 'pointer', paddingBottom: '1rem' }}
				>
					<EditIcon />
				</IconButton>
			),
		},
	];

	return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>Stores</div>
			<div className={styles.gridContainer}>
				<DataGrid
					rows={stores}
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
				<Button variant="outlined" onClick={handleAddNewStore}>Add New Store</Button>
				<Link to="/admin">Return to Admin Dashboard</Link>
			</div>
		</div>
	);
};

export default StorePage;
