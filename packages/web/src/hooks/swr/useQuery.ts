import { Variables } from 'graphql-request/dist/types';
import useSWR from 'swr';

import { client } from '../../services/client';

export function useQuery<Data = 'any'>(
  query: string,
  vars?: Variables
): [Data, any] {
  const { data, error } = useSWR(
    vars ? [query, ...Object.values(vars)] : query,
    async (request) => {
      const fetchedData = await client.request<Data>(request, vars && vars);

      return fetchedData;
    }
  );

  return [data, error];
}
