import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";

import { LazyPage, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

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
								<NavLink to="/lazy" className={({ isActive }) => (isActive ? "nav-active" : "")}>
									Lazy 1
								</NavLink>
							</li>
							<li>
								<NavLink to="/lazy2" className={({ isActive }) => (isActive ? "nav-active" : "")}>
									Lazy 2
								</NavLink>
							</li>
							<li>
								<NavLink to="/lazy3" className={({ isActive }) => (isActive ? "nav-active" : "")}>
									Lazy 3
								</NavLink>
							</li>
						</ul>
					</nav>

					<Routes>
						<Route path="lazy"  element={<LazyPage  />} />
						<Route path="lazy2" element={<LazyPage2 />} />
						<Route path="lazy3" element={<LazyPage3 />} />
						
						<Route path="/*" element={<Navigate to="/lazy" replace />} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
};
