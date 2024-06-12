import { SafeAreaView, View, Text, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import tw from "twrnc";
import LoggedLayout from "../../components/Layout/LoggedLayout";
import NotesComp from "./components/NotesComp";
import RecordingComp from "./components/RecordingComp";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import AppButtonWIcon from "../../components/Display/AppButtonWIcon";
import apptw from "../../utils/lib/tailwind";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList, RootStackParamList } from "../allroutes";
type JournalProps = NativeStackScreenProps<HomeStackParamList>


export default function JournalScreen({ navigation }: JournalProps) {
    const navigatetoWritejournal = () => {
        navigation.navigate("WriteJournal")
    }

    const navigatetoRecordJournal = () => {
        navigation.navigate("RecordJournalScreen")
    }

    return (

        <LoggedLayout>

            <View>

                <View style={apptw`flex-row justify-between mx-4  pt-5`}>

                    <AppButtonWIcon
                        text="Write Journal"
                        buttonStyle={apptw`w-[20] h-[20] bg-specpurple mr-4 rounded-full`}
                        textStyle={apptw`text-[2] text-black  mx-auto`}
                        onPress={navigatetoWritejournal}
                        icon={

                            <FontAwesome name="pencil-square"
                                size={20}
                                style={apptw`mx-auto`}
                                color="black"
                            />

                        }

                    />

                    <AppButtonWIcon
                        text="Record Journal"
                        buttonStyle={apptw`w-[20] h-[20] bg-specpurple mr-4 rounded-full`}
                        textStyle={apptw`text-[2] text-black  mx-auto`}
                        onPress={navigatetoRecordJournal}
                        icon={

                            <MaterialIcons
                                name="record-voice-over"
                                size={20}
                                style={apptw`mx-auto`}
                                color="black"
                            />



                        }

                    />

                </View>
                <View style={apptw`mx-4`}>

                    <NotesComp />

                    <RecordingComp />
                </View>

            </View>


        </LoggedLayout>

    )
}