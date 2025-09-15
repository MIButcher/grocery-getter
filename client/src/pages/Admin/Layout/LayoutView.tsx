import React, { useEffect, useState } from 'react';
import { Button, IconButton } from "@mui/material";
import { useNavigate, Link } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { LayoutApi } from '@apis/LayoutApi';
import { Layout } from '@models/Layout';
import { Configuration } from '@generated/runtime';
import { EditIcon } from '@imports/MaterialUIIcons';
import { useToast } from '@context/toastContext';
import API_BASE_PATH from '@config/apiConfig';
import styles from '../AdminView.module.scss';

const LayoutPage: React.FC = () => {
	const toast = useToast()
	const [layouts, setLayouts] = useState<Layout[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchLayouts = async () => {
			try {
				const layoutApi = new LayoutApi(
					new Configuration({ basePath: API_BASE_PATH})
				);
				const response = await layoutApi.getLayouts();
				const data = response.map((layout: Layout) => ({
					...layout,
					id: layout.id,
				}));
				setLayouts(data);
			} catch (error: any) {
				console.error('Error fetching layouts:', error);
				const errorMessage =
					error.response?.data?.message || 'Failed to fetch layouts. Please check your network connection or server status.';
				toast(errorMessage, 'error');
			}
		};
		fetchLayouts();
	}, []);

	const handleAddNewLayout = () => {
		navigate('/admin/layout/details', { state: { layout: { id: 0 }, layouts } });
	};

	const columns: GridColDef[] = [
		{ field: 'id', headerName: 'ID', width: 55, disableColumnMenu: true },
		{ field: 'storeId', headerName: 'Store ID', width: 75, disableColumnMenu: true },
		{ field: 'name', headerName: 'Name', flex: 1, disableColumnMenu: true },
		{
			field: 'actions',
			headerName: '',
			width: 50,
			disableColumnMenu: true,
			renderCell: (params) => (
				<IconButton
					onClick={() => navigate(`/admin/layout/details`, { state: { layout: params.row, layouts } })} // Pass layouts to LayoutDetails
					style={{ color: 'var(--text-primary)', border: 'none', cursor: 'pointer', paddingBottom: '1rem' }}
				>
					<EditIcon />
				</IconButton>
			),
		},
	];

	return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>Layouts</div>
			<div className={styles.gridContainer}>
				<DataGrid
					rows={layouts}
					columns={columns}
					initialState={{
						pagination: {
							paginationModel: { pageSize: 10 },
						},
						sorting: {
							sortModel: [{ field: 'name', sort: 'asc' }],
						},
					}}
					pageSizeOptions={[10, 25, 50]}
				/>
			</div>
			<div className={styles.actionsContainer}>
				<Button variant="outlined" onClick={handleAddNewLayout}>Add New Layout</Button>
				<Link to="/admin">Return to Admin Dashboard</Link>
			</div>
		</div>
	);
};

export default LayoutPage;
