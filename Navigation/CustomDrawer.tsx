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
        // SecureStorage.getInst().clearAll()
        navigation.navigate("SignIn")

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


                // console.log(image)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();


    }, [isFocused]);
    return (
        <DrawerContentScrollView
            contentContainerStyle={{
                // paddingBottom: 40,
                // paddingTop: 90,
                backgroundColor: "#BAC0FA",
                // display: "flex",
                height: "100%",
                // width:"90%",
                // flex: 1,
                // justifyContent: "space-between"
            }}
            {...props}
        >
            <View
                style={apptw`flex flex-col justify-between  h-[50%]`}
            >
                <View


                    style={apptw`mx-auto my-auto `}
                >

                    <View
                        style={apptw` `}
                    >

                        {user.image === "" || user.image === undefined || user.image === null ? (
                            <>
                                <Ionicons
                                    name="person-circle-sharp"
                                    size={100}
                                    // style={{ marginRight: 15 }}
                                    color="black"
                                />
                            </>
                        ) : (
                            <>

                                <Image
                                    style={apptw`rounded-full w-30 h-30`}
                                    // height={5}
                                    source={{ uri: `${user.image}` }}
                                />

                            </>
                        )
                        }

                    </View>

                    <AppText style={apptw`mx-auto`}>
                        {user.username}
                    </AppText>



                </View>

                <View

                    style={apptw`flex justify-between`}
                >
                    <DrawerItemList {...props} />

                    <Pressable
                        onPress={loggedOut}
                        style={apptw`bg- flex-row px-5 pt-5`}
                    >
                        <SimpleLineIcons name="logout" size={24} color="black" />
                        <AppText
                            style={apptw`mx-10`}
                        >
                            Logout
                        </AppText>
                    </Pressable>
                </View>




            </View>


        </DrawerContentScrollView>
    )
}