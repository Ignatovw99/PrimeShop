import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Loader from "./Loader";

import { setAuthetnication } from "../slices/authSlice";
import { useGetUserProfileQuery } from "../slices/api/userApiSlice";

const AuthenticationInitializer = ({ children }) => {
    const dispatch = useDispatch();
    const { data: userProfile, isFetching } = useGetUserProfileQuery();

    useEffect(() => {
        if (userProfile) {
            dispatch(setAuthetnication({ ...userProfile }))
        }
    }, [userProfile, dispatch]);

    if (isFetching) {
        return <Loader />;
    }

    return (
        <>
            {children}
        </>
    );
};

export default AuthenticationInitializer;
