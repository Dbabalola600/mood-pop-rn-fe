import { MaterialCommunityIcons, AntDesign, MaterialIcons, Ionicons, Octicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashBoard from "../screens/DashBoard";
import Feed from "../screens/Feed/Feed";
import Journal from "../screens/Journal/Journal";
import Notifications from "../screens/Notifications/Notifications";
import Resources from "../screens/Resources/Resources";
import apptw from "../utils/lib/tailwind";
import MyTabBar from "./CustomBottomNav";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import authRequest from "../utils/requests/authReq";
import { useSelector } from "react-redux";
import { authSelector } from "../state/authSlice";



const Tab = createBottomTabNavigator();

const Tabs = () => {
    const isFocused = useIsFocused();
    const [count, setCount] = useState<number >( )
    const [isLoading, setLoading] = useState(false)
    const { _id } = useSelector(authSelector)
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);


    const showInfo = async () => {
        setLoading(true)
        const response = await authRequest.countNotification(_id)
        setCount(response)
        // console.log("count running")
        // console.log(count)
        setLoading(false)
    }


    
    useEffect(() => {
        // console.log("running");

        // Define a function to be executed every 20 seconds
        const showInfoInterval = () => {
          showInfo();
        };
    
        // Start the interval when the component is focused
        if (isFocused) {
          const intervalId = setInterval(showInfoInterval, 10000); // 10 seconds (10000 milliseconds)
          setTimer(intervalId);
        }
    
        // Clear the interval when the component is unmounted or loses focus
        return () => {
          if (timer) {
            clearInterval(timer);
          }
        };
    }, [isFocused]);

    return (
        <Tab.Navigator

            screenOptions={ {
                
                tabBarStyle: { backgroundColor: "#BAC0FA" },
                tabBarInactiveTintColor: "black",
                // tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: "#0413BB"
            }}
        // tabBar={props => <MyTabBar {...props} />}
        >

            <Tab.Screen
                name='DashBoard'
                component={DashBoard}
                options={{

                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="dashboard"
                            color={color}
                            size={26} />
                    ),
                }}
            />


            < Tab.Screen
                name='Journal'
                component={Journal}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="journal"
                            color={color}
                            size={26} />
                    ),
                }}
            />


            < Tab.Screen
                name='Resources'
                component={Resources}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="help-network"
                            color={color}
                            size={26} />
                    ),
                }}
            />


            < Tab.Screen
                name='Feed'
                component={Feed}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Octicons name="feed-discussion"
                            color={color}
                            size={26} />
                    ),
                }}
            />

            < Tab.Screen
                name='Notifications'
                component={Notifications}
                options={{

                    tabBarBadge: count,
                    tabBarBadgeStyle: { backgroundColor: "green" },
                    tabBarIcon: ({ color }) => (
                        <AntDesign
                            name="bells"
                            size={20}
                            color={color}

                        />
                    ),
                }}
            />





        </Tab.Navigator>
    )


}


export default Tabs