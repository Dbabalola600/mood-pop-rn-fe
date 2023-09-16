import { SafeAreaView, View, Text, KeyboardAvoidingView, Platform, ScrollView, Pressable, ActivityIndicator } from "react-native";
import tw from "twrnc";
import LoggedLayout from "../../components/Layout/LoggedLayout";
import apptw from "../../utils/lib/tailwind";
import BasicBackButtonLayout from "../../components/Layout/BasicBackButtonLayout";
import UserSearchResult from "../../components/Display/UserSearchResult";
import { Button } from "react-native-paper";

import AppButton from "../../components/Display/AppButton";
import Toast from "react-native-toast-message";



export default function Test() {

    const showToast = () => {
        Toast.show({

            type: 'success',
            text1: 'Hello',
            text2: 'This is some something 👋'
        });
    }



    return (
        <KeyboardAvoidingView
            style={tw` flex-1`}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <BasicBackButtonLayout>
                <ScrollView
                    showsVerticalScrollIndicator={true}
                    style={tw`px-6`}
                    contentContainerStyle={tw.style(` `, {
                        flexGrow: 1
                    })}>

                    <View>
                        <Text
                            style={apptw.style("text-specpurple text-3xl text-center")}
                        >

                            Mood Pop
                        </Text>
                    </View>

                    <ActivityIndicator size="small" style={apptw`bg-white`} color="#007BFF" />

                    <AppButton
                        onPress={showToast}
                        text=" htiod"
                    />

                    <UserSearchResult
                        clicky={() => { }}
                        image={undefined}
                        name={"meovddpwomvlj vjoeojve vpopowmvpmovbnc0"} text={undefined} />

                </ScrollView>
            </BasicBackButtonLayout>
        </KeyboardAvoidingView>
    )
}