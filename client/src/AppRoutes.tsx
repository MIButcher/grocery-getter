import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoute, AdminRoute } from '@imports/CommonComponents';
import HomePage from './pages/HomePage/HomePageView';
import LoginPage from './pages/LoginPage/LoginPageView';
import RegisterPage from './pages/RegisterPage/RegisterPageView';
import UnauthorizedPage from './pages/HomePage/UnauthorizedView'
import AdminView from './pages/Admin/AdminView';
import AislePage from './pages/Admin/Aisle/AisleView';
import AisleDetails from './pages/Admin/Aisle/AisleDetails';
import LayoutPage from './pages/Admin/Layout/LayoutView';
import LayoutDetails from './pages/Admin/Layout/LayoutDetails';
import ProductPage from './pages/Admin/Product/ProductView';
import ProductDetails from './pages/Admin/Product/ProductDetails';
import StorePage from './pages/Admin/Store/StoreView';
import StoreDetails from './pages/Admin/Store/StoreDetails';
import UserPage from './pages/Admin/User/UserView';
import UserDetails from './pages/Admin/User/UserDetails';
import UserView from './pages/User/UserView';
import UserProductsPage from './pages/User/UserProducts/UserProductView';
import AddUserProductView from './pages/User/UserProducts/AddUserProductView';
import UserProductDetails from './pages/User/UserProducts/UserProductDetails';
import SharedUserProductsPage from './pages/User/UserProducts/SharedUserProductView';

const AppRoutes = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/unauthorized" element={<UnauthorizedPage />} />
			<Route path="/admin" element={<AdminRoute><AdminView /></AdminRoute>} />
			<Route path="/admin/aisles" element={<AdminRoute><AislePage /></AdminRoute>} />
			<Route path="/admin/aisle/details" element={<AdminRoute><AisleDetails /></AdminRoute>} />
			<Route path="/admin/layouts" element={<AdminRoute><LayoutPage /></AdminRoute>} />
			<Route path="/admin/layout/details" element={<AdminRoute><LayoutDetails /></AdminRoute>} />
			<Route path="/admin/products" element={<AdminRoute><ProductPage /></AdminRoute>} />
			<Route path="/admin/product/details" element={<AdminRoute><ProductDetails /></AdminRoute>} />
			<Route path="/admin/stores" element={<AdminRoute><StorePage /></AdminRoute>} />
			<Route path="/admin/store/details" element={<AdminRoute><StoreDetails /></AdminRoute>} />
			<Route path="/admin/users" element={<AdminRoute><UserPage /></AdminRoute>} />
			<Route path='/admin/user/details' element={<AdminRoute><UserDetails /></AdminRoute>} />
			<Route path="/user" element={<ProtectedRoute><UserView /></ProtectedRoute>} />
			<Route path="/userproducts" element={<ProtectedRoute><UserProductsPage /></ProtectedRoute>} />
			<Route path="/userproducts/add" element={<ProtectedRoute><AddUserProductView /></ProtectedRoute>} />
			<Route path="/userproducts/details" element={<ProtectedRoute><UserProductDetails /></ProtectedRoute>} />
			<Route path="/userproducts/shared" element={<ProtectedRoute><SharedUserProductsPage /></ProtectedRoute>} />
		</Routes>
	</BrowserRouter>
);

export default AppRoutes;