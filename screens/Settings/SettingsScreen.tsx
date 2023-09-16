import { View } from "react-native"
import LoggedInLayout from "../../components/Layout/LoggedLayout"
import AppText from "../../components/Display/AppText"
import apptw from "../../utils/lib/tailwind"
import { AntDesign, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons"
import AppButtonWIcon from "../../components/Display/AppButtonWIcon"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../allroutes"
import UpdateEmail from "./UpdateEmail"
import BasicBackButtonLayout from "../../components/Layout/BasicBackButtonLayout"
import { AppDispatch } from "../../state/store"
import { useDispatch } from "react-redux"
import { deleteAuthItem } from "../../state/authSlice"

type SettingsScreenProp = NativeStackScreenProps<RootStackParamList, "SettingsScreen">


const SettingsScreen = ({ navigation }: SettingsScreenProp) => {


    const navigatetoupdateusername = () => {
        navigation.navigate("UpdateUsername")
    }
    const navigatetoupdatepassword = () => {
        navigation.navigate("UpdatePassword")
    }

    const navigatetoupdateemail = () => {
        navigation.navigate("UpdateEmail")
    }

    const navigatetoupdatepicture = () => {
        navigation.navigate("UpdateProfilePicture")
    }

    const navigatetocontactsupport = () => {
        navigation.navigate("ContactSupport")
    }
    const dispatch = useDispatch<AppDispatch>();

    const handleLogOut = async () => {
        try {
            console.log("clicked");
            await dispatch(deleteAuthItem());
            navigation.navigate("Welcome");
        } catch (error) {
            console.error("An error occurred during logout:", error);
            // Handle the error in an appropriate way, such as showing an error message
        }
        // console.log(_id)
    }

    return (
        <BasicBackButtonLayout>
            <View
                style={apptw`px-5`}
            >
                <View >
                    <AppText style={apptw`left-32 bottom-10 text-2xl`}>Settings</AppText>
                </View>



                <AppButtonWIcon
                    text="Update Username"
                    onPress={navigatetoupdateusername}
                    buttonStyle={apptw`bg-white mb-5  rounded-full`}
                    textStyle={apptw` text-black  mx-auto`}
                    iconL={
                        <MaterialCommunityIcons
                            name="form-textbox-password"
                            size={40}
                            style={apptw`mx-auto top-2`}
                            color="#0413BB"
                        />


                    }
                />

                <AppButtonWIcon
                    text="Update Password"
                    onPress={navigatetoupdatepassword}
                    buttonStyle={apptw`bg-white mb-5  rounded-full`}
                    textStyle={apptw` text-black  mx-auto`}
                    iconL={
                        <MaterialCommunityIcons
                            name="form-textbox-password"
                            size={40}
                            style={apptw`mx-auto top-2`}
                            color="#0413BB"
                        />


                    }
                />

                <AppButtonWIcon
                    text="Update Email"
                    onPress={navigatetoupdateemail}
                    buttonStyle={apptw`bg-white mb-5  rounded-full`}
                    textStyle={apptw` text-black  mx-auto`}
                    iconL={
                        <MaterialIcons
                            name="email"
                            size={40}
                            style={apptw`mx-auto top-2`}
                            color="#0413BB"
                        />

                    }
                />

                <AppButtonWIcon
                    text="Update Profile Picture"
                    onPress={navigatetoupdatepicture}
                    buttonStyle={apptw`bg-white mb-5  rounded-full`}
                    textStyle={apptw` text-black  mx-auto`}
                    iconL={
                        <AntDesign
                            name="picture"
                            size={40}
                            style={apptw`mx-auto top-2`}
                            color="#0413BB"
                        />

                    }
                />



                <AppButtonWIcon
                    text="Contact Support"
                    onPress={navigatetocontactsupport}
                    buttonStyle={apptw`bg-white mb-5  rounded-full`}
                    textStyle={apptw` text-black  mx-auto`}
                    iconL={
                        <MaterialIcons name="contact-support"
                            size={40}
                            style={apptw`mx-auto top-2`}
                            color="#0413BB"
                        />

                    }
                />


                <AppButtonWIcon
                    text="LogOut"
                    buttonStyle={apptw`bg-white mb-5  rounded-full`}
                    textStyle={apptw` text-black  mx-auto`}
                    onPress={handleLogOut}
                    iconL={
                        <SimpleLineIcons
                            name="logout"
                            size={24}
                            color="#0413BB" />


                    }
                />

            </View>

        </BasicBackButtonLayout>
    )
}


export default SettingsScreen