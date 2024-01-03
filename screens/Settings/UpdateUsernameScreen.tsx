import { View } from "react-native";
import LoggedInLayout from "../../components/Layout/LoggedLayout";
import AppText from "../../components/Display/AppText";
import AppTextField from "../../components/Input/AppTextField";
import { Controller, useForm } from "react-hook-form";
import AppButton from "../../components/Display/AppButton";
import { useState } from "react";
import apptw from "../../utils/lib/tailwind";



export default function UpdateUsernameScreen() {
    const [isButtonLoading, setButtonLoading] = useState(false)

    const { register, handleSubmit, watch, control, formState: { errors } } = useForm()
    return (
        <LoggedInLayout>
            <View
              style={apptw`mx-5 mt-20`}
            >


                <AppTextField
                    title="New Username"
                    validationName="userName"
                    placeholder="new username"
                    control={control}
                />


                <AppButton
                    text={isButtonLoading ? "Loading..." : "Submit"}
                />


            </View>
        </LoggedInLayout>
    )
}