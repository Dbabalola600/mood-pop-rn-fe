import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import Tabs from "./Tabs";
import Test from "../screens/Tests/Test";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import apptw from "../utils/lib/tailwind";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList, RootStackParamList } from "../screens/allroutes";
import WriteJournal from "../screens/Journal/WrittenJournal/WriteJournal";
import NewPost from "../screens/Post/NewPost";
import SeekHelpScreen from "../screens/Resources/SeekHelpScreen";


const Drawer = createDrawerNavigator();
type DashBoardProps = NativeStackScreenProps<HomeStackParamList>

const DrawerStack = ({ navigation }: DashBoardProps) => {
    return (
        <Drawer.Navigator
            initialRouteName="DashBoard"

            screenOptions={{
                headerShown: false,
                drawerLabelStyle: {
                    fontSize: 15,
                    color: "black"
                },
                drawerType: "front",
                drawerStyle: {
                    // width: '60%',


                },
                drawerActiveTintColor: "#4425F50A",
            }}
            drawerContent={props => <CustomDrawer{...props} />}
        >

            <Drawer.Screen
                name='DashBoard'
                component={Tabs}
                options={{
                    // drawerType: 'back',


                    title: "Dashboard",
                    headerShown: false,


                }}
            />

            <Drawer.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    // drawerType: 'front',

                    title: "Profile",
                    headerTitle: 'Profile',
                    headerTitleAlign: "center",
                    headerShown: true,
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: "#EEEFFE"
                    },
                    drawerIcon: () =>
                        <Ionicons
                            name="person"
                            size={24}
                            color="black"
                        />
                    ,
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.goBack()} >

                            <MaterialIcons
                                name="keyboard-arrow-left"
                                size={40}
                                style={apptw`bg-`}
                                color="black"
                            />
                        </Pressable>
                    )

                }}
            />


            <Drawer.Screen
                name='NewPost'
                component={NewPost}
                options={{
                    // drawerType: 'front',

                    title: "New Post",
                    headerTitle: 'New Post',
                    headerShown: true,
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: "#EEEFFE"
                    },
                    drawerIcon: () =>
                        <MaterialIcons
                            name="post-add"
                            size={24}
                            color="black"
                        />
                    ,
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.goBack()} >

                            <MaterialIcons
                                name="keyboard-arrow-left"
                                size={40}
                                style={apptw`bg-`}
                                color="black"
                            />
                        </Pressable>
                    )

                }}
            />
            <Drawer.Screen
                name='WriteJournal'
                component={WriteJournal}

                options={{
                    // drawerType: 'front',
                    headerStyle: {
                        backgroundColor: "#EEEFFE"
                    },
                    title: "New journal",
                    headerTitle: '',
                    headerShown: true,
                    headerShadowVisible: false,
                    drawerIcon: () =>

                        <FontAwesome name="pencil-square"
                            size={24}
                            color="black"
                        />
                    ,
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.goBack()} >

                            <MaterialIcons
                                name="keyboard-arrow-left"
                                size={40}
                                style={apptw`bg-`}
                                color="black"
                            />
                        </Pressable>
                    )

                }}
            />


            <Drawer.Screen
                name='SeekHelpScreen'
                component={SeekHelpScreen}

                options={{
                    // drawerType: 'front',
                    headerStyle: {
                        backgroundColor: "#EEEFFE"
                    },
                    title: "Seek Help",
                    headerTitle: '',
                    headerShown: true,
                    headerShadowVisible: false,
                    drawerIcon: () =>

                        <MaterialCommunityIcons name="handshake"
                            size={24}
                            color="black"
                        />
                    ,
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.goBack()} >

                            <MaterialIcons
                                name="keyboard-arrow-left"
                                size={40}
                                style={apptw`bg-`}
                                color="black"
                            />
                        </Pressable>
                    )

                }}
            />




        </Drawer.Navigator>
    )
}

export default DrawerStack