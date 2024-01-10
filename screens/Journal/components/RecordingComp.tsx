import { ScrollView, View } from "react-native";
import AppText from "../../../components/Display/AppText";
import apptw from "../../../utils/lib/tailwind";
import { JournalArr } from "../../../utils/lib/MockData";
import JournalDisplay from "../../../components/Display/JournalDisplay";
import PressAppText from "../../../components/Display/PressAppText";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import BlankNote from "../../../assets/BlankNote.svg"
import audioRequest from "../../../utils/requests/audioRequests";
import { useState, useEffect } from "react";
import Loader from "../../../components/Display/Loader";

type Journal = {
    id: string,
    title: string,
    content: string,
    Date: string
}

export default function RecordingComp() {


    const navigation = useNavigation()
    const [isLoading, setLoading] = useState(false)
    const isFocused = useIsFocused();
    const [journ, setJournal] = useState<Journal[]>([])



    const showInfo = async () => {
        setLoading(true)

        const response = await audioRequest.getJournal()
        setJournal(response.data)


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
                                {journ.slice(0, 4).map((items, index) => (
                                    <View
                                        key={index}
                                    >
                                        <JournalDisplay
                                            onPress={() => NavClick(items.id)}
                                            date={items.Date}
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