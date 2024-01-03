import { SafeAreaView, View, Text, KeyboardAvoidingView, Platform, ScrollView, Pressable } from "react-native";
import tw from "twrnc";
import LoggedLayout from "../../components/Layout/LoggedLayout";
import AppText from "../../components/Display/AppText";
import apptw from "../../utils/lib/tailwind";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../allroutes";



type MyProps = NativeStackScreenProps<RootStackParamList, "SettingsScreen">


export default function SettingsScreen({ navigation }: MyProps) {





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
            </View>



        </LoggedLayout>

    )
}