export interface PagedCollections<T> {
    items: T[];
    currentPage: number;
    totalItems: number;
    totalPages: number;
    description: string;
    hasItems: boolean;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
}

export interface PaginationRequest {
    currentPage: number;
    pageSize: number;
}