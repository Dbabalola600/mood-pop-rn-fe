import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import MoodLogo from "../assets/MoodLogo.svg"
import tw from "twrnc";
import AppText from "../components/Display/AppText";
import apptw from "../utils/lib/tailwind";
import PressAppText from "../components/Display/PressAppText";
import AppButton from "../components/Display/AppButton";
import { useNavigation } from "@react-navigation/native";
import SignIn from "./SignIn";
import { RootStackParamList } from "./allroutes";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { authSelector } from "../state/authSlice";

type WelcomeProps = NativeStackScreenProps<RootStackParamList, "Welcome">


const Welcome = ({ navigation }: WelcomeProps) => {

    const navigatetoLogin = () => {
        navigation.navigate("SignIn")
    }

    const navigatetoSignUp = () => {
        navigation.navigate("SignUp")
    }
    const austh = useSelector(authSelector)

    console.log(austh)

    return (
        <SafeAreaView style={styles.container}>

            <View
                style={styles.logoArea}
            >
                <MoodLogo
                style={tw`mx-auto`}
                width={"300"}
                height={"200"}
                />
            </View>


            <View
                style={styles.contentArea}
            >
                <View style={apptw`h-4/5 flex justify-between`}>
                    <AppText style={tw`text-3xl text-center`}>
                        Welcome to MOOD POP
                    </AppText>

                    <AppText style={apptw`text-lg max-w-[70] mt-7`}>

                    </AppText>

                    <View

                    >
                        <AppButton
                            text="Get Started"
                            buttonStyle={tw.style("")}
                            onPress={navigatetoSignUp}
                        />
                        <AppText style={apptw`left-[19] mt-4 text-lg`}>
                            Have an account?{" "}

                            <PressAppText
                                style={apptw`text-primary text-center`}
                                onPress={navigatetoLogin}
                            >
                                Login
                            </PressAppText>
                        </AppText>


                    </View>

                </View>

            </View>

        </SafeAreaView>
    )
}

export default Welcome;



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