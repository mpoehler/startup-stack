export interface User {
    uid: string;
    displayName: string;
    email: string;
    phone?: string;
    photoURL?: string;
}

export interface ProfileState {
    user?: User|null;
}
