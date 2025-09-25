export interface BannerProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
    overlay?: boolean;
    height?: 'small' | 'medium' | 'large' | 'full';
    breadcrumbs?: BreadcrumbItem[];
}

export interface BreadcrumbItem {
    label: string;
    path?: string;
}

export interface BreadcrumbProps {
    items: BreadcrumbItem[];
    separator?: string;
}