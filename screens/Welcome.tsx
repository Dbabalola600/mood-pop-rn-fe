import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import { RootStackParamList } from "./allroutes";
import React from "react";
import AppButton from "../components/Display/AppButton";
import apptw from "../utils/lib/tailwind";
import Onboarding from 'react-native-onboarding-swiper';
import AppText from "../components/Display/AppText";
import PressAppText from "../components/Display/PressAppText";
import tw from "twrnc";
import MoodLogo from "../assets/MoodLogo.svg"

type WelcomeProps = NativeStackScreenProps<RootStackParamList, "Welcome">
const Welcome = ({ navigation }: WelcomeProps) => {

    const navigatetoLogin = () => {
        navigation.navigate("SignIn")
    }

    const navigatetoSignUp = () => {
        navigation.navigate("SignUp")
    }


    return (
        <ScrollView style={apptw`my-auto mx-2`}>

            <View
                style={apptw`mt-50`}
            >
                <MoodLogo
                    style={tw`mx-auto`}
                    width={"300"}
                    height={"200"}
                />
            </View>


            <View
                style={apptw``}
            >
                <View style={apptw` flex justify-between`}>
                    <AppText style={tw`text-3xl text-center mb-10 `}>
                        Welcome to MOOD POP
                    </AppText>



                    <View

                    >
                        <AppButton
                            text="Get Started"
                            buttonStyle={tw.style("")}
                            onPress={navigatetoSignUp}
                        />

                        <View
                            style={apptw`flex-row  justify-between mx-auto mt-10 `}
                        >

                            <AppText style={apptw`text-lg `}>
                                Have an account?{" "}


                            </AppText>
                            <PressAppText
                                style={apptw`text-primary`}
                                onPress={navigatetoLogin}
                            >
                                Login
                            </PressAppText>
                        </View>



                    </View>

                </View>

            </View>

        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    logoArea: {
        flex: 2,
        justifyContent: "center",
        padding: 50,
    },
    contentArea: {
        flex: 4,
        padding: 20,
    },
});

export default Welcome;