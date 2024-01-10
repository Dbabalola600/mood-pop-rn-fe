import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ScrollView, View, Pressable, Image } from "react-native";
import AppButton from "../components/Display/AppButton";
import AppText from "../components/Display/AppText";
import PressAppText from "../components/Display/PressAppText";
import AppTextField from "../components/Input/AppTextField";
import BasicBackButtonLayout from "../components/Layout/BasicBackButtonLayout";
import apptw from "../utils/lib/tailwind";
import { RootStackParamList } from "./allroutes";
import tw from "twrnc"
import { Checkbox } from "expo-checkbox";
import { useForm } from "react-hook-form";
import { SecureStorage } from "../services/secureStorage";
import Toast from "react-native-toast-message";

type SignUpScreen = NativeStackScreenProps<
    RootStackParamList,
    "SignUp"
>;

const SignUp = ({ navigation }: SignUpScreen) => {
    const [isButtonLoading, setButtonLoading] = useState(false)
    // const { isError, isLoading, isSuccess, loginErrorMessage } = useSelector(authSelector);

    // const dispatch = useDispatch<AppDispatch>();

    const navigateToSignIn = () => {
        navigation.navigate("SignIn")
    }

    const [isChecked, setChecked] = useState(false);

    const { register, handleSubmit, watch, control, formState: { errors } } = useForm()
 

    const onSubmit = handleSubmit(async (data)=>{
        setButtonLoading(true)
        console.log(data)

        await SecureStorage.getInst().save("email", data.email)
        await SecureStorage.getInst().save("password", data.password)
        await SecureStorage.getInst().save("userName", data.userName)
        Toast.show({
            type:"success",
            text1:"Success"
        })

        navigateToSignIn()
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
                            placeholder="username"
                            control={control}
                        />

                      

                        <AppTextField
                            title="Email"
                            validationName="email"
                            placeholder="example@gmail.com"
                            control={control}
                        />

                        <AppTextField
                            title="Password"
                            validationName="password"
                            placeholder="***********"
                            isPassword={true}
                            control={control}
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