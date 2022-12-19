export type FormData = {
    personalData: {
        name: string;
        lastName: string;
        birthDate: string;
        gender: string;
        email: string;
        newsLetter: boolean;
    },
    accessData: {
        username: string;
        password: string;
        passwordConfirmation: string;
    },
};
