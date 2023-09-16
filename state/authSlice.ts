import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import authRequest from "../utils/requests/authReq";
import { SecureStorage } from "../services/Singleton/secureStorage";
import { RootState } from "./store";



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

//logging in a user 

export const loginUser = createAsyncThunk(
    "auth/",
    async (
        { Username, password }: { Username: string; password: string },
        thunkApi
    ) => {
        try {
            const saveResponse = await authRequest.UserLogin(Username, password)
            console.log("slice")
            // console.log(saveResponse.data)

            if (saveResponse.data.message === "success") {

                let UserInfo: UserFull = saveResponse.data.data as UserFull
                console.log(UserInfo)
                return {
                    allUserInformation: UserInfo,
                }
                // console.log(UserResponse.status)
               
            } else {

                console.log(saveResponse.data.data)
                switch (saveResponse.data.data) {
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
            return thunkApi.rejectWithValue(e);
        }


    }
)


export const LogoutUser = createAsyncThunk(
    "auth/logout", // Specify a meaningful action type prefix
    async (
        { _id }: { _id: string }, thunkApi
    ) => { // The underscore (_) indicates an unused parameter
        try {
            console.log("logging out user...");
            // Perform your logout logic here
            // let UserInfo: AuthState = getUserInfo(); // Assuming getUserInfo is a function you implement

            return {
                // allUserInformation: UserInfo,
                message: "logged out"
            }

        } catch (e) {
            console.log(e);
            return thunkApi.rejectWithValue(e); // Use rejectWithValue properly
        }
    }
);






const UserInformation = (

    state: AuthState,
    allUserInformation: UserFull
) => {


    state._id = allUserInformation._id
    return state;
};


// const Auth =(
//     state: AuthState,
// )=>{
// state._id = ""
// }

const defaultAuth = (
    state: AuthState,
    // allUserInformation: UserFull
) => {


    state._id = null;
    return state;
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setAuthStateTokens(
            state: AuthState,
            action: PayloadAction<{ _id: any; email: any }>
        ) {
            state._id = action.payload._id;
            state.email = action.payload.email;
        },
        clearAuthState(state: AuthState) {
            return initialState;
        }, logOut(state: AuthState, action: PayloadAction<{ _id: any }>) {
            state._id = null
            localStorage.clear()
        },
        deleteAuthItem: (state) => ({
            ...state,
            user: {

                Username: "",
                _id: "",
                email: "",
                image: "",
                password: "",
                isActive: false,
                isVerified: false,
                role: "",
            },
            _id: "",
        }),


    },

    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                // when login is pending
                state.isLoading = true;
                state.isSuccess = false;
                state.isError = false;
                state.loginErrorMessage = ""
                return state;
            })

            .addCase(loginUser.rejected, (state: AuthState, action) => {
                // when login is unsuccessful
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.loginErrorMessage = action.payload as string;
                return state;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                // when login is successful
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.loginErrorMessage = ""
                console.log(" success payload here")
                console.log(action.payload);
                const allUserInformation = action.payload
                    ?.allUserInformation as UserFull;
                return UserInformation(state, allUserInformation);
            })
            .addCase(LogoutUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;

                console.log("here")
                console.log(action.payload);
                // const allUserInformation = action.payload
                //     ?.allUserInformation as UserFull;
                return defaultAuth(state);
            });

    },

});



export const { setAuthStateTokens, clearAuthState, deleteAuthItem } =
    authSlice.actions;

export const authSelector = (state: RootState) => state.auth;



export default authSlice.reducer;


