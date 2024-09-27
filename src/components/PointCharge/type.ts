import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { ISearchBookAladin } from "../../apis/aladinOpenAPI/types";
import { IMyPoint } from "../../apis/point/apiGetMyPoint/types";

export interface IPointChargeProps {
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult>;
}
