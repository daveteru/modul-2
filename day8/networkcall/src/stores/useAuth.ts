interface User  {
    objectId:string;
    name: string;
    email: string;
    userToken:string;
}
type Store = {
    user : User | null;
    login: ()=>void;
    logout : ()=> void;
};