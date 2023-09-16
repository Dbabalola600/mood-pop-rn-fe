import { MaterialIcons, FontAwesome, MaterialCommunityIcons, Ionicons, } from "@expo/vector-icons"
import { View, ScrollView, StyleSheet } from "react-native"
import apptw from "../../utils/lib/tailwind"
import AppButtonWIcon from "./AppButtonWIcon"
import AppText from "./AppText"

import tw from "twrnc"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../screens/allroutes"


type DashBoardProps = NativeStackScreenProps<RootStackParamList, "DashBoard">


const DashNav = ({ navigation }: DashBoardProps) => {



    const navigatetoWritejournal = () => {
        navigation.navigate("WriteJournal")
    }

    const navigatetonewpost = () => {
        navigation.navigate("NewPost")
    }
    return (
        <View
        style={apptw`bg-white pt-5  rounded-full`}
    >
        <View>
            <AppText
                style={apptw`text-center`}
            >
                What would you like to do?
            </AppText>
        </View>

        <View
            style={{
                borderBlockColor: "gray",
                borderBottomWidth: StyleSheet.hairlineWidth
            }}
        />

        <ScrollView
            style={apptw`flex-row  mx-10 rounded-full`}
            horizontal={true}
            contentContainerStyle={tw.style(`justify-between`, {
                flexGrow: 1,
            })}
        >
            <AppButtonWIcon
                text="New Post"
                onPress={navigatetonewpost}
                buttonStyle={apptw`w-[30] bg-white mr-4 rounded-full`}
                textStyle={apptw`text-[3] text-black  mx-auto`}
                icon={
                    <MaterialIcons
                        name="post-add"
                        size={20}
                        style={tw`mx-auto`}
                        color="#0413BB"
                    />
                }
            />


            <AppButtonWIcon
                text="New Journal"
                buttonStyle={apptw`w-[30] bg-white mr-4 rounded-full`}
                textStyle={apptw`text-[3] text-black  mx-auto`}
                onPress={navigatetoWritejournal}
                icon={

                    <FontAwesome name="pencil-square"
                        size={20}
                        style={tw`mx-auto`}
                        color="#0413BB"
                    />

                }
            />

            <AppButtonWIcon
                text="Seek Help"
                buttonStyle={apptw`w-[30] bg-white mr-4 rounded-full`}
                textStyle={apptw`text-[3] text-black  mx-auto`}
                icon={

                    <MaterialCommunityIcons
                        name="handshake"
                        size={20}
                        style={tw`mx-auto`}
                        color="#0413BB"
                    />

                }
            />


            <AppButtonWIcon
                text="View Friends"
                buttonStyle={apptw`w-[30] bg-white mr-4 rounded-full`}
                textStyle={apptw`text-[3] text-black  mx-auto`}
                icon={

                    <Ionicons
                        name="people-sharp"
                        size={20}
                        style={tw`mx-auto`}
                        color="#0413BB"
                    />



                }
            />

        </ScrollView>






    </View>
    )
}


export default DashNav