import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/global.css';
//Routes
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home/>}></Route>
					<Route path="/login" element={<Login/>}></Route>
					<Route path="/password-recovery" element={<PasswordRecovery/>}></Route>
					<Route path="/send-email" element={<SendEmail/>}></Route>
					<Route path="/new-password" element={<NewPassword/>}></Route>
					<Route path="/account" element={<MyAccount/>}></Route>
					<Route path="/signup" element={<CreateAccount/>}></Route>
					<Route path="/checkout" element={<Checkout/>}></Route>
					<Route path="/orders" element={<Orders/>}></Route>
					<Route path="*" element={<NotFound/>}></Route>
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;