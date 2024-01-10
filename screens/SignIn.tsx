import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import AppButton from "../components/Display/AppButton";
import AppText from "../components/Display/AppText";
import AppTextField from "../components/Input/AppTextField";
import BasicBackButtonLayout from "../components/Layout/BasicBackButtonLayout";
import apptw from "../utils/lib/tailwind";
import { RootStackParamList } from "./allroutes";
import PressAppText from "../components/Display/PressAppText";
import { loginwithEmailFormType, loginwithEmailSchema } from "../services/validation/LoginVal";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, loginUser } from "../state/userSlice";
import { AppDispatch } from "../state/store";
import { zodResolver } from "@hookform/resolvers/zod";
import Toast from "react-native-toast-message";
import { SecureStorage } from "../services/secureStorage";




type SignInScreen = NativeStackScreenProps<
    RootStackParamList,
    "SignIn"
>;

const SignIn = ({ navigation }: SignInScreen) => {
    const [isButtonLoading, setButtonLoading] = useState(false)
    const dispatch = useDispatch<AppDispatch>();
    const { user } = useSelector(authSelector);
    const { register, handleSubmit, watch, control, setError, formState: { errors } } = useForm()


    const navigatetoDashBoard = () => {
        navigation.navigate("DashBoardScreen")
    }


    const navigateToSignUp = () => {
        navigation.navigate("SignUp")
    }

    const navigatetoForgotPassword = () => {
        navigation.navigate("ForgotPassword")
    }


    const onSubmit = handleSubmit(async (data) => {

        setButtonLoading(true)

        const userN = await SecureStorage.getInst().getValueFor("userName")
        const pass = await SecureStorage.getInst().getValueFor("password")
        console.log(data)
        if (data.userName !== userN) {
            setError("userName", {
                type: "manual",
                message: "Invalid username"
            })
        } if (data.password !== pass) {
            setError("password", {
                type: "manual",
                message: "Invalid password"
            })
        }else if (data.userName === userN && data.password === pass){
            Toast.show({
                type:"success",
                text1:"Success"
            })
            navigatetoDashBoard()
        }


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
                            title="Username"
                            control={control}
                            errorMessage={errors?.userName?.message}
                            validationName="userName"
                            placeholder="username"
                        />

                        <AppTextField
                            title="Password"
                            errorMessage={errors?.password?.message}
                            validationName="password"
                            control={control}
                            placeholder="***********"
                            isPassword={true}
                        />

                        {/* <View>
                            <PressAppText
                                // onPress={navigatetoForgotPassword}
                                style={apptw`text-black `}
                            >
                                Forgot Password?
                            </PressAppText>
                        </View> */}

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


