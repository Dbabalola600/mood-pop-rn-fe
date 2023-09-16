import React, { useState } from "react";
import { ScrollView, TextInput, View } from "react-native";
import AppText from "../../components/Display/AppText";
import BasicBackButtonLayout from "../../components/Layout/BasicBackButtonLayout";
import apptw from "../../utils/lib/tailwind";
import AppTextField from "../../components/Input/AppTextField";
import AppButton from "../../components/Display/AppButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../allroutes";
import { useSelector } from "react-redux";
import { authSelector } from "../../state/authSlice";
import { useForm } from "react-hook-form";
import { NewJournalFormType, NewJournalSchema } from "../../services/validation/JournalVal";
import { zodResolver } from "@hookform/resolvers/zod";
import authRequest from "../../utils/requests/authReq";
import LargeTextField from "../../components/Input/LargeTextField";

type Props = NativeStackScreenProps<
    RootStackParamList,
    "WriteJournal"
>;

const WriteJournal = ({ navigation }: Props) => {
    const [isButtonLoading, setButtonLoading] = useState(false)
    const { _id } = useSelector(authSelector)


    const {
        control,
        formState: { errors },
        handleSubmit

    } = useForm<NewJournalFormType>({
        defaultValues: {
            content: "",
            title: ""
        },
        resolver: zodResolver(NewJournalSchema)
    })

    const onSubmit = handleSubmit(async (data) => {
        setButtonLoading(true);
        await authRequest.CreateJNote(
            _id,
            data.title,
            data.content
        ).then(res => {
            console.log(res);
            if (res.message === "created") {
                navigation.navigate("Journal");
            }
        });

        setButtonLoading(false);
    });



    return (


        <BasicBackButtonLayout>
            <View>
                <AppText style={apptw`left-32 bottom-10 text-2xl`}>New Journal</AppText>
            </View>


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
            </ScrollView>
        </BasicBackButtonLayout>
    );
};

export default WriteJournal;
