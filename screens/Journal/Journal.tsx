import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native"
import AppText from "../../components/Display/AppText"
import LoggedInLayout from "../../components/Layout/LoggedLayout"
import apptw from "../../utils/lib/tailwind"
import AppButtonWIcon from "../../components/Display/AppButtonWIcon"
import { FontAwesome, MaterialIcons } from "@expo/vector-icons"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../allroutes"
import React, { useEffect, useState } from "react"
import BasicBackButtonLayout from "../../components/Layout/BasicBackButtonLayout"
import BasicLayout from "../../components/Layout/BasicLayout"
import { useIsFocused } from "@react-navigation/native"
import authRequest from "../../utils/requests/authReq"
import { authSelector } from "../../state/authSlice"
import { useSelector } from "react-redux"
import JournalDisplay from "../../components/Display/JournalDisplay"
import BlankNote from "../../assets/BlankNote.svg"
type JournalProps = NativeStackScreenProps<RootStackParamList, "Journal">

type Journal = {
    id: string,
    title: string,
    content: string,
    Date: string
}


const Journal = ({ navigation }: JournalProps) => {
    const [isLoading, setLoading] = useState(false)
    const [journ, setJournal] = useState<Journal[]>([])
    const isFocused = useIsFocused(); //reloads useeffect when in focus
    const { _id } = useSelector(authSelector)

    const navigatetoWritejournal = () => {
        navigation.navigate("WriteJournal")
    }

    const navigatetoRecordJournal = () => {
        navigation.navigate("RecordJournal")
    }

    const showInfo = async () => {
        setLoading(true)

        const response = await authRequest.getJournal(_id)
        setJournal(response.data)


        setLoading(false)
    }



    useEffect(() => {
        console.log("journal running")
        if (isFocused) {
            showInfo();
        }
    }, [isFocused]);





    const NavClick = (id: string) => {
        navigation.navigate("JournalDetails", { Nid: id })
    }


    return (

        <KeyboardAvoidingView
            style={apptw` flex-1`}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <BasicLayout>

                <View >
                    <AppText style={apptw`text-center text-2xl`}>Journal</AppText>
                </View>
                <View
                    style={apptw`px-5 py-5`}
                >

                    <View style={apptw`flex-row justify-between `}>

                        <AppButtonWIcon
                            text="Write Journal"
                            buttonStyle={apptw`w-[30] bg-specpurple mr-4 rounded-full`}
                            textStyle={apptw`text-[3] text-black  mx-auto`}
                            onPress={navigatetoWritejournal}
                            icon={

                                <FontAwesome name="pencil-square"
                                    size={35}
                                    style={apptw`mx-auto`}
                                    color="white"
                                />

                            }

                        />

                        <AppButtonWIcon
                            text="Record Journal"
                            buttonStyle={apptw`w-[30] bg-specpurple mr-4 rounded-full`}
                            textStyle={apptw`text-[3] text-black  mx-auto`}
                            onPress={navigatetoRecordJournal}
                            icon={

                                <MaterialIcons
                                    name="record-voice-over"
                                    size={35}
                                    style={apptw`mx-auto`}
                                    color="white"
                                />



                            }

                        />

                    </View>

                    <View
                        style={apptw`mb-5`}
                    >
                        <AppText>
                            Your Journal Entries
                        </AppText>
                        <View
                            style={apptw`bg-primary w-1/2 h-1 rounded-full`}
                        />
                    </View>

                    {journ[0] === undefined ? (
                        <View>

                            <BlankNote
                                width={"300"}
                                height={"200"}
                                style={apptw`mx-auto `}
                            />

                        </View>
                    ) : (
                        <View>
                            {journ.map((info, index) => (
                                <View
                                    key={index}
                                >
                                    <JournalDisplay
                                        date={info.Date}
                                        title={info.title}
                                        onPress={() => NavClick(info.id)}
                                    />
                                </View>
                            ))}
                        </View>
                    )}



                </View>

            </BasicLayout>

        </KeyboardAvoidingView>

    )
}


export default Journal