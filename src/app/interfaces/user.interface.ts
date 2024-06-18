import { ICompany } from "./company.interface";

export interface IUser{
    company: ICompany;
    email:string;
    id:number;
    username:string;
}