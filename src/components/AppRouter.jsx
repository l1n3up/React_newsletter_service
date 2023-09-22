import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import {privateRoutes, publicRoutes} from "../router";
import Login from "../pages/Login";
import {AuthContext} from "./context";
import Loader from "./UI/Loader/Loader";


const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth);

    if(isLoading){
        return <Loader/>
    }
    return (
        isAuth ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.component}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path="*" element={<Posts/>} />
                {/*<Route path="*" element={<Error/>} />*/}
            </Routes>
                :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.component}
                        exact={route.exact}
                    />
                )}
                <Route path="*" element={<Login/>} />
                {/*<Route path="*" element={<Error/>} />*/}
            </Routes>
    );
};

export default AppRouter;
