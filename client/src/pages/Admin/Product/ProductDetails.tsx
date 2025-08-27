import React, { useState } from 'react';
import { useToast } from '@context/toastContext';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Product } from '@models/Product';
import { ProductApi } from '@apis/ProductApi';
import { Configuration } from '@generated/runtime';
import API_BASE_PATH from '@config/apiConfig';
import styles from '../AdminView.module.scss';

const ProductDetails: React.FC = () => {
	const toast = useToast()
	const location = useLocation();
	const navigate = useNavigate();
	const initialProduct = location.state?.product as Product;
	const [product, setProduct] = useState<Product>(initialProduct);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setProduct((prevProduct) => ({
			...prevProduct,
			[name]: value,
		}));
	};

	const handleSave = async () => {
		try {
            const productApi = new ProductApi(
                new Configuration({ basePath: API_BASE_PATH})
            );
			await productApi.saveProduct({product});
            navigate('/admin/products');
			toast('Product saved successfully!', 'success');
		} catch (error) {
			console.error('Failed to save product:', error);
			toast('Failed to save product. Please try again.', 'error');
		}
	};

	return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>Product Details</div>
			<form className={styles.form}>
                <div className={styles.formGroup}>
					<label>Name:</label>
					<input
						type="text"
						name="name"
						value={product.name ?? ''}
						onChange={handleChange}
					/>
				</div>
			</form>
            <div className={styles.actionsContainer}>
                <div className={styles.actions}>
                    <Button variant="outlined" onClick={handleSave} className="save-button">
                        Save
                    </Button>
                    <Button variant="outlined" onClick={() => navigate('/admin/products')} className="cancel-button">
                        Cancel
                    </Button>
                </div>
                <Link to="/admin">Return to Admin Dashboard</Link>
            </div>
		</div>
	);
};

export default ProductDetails;
