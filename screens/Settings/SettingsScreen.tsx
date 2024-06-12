import { SafeAreaView, View, Text, KeyboardAvoidingView, Platform, ScrollView, Pressable } from "react-native";
import tw from "twrnc";
import LoggedLayout from "../../components/Layout/LoggedLayout";
import AppText from "../../components/Display/AppText";
import apptw from "../../utils/lib/tailwind";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList, RootStackParamList } from "../allroutes";
import { useState } from "react";
import settingsRequest from "../../utils/requests/settingsRequest";
import Toast from "react-native-toast-message";
import { SecureStorage } from "../../services/secureStorage";
import AppButton from "../../components/Display/AppButton";



type MyProps = NativeStackScreenProps<HomeStackParamList, "Settings">


export default function SettingsScreen({ navigation }: MyProps) {

    const [isButtonLoading, setButtonLoading] = useState(false)



    const NavigateContactSupport = () => {
        navigation.navigate("ContactSupportScreen")
    }

    const NavigateUpdateUsername = () => {
        navigation.navigate("UpdateUsernameScreen")
    }


    const NavigateUpdatePassword = () => {
        navigation.navigate("UpdatePasswordScreen")
    }



    const NavigateUpdateEmail = () => {
        navigation.navigate("UpdateEmailScreen")
    }


    const NavigateImageUpdate = () => {
        navigation.navigate("UpdateProfilePictureScreen")
    }


    const DeleteAccount = async()=>{
        setButtonLoading(true)
        const response = await settingsRequest.contactSupport("DELETE ACCOUNT", "DELETE MY ACCOUNT")

        switch (response.data.status) {
            case 200: {

                Toast.show({
                    type: "success",
                    text1: "Request Sent"
                })
                setTimeout(() => {
                    SecureStorage.getInst().clearAll();
                }, 1000);
                break;
            }
            default: {
                Toast.show({
                    type: "error",
                    text1: "Unknown Error"
                })
            }
        }

        setButtonLoading(false)
    }
    return (

        <LoggedLayout>
            <View style={apptw` mx-5  gap-y-5`}>

                <View
                    style={apptw`mt-20`}
                />

                <Pressable style={apptw` bg-specpurple py-4`}

                    onPress={NavigateUpdateUsername}
                >
                    <AppText style={apptw`text-white text-center text-5 font-bold`}>

                        Update Username
                    </AppText>
                </Pressable>

                <Pressable
                    style={apptw` bg-specpurple py-4`}
                    onPress={NavigateUpdatePassword}
                >
                    <AppText style={apptw`text-white text-center text-5 font-bold`}>

                        Update Password
                    </AppText>
                </Pressable>

                <Pressable
                    onPress={NavigateUpdateEmail}
                    style={apptw` bg-specpurple py-4`}
                >
                    <AppText style={apptw`text-white text-center text-5 font-bold`}>

                        Update Email
                    </AppText>
                </Pressable>


                <Pressable 
                onPress={NavigateImageUpdate}
                style={apptw` bg-specpurple py-4`} >
                    <AppText style={apptw`text-white text-center text-5 font-bold`}>

                        Update Profile Picture
                    </AppText>
                </Pressable>

                <Pressable

                    onPress={NavigateContactSupport}
                    style={apptw` bg-specpurple py-4`} >
                    <AppText style={apptw`text-white text-center text-5 font-bold`}>

                        Contact Support
                    </AppText>
                </Pressable>


                {/* <Pressable

                    onPress={DeleteAccount}
                    style={apptw` bg-red-500 py-4`} >
                    <AppText style={apptw`text-white text-center text-5 font-bold`}>

                        Delete Account
                    </AppText>
                </Pressable> */}


                <AppButton
                    text={isButtonLoading ? "Loading..." : "Delete Account"}
                    buttonStyle={apptw`bg-red-500`}
                    onPress={DeleteAccount}
                />
            </View>



        </LoggedLayout>

    )
}