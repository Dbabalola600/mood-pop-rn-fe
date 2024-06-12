import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import AppButton from "../components/Display/AppButton";
import AppText from "../components/Display/AppText";
import AppTextField from "../components/Input/AppTextField";
import BasicBackButtonLayout from "../components/Layout/BasicBackButtonLayout";
import apptw from "../utils/lib/tailwind";
import { AuthStackParamList, RootStackParamList } from "./allroutes";
import PressAppText from "../components/Display/PressAppText";
import { loginwithEmailFormType, loginwithEmailSchema } from "../services/validation/LoginVal";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, loginUser } from "../state/userSlice";
import { AppDispatch } from "../state/store";
import { zodResolver } from "@hookform/resolvers/zod";
import Toast from "react-native-toast-message";




type SignInScreen = NativeStackScreenProps<
    AuthStackParamList,
    "SignIn"
>;

const SignIn = ({ navigation }: SignInScreen) => {
    const [isButtonLoading, setButtonLoading] = useState(false)
    const dispatch = useDispatch<AppDispatch>();
    const { user} = useSelector(authSelector);
    const { register, handleSubmit, watch, control, formState: { errors } } = useForm<loginwithEmailFormType>({
       
        resolver: zodResolver(loginwithEmailSchema),
    })


    const navigatetoDashBoard = () => {
        // navigation.navigate("DashBoardScreen")
    }


    const navigateToSignUp = () => {
        navigation.navigate("SignUp")
    }

    const navigatetoForgotPassword = () => {
        navigation.navigate("ForgotPassword")
    }
    useEffect(() => {
        if (user.isSuccess && !user.isLoading) {
            Toast.show({
                type:"success",
                text1:`Successful Login`
            })
            // navigatetoDashBoard()
            // console.log("success")
        }
        if (user.isError && !user.isLoading) {
            // alert(user.loginErrorMessage);
            Toast.show({
                type:"error",
                text1:`${user.loginErrorMessage}`
            })
        }

    }, [user.isError, user.isLoading, user.isSuccess,])

    const onSubmit = handleSubmit(async (data) => {
      
        setButtonLoading(true)


        const response = await dispatch(
            loginUser({ password: data.password, userName: data.userName })
        );

       
        setButtonLoading(false)
    })

    return (
        <BasicBackButtonLayout>
            <>
                <View>

                </View>
                <ScrollView
                    style={apptw`px-5 mt-5`}
                    contentContainerStyle={apptw.style(` justify-between`, {
                        flexGrow: 1,
                    })}
                >
                    <View>

                        <AppText
                            style={apptw`text-3xl text-center text-primary`}>
                            Welcome Back
                        </AppText>
                        <AppText
                            style={apptw`text-lg text-center text-specpurple`}>
                            Login and Resume your Anti-Social Adventure
                        </AppText>


                        <AppTextField
                            title="Username/Email"
                            control={control}
                            errorMessage={errors.userName?.message}
                            validationName="userName"
                            placeholder="username/email"
                        />

                        <AppTextField
                            title="Password"

                            validationName="password"
                            control={control}
                            placeholder="***********"
                            isPassword={true}
                        />

                        <View>
                            <PressAppText
                                // onPress={navigatetoForgotPassword}
                                style={apptw`text-black `}
                            >
                                Forgot Password?
                            </PressAppText>
                        </View>

                        <AppButton
                            buttonStyle={apptw`  my-6`}
                            text={isButtonLoading ? "Loading..." : "Sign In"}
                            onPress={onSubmit}


                        />


                    </View>
                    <View style={apptw`mb-19 flex-row justify-between mx-auto`}>




                        <AppText style={apptw`text-zinc-400 text-[4]`}>
                            Don't have an account?{' '}




                        </AppText>

                        <PressAppText
                            onPress={navigateToSignUp}
                            style={apptw`text-primary `}>
                            Register
                        </PressAppText>


                    </View>
                </ScrollView>
            </>
        </BasicBackButtonLayout>
    )
}


export default SignIn;


