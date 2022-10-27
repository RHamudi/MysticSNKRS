import { useQuery, UseQueryResult, QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export const useRequest = <Data = unknown, Error = unknown>(
  ...args: Parameters<typeof useQuery>
) => {
  return useQuery(...args) as UseQueryResult<Data, Error>;
};
