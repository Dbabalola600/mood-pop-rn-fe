import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import AppButtonWIcon from "../components/Display/AppButtonWIcon";
import apptw from "../utils/lib/tailwind";
import { Ionicons } from "@expo/vector-icons";
import AppText from "../components/Display/AppText";
import { useSelector, useDispatch } from "react-redux";
import { LogoutUser, authSelector, clearAuthState, deleteAuthItem, setAuthStateTokens } from "../state/authSlice";
import { AppDispatch } from "../state/store";
import { SecureStorage } from "../services/Singleton/secureStorage";
import { useNavigation } from "@react-navigation/native";

export default function CustomDrawer(props: any) {
    const navigation = useNavigation()
    const {  _id } = useSelector(authSelector)
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
        <DrawerContentScrollView
            contentContainerStyle={{
                paddingBottom: 0,
                paddingTop: 150,
                backgroundColor: "white",
                flex: 1,
                justifyContent: "space-evenly"
            }}
            {...props}
        >
            <View
                style={{
                    flexDirection: "column",

                    // padding: 
                    // backgroundColor: "white",
                    alignItems: "center",
                }}

            >
                <View
                    style={apptw`bg-transparent rounded-full  mx-auto`}
                >
                    <Ionicons name="md-person-outline"
                        size={50}
                        color="#0413BB" />
                </View>

                <View
                    style={apptw`mx-auto     `}
                >
                    <AppText
                        style={apptw`font-bold text-center text-[4] `}
                    >
                        {/* {fName?.[0]} {fName?.[2]} */}
                        {/* {user.Username} */}

                    </AppText>


                </View>
            </View>

            <View
            >
                <DrawerItemList {...props} />
            </View>

            <View>
                <AppButtonWIcon
                    buttonStyle={apptw`bg-transparent`}
                    onPress={handleLogOut}
                    textStyle={apptw`font-light text-center`}
                    text="Logout"
                    iconL={
                        <Ionicons
                            name="exit-outline"
                            color="black"
                            style={apptw`top-1`}
                            size={24}
                        />
                    }
                />
            </View>



        </DrawerContentScrollView>
    )
}