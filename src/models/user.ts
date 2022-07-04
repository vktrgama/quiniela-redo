export interface IUserSession {
    isAuthenticated: boolean;
    email?: string;
    status?: string;
    name?: string;
    picture?: string;
    jwt?: string;
}
