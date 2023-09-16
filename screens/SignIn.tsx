import { ScrollView, View } from "react-native";
import BasicBackButtonLayout from "../components/Layout/BasicBackButtonLayout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./allroutes";
import tw from "twrnc"
import AppText from "../components/Display/AppText";
import apptw from "../utils/lib/tailwind";
import AppTextField from "../components/Input/AppTextField";
import PressAppText from "../components/Display/PressAppText";
import AppButton from "../components/Display/AppButton";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, loginUser } from "../state/authSlice";
import { useEffect, useState } from "react";
// import { AppDispatch } from "../state/store";


import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginwithEmailFormType, loginwithEmailSchema } from "../services/validation/Loginval";
import { AppDispatch } from "../state/store";



type SignInScreen = NativeStackScreenProps<
    RootStackParamList,
    "SignIn"
>;

const SignIn = ({ navigation }: SignInScreen) => {
    const { isError, isLoading, isSuccess, loginErrorMessage } = useSelector(authSelector);
    const [isButtonLoading, setButtonLoading] = useState(false)

    const navigatetoDashBoard = () => {
        navigation.navigate("DashBoard")
    }


    const navigateToSignUp = () => {
        navigation.navigate("SignUp")
    }
    const navigatetoForgotPassword = () => {
        navigation.navigate("ForgotPassword")
    }
    const dispatch = useDispatch<AppDispatch>();


    const {
        control,
        formState: { errors },
        handleSubmit
    } = useForm<loginwithEmailFormType>({

        defaultValues: {
            password: "",
            userName: "",
        },
        resolver: zodResolver(loginwithEmailSchema),
    })

    useEffect(() => {
        if (isSuccess && !isLoading) {
            navigatetoDashBoard()
        }
        if (isError && !isLoading) {
            alert(loginErrorMessage);
        }

    }, [isError, isLoading, isSuccess,])


    const onSubmit = handleSubmit(async (data) => {
        setButtonLoading(true)

        // const name = JSON.stringify(data.userName)
        // const pass = JSON.stringify(data.password)
        await dispatch(
            loginUser({ Username: data.userName, password: data.password })
        );
        setButtonLoading(false)
    })
    const austh = useSelector(authSelector)


    // console.log("this"+ austh._id + "")
    return (
        <BasicBackButtonLayout>
            <>
                <View>

                </View>
                <ScrollView
                    style={tw`px-5 mt-5`}
                    contentContainerStyle={tw.style(` justify-between`, {
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
                            control={control}
                            validationName="password"
                            errorMessage={errors.password?.message}
                            placeholder="***********"
                            isPassword={true}
                        />


                        <PressAppText
                            onPress={navigatetoForgotPassword}
                            style={apptw`text-primary `}
                        >
                            Forgot Password?
                        </PressAppText>



                    </View>
                    <View style={apptw`mb-19`}>
                        <AppButton
                            buttonStyle={apptw`  my-6`}
                            text={isButtonLoading ? "Loading..." : "Sign In"}
                            onPress={onSubmit}
                        // text="Sign In"

                        />



                        <AppText style={apptw`self-center text-zinc-400 text-[4]`}>
                            Don't have an account?{' '}


                            <PressAppText
                                onPress={navigateToSignUp}
                                style={apptw`text-primary top-[1]  `}>
                                Sign Up
                            </PressAppText>



                        </AppText>


                    </View>
                </ScrollView>
            </>
        </BasicBackButtonLayout>
    )

}

export default SignIn;