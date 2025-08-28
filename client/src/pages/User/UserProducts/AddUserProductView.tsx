import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAtom } from 'jotai';
import { userAtom } from '@utilities/atoms';
import { Button, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { Product } from '@models/Product';
import { UserProductApi } from '@apis/UserProductApi';
import { Store } from '@models/Store';
import { Layout } from '@models/Layout';
import { Aisle } from '@models/Aisle';
import { FullUserProductRequest } from '@models/FullUserProductRequest';
import { Configuration } from '@generated/runtime';
import { useToast } from '@context/toastContext';
import API_BASE_PATH from '@config/apiConfig';
import styles from '../UserView.module.scss';

const AddUserProductView: React.FC = () => {
	const toast = useToast()
	const location = useLocation();
	const navigate = useNavigate();
	const [user] = useAtom(userAtom);
	const initialProduct = location.state?.product as Product;
    const initialStoreId = location.state?.storeId as number;
    const [storeId, setStoreId] = useState<number | undefined>(initialStoreId != 1 ? initialStoreId : undefined );
    const [stores, setStores] = useState<Store[]>([]);
    const [layouts, setLayouts] = useState<Layout[]>([]);
    const [aisleId, setAisleId] = useState<number | undefined>(undefined);
    const [aisles, setAisles] = useState<Aisle[]>([]);
    const [filteredAisles, setFilteredAisles] = useState<Aisle[]>([]);
    const [storeAisles, setStoreAisles] = useState<string[]>([]);
    const [fullUserProduct, setFullUserProduct] = useState<FullUserProductRequest>
        ({ userId: user?.id, currentStoreId: initialStoreId, productName: initialProduct.name, quantity: 1, inCart: false, isVerified: false, aisleIds: [] });
    
    useEffect(() => {
        const fetchStoreLayoutAisleData = async () => {
            try {
                const userProductApi = new UserProductApi(
                    new Configuration({ basePath: API_BASE_PATH})
                );
                const response = await userProductApi.getAddNewUserProductData();
                setStores(response.stores ?? []);
                setLayouts(response.activeLayouts ?? []);
                setAisles(response.aisles ?? []);
                if (storeId) {
                    const layoutId = response.activeLayouts?.find(l => l.storeId === storeId)?.id;
                    const layoutAisles = response.aisles?.filter(a => a.layoutId === layoutId);
                    setFilteredAisles(layoutAisles ?? []);
                }
            }
            catch (error: any) {
                console.error('Error fetching store layout aisle data:', error);
                const errorMessage =
                    error.response?.data?.message || 'Failed to fetch store layout aisle data. Please check your network connection or server status.';
				toast(errorMessage, 'error');
            }
        }
        fetchStoreLayoutAisleData();
    }, []);

    const onStoreChange = (value: number) => {
        setStoreId(value);
        const selectedStore = stores.find(store => store.id === value);
        const layoutId = layouts.find(l => l.storeId === selectedStore?.id)?.id;
        const layoutAisles = aisles.filter(a => a.layoutId === layoutId);
        setFilteredAisles(layoutAisles);
    }

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFullUserProduct((prevProduct) => ({
			...prevProduct,
			[name]: value,
		}));
	};

    const handleSetStoreAisle = async () => {
        const ids = fullUserProduct.aisleIds;

        if (aisleId && !ids?.includes(aisleId)) {
            ids?.push(aisleId);

            setFullUserProduct((prevProduct) => ({
                ...prevProduct,
                aisleIds: ids,
            }));
            
            const storeName = stores.find(s => s.id === storeId)?.name || 'Unknown Store';
            const aisleName = filteredAisles.find(a => a.id === aisleId)?.name || 'Unknown Aisle';
            const newStoreAisle = `${storeName} - ${aisleName}`;
            if (!storeAisles.includes(newStoreAisle)) {
                storeAisles.push(newStoreAisle);
                setStoreAisles(storeAisles);
            }
        }
    }

	const handleSave = async () => {
        try {
            const userProductApi = new UserProductApi(
                new Configuration({ basePath: API_BASE_PATH})
            );
            await userProductApi.addUserProduct({ fullUserProductRequest: fullUserProduct });
            navigate('/userproducts');
            toast('Product saved successfully!', 'success');
        } catch (error) {
            console.error('Failed to save product:', error);
            toast('Failed to save product. Please try again.', 'error');
        }
	};

	return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>Add New Product</div>
			<form className={styles.form}>
                <div className={styles.formGroup}>
					<label>Name:</label>
					<input
						type="text"
						name="productName"
						value={fullUserProduct.productName ?? ''}
						onChange={handleChange}
					/>
				</div>
                <div className={styles.formGroup}>
                    <label>Notes:</label>
                    <input
                        type="text"
                        name="notes"
                        value={fullUserProduct.notes ?? ''}
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
                            value={fullUserProduct.quantity ?? ''}
                            onChange={handleChange}
                        /></label>
                        <label>
                            <input
                                type="checkbox"
                                name="inCart"
                                checked={fullUserProduct.inCart}
                                onChange={(e) => setFullUserProduct({ ...fullUserProduct, inCart: e.target.checked })}
                            />
                            In Cart
                        </label>
                    </div>
                    <label>
                        <input
                            type="checkbox"
                            name="isFavorite"
                            checked={fullUserProduct?.isFavorite}
                            onChange={(e) => setFullUserProduct({ ...fullUserProduct, isFavorite: e.target.checked })}
                        />
                        Is Favorite
                    </label>
                </div>
                <div className={styles.formGroup}>
                    <FormControl className={styles.dropDownMenu} style={{marginTop: '0.5rem'}} fullWidth>
                        <InputLabel id="store-select-label">Select Store</InputLabel>
                        <Select
                            labelId="store-select-label"
                            value={storeId ?? ''}
                            label="Select Store"
                            onChange={(e: SelectChangeEvent<number>) => onStoreChange(e.target.value as number)}
                        >
                            <MenuItem value=''></MenuItem>
                            {stores.map((store) => (
                                <MenuItem key={store.id} value={store.id}>
                                    {store.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className={styles.formGroup}>
                    <FormControl className={styles.dropDownMenu} style={{marginTop: '0.5rem'}} disabled={!aisles.length}>
                        <InputLabel id="aisle-select-label">Select Aisle</InputLabel>
                        <Select
                            labelId="aisle-select-label"
                            value={aisleId ?? ''}
                            label="Select Aisle"
                            onChange={(e: SelectChangeEvent<number>) => setAisleId(Number(e.target.value))}
                        >   
                            <MenuItem value=''></MenuItem>
                            {filteredAisles.map((aisle) => (
                                <MenuItem key={aisle.id} value={aisle.id}>
                                    {aisle.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className={styles.formGroup}>
                    <Button
                        variant="outlined"
                        onClick={handleSetStoreAisle}
                    >
                        Set Store Aisle
                    </Button>
                </div>
                <div className={styles.formGroup}>
                    <label>Aisles:</label>
                    <ul>
                        {storeAisles.map((storeAisle, index) => (
                            <li key={index}>{storeAisle}</li>
                        ))}
                    </ul>
                </div>
                {/* <div className={styles.formGroup}>
                    <label>
                        <input
                            type="checkbox"
                            name="isVerified"
                            checked={fullUserProduct.isVerified}
                            onChange={(e) => setFullUserProduct({ ...fullUserProduct, isVerified: e.target.checked })}
                        />
                        Verified
                    </label>
                </div> */}
			</form>
            <div className={styles.actionsContainer}>
                <div className={styles.actions}>
                    <Button variant="outlined" onClick={handleSave} className="save-button">
                        Save
                    </Button>
                    <Button variant="outlined" onClick={() => navigate('/userproducts')} className="cancel-button">
                        Cancel
                    </Button>
                </div>
                <Link to="/user">Return to User Dashboard</Link>
            </div>
		</div>
	);
};

export default AddUserProductView;
