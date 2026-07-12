import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Analytics() {
    const location = useLocation();

    useEffect(() => {
        if (window.gtag) {
            window.gtag('config', 'G-PW2JKMSEBT', {
                page_path: location.pathname + location.search,
            });
        }
    }, [location]);

    return null;
}