/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '../../../client/apiClient.ts'
import type { RequestConfig, ResponseErrorConfig } from '../../../client/apiClient.ts'
import type { GetProductsIdQueryResponse, GetProductsIdPathParams, GetProductsId404 } from '../../types/products/GetProductsId.ts'
import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { getProductsId } from '../../client/getProductsId.ts'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const getProductsIdQueryKey = (id: GetProductsIdPathParams['id']) => [{ url: '/products/:id', params: { id: id } }] as const

export type GetProductsIdQueryKey = ReturnType<typeof getProductsIdQueryKey>

export function getProductsIdQueryOptions(id: GetProductsIdPathParams['id'], config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const queryKey = getProductsIdQueryKey(id)
  return queryOptions<GetProductsIdQueryResponse, ResponseErrorConfig<GetProductsId404>, GetProductsIdQueryResponse, typeof queryKey>({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return getProductsId(id, config)
    },
  })
}

/**
 * @summary Get product by ID
 * {@link /products/:id}
 */
export function useGetProductsId<
  TData = GetProductsIdQueryResponse,
  TQueryData = GetProductsIdQueryResponse,
  TQueryKey extends QueryKey = GetProductsIdQueryKey,
>(
  id: GetProductsIdPathParams['id'],
  options: {
    query?: Partial<QueryObserverOptions<GetProductsIdQueryResponse, ResponseErrorConfig<GetProductsId404>, TData, TQueryData, TQueryKey>> & {
      client?: QueryClient
    }
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getProductsIdQueryKey(id)

  const query = useQuery(
    {
      ...(getProductsIdQueryOptions(id, config) as unknown as QueryObserverOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
    },
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<GetProductsId404>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}