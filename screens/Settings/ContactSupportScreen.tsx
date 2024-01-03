import { View } from "react-native";
import AppText from "../../components/Display/AppText";
import LoggedInLayout from "../../components/Layout/LoggedLayout";
import apptw from "../../utils/lib/tailwind";
import AppTextField from "../../components/Input/AppTextField";
import { useState } from "react";
import { useForm } from "react-hook-form";
import LargeTextField from "../../components/Input/LargeTextField";
import AppButton from "../../components/Display/AppButton";
import settingsRequest from "../../utils/requests/settingsRequest";
import Toast from "react-native-toast-message";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../allroutes";




type MyProps = NativeStackScreenProps<RootStackParamList, "ContactSupportScreen">

export default function ContactSupportScreen({ navigation }: MyProps) {

    const [isButtonLoading, setButtonLoading] = useState(false)

    const { register, handleSubmit, watch, control, formState: { errors } } = useForm()

    const onSubmit = handleSubmit(async (data) => {
        setButtonLoading(true)


        const response = await settingsRequest.contactSupport(data.title, data.details)

        switch (response.data.status) {
            case 200: {

                Toast.show({
                    type: "success",
                    text1: "Sent"
                })
                navigation.navigate("DashBoardScreen")
                break;
            }
            default: {
                Toast.show({
                    type: "error",
                    text1: "Unknown Error"
                })
            }
        }

        // console.log(response.data.status)
        setButtonLoading(false)
    })

    return (
        <LoggedInLayout>
            <View
                style={apptw`mx-5`}
            >

                <AppTextField
                    title="Title"
                    validationName="title"
                    placeholder="title"
                    control={control}
                />

                <LargeTextField
                    title="Details"
                    validationName="details"
                    placeholder="Hmmmm..."
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