import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";


import {
	DynamicFormPage,
	FormikAbstraction,
	FormikBasicPage,
	FormikComponents,
	FormikYupPage,
	RegisterPage,
	RegisterFormikPage,
} from "../03-forms/pages";

import logo from "../logo.svg";

export const Navigation = () => {
	return (
		<>
			<BrowserRouter>
				<div className="main-layout">
					<nav>
						<img src={logo} alt="" />
						<ul>
							<li>
								<NavLink to="/register" className={({ isActive }) => (isActive ? "nav-active" : "")}>
									RegisterPage
								</NavLink>
							</li>
							<li>
								<NavLink to="/formik-basic" className={({ isActive }) => (isActive ? "nav-active" : "")}>
									Formik
								</NavLink>
							</li>
							<li>
								<NavLink to="/formik-yup" className={({ isActive }) => (isActive ? "nav-active" : "")}>
									Formik Yup!
								</NavLink>
							</li>
							<li>
								<NavLink to="/formik-components" className={({ isActive }) => (isActive ? "nav-active" : "")}>
									Formik Components
								</NavLink>
							</li>
							<li>
								<NavLink to="/formik-abstraction" className={({ isActive }) => (isActive ? "nav-active" : "")}>
									Formik Abstraction
								</NavLink>
							</li>
							<li>
								<NavLink to="/formik-register" className={({ isActive }) => (isActive ? "nav-active" : "")}>
									Register Formik Page
								</NavLink>
							</li>
							<li>
								<NavLink to="/dynamic-form" className={({ isActive }) => (isActive ? "nav-active" : "")}>
									DynamicFormPage
								</NavLink>
							</li>
						</ul>
					</nav>

					<Routes>
						<Route path="/register" element={<RegisterPage />} />
						<Route path="/formik-basic" element={<FormikBasicPage />} />
						<Route path="/formik-yup" element={<FormikYupPage />} />
						<Route path="/formik-components" element={<FormikComponents />} />
						<Route path="/formik-abstraction" element={<FormikAbstraction />} />
						<Route path="/formik-register" element={<RegisterFormikPage />} />
						<Route path="/dynamic-form" element={<DynamicFormPage/>} />
						<Route path="/home" element={<h1>Home</h1>} />
						<Route path="/*" element={<Navigate to="/home" replace />} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
};
