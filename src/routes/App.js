import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../containers/Layout';
//Routes
import Login from "../pages/Login";
import Home from  '../pages/Home';
import SendEmail from '../pages/SendEmail';
import NewPassword from './pages/NewPassword'
import RecoveryPassword from '../containers/RecoveryPassword';



import NotFound from  '../pages/NotFound';
import RecoveryPassword from "../containers/RecoveryPassword";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home/>}></Route>
					<Route path="/login" element={<Login/>}></Route>
					<Route path="/recovery-password" element={<RecoveryPassword/>}></Route>
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