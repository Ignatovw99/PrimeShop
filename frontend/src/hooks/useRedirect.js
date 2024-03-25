import { useLocation } from "react-router-dom";

import { ROUTES } from "../router";
import { REDIRECT_PARAMETER } from "../constants";

const useRedirect = (defaultRedirect = ROUTES.INDEX) => {
    const { search } = useLocation();

    const searchParams = new URLSearchParams(search);
    const redirect = searchParams.get(REDIRECT_PARAMETER) || defaultRedirect;

    return redirect;
};

export default useRedirect;
