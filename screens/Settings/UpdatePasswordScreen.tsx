import { View } from "react-native";
import LoggedInLayout from "../../components/Layout/LoggedLayout";
import AppText from "../../components/Display/AppText";
import AppTextField from "../../components/Input/AppTextField";
import { Controller, useForm } from "react-hook-form";
import AppButton from "../../components/Display/AppButton";
import { useState } from "react";
import apptw from "../../utils/lib/tailwind";
import Toast from "react-native-toast-message";
import { SecureStorage } from "../../services/secureStorage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../allroutes";

type ScreenProps = NativeStackScreenProps<RootStackParamList, "UpdatePasswordScreen">


export default function UpdatePasswordScreen({navigation}: ScreenProps) {
    const [isButtonLoading, setButtonLoading] = useState(false)

    const { register, handleSubmit, watch, control, formState: { errors } } = useForm()

    const onSubmit = handleSubmit(async (data) => {
        console.log(data)


        await SecureStorage.getInst().save("password", data.password)
        Toast.show({
            type:"success",
            text1:"Successful"
        })

        navigation.navigate("DashBoardScreen")

    })
    return (
        <LoggedInLayout>
            <View
              style={apptw`mx-5 mt-20`}
            >


                <AppTextField
                    title="New Password"
                    validationName="password"
                    placeholder="new password"
                    control={control}
                />


                <AppButton
                    text={isButtonLoading ? "Loading..." : "Submit"}
                    onPress={onSubmit}
                />


            </View>
        </LoggedInLayout>
    )
}