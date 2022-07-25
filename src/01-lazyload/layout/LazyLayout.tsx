import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyPage, LazyPage2, LazyPage3 } from "../pages";


export const LazyLayout = () => {
  return (
    <div>
      <h1>Lazy layout page</h1>

      {/* las rutas hijas van aca */}
      <ul>
        <li>
          <NavLink to="lazy" > Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2" > Lazy 2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3" > Lazy 3</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="lazy" element={<LazyPage/>} ></Route>
        <Route path="lazy2" element={<LazyPage2/>} ></Route>
        <Route path="lazy3" element={<LazyPage3/>} ></Route>
        
        {/* <Route path="*" element={<div>Not Found</div>} ></Route> */}
        <Route path="*" element={<Navigate replace to="lazy" />} ></Route>
      </Routes>
    </div>
  )
}

export default LazyLayout;