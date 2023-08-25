export interface Role {
    roleId: number;
    application: string;
    name: string;
    description: string;
    isDefault: boolean;
    isActive: boolean;
}

export interface CreateRole extends Omit<Role, 'roleId' | 'isDefault' | 'isActive' > {
}

export interface UpdateRole extends Omit<Role, 'application' | 'name' | 'isDefault' | 'isActive' > {
}