import { createContext } from "react";

interface  UserContextType {
    name : string
    job: string;
}

export const UserContext = createContext<UserContextType | null>(null);