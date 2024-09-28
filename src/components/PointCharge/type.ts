import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

export interface IPointChargeProps {
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult>;
}
