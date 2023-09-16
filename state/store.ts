import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authReducer from './authSlice'

import storage from "redux-persist/lib/storage";

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const rootReducer = combineReducers({

    auth: persistReducer(
        {
            key: "auth",
            storage,
            blacklist: [ 'auth/loginUser' ,"isLoading", "errorMessage", "isError", "isSuccess","_id","email" ],
        },
        authReducer
    ),
})


const presistedReducer = persistReducer(
    // persistConfig,
    {
        key: "root",
        storage
    },
    rootReducer,

)

export const store = configureStore({


    reducer: presistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

