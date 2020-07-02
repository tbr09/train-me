

export interface ClientModel {
    id: string;
    name: string;
    status: number; // active / inactive / invited
    email: string;
    age: number;
    haveTraining: boolean;
    haveDiet: boolean;
    paid: boolean;
}
