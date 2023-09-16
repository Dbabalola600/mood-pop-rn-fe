import { Alert, ScrollView, TextInput, View } from "react-native"
import AppText from "../../components/Display/AppText"
import BasicBackButtonLayout from "../../components/Layout/BasicBackButtonLayout"
import apptw from "../../utils/lib/tailwind"
import AppButton from "../../components/Display/AppButton"
import AppTextField from "../../components/Input/AppTextField"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../allroutes"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { authSelector } from "../../state/authSlice"
import { AppDispatch } from "../../state/store"
import { useForm } from "react-hook-form"
import { NewPostFormType, NewPostSchema } from "../../services/validation/PostVal"
import { zodResolver } from "@hookform/resolvers/zod"
import authRequest from "../../utils/requests/authReq"
import LargeTextField from "../../components/Input/LargeTextField"
import { useNavigation } from "@react-navigation/native"


type NewPostProps = NativeStackScreenProps<
    RootStackParamList,
    "NewPost"
>;

const NewPost = ({ navigation }: NewPostProps) => {
    const { isError, isLoading, isSuccess, loginErrorMessage } = useSelector(authSelector);
    const [isButtonLoading, setButtonLoading] = useState(false)
    const { _id } = useSelector(authSelector)
    const [showAlert, setShowAlert] = useState(true); // Add this state variable
    const navigations = useNavigation();





    const {
        control,
        formState: { errors },
        handleSubmit
    } = useForm<NewPostFormType>({
        defaultValues: {
            post: "",
            category: ""
        },
        resolver: zodResolver(NewPostSchema)
    });

    const onSubmit = handleSubmit(async (data) => {
        setButtonLoading(true);
        await authRequest.CreatePost(
            _id,
            data.post,
            data.category
        ).then(res => {
            console.log(res.data);
            if (res.data.message === "Created") {
                navigation.navigate("DashBoard");
            }
        });

        setButtonLoading(false);
    });





    // Alert.alert(
    //     "Unsaved Changes",
    //     "You have unsaved changes. Are you sure you want to leave?",
    //     [
    //         {
    //             text: "Cancel",
    //             style: "cancel",
    //             onPress: () => {
    //                 setShowAlert(true);
    //             },
    //         },
    //         {
    //             text: "Discard",
    //             style: "destructive",
    //             onPress: () => {
    //                 navigation.goBack();
    //             },
    //         },
    //     ]
    // );

    return (
        <BasicBackButtonLayout>
            <AppText style={apptw`left-32 bottom-10 text-2xl`}>
                New Post
            </AppText>
            <ScrollView
                // style={apptw`flex-1`}
                contentContainerStyle={apptw`flex-grow`}
            >


                <View style={apptw`mx-5`}>
                    <AppText style={apptw`text-center `}>
                        What's going on?
                    </AppText>
                </View>
                <View style={apptw`mx-5`}>
                    <AppText style={apptw`text-[10px] text-primary`}>
                        these only last for 24hours ❤️
                    </AppText>
                </View>

                <View style={apptw`px-6`}>
                    <AppTextField
                        title="Title"
                        control={control}
                        errorMessage={errors.category?.message}
                        validationName="category"
                        placeholder="Title"
                    />
                    <LargeTextField

                        control={control}
                        errorMessage={errors.post?.message}
                        validationName="post"
                        title="content"

                    />
                </View>

                <View style={apptw`mb-19 px-6`}>
                    <AppButton
                        buttonStyle={apptw`my-6`}
                        text={isButtonLoading ? "Loading..." : "New Post"}
                        onPress={onSubmit}

                    />
                </View>
            </ScrollView>

        </BasicBackButtonLayout>
    )
}


export default NewPost