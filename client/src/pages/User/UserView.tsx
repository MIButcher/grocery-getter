import React, { useEffect, useState } from 'react';
import { useToast } from '@context/toastContext';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAtom, useSetAtom } from 'jotai';
import Button from '@mui/material/Button';
import { IdNameLink } from '@models/IdNameLink';
import { UserApi } from '@apis/UserApi';
import { UserProductApi } from '@apis/UserProductApi';
import { Configuration } from '@generated/runtime';
import { userAtom, sharerIdAtom } from '@utilities/atoms';
import API_BASE_PATH from '@config/apiConfig';
import styles from './UserView.module.scss';

const UserView: React.FC = () => {
	const toast = useToast()
	const navigate = useNavigate();
	const [user] = useAtom(userAtom);
	const [confirmOpen, setConfirmOpen] = useState(false);
	const [idNameLinks, setIdNameLinks] = useState<IdNameLink[]>([]);
	const setSharerIdAtom = useSetAtom(sharerIdAtom);

	useEffect(() => {
		const fetchIdNameLinks = async () => {
			try {
				const userApi = new UserApi(
					new Configuration({ basePath: API_BASE_PATH})
				);
				const links = await userApi.getSharedUsers({ userId: user?.id ?? 0 });
				setIdNameLinks(links);
			} catch (error: any) {
				console.error('Error fetching shared ids:', error);
				const errorMessage =
					error.response?.data?.message || 'Failed to fetch shared Id Name links.'
				toast(errorMessage, 'error');
			}
		};
		fetchIdNameLinks();
	}, []);

	const handleSharedListClicked = async (sharerId: number | undefined) => {
		if (sharerId) {
			setSharerIdAtom(sharerId)
			navigate(`/userProducts/shared`);
		}
	}

	const deleteGroceryList = async () => {
		try {
			const userProductApi = new UserProductApi(
				new Configuration({ basePath: API_BASE_PATH})
			);

			await userProductApi.deleteGroceryList({ userId: user?.id ?? 0 });
			toast('Your grocery list has been cleared.', 'success');
		} catch (error: any) {
			console.error('Error deleting products:', error);
			const errorMessage =
				error.response?.data?.message || 'Failed to delete products. Please try again later.';
			toast(errorMessage, 'error');
		}
	};
	
	return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>Welcome, {user?.firstName || 'User'}!</div>
			<div className={styles.buttonsContainer}>
				<Button
					key={`User Lists`}
					variant="outlined"
					onClick={() => navigate(`/userproducts`)}
				>
					View List
				</Button>
				<Button
					variant="outlined"
					onClick={() => setConfirmOpen(true)}
				>
					Delete Grocery List
				</Button>
				{idNameLinks.map((link: IdNameLink) => (
					<Button
						key={link.id}
						variant="outlined"
						onClick={() => handleSharedListClicked(link.id)}
					>
						{link.name}'s List
					</Button>
				))}
				{user?.isAdmin &&
				<Button
					variant="outlined"
					onClick={() => navigate(`/admin`)}
					style={{marginTop: '5rem'}}
				>
					Admin Dashboard
				</Button>}
				<Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
					<DialogTitle>Confirm Deletion</DialogTitle>
					<DialogContent>
						<Typography>
							Are you sure you want to delete all items from your grocery list? This action cannot be undone.
						</Typography>
					</DialogContent>
					<DialogActions>
						<Button onClick={() => setConfirmOpen(false)} color="primary">
							Cancel
						</Button>
						<Button
							onClick={async () => {
								await deleteGroceryList();
								setConfirmOpen(false);
							}}
							color="error"
							variant="contained"
						>
							Delete All
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		</div>
	);
};

export default UserView;
