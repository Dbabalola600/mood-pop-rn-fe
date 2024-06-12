import { View } from "react-native";
import LoggedInLayout from "../../components/Layout/LoggedLayout";
import AppText from "../../components/Display/AppText";
import AppTextField from "../../components/Input/AppTextField";
import { Controller, useForm } from "react-hook-form";
import AppButton from "../../components/Display/AppButton";
import { useState } from "react";
import apptw from "../../utils/lib/tailwind";
import settingsRequest from "../../utils/requests/settingsRequest";
import Toast from "react-native-toast-message";
import { SecureStorage } from "../../services/secureStorage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../allroutes";


type BoardProps = NativeStackScreenProps<HomeStackParamList>


export default function UpdateEmailScreen({ navigation }: BoardProps) {
    const [isButtonLoading, setButtonLoading] = useState(false)

    const { register, handleSubmit, watch, control, formState: { errors } } = useForm()

    const onSubmit = handleSubmit(async (data) => {
        setButtonLoading(true)

        await settingsRequest.updateEmail(data.email).then(async (res) => {
            console.log(res)
            switch (res.data.status) {
                case 205: {
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
                        // text2: "proceed to login"
                    })
                    // navigateToSignIn()
                    await SecureStorage.getInst().save("email", data.email)
                    navigation.navigate("DashBoard")
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
        <LoggedInLayout>
            <View
                style={apptw`mx-5 mt-20`}
            >


                <AppTextField
                    title="New Email"
                    validationName="email"
                    placeholder="new email"
                    control={control}
                />


                <AppButton
                    text={isButtonLoading ? "Loading..." : "Submit"}
                    onPress={onSubmit}
                    buttonStyle={apptw`  my-6`}
                />


            </View>
        </LoggedInLayout>
    )
}