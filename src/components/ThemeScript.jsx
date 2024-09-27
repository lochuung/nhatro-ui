import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import loadScript from "../utils/load-script.js";

export const ThemeScript = ({children}) => {
    const location = useLocation();
    const $$ = document.querySelectorAll.bind(document);
    useEffect(() => {
        // console.log(location.pathname);
        const themeScripts = $$('.theme-script');
        let isExist = false;
        themeScripts.forEach(script => {
            if (script.id !== location.pathname) {
                script.remove();
            } else {
                isExist = true;
            }
        });
        if (isExist) {
            return;
        }
        loadScript('/assets/js/theme.bundle.js', 'theme-script',
            location.pathname);
    }, [location.pathname]);
    return children;
};