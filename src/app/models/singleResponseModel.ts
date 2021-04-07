import { ResponseModel } from "./ResponseModel";

export interface SingleResponceModel<T> extends ResponseModel{
    data:T;
}