import { useLocation } from "react-router-dom";

import { REDIRECT_PARAMETER } from "../constants";

const useRedirect = (defaultRedirect = "/") => {
    const { search } = useLocation();

    const searchParams = new URLSearchParams(search);
    const redirect = searchParams.get(REDIRECT_PARAMETER) || defaultRedirect;

    return redirect;
};

export default useRedirect;
