import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../screens/allroutes";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import apptw from "../utils/lib/tailwind";
import NewPost from "../screens/Post/NewPost";
import WriteJournal from "../screens/Journal/WrittenJournal/WriteJournal";
import WrittenDetails from "../screens/Journal/WrittenJournal/WrittenDetails";
import RecordingDetails from "../screens/Journal/RecordJournal/RecordingDetails";
import RecordJournalScreen from "../screens/Journal/RecordJournal/RecordJournalScreen";
import SeekHelpScreen from "../screens/Resources/SeekHelpScreen";
import MaterialResourcesScreen from "../screens/Resources/MaterialResources";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import ContactSupportScreen from "../screens/Settings/ContactSupportScreen";
import UpdateUsernameScreen from "../screens/Settings/UpdateUsernameScreen";

import UpdatePasswordScreen from "../screens/Settings/UpdatePasswordScreen";
import FindScreen from "../screens/Users/FindScreen";
import UpdateProfilePictureScreen from "../screens/Settings/UpdateProfilePictureScreen";
import UpdateEmailScreen from "../screens/Settings/UpdateEmailScreen";
import AllRecordingScreen from "../screens/Journal/RecordJournal/AllRecordings";
import AllWrittenScreen from "../screens/Journal/WrittenJournal/AllWritten";
import DrawerStack from "./DrawerStack";
import UsersScreen from "../screens/Users/UsersScreen";



const Stack = createNativeStackNavigator<HomeStackParamList>();
type NavProps = NativeStackScreenProps<HomeStackParamList>

const AppStack = ({ navigation }: NavProps) => {
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
            initialRouteName='DashBoard'

        >

            <Stack.Screen
                name="Settings"
                component={SettingsScreen}

                options={{
                    headerTitle: 'Settings',
                    headerShown: true,
                    headerTitleAlign: "center",

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
                name="NewPost"
                component={NewPost}

                options={{
                    headerTitle: 'New Post',
                    headerShown: true,
                    headerTitleAlign: "center",
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
                name="WriteJournal"
                component={WriteJournal}

                options={{
                    headerTitle: 'Create Journal Entry',
                    headerShown: true,
                    headerTitleAlign: "center",

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
                name="WrittenDetails"
                component={WrittenDetails}

                options={{
                    headerTitle: '',
                    headerShown: true,
                    headerTitleAlign: "center",

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
                name="RecordingDetails"
                component={RecordingDetails}

                options={{
                    headerTitle: '',
                    headerShown: true,
                    headerTitleAlign: "center",

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
                name="RecordJournalScreen"
                component={RecordJournalScreen}

                options={{
                    headerTitle: 'Record Journal Entry',
                    headerShown: true,
                    headerTitleAlign: "center",

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
                name="SeekHelpScreen"
                component={SeekHelpScreen}

                options={{
                    headerTitle: 'Seek Help',
                    headerShown: true,
                    headerTitleAlign: "center",

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
                name="MaterialResourcesScreen"
                component={MaterialResourcesScreen}

                options={{
                    headerTitle: 'Materials',
                    headerShown: true,
                    headerTitleAlign: "center",

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
                name="Profile"
                component={ProfileScreen}
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
                name="ContactSupportScreen"
                component={ContactSupportScreen}
                options={{
                    headerTitle: 'Contact Support',
                    headerShown: true,
                    headerTitleAlign: "center",

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
                name="UpdateUsernameScreen"
                component={UpdateUsernameScreen}
                options={{
                    headerTitle: 'Update Username',
                    headerShown: true,
                    headerTitleAlign: "center",

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
                name="AllUsersScreen"
                component={UsersScreen}
                options={{
                    headerTitle: 'Friends',
                    headerShown: true,
                    headerTitleAlign: "center",

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
                name="UpdatePasswordScreen"
                component={UpdatePasswordScreen}
                options={{
                    headerTitle: 'Update Password',
                    headerShown: true,
                    headerTitleAlign: "center",

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
                name="FindScreen"
                component={FindScreen}
                options={{
                    headerTitle: '',
                    headerShown: true,
                    headerTitleAlign: "center",

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
                name="UpdateEmailScreen"
                component={UpdateEmailScreen}
                options={{
                    headerTitle: 'Update Email',
                    headerShown: true,
                    headerTitleAlign: "center",

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
                name="UpdateProfilePictureScreen"
                component={UpdateProfilePictureScreen}
                options={{
                    headerTitle: 'Update Profile Picture',
                    headerShown: true,
                    headerTitleAlign: "center",

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
                name="AllRecordingScreen"
                component={AllRecordingScreen}
                options={{
                    headerTitle: '',
                    headerShown: true,
                    headerTitleAlign: "center",

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
                name="AllWrittenScreen"
                component={AllWrittenScreen}
                options={{
                    headerTitle: '',
                    headerShown: true,
                    headerTitleAlign: "center",

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
                name="DashBoard"
                component={DrawerStack}
                options={{
                    headerTitle: '',

                }}
            />


        </Stack.Navigator>
    )
}


export default AppStack