import { View } from "react-native"
import AppText from "../../components/Display/AppText"
import LoggedInLayout from "../../components/Layout/LoggedLayout"
import apptw from "../../utils/lib/tailwind"
import AppButtonWIcon from "../../components/Display/AppButtonWIcon"
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"
import BasicLayout from "../../components/Layout/BasicLayout"
import { ScrollView } from "react-native-gesture-handler"
import BasicBackButtonLayout from "../../components/Layout/BasicBackButtonLayout"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../allroutes"



type ResourcesProps = NativeStackScreenProps<RootStackParamList, "Resources">

const Resources = ({ navigation }: ResourcesProps) => {



    const navigatetoseekhelp = () => {
        navigation.navigate("SeekHelp")
    }

    const navigatetoresourceMat = () => {
        navigation.navigate("ResourceMat")
    }
    return (

        <BasicLayout>

            <View >
                <AppText style={apptw`text-center text-2xl`}>Resources</AppText>
            </View>

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



        </BasicLayout>

    )
}


export default Resources