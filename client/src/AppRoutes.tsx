import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePageView';
import LoginPage from './pages/LoginPage/LoginPageView';
import RegisterPage from './pages/RegisterPage/RegisterPageView';
import AdminView from './pages/Admin/AdminView';
import AislePage from './pages/Aisle/AisleView';
import LayoutPage from './pages/Layout/LayoutView';
import ProductPage from './pages/Product/ProductView';
import StorePage from './pages/Store/StoreView';
import UserPage from './pages/User/UserView';

const AppRoutes = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/admin" element={<AdminView />} />
			<Route path="/aisle" element={<AislePage />} />
			<Route path="/layout" element={<LayoutPage />} />
			<Route path="/product" element={<ProductPage />} />
			<Route path="/store" element={<StorePage />} />
			<Route path="/user" element={<UserPage />} />
		</Routes>
	</BrowserRouter>
);

export default AppRoutes;