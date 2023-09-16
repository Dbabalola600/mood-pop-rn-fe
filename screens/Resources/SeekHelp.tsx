import { Alert, Pressable, View } from "react-native"
import AppText from "../../components/Display/AppText"
import BasicBackButtonLayout from "../../components/Layout/BasicBackButtonLayout"
import apptw from "../../utils/lib/tailwind"
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler"
import PressAppText from "../../components/Display/PressAppText"


import * as Linking from "expo-linking"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const SeekHelp = () => {


    const numbers = [
        { number: "+234 906 254 4446", name: "Mental Health Support Initiative (MHSI)" },
        { number: "0706 624 3252", name: "Mentally Aware Nigeria Initiative (MANI)" },
        { number: "0909 291 2292", name: "She Writes Woman Helpline" },


    ]


    const mails = [
        { mail: "info@mentallyaware.org", name: "Mentally Aware Nigeria Initiative (MANI)", },
        { mail: " info@shewriteswoman.org", name: "She Writes Woman", },
        { mail: "info@hellomentalhealth.com", name: "Hello Mental Health", },
    ]


    const handlePhone = async (number: any) => {
        if (!number) {
            Alert.alert("NOPE")
        } else {
            const url = `tel:${number}`
            try {
                const supported = await Linking.canOpenURL(url);

                if (supported) {
                    await Linking.openURL(url);
                } else {
                    console.error("Cannot open phone dialer.");
                }
            } catch (error) {
                console.error(error);
            }
        }

    };
    return (

        <GestureHandlerRootView style={{ flex: 1 }}>
            <BasicBackButtonLayout>
                <View>
                    <AppText style={apptw`left-32 bottom-10 text-2xl`}>Seek Help</AppText>
                </View>

                <ScrollView style={apptw`mt- pb-5 mx-5`}>
                    {/* <AppText style={apptw`text-bold text-2xl`}>Hotlines</AppText>
                    <View style={apptw`bg-primary w-1/2 h-1 rounded-full`} /> */}

                    {/* ScrollView for Hotlines */}
                    {/* <View>
                        {numbers.map((info, index) => (
                            <View key={index}>
                                <View style={apptw`bg-white rounded-lg mt-5 p-5`}>
                                    <AppText>{info.name}</AppText>
                                    <Pressable onPress={() => handlePhone(info.number)}>
                                        <AppText>{info.number} 📞</AppText>
                                    </Pressable>
                                </View>
                            </View>
                        ))}
                    </View> */}



                    {/* <AppText style={apptw`text-bold pt-5 text-2xl`}>  Mails ✉️</AppText>
                    <View style={apptw`bg-primary w-1/2 h-1 rounded-full`} />

                    {mails.map((info, index) => (
                        <View key={index}>
                            <View style={apptw`bg-white rounded-lg mt-5 p-5`}>
                                <AppText>{info.name}</AppText>
                                <Pressable onPress={() => Linking.openURL(`mailto:${info.mail}`)}>
                                    <AppText>{info.mail} </AppText>
                                </Pressable>
                            </View>
                        </View>
                    ))} */}



                    <View>
                        <View
                            style={apptw`text-center mx-auto`}
                        >
                            <MaterialCommunityIcons
                                name="hazard-lights"
                                size={100}
                                style={apptw``}
                                color="#0413BB" />
                        </View>

                        <AppText
                            style={apptw`text-center text-3xl`}
                        >
                            Coming Soon
                        </AppText>

                    </View>

                </ScrollView>











            </BasicBackButtonLayout>
        </GestureHandlerRootView>
    )
}

export default SeekHelp