import { RouteProp, useIsFocused, useNavigation } from "@react-navigation/native";

import BasicBackButtonLayout from "../../components/Layout/BasicBackButtonLayout"
import { RootStackParamList } from "../allroutes";
import { useEffect, useState } from "react";
import authRequest from "../../utils/requests/authReq";
import { useSelector } from "react-redux";
import { authSelector } from "../../state/authSlice";
import { Modal, Pressable, ScrollView, TouchableOpacity, View, Text } from "react-native";
import AppText from "../../components/Display/AppText";

import apptw from "../../utils/lib/tailwind";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import tw from "twrnc"


type JournalDetailsProps = RouteProp<RootStackParamList, 'JournalDetails'>;

type Props = {
    route: JournalDetailsProps
};


type Journal = {
    title: any
    content: any
    Date: any
}

const JournalDetails: React.FC<Props> = ({ route }) => {
    const NoteId = route.params?.Nid
    const isFocused = useIsFocused();
    const { _id } = useSelector(authSelector)
    const [isLoading, setLoading] = useState(false)
    const [JournInfo, setJournal] = useState<Journal | null>(null)
    const [isModalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation()
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const showInfo = async () => {
        setLoading(true)

        const response = await authRequest.getJournalNote(_id, NoteId)

        setJournal(response)
        console.log(response)
        setLoading(false)
    }


    const DeleteNote = async () => {

        const response = await authRequest.delNote(_id, NoteId)
            .then(res => {
                if (res.status === 200) {
                    navigation.navigate("Journal")
                }
            })


    }

    useEffect(() => {
        console.log("running")
        if (isFocused) {
            showInfo();
        }
    }, [isFocused]);

    return (

        // <GestureHandlerRootView style={{ flex: 1 }}>

        <BasicBackButtonLayout>

            <View>
                <AppText style={apptw`left-32 bottom-10  text-3xl`}> {JournInfo?.title}</AppText>
            </View>


            <Pressable
                onPress={toggleModal}
            >
                <View style={apptw`flex-row justify-end mx-5 mb-1`}>
                    <View style={apptw`rounded-full bg-red-500 p-2 w-30`}>
                        <AppText style={apptw`font-bold pt-2 mx-auto`}>


                            <FontAwesome
                                name="trash"
                                size={20}
                                style={apptw``}
                                color="white"
                            />
                            {" "} Delete
                        </AppText>
                    </View>
                </View>

            </Pressable>
            <View
                style={apptw`mx-5`}>
                <AppText>
                    Date: {JournInfo?.Date}
                </AppText>
            </View>


            <View
                style={apptw` mx-5 bg-white px-3 pt-3 pb-10 mb-10 mt-3 `}
            >
                <AppText>
                    {JournInfo?.content}
                </AppText>
            </View>

            {/* modal for deleting note */}

            <Modal
                animationType="none"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={toggleModal}
            >
                <View style={apptw`flex-1 justify-center items-center bg-opacity-70 bg-black`}>
                    <View style={apptw`bg-white p-6 rounded-2xl`}>
                        {/* Your modal content goes here */}
                        <AppText>Do you wish to delete this note? </AppText>
                        <View
                            style={apptw`flex-row gap-5 mt-5 justify-between`}
                        >
                            <TouchableOpacity
                                onPress={toggleModal}
                                style={apptw`bg-green-500 p-3 rounded-lg`}

                            >
                                <AppText style={apptw`text-white`}>Keep</AppText>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={DeleteNote}
                                style={apptw`bg-red-500   p-3 rounded-lg`}

                            >
                                <AppText style={apptw`text-white`}>Delete</AppText>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>

        </BasicBackButtonLayout>
        // </GestureHandlerRootView>



    )
}


export default JournalDetails