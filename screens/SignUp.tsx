import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ScrollView, View, Pressable, Image } from "react-native";
import AppButton from "../components/Display/AppButton";
import AppText from "../components/Display/AppText";
import PressAppText from "../components/Display/PressAppText";
import AppTextField from "../components/Input/AppTextField";
import BasicBackButtonLayout from "../components/Layout/BasicBackButtonLayout";
import apptw from "../utils/lib/tailwind";
import { AuthStackParamList, RootStackParamList } from "./allroutes";
import tw from "twrnc"

import { useForm } from "react-hook-form";
import { CreateYourAccountFormType, createYourAccountSchema } from "../services/validation/createAccountVal";
import { zodResolver } from "@hookform/resolvers/zod";
import userRequest from "../utils/requests/userRequests";
import Toast from "react-native-toast-message";

type SignUpScreen = NativeStackScreenProps<
    AuthStackParamList,
    "SignUp"
>;

const SignUp = ({ navigation }: SignUpScreen) => {
    const [isButtonLoading, setButtonLoading] = useState(false)
    // const { isError, isLoading, isSuccess, loginErrorMessage } = useSelector(authSelector);

    // const dispatch = useDispatch<AppDispatch>();

    const {
        control,
        formState: { errors },
        handleSubmit,
    } = useForm<CreateYourAccountFormType>({
        resolver: zodResolver(createYourAccountSchema)
    })
    const navigateToSignIn = () => {
        navigation.navigate("SignIn")
    }

    const [isChecked, setChecked] = useState(false);



    const onSubmit = handleSubmit(async (data) => {
        setButtonLoading(true)
        await userRequest.createUser(
            data.userName,
            data.email,
            data.password
        ).then((res) => {
            // console.log(res) 
            switch (res.data.status) {
                case 257: {
                    Toast.show({
                        type: "error",
                        text1: `${res.data.message}`
                    })
                    break;
                }
                case 200: {
                    Toast.show({
                        type: "success",
                        text1: "Successful",
                        text2: "proceed to login"
                    })
                    navigateToSignIn()
                    break;
                }
                case 256: {
                    Toast.show({
                        type: "error",
                        text1: `${res.data.message}`
                    })
                    break;
                }
                default: {
                    Toast.show({
                        type: "error",
                        text1: "Unknown error try again later",
                        text2: ""
                    })
                    break;

                }
            }

        })

        setButtonLoading(false)
    })


    return (
        <BasicBackButtonLayout>
            <>

                <ScrollView
                    style={tw`px-5 `}
                    contentContainerStyle={tw.style(` justify-between`, {
                        flexGrow: 1,
                    })}
                >
                    <View>

                        <AppText
                            style={apptw`text-3xl text-center text-black`}>
                            Register Account
                        </AppText>
                        <AppText
                            style={apptw`text-lg text-center  pb-5`}>
                            Fill your details or continue with
                            social media
                        </AppText>


                        <AppTextField
                            title="Username"
                            validationName="userName"
                            control={control}
                            placeholder="Firstname"
                            errorMessage={errors.userName?.message}
                        />


                        <AppTextField
                            title="Email"
                            validationName="email"
                            control={control}
                            placeholder="example@gmail.com"
                            errorMessage={errors.email?.message}
                        />

                        <AppTextField
                            title="Password"
                            control={control}
                            validationName="password"
                            placeholder="***********"
                            isPassword={true}
                            errorMessage={errors.password?.message}
                        />




                    </View>





                    <View style={apptw`mb-19`}>

                        <AppButton
                            buttonStyle={apptw`  my-6`}
                            text={isButtonLoading ? "Loading..." : "Register"}
                            onPress={onSubmit}
                        // text="Create Account"

                        />
                        <AppText style={apptw`self-center text-zinc-400 text-[4]`}>
                            Already have an account?{' '}


                            <PressAppText
                                onPress={navigateToSignIn}
                                style={apptw`text-primary top-[1]  `}>
                                Sign In
                            </PressAppText>



                        </AppText>


                    </View>
                </ScrollView>

            </>

        </BasicBackButtonLayout>
    )
}

export default SignUp