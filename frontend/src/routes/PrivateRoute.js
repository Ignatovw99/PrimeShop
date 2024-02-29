import { useSelector } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const PrivateRoute = () => {
    const { isAuthenticated } = useSelector(state => state.auth);
    const { pathname } = useLocation();

    if (!isAuthenticated) {
        return <Navigate to={`/login?redirect=${pathname}`} replace />;
    }

    return <Outlet />;
};

export default PrivateRoute;
