
interface AuthState {

    accessToken: string | null;
    refreshToken: string | null;
    _id: string | null;
    email: string | null;
    // user: {
    //     _id: string | null
    //     Username: string | null,
    //     email: string | null,
    //     password: string | null,
    //     image: string | null,
    //     isVerified: boolean | null,
    //     isActive: boolean | null,
    //     role: string | null
    // };



    isSuccess: boolean;
    isError: boolean;
    isLoading: boolean;
    errorMessage: string;
    requestStatus: number;
    loginErrorMessage: string;
}



type UserFull = {
    _id: string | null
    Username: string | null,
    email: string | null,
    password: string | null,
    image: string | null,
    isVerified: boolean | null,
    isActive: boolean | null,
    role: string | null
}



interface LoginResponse {
    status: number;
    data: any;
    message: string;
  }