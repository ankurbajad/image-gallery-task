import React from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout";
import Home from "../Pages/Home/Home";

const PublicRoutes=()=>{
    return(
		<Layout>  
			<Routes>  
				<Route path="/" element={<Home/>}/>
			</Routes>
		</Layout>  
    )
}

export default PublicRoutes;