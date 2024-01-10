import { SafeAreaView, View, Text, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import tw from "twrnc";
import LoggedLayout from "../../../components/Layout/LoggedLayout";
import AppText from "../../../components/Display/AppText";
import JournalDisplay from "../../../components/Display/JournalDisplay";
import { JournalArr } from "../../../utils/lib/data/MockData";
import apptw from "../../../utils/lib/tailwind";
import audioRequest from "../../../utils/requests/audioRequests";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from "react";
import Loader from "../../../components/Display/Loader";
import BlankNote from "../../../assets/BlankNote.svg"
import { useAudioStore } from "../../../utils/lib/data/audioJournal";



type Journal = {
    id: string,
    title: string,
    content: string,
    date: string
}


export default function AllRecordingScreen() {


    const navigation = useNavigation()
    const [isLoading, setLoading] = useState(false)
    const isFocused = useIsFocused();
    const [journ, setJournal] = useState<Journal[]>([])


    const Userjournals = useAudioStore((state: any) => state.journal)


    const showInfo = async () => {
        setLoading(true)

        setJournal(Userjournals)


        setLoading(false)
    }



    useEffect(() => {
        // console.log("journal running")
        if (isFocused) {
            showInfo();
        }
    }, [isFocused]);


    const NavClick = (id: string) => {
        navigation.navigate("RecordingDetails", { id: id })
    }
    return (

        <LoggedLayout>

            <View style={apptw`mx-2`}>
                <AppText
                    style={apptw`text-center my-3 font-bold `}
                >
                    All Recordings
                </AppText>





                {isLoading ?
                    <>
                        <Loader />
                    </> :

                    <>

                        {journ.length < 1 ?
                            <>
                                <BlankNote
                                    width={"300"}
                                    height={"200"}
                                    style={apptw`mx-auto `}
                                />

                            </> :

                            <>
                                <ScrollView
                                    // nestedScrollEnabled
                                    showsVerticalScrollIndicator
                                    style={apptw`pb-10`}
                                >
                                    {journ.map((items, index:any) => (
                                        <View
                                            key={index}
                                        >
                                            <JournalDisplay
                                                  onPress={() => NavClick(index)}
                                                date={new Date(items.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                  })}
                                                title={items.title}
                                            />

                                        </View>
                                    ))}
                                </ScrollView>
                            </>

                        }

                    </>

                }
            </View>



        </LoggedLayout>

    )
}