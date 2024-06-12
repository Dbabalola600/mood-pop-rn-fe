import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList, RootStackParamList } from "../../allroutes";
import BasicBackButtonLayout from "../../../components/Layout/BasicBackButtonLayout";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import AppButton from "../../../components/Display/AppButton";
import AppText from "../../../components/Display/AppText";
import AppTextField from "../../../components/Input/AppTextField";
import LargeTextField from "../../../components/Input/LargeTextField";
import apptw from "../../../utils/lib/tailwind";
import { Platform } from "react-native";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createNoteFormType, createNoteSchema } from "../../../services/validation/createSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import journalRequest from "../../../utils/requests/journalRequest";
import Toast from "react-native-toast-message";

type Props = NativeStackScreenProps<
    HomeStackParamList

>;


const WriteJournal = ({ navigation }: Props) => {

    const [isButtonLoading, setButtonLoading] = useState(false)

    const { register, handleSubmit, watch, control, formState: { errors }, reset } = useForm<createNoteFormType>(
        { resolver: zodResolver(createNoteSchema) }
    )

    const onSubmit = handleSubmit(async (data) => {
        setButtonLoading(true)
        await journalRequest.CreateJNote(data.title, data.content).then((res) => {

            console.log(res)
            switch (res.status) {
                case 200: {

                    Toast.show({
                        type: "success",
                        text1: "Sent"
                    })
                    reset();
                    navigation.goBack()
                    break;
                }
                default: {
                    Toast.show({
                        type: "error",
                        text1: "Unknown Error"
                    })
                }
            }
        })
        setButtonLoading(false)
    })
    return (

        <KeyboardAvoidingView style={{
            flex: 1
        }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <BasicBackButtonLayout>


                <View style={apptw`flex-1`}
                // contentContainerStyle={apptw`flex-grow`}
                >

                    <View style={apptw`mx-5`}>
                        <AppText style={apptw`text-center `}>
                            Put something down why don't you?
                        </AppText>
                    </View>
                    <View style={apptw`mx-5`}>
                        <AppText style={apptw`text-[10px] text-primary`}>
                            only you get to see this ❤️
                        </AppText>
                    </View>

                    <View style={apptw`px-6`}>
                        <AppTextField
                            title="Title"
                            control={control}
                            errorMessage={errors.title?.message}
                            validationName="title"
                            placeholder="Title"
                        />

                        <LargeTextField

                            control={control}
                            errorMessage={errors.content?.message}
                            validationName="content"
                            title="content"

                        />

                    </View>

                    <View style={apptw`mb-19 px-6`}>
                        <AppButton
                            buttonStyle={apptw`my-6`}
                            text={isButtonLoading ? "Loading..." : "Create Note"}
                            onPress={onSubmit}
                        // text="Create Note"
                        />
                    </View>
                </View>

            </BasicBackButtonLayout>

        </KeyboardAvoidingView>

    )

}


export default WriteJournal;