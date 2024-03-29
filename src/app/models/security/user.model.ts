import { Role } from "./role.model";

export interface User {
    userId: number;
    email: string;
    firstName: string;
    lastName: string;
    description: string;
    passwordMustChange: boolean;
    passwordExpirationDate?: Date;
    isDefault: boolean;
    isActive: boolean;
    roles: Role[];
}

export interface CreateUser {
    email: string;
    firstName: string;
    lastName: string;
}

export interface UpdateUser extends CreateUser {
}