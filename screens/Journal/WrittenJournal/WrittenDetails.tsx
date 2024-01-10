import { RouteProp, useIsFocused, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../allroutes";
import BasicBackButtonLayout from "../../../components/Layout/BasicBackButtonLayout";
import { Pressable, View } from "react-native";
import { useEffect, useState } from "react";
import journalRequest from "../../../utils/requests/journalRequest";
import AppText from "../../../components/Display/AppText";
import apptw from "../../../utils/lib/tailwind";
import { FontAwesome } from "@expo/vector-icons";




type DetailsScreenProps = RouteProp<RootStackParamList, "WrittenDetails">


type Journal = {
    id: string,
    title: string,
    content: string,
    Date: string
}

type Props = {
    route: DetailsScreenProps
}
const WrittenDetails: React.FC<Props> = ({ route }) => {
    const navigation = useNavigation()
    const [isLoading, setLoading] = useState(false)
    const isFocused = useIsFocused();
    const [journ, setJournal] = useState<Journal>()




    const showInfo = async () => {
        setLoading(true)

        const response = await journalRequest.getJournalNote(route.params.id)
        setJournal(response)


        setLoading(false)
    }



    useEffect(() => {
        // console.log("journal running")
        if (isFocused) {
            showInfo();
        }
    }, [isFocused]);


    console.log(journ)
    return (
        <BasicBackButtonLayout>
            <View>

                <View>
                    <AppText style={apptw`mx-auto  text-3xl`}> {journ?.title}</AppText>
                </View>

                <Pressable
                // onPress={toggleModal}
                >
                    <View style={apptw`flex-row justify-end mx-5 mb-1`}>
                        <View style={apptw`rounded-full bg-white  w-10 h-10`}>
                            <AppText style={apptw`font-bold my-auto text-center mx-auto`}>


                                <FontAwesome
                                    name="trash"
                                    size={20}
                                    style={apptw` my-auto mx-auto`}
                                    color="red"
                                />

                            </AppText>
                        </View>
                    </View>

                </Pressable>


                <View
                    style={apptw`mx-5`}>
                    <AppText>
                        Date: {journ?.Date}
                    </AppText>


                    <View
                        style={apptw` mx-5 bg- px-3 pt-3 pb-10 mb-10 mt-3 `}
                    >
                        <AppText>
                            {journ?.content}
                        </AppText>
                    </View>
                </View>
            </View>
        </BasicBackButtonLayout>
    )
}


export default WrittenDetails;