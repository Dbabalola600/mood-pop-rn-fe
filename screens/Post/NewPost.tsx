import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, ScrollView } from "react-native";
import AppButton from "../../components/Display/AppButton";
import AppText from "../../components/Display/AppText";
import AppTextField from "../../components/Input/AppTextField";
import LargeTextField from "../../components/Input/LargeTextField";
import BasicBackButtonLayout from "../../components/Layout/BasicBackButtonLayout";
import apptw from "../../utils/lib/tailwind";
import { RootStackParamList } from "../allroutes";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Toast from "react-native-toast-message";
import postRequest from "../../utils/requests/postRequest";
import { usePostStore } from "../../utils/lib/data/userPost";

type Props = NativeStackScreenProps<
    RootStackParamList,
    "NewPost"
>;


const NewPost = ({ navigation }: Props) => {

    const [isLoading, setLoading] = useState(false)
    const { register, handleSubmit, watch, control, formState: { errors } } = useForm()

    const addPost = usePostStore((state: any) => state.addToPost)

    const onSubmit = handleSubmit(async (data) => {
        // console.log(data)
        setLoading(true)


        const info = {
            title: data.title,
            content: data.content,
            date: new Date()
        }


        console.log(info)


        addPost(info)


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
                            text={isLoading ? "Loading..." : "Create Post"}
                            onPress={onSubmit}
                        // text="Create Note"
                        />
                    </View>
                </ScrollView>
            </View>
        </BasicBackButtonLayout>
    )

}


export default NewPost;