enum RequestStatus {
    Idle,
    Loading,
    Loaded,
    Error,
}

interface PaginatedResponse<T> {
    results: Array<T>;
    previous: string | null;
    next: string | null;
}
  
export { RequestStatus }
export type { PaginatedResponse };
