import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useAtom, useSetAtom } from 'jotai';
import { userAtom, globalLoadingAtom } from '@utilities/atoms';
import { useNavigateWithLoading } from '@hooks/HandleNavigateWithLoading';
import { Button } from '@mui/material';
import { GroceryListItem } from '@models/GroceryListItem';
import { UserProductApi } from '@apis/UserProductApi';
import { Configuration } from '@generated/runtime';
import { useToast } from '@context/toastContext';
import API_BASE_PATH from '@config/apiConfig';
import styles from '../UserView.module.scss';

const UserProductDetails: React.FC = () => {
	const toast = useToast()
	const location = useLocation();
	const [user] = useAtom(userAtom);
    const initialGroceryListItem = location.state?.initialGroceryListItem as GroceryListItem;
    const [groceryListItem, setGroceryListItem] = useState<GroceryListItem | undefined>(initialGroceryListItem);
	const setLoading = useSetAtom(globalLoadingAtom);
	const navigateWithLoading = useNavigateWithLoading();

	useEffect(() => {
		setLoading(false);
    }, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setGroceryListItem((prevProduct: GroceryListItem | undefined) => ({
			...prevProduct,
			[name]: value,
		}));
	};

	const handleSave = async () => {
        try {
            setLoading(true);
            const userProductApi = new UserProductApi(
                new Configuration({ basePath: API_BASE_PATH })
            );
            const success = await userProductApi.saveGroceryListItem({ groceryListItem });
            if (success) {
                navigateWithLoading('/userproducts');
                toast('Product saved successfully!', 'success');
            }
        } catch (error) {
            console.error('Failed to save product:', error);
            toast('Failed to save product. Please try again.', 'error');
        } finally {
            setLoading(false);
        }
	};

	return (
		<div className={styles.mainContainer}>
            <div className={styles.header}>{groceryListItem?.productName}</div>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label>Notes:</label>
                    <textarea
                        name="notes"
                        value={groceryListItem?.notes ?? ''}
                        rows={8}
                        cols={50}
                        maxLength={250}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <div className={styles.horizontalGroup}>
                        <label>Quantity:
                        <input
                            style={{width: '5rem'}}
                            type="number"
                            name="quantity"
                            value={groceryListItem?.quantity ?? ''}
                            onChange={handleChange}
                        /></label>
                        <label>
                            <input
                                type="checkbox"
                                name="inCart"
                                checked={groceryListItem?.inCart}
                                onChange={(e) => setGroceryListItem({ ...groceryListItem, inCart: e.target.checked })}
                            />
                            In Cart
                        </label>
                    </div>
                    <label>
                        <input
                            type="checkbox"
                            name="isFavorite"
                            checked={groceryListItem?.isFavorite}
                            onChange={(e) => setGroceryListItem({ ...groceryListItem, isFavorite: e.target.checked })}
                        />
                        Is Favorite
                    </label>
                </div>
            </form>
            <div className={styles.actionsContainer}>
                <div className={styles.actions}>
                    <Button variant="outlined" onClick={handleSave} className="save-button">
                        Save
                    </Button>
                    <Button variant="outlined" onClick={() => navigateWithLoading('/userproducts')} className="cancel-button">
                        Cancel
                    </Button>
                </div>
                <Link to="/user">Return to User Dashboard</Link>
            </div>
		</div>
	);
};

export default UserProductDetails;
