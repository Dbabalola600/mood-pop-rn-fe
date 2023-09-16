import { useNavigation } from "@react-navigation/native";
import { Keyboard, Platform, Pressable, SafeAreaView, TouchableWithoutFeedback, View, Text } from "react-native";
import tw from "twrnc";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons"
import apptw from "../../utils/lib/tailwind";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../screens/allroutes";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { authSelector } from "../../state/authSlice";

type LoggedInLayoutProp = {
    children: React.ReactNode;
};


type Nav = NativeStackScreenProps<RootStackParamList, "Notifications">


const LoggedInLayout = ({ children }: LoggedInLayoutProp) => {
    const navigation = useNavigation();
    const auth = useSelector(authSelector)
    const navigateToNotifications = () => {
        navigation.navigate("Notifications")
    }
    // console.log("here")

    // console.log(auth)

    return (
        <TouchableWithoutFeedback
            onPress={() => (Platform.OS != "web" ? Keyboard.dismiss() : null)}
        >

            <ScrollView
                style={apptw.style(`bg-secondary  flex-1 shadow-md py-6 pt-1 pb-5`)}
                contentContainerStyle={apptw`flex-grow`}
           
                // edges={["top", "left", "right", "bottom"]}
            >

                <View style={apptw`flex-row justify-between py-4 px-6`} >
                    {/* <Pressable

                        onPress={() => navigation.toggleDrawer()} style={tw.style("",)}
                    >
                        <SimpleLineIcons
                            name="menu"
                            size={20}
                            style={tw`bg-`}
                            color="black"
                        />
                    </Pressable> */}


                    {/* <Pressable onPress={navigateToNotifications} style={tw.style("",)}>
                        <AntDesign
                            name="bells"
                            size={20}
                            style={tw`bg-`}
                            color="black"
                        />
                    </Pressable> */}

                </View>


                {children}
            </ScrollView>
         </TouchableWithoutFeedback>
    )



}

export default LoggedInLayout;