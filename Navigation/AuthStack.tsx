import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList, RootStackParamList } from "../screens/allroutes";
import Welcome from "../screens/Welcome";
import AppStack from "./DrawerStack";
import DashBoardScreen from "../screens/DashBoard/DashBoardScreen";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Pressable, TouchableOpacity, View } from "react-native";
import apptw from "../utils/lib/tailwind";
import { AntDesign, MaterialIcons, SimpleLineIcons, Feather, Ionicons } from "@expo/vector-icons";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import WriteJournal from "../screens/Journal/WrittenJournal/WriteJournal";
import RecordJournalScreen from "../screens/Journal/RecordJournal/RecordJournalScreen";
import AllRecordingScreen from "../screens/Journal/RecordJournal/AllRecordings";
import AllWrittenScreen from "../screens/Journal/WrittenJournal/AllWritten";
import NewPost from "../screens/Post/NewPost";
import ContactSupportScreen from "../screens/Settings/ContactSupportScreen";
import UpdateUsernameScreen from "../screens/Settings/UpdateUsernameScreen";
import UpdatePasswordScreen from "../screens/Settings/UpdatePasswordScreen";
import UpdateEmailScreen from "../screens/Settings/UpdateEmailScreen";
import UpdateProfilePictureScreen from "../screens/Settings/UpdateProfilePictureScreen";
import FindScreen from "../screens/Users/FindScreen";
import UsersScreen from "../screens/Users/UsersScreen";
import SeekHelpScreen from "../screens/Resources/SeekHelpScreen";
import MaterialResourcesScreen from "../screens/Resources/MaterialResources";
import WrittenDetails from "../screens/Journal/WrittenJournal/WrittenDetails";
import RecordingDetails from "../screens/Journal/RecordJournal/RecordingDetails";

const Stack = createNativeStackNavigator<AuthStackParamList>();



const AuthStack = () => {
    const navigation = useNavigation();



    const toggle = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    }
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerTitle: "",
                headerStyle: {
                    backgroundColor: "transparent"
                },
                headerShadowVisible: false
            }}
            initialRouteName='Welcome'

        >
            <Stack.Screen
                name="Welcome"
                component={Welcome}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}

                options={{
                    headerTitle: '',
                    headerShown: true,
                    // header

                    headerStyle: {
                        backgroundColor: "#EEEFFE"
                    },
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.goBack()} >
                            <MaterialIcons
                                name="keyboard-arrow-left"
                                size={40}
                                style={apptw`bg-transparent`}
                                color="black"
                            />
                        </Pressable>
                    )
                }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    headerTitle: '',
                    headerShown: true,
                    // header

                    headerStyle: {
                        backgroundColor: "#EEEFFE"
                    },
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.goBack()} >
                            <MaterialIcons
                                name="keyboard-arrow-left"
                                size={40}
                                style={apptw`bg-transparent`}
                                color="black"
                            />
                        </Pressable>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

export default AuthStack