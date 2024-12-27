import {atom} from 'recoil';

type AuthModelState = {
    isOpen: boolean;
    type: "login" | "register" | "forgetPassword";
};

const initalAuthModalState: AuthModelState = {
    isOpen: false,
    type: "login",
};

export const authModelState = atom<AuthModelState>({
    key: "authModalState",
    default: initalAuthModalState,
})