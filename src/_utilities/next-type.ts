export interface SearchProps {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
};

export interface SlugProps {
    params: Promise<{ slug: string }>
}

export interface TutorialsProps {
    title: string;
    category_name: string;
    slug: string;
    image_url: string;
};

export interface PaginationWrapperProps {
    totalPages: number
    currentPage: number
    has_next: boolean
    has_previous: boolean
    first_page: string
}

export interface SitemapProps {
    slug: string
    updated_at: string
}