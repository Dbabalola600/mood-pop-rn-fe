import { SafeAreaView, View, Text, KeyboardAvoidingView, Platform, ScrollView, Image } from "react-native";
import tw from "twrnc";
import LoggedLayout from "../../components/Layout/LoggedLayout";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { SecureStorage } from "../../services/secureStorage";
import { Ionicons } from "@expo/vector-icons";
import apptw from "../../utils/lib/tailwind";
import AppText from "../../components/Display/AppText";


export default function ProfileScreen() {
    const isFocused = useIsFocused();
    const [user, Setuser] = useState<any>("");


    useEffect(() => {


        const fetchData = async () => {
            try {
                let email = await SecureStorage.getInst().getValueFor("email")
                let userName = await SecureStorage.getInst().getValueFor("userName")
                let image = await SecureStorage.getInst().getValueFor("image");
                Setuser({
                    userName,
                    image,
                    email
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();


    }, [isFocused]);

    return (

        <LoggedLayout>
            <View>

                <View>

                    {user.image === "" || user.image === undefined ? (
                        <>

                            <Ionicons
                                name="person-circle-sharp"
                                size={230}
                                style={apptw`mx-auto text-primary   `}
                                color="black" />
                        </>
                    ) : (
                        <>
                            <Image
                                style={apptw`rounded-full w-50 h-50 mx-auto`}
                                // height={5}
                                source={{ uri: `${user.image}` }}
                            />

                        </>
                    )}


                </View>
                <View style={apptw`mx-5 gap-y-2`}>
                    <View>
                        <AppText style={apptw`text-primary`}>
                            Username
                        </AppText>
                        <View 
                        style={apptw`bg-white rounded-full  px-2 py-1`}
                        >
                            <AppText>
                                {user.userName}
                            </AppText>
                        </View>
                    </View>

                    <View>
                        <AppText style={apptw`text-primary`}>
                            Email
                        </AppText>
                        <View 
                        style={apptw`bg-white rounded-full  px-2 py-1`}
                        >
                            <AppText>
                                {user.email}
                            </AppText>
                        </View>
                    </View>


                </View>

            </View>
        </LoggedLayout>

    )
}