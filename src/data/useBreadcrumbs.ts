import { useLocation } from 'react-router-dom';
import type { BreadcrumbItem } from './banner';

export const useBreadcrumbs = (currentPageTitle: string): BreadcrumbItem[] => {
    const location = useLocation();

    const routeMap: { [key: string]: string } = {
        '/': 'Accueil',
        '/about': 'Qui sommes-nous ?',
        '/country': 'COUNTRY',
        '/coaching': 'COACHING',
        '/visa': 'VISA',
        '/blog': 'BLOG',
        '/contact': 'CONTACT',
    };

    const breadcrumbs: BreadcrumbItem[] = [
        { label: 'Accueil', path: '/' }
    ];

    if (location.pathname !== '/') {
        const pathSegments = location.pathname.split('/').filter(Boolean);

        pathSegments.forEach((segment, index) => {
            const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
            const isLast = index === pathSegments.length - 1;

            breadcrumbs.push({
                label: isLast ? currentPageTitle.toUpperCase() : routeMap[path] || segment.toUpperCase(),
                path: isLast ? undefined : path
            });
        });
    }

    return breadcrumbs;
};