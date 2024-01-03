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
                            title="Firstname"
                            validationName="userName"
                            placeholder="Firstname"
                        />

                        <AppTextField
                            title="Firstname"
                            validationName="userName"
                            placeholder="lastname"
                        />

                        <AppTextField
                            title="Email"
                            validationName="email"
                            placeholder="example@gmail.com"
                        />

                        <AppTextField
                            title="Password"
                            validationName="password"
                            placeholder="***********"
                            isPassword={true}
                        />

                       


                    </View>





                    <View style={apptw`mb-19`}>

                        <AppButton
                            buttonStyle={apptw`  my-6`}
                            text={isButtonLoading ? "Loading..." : "Register"}
                            onPress={navigateToSignIn}
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