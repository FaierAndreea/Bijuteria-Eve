import { IGemModel } from "./GemModel";

export interface IPaginationModel {
    pageIndex: number;
    pageSize: number;
    data: IGemModel[];
}