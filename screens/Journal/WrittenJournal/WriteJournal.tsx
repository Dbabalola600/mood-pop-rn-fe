import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../allroutes";
import BasicBackButtonLayout from "../../../components/Layout/BasicBackButtonLayout";
import { ScrollView, View } from "react-native";
import AppButton from "../../../components/Display/AppButton";
import AppText from "../../../components/Display/AppText";
import AppTextField from "../../../components/Input/AppTextField";
import LargeTextField from "../../../components/Input/LargeTextField";
import apptw from "../../../utils/lib/tailwind";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useJournalStore } from "../../../utils/lib/data/userWrittenJournal";
import Toast from "react-native-toast-message";

type Props = NativeStackScreenProps<
    RootStackParamList,
    "WriteJournal"
>;


const WriteJournal = ({ navigation }: Props) => {
    const [isLoading, setLoading] = useState(false)
    const { register, handleSubmit, watch, control, formState: { errors } } = useForm()


    const addNote = useJournalStore((state: any) => state.addToJournal)



    const onSubmit = handleSubmit(async (data) => {
        // console.log(data)
        setLoading(true)


        const info = {
            title: data.title,
            content: data.content,
            date: new Date()
        }


        console.log(info)


        addNote(info)


        Toast.show({
            type: "success",
            text1: "Sucessful"
        })
        navigation.goBack()


        setLoading(false)
    })
    return (
        <BasicBackButtonLayout>
            <View>

                <ScrollView style={apptw`flex-1`}
                    contentContainerStyle={apptw`flex-grow`}
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
                            // errorMessage={errors.title?.message}
                            validationName="title"
                            placeholder="Title"
                        />

                        <LargeTextField

                            control={control}
                            // errorMessage={errors.content?.message}
                            validationName="content"
                            title="content"

                        />

                    </View>

                    <View style={apptw`mb-19 px-6`}>
                        <AppButton
                            buttonStyle={apptw`my-6`}
                            text={isLoading ? "Loading..." : "Create Note"}
                            onPress={onSubmit}
                            // text="Create Note"
                        />
                    </View>
                </ScrollView>
            </View>
        </BasicBackButtonLayout>
    )

}


export default WriteJournal;