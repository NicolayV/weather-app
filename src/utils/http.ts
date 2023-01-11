type FetchParams = Parameters<typeof fetch>;

export const fetchJson = <T>(...params: FetchParams): Promise<T> => {
  return fetch(...params).then((resp) => resp.json() as Promise<T>);
};
