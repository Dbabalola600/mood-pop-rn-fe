import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../screens/allroutes";
import { useEffect, useState } from "react";
import { SecureStorage } from "../services/secureStorage";

import AuthStack from "./AuthStack";
import PulseLoadingModal from "../components/Display/PulseLoading";
import AppStack from "./AppStack";




const Stack = createNativeStackNavigator<RootStackParamList>();


const RootNavigator = () => {
    const [userAuthenticated, setUserAuthenticated] = useState(false);
    const [isFocused, setIsFocused] = useState(true);

    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        const checker = async () => {


            await SecureStorage.getInst().getValueFor("userId").then((res) => {
                if (res === null) {
                    setUserAuthenticated(false)
                } else {
                    setUserAuthenticated(true)
                }
            })

        }

        if (isFocused) {
            const intervalId = setInterval(checker, 1000); // Run checker every second

            // Clear interval on component unmount or when dependencies change
            return () => clearInterval(intervalId);
        }
    }, [isFocused])

    useEffect(() => {
        const loadData = async () => {
            // Simulate async operations

            console.log("loading")
            await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds
            setLoading(false); // Set loading to false after simulated loading
        };

        loadData();
    }, []);
    if (isLoading) {
        return (
           <PulseLoadingModal/>
        );
    }

    return ( 
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        {userAuthenticated === true ?
            (<Stack.Screen name="HomeNavigation" component={AppStack} />)
            :
            (<Stack.Screen name="AuthNavigator" component={AuthStack} />)

        }


    </Stack.Navigator>

    )
}

export default RootNavigator