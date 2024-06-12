import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, ImageBackground, Image, Pressable } from "react-native";
import AppText from "../components/Display/AppText";
import apptw from "../utils/lib/tailwind";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { SecureStorage } from "../services/secureStorage";

export default function CustomDrawer(props: any) {
    const [user, Setuser] = useState<any>([]);
    const navigation = useNavigation()
    const isFocused = useIsFocused()


    const loggedOut = () => {
        SecureStorage.getInst().clearAll()
        // navigation.navigate("SignIn")

    }

    useEffect(() => {


        const fetchData = async () => {
            try {
                let image = await SecureStorage.getInst().getValueFor("image");
                let username = await SecureStorage.getInst().getValueFor("userName");
                Setuser({
                    image: image,
                    username: username
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();


    }, [isFocused]);
    return (
        <DrawerContentScrollView
            contentContainerStyle={{
                backgroundColor: "#BAC0FA",
                height: "100%",
            }}
            {...props}
        >
            <View style={{ flex: 1, justifyContent: "space-between" }}>

                <View>

                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <View>
                            {user.image === "" || user.image === undefined ? (
                                <Ionicons
                                    name="person-circle-sharp"
                                    size={100}
                                    color="black"
                                />
                            ) : (
                                <Image
                                    style={{ borderRadius: 50, width: 100, height: 100 }}
                                    source={{ uri: user.image }}
                                />
                            )}
                        </View>
                        <AppText style={{ textAlign: "center", marginTop: 10 }}>
                            {user.username}
                        </AppText>


                    </View>
                    <View style={{
                        marginTop: 20
                    }}>
                        <DrawerItemList {...props} />
                    </View>
                </View>


                <View style={{
                    marginBottom: 50
                }}>

                    <Pressable
                        onPress={loggedOut}
                        style={{ flexDirection: "row", padding: 15, alignItems: "center" }}
                    >
                        <SimpleLineIcons name="logout" size={24} color="red" />
                        <AppText style={{ marginLeft: 10 , color:"red"}}>
                            Logout
                        </AppText>
                    </Pressable>
                </View>
            </View>
        </DrawerContentScrollView>
    )
}