import { FontAwesome5, AntDesign, MaterialIcons, Ionicons, Octicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import apptw from "../utils/lib/tailwind";
import MyTabBar from "./CustomBottomNav";
import DashBoardScreen from "../screens/DashBoard/DashBoardScreen";
import Test from "../screens/Tests/Test";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import { Pressable, View, Image } from "react-native";
import { DrawerActions, useIsFocused, useNavigation } from "@react-navigation/native";
import JournalScreen from "../screens/Journal/JournalScreen";
import ResourcesScreen from "../screens/Resources/ResourcesScreen";
import FeedScreen from "../screens/Feed/FeedScreen";
import NotificationScreen from "../screens/Notifications/NotificationScreen";
import { useEffect, useState } from "react";
import { SecureStorage } from "../services/secureStorage";
import userRequest from "../utils/requests/userRequests";



const Tab = createBottomTabNavigator();

const Tabs = () => {
    const [user, Setuser] = useState<any>("");
    const [count, setCount] = useState<number>(0)
    const isFocused = useIsFocused();
    const navigation = useNavigation();
    const toggle = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    }



    const showNotif = async () => {
        let id = await SecureStorage.getInst().getValueFor("userId");
        const response = await userRequest.countNotification(id)
        setCount(response)
    }

    useEffect(() => {


        const fetchData = async () => {
            try {
                let image = await SecureStorage.getInst().getValueFor("image");
                Setuser(image);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

        showNotif()
    }, [isFocused]);


    // console.log(count)

    return (
        <Tab.Navigator

            screenOptions={{
                tabBarStyle: { backgroundColor: "#BAC0FA" },
                tabBarInactiveTintColor: "black",
                // tabBarShowLabel: false,
                // headerShown: false,
                tabBarActiveTintColor: "#0413BB",


                headerTitle: '',
                headerShown: true,
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: "#EEEFFE"
                },
                headerRight: () => (
                    <Pressable
                        onPress={() => { navigation.navigate("SettingsScreen") }} style={apptw`px-5`}
                    >
                        <Feather
                            name="settings"
                            size={20}
                            style={{ marginRight: 15 }}
                            color="black"
                        />
                    </Pressable>
                ),
                headerLeft: () => (
                    <Pressable onPress={() => toggle()} style={apptw`px-5`}>
                        <View>

                            {user === "" || user === undefined ? (
                                <>

                                    <Ionicons
                                        name="person-circle-sharp"
                                        size={30}
                                        style={{ marginRight: 15 }}
                                        color="black" />
                                </>
                            ) : (
                                <>
                                    <Image
                                        style={apptw`rounded-full w-10 h-10`}
                                        // height={5}
                                        source={{ uri: `${user}` }}
                                    />

                                </>
                            )}


                        </View>
                    </Pressable>
                )

            }}
        // tabBar={props => <MyTabBar {...props} />}
        >

            <Tab.Screen
                name='DashBoardScreen'
                component={DashBoardScreen}
                options={{
                    tabBarLabel: "Dashboard",

                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="dashboard"
                            color={color}
                            size={26} />
                    ),
                }}
            />


            < Tab.Screen
                name='JournalScreen'
                component={JournalScreen}
                options={{
                    tabBarLabel: "Journal",
                    headerTitle: "Journal",
                    headerTitleAlign: "center",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="book"
                            color={color}
                            size={26} />
                    ),
                }}
            />

            < Tab.Screen
                name='ResourcesScreen'
                component={ResourcesScreen}
                options={{
                    tabBarLabel: "Resources",
                    headerTitle: "Resources",
                    headerTitleAlign: "center",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="help-network"
                            color={color}
                            size={26} />
                    ),
                }}
            />

            < Tab.Screen
                name='FeedScreen'
                component={FeedScreen}
                options={{
                    tabBarLabel: "Feed",
                    headerTitle: "Feed",
                    headerTitleAlign: "center",
                    tabBarIcon: ({ color }) => (
                        <Octicons name="feed-discussion"
                            color={color}
                            size={26} />
                    ),
                }}
            />
            < Tab.Screen
                name='NotificationScreen'
                component={NotificationScreen}
                options={{
                    tabBarBadge: count,
                    tabBarBadgeStyle: { backgroundColor: "green" },
                    tabBarLabel: "Notification",
                    headerTitle: "Notifications",
                    headerTitleAlign: "center",
                    tabBarIcon: ({ color }) => (


                        <AntDesign
                            name="bells"
                            color={color}
                            size={26} />


                    ),
                }}
            />






        </Tab.Navigator>
    )


}


export default Tabs