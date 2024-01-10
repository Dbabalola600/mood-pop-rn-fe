import { SafeAreaView, View, Text, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import tw from "twrnc";
import LoggedLayout from "../../components/Layout/LoggedLayout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../allroutes";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import AppButtonWIcon from "../../components/Display/AppButtonWIcon";
import apptw from "../../utils/lib/tailwind";
import AppText from "../../components/Display/AppText";

type ResourcesProps = NativeStackScreenProps<RootStackParamList, "ResourcesScreen">


export default function ResourcesScreen({ navigation }: ResourcesProps) {


    const navigatetoseekhelp = () => {
        navigation.navigate("SeekHelpScreen")
    }

    const navigatetoresourceMat = () => {
        navigation.navigate("MaterialResourcesScreen")
    }
    return (

        <LoggedLayout>

            <View>
           

                <View
                    style={apptw`px-5 pt-10`}
                >


                    <AppButtonWIcon
                        text="Seek Help"
                        onPress={navigatetoseekhelp}
                        buttonStyle={apptw`bg-white mb-5  rounded-full`}
                        textStyle={apptw` text-black  mx-auto`}
                        iconL={
                            <MaterialCommunityIcons
                                name="handshake"
                                size={40}
                                style={apptw`mx-auto top-2`}
                                color="#0413BB"
                            />

                        }
                    />


                    <AppButtonWIcon
                        text="Resources"
                        onPress={navigatetoresourceMat}
                        buttonStyle={apptw`bg-white  rounded-full`}
                        textStyle={apptw` text-black  mx-auto`}
                        iconL={

                            <FontAwesome
                                name="book"
                                size={40}
                                style={apptw`mx-auto top-2`}
                                color="#0413BB"

                            />


                        }
                    />



                </View>

            </View>


        </LoggedLayout>

    )
}