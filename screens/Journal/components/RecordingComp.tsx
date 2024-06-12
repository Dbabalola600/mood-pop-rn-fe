import { ScrollView, View } from "react-native";
import AppText from "../../../components/Display/AppText";
import apptw from "../../../utils/lib/tailwind";

import JournalDisplay from "../../../components/Display/JournalDisplay";
import PressAppText from "../../../components/Display/PressAppText";
import { NavigationProp, useIsFocused, useNavigation } from "@react-navigation/native";
import BlankNote from "../../../assets/BlankNote.svg"
import audioRequest from "../../../utils/requests/audioRequests";
import { useState, useEffect } from "react";
import Loader from "../../../components/Display/Loader";
import { useAudioStore } from "../../../utils/lib/data/audioJournal";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../allroutes";


type JournalProps = NativeStackScreenProps<HomeStackParamList>
type Journal = {
    id: string,
    title: string,
    content: string,
    date: string
}

export default function RecordingComp() {


    const navigation = useNavigation<NavigationProp<any>>();
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
        <View>
            <View
                style={apptw`flex-row justify-between mt-5`}
            >
                <View
                    style={apptw` pb-5`}
                >
                    <AppText
                        style={apptw`text-bold text-2xl `}
                    >
                        Your Recordings
                    </AppText>

                    <View
                        style={apptw`bg-primary w-full h-1 rounded-full`}
                    />
                </View>

                <PressAppText 
                style={apptw`text-primary`}
                onPress={()=>{navigation.navigate("AllRecordingScreen")}}
                >
                    View All →
                </PressAppText>
            </View>



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
                                nestedScrollEnabled
                                showsVerticalScrollIndicator
                                style={apptw`h-[50]`}
                            >
                                {journ.slice(0, 4).map((items, index:any) => (
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
    )
}