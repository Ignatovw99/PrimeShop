import { useLocation } from "react-router-dom";

import { REDIRECT_PARAMETER } from "../constants";

const useRedirect = () => {
    const { search } = useLocation();

    const searchParams = new URLSearchParams(search);
    const redirect = searchParams.get(REDIRECT_PARAMETER) || "/";

    return redirect;
};

export default useRedirect;
