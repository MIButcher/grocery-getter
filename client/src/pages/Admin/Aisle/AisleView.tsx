import React, { useEffect, useState } from 'react';
import { Button, IconButton } from "@mui/material";
import { useNavigate, Link } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { AisleApi } from '@apis/AisleApi';
import { Aisle } from '@models/Aisle';
import { Configuration } from '@generated/runtime';
import { EditIcon } from '@imports/MaterialUIIcons';
import { useToast } from '@context/toastContext';
import API_BASE_PATH from '@config/apiConfig';
import styles from '../AdminView.module.scss';

const AislePage: React.FC = () => {
	const toast = useToast()
	const [aisles, setAisles] = useState<Aisle[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchAisles = async () => {
			try {
				const aisleApi = new AisleApi(
					new Configuration({ basePath: API_BASE_PATH})
				);
				const response = await aisleApi.getAisles();
				const data = response.map((aisle: Aisle) => ({
					...aisle,
					id: aisle.id, // Ensure each row has an `id` field for DataGrid
				}));
				setAisles(data);
			} catch (error: any) {
				console.error('Error fetching aisles:', error);
				const errorMessage =
					error.response?.data?.message || 'Failed to fetch aisles. Please check your network connection or server status.';
				toast(errorMessage, 'error');
			}
		};
		fetchAisles();
	}, []);

	const handleAddNewAisle = () => {
		navigate('/admin/aisle/details', { state: { aisle: { id: 0 } } });
	};

	const columns: GridColDef[] = [
		{ field: 'id', headerName: 'ID', width: 55, disableColumnMenu: true },
		{ field: 'layoutId', headerName: 'Layout ID', width: 85, disableColumnMenu: true },
		{ field: 'name', headerName: 'Name', flex: 1, disableColumnMenu: true },
		{
			field: 'actions',
			headerName: '',
			width: 50,
			disableColumnMenu: true,
			renderCell: (params) => (
				<IconButton
					onClick={() => navigate(`/admin/aisle/details`, { state: { aisle: params.row } })}
					style={{ color: 'var(--text-primary)', border: 'none', cursor: 'pointer', paddingBottom: '1rem' }}
				>
					<EditIcon />
				</IconButton>
			),
		},
	];

	return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>Aisles</div>
			<div className={styles.gridContainer}>
				<DataGrid
					rows={aisles}
					columns={columns}
					initialState={{
						pagination: {
							paginationModel: { pageSize: 50 },
						},
						sorting: {
							sortModel: [{ field: 'name', sort: 'asc' }],
						},
					}}
					pageSizeOptions={[25, 50, 100]}
				/>
			</div>
			<div className={styles.actionsContainer}>
				<Button variant="outlined" onClick={handleAddNewAisle} disabled>Add New Aisle</Button>
				<Link to="/admin">Return to Admin Dashboard</Link>
			</div>
		</div>
	);
};

export default AislePage;
