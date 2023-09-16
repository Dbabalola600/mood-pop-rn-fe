import { createAsyncThunk } from "@reduxjs/toolkit";
import authRequest from "../utils/requests/authReq";

const initialState: AuthState = {
    accessToken: "",
    refreshToken: "",
    _id: "",
    email: "",

    errorMessage: "",
    isError: false,
    isLoading: false,
    isSuccess: false,
    requestStatus: 0,
    loginErrorMessage: "",
}






export const loginUser = createAsyncThunk(
    "auth/",
    async (
        { Username, password }: { Username: string; password: string },
        thunkApi
    ) => {
        try {
            const saveResponse = await authRequest.UserLogin(Username, password)
            console.log("slice")
            console.log(saveResponse)

            if (saveResponse?.message === "success") {
                let UserInfo: UserFull = saveResponse.data as UserFull

                return {
                    allUserInformation: UserInfo,
                }

                // saveResponse



            } else {
                console.log("slice")
                console.log(saveResponse?.data.data)
                switch (saveResponse?.data.data) {
                    case 0:
                        return thunkApi.rejectWithValue(
                            "A network error occur. Please check your connection"
                        );
                    case 403:
                        return thunkApi.rejectWithValue(
                            "Invalid Email or Password"
                        );
                    case 400:
                        return thunkApi.rejectWithValue(
                            "A bad request occured"
                        );
                    case 500:
                        return thunkApi.rejectWithValue(
                            "Something went wrong with our servers please try again later"
                        );
                    default:
                    
                        return thunkApi.rejectWithValue(
                            "An error occured. Please try again later"
                        );
                }
            }
        } catch (e: any) {
            console.log(e);
            let error:any ;
            if (error instanceof Error) {
                error = e.message;
            } else {
                error = String(e); 
            }
            return thunkApi.rejectWithValue(e);
        }


    }
)



