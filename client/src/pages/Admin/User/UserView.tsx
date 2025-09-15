import React, { useEffect, useState } from 'react';
import { useSetAtom } from 'jotai';
import { globalLoadingAtom } from '@utilities/atoms';
import { useNavigateWithLoading } from '@hooks/HandleNavigateWithLoading';
import { Button, IconButton } from "@mui/material";
import { Link } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { UserApi } from '@apis/UserApi';
import { User } from '@models/User';
import { Configuration } from '@generated/runtime';
import { EditIcon } from '@imports/MaterialUIIcons';
import { useToast } from '@context/toastContext';
import API_BASE_PATH from '@config/apiConfig';
import styles from '../AdminView.module.scss';

const UserPage: React.FC = () => {
	const toast = useToast()
	const [users, setUsers] = useState<User[]>([]);
	const setLoading = useSetAtom(globalLoadingAtom);
	const navigateWithLoading = useNavigateWithLoading();

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				setLoading(true);
				const userApi = new UserApi(
					new Configuration({ basePath: API_BASE_PATH})
				);
				const response = await userApi.getUsers();
				const data = response.map((user: User) => ({
					...user,
					id: user.id,
				}));
				setUsers(data);
			} catch (error: any) {
				console.error('Error fetching users:', error);
				const errorMessage =
					error.response?.data?.message || 'Failed to fetch users. Please check your network connection or server status.';
				toast(errorMessage, 'error');
			} finally {
				setLoading(false);
			}
		};
		fetchUsers();
	}, []);

	const columns: GridColDef[] = [
		{ field: 'id', headerName: 'ID', width: 55, disableColumnMenu: true },
		{ field: 'email', headerName: 'Email', flex: 1, disableColumnMenu: true },
		{
			field: 'actions',
			headerName: '',
			width: 50,
			disableColumnMenu: true,
			renderCell: (params) => (
				<IconButton
					onClick={() => navigateWithLoading(`/admin/user/details`, { state: { user: params.row } })}
					style={{ color: 'var(--text-primary)', border: 'none', cursor: 'pointer', paddingBottom: '1rem' }}
				>
					<EditIcon />
				</IconButton>
			),
		},
	];

	return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>Users</div>
			<div className={styles.gridContainer}>
				<DataGrid
					rows={users}
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
				<Button variant="outlined">
					Add New User
				</Button>
				<Link to="/admin">Return to Admin Dashboard</Link>
			</div>
		</div>
	);
};

export default UserPage;
