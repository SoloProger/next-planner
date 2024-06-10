export interface EntityResponse<T> {
  data: {
    id: number;
    attributes: T;
  };
  meta: unknown;
}
