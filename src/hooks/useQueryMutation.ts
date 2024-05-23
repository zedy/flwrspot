// libs
import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
  UseMutationResult,
} from '@tanstack/react-query';

// components
// import { useStore } from '@/store/store';

type MutationFunction<TData, TVariables> = (
  variables: TVariables
) => Promise<TData>;

// TODO integrate store
const useCustomMutation = <TData, TVariables>(
  apiEndpoint: MutationFunction<TData, TVariables>,
  queryKey: string,
  options?: UseMutationOptions<TData, unknown, TVariables>
): UseMutationResult<TData, unknown, TVariables> => {
  const queryClient = useQueryClient();

  const mutation = useMutation(apiEndpoint, {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries([queryKey]);

      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      if (options?.onError) {
        options.onError(error, variables, context);
      }
    },
    onSettled: (data, error, variables, context) => {
      if (options?.onSettled) {
        options.onSettled(data, error, variables, context);
      }
    },
    ...options,
  });

  return mutation;
};

export default useCustomMutation;
