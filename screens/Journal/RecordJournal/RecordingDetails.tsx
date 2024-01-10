import { RouteProp, useIsFocused, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../allroutes";
import BasicBackButtonLayout from "../../../components/Layout/BasicBackButtonLayout";
import { Pressable, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useEffect, useState } from "react";
import journalRequest from "../../../utils/requests/journalRequest";
import audioRequest from "../../../utils/requests/audioRequests";
import { FontAwesome } from "@expo/vector-icons";
import AppText from "../../../components/Display/AppText";
import apptw from "../../../utils/lib/tailwind";

import { Audio, } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import { decode } from 'base-64';

type DetailsScreenProps = RouteProp<RootStackParamList, "RecordingDetails">


type Journal = {
    id: string,
    title: string,
    content: string,
    Date: string
}


type Props = {
    route: DetailsScreenProps
}
const RecordingDetails: React.FC<Props> = ({ route }) => {

    const navigation = useNavigation()
    const [isLoading, setLoading] = useState(false)
    const isFocused = useIsFocused();
    const [journ, setJournal] = useState<Journal>()

    const [recording, setRecording] = useState<Audio.Recording | null>(null);
    const [recordingStatus, setRecordingStatus] = useState('idle');
    const [audioPermission, setAudioPermission] = useState(null);

    const showInfo = async () => {
        setLoading(true)

        const response = await audioRequest.getJournalNote(route.params.id)
        setJournal(response)


        setLoading(false)
    }

    useEffect(() => {
        // console.log("journal running")
        if (isFocused) {
            showInfo();
        }
    }, [isFocused]);

    async function handleRecordButtonPress() {
        if (recordingStatus === 'idle') {
            setRecordingStatus('playing');
            const playbackObject = new Audio.Sound();
            const content = journ?.content;

            try {
                if (content) {
                    const base64Data = content.replace('data:audio/aac;base64,', '');
                    const binaryContent = decode(base64Data);
                    const tempFilePath = `${FileSystem.documentDirectory}temp_audio.caf`;

                    await FileSystem.writeAsStringAsync(tempFilePath, binaryContent, { encoding: FileSystem.EncodingType.Base64 });

                    await Audio.setAudioModeAsync({
                        allowsRecordingIOS: false,
                        playsInSilentModeIOS: true,
                    });

                    await playbackObject.loadAsync({ uri: tempFilePath });
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    await playbackObject.playAsync();
                }

                setRecordingStatus('done');
            } catch (error) {
                console.error('An error occurred:', error);
                setRecordingStatus('idle');
            }
        } else {
            setRecordingStatus('idle');
            // Add logic to stop the recording or playback
        }
    }



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





                    <View style={styles.container}>
                        <TouchableOpacity style={styles.button} onPress={handleRecordButtonPress}>
                            <FontAwesome name={recording ? 'stop-circle' : 'circle'} size={64} color="white" />
                        </TouchableOpacity>
                        <Text style={styles.recordingStatusText}>{`Recording status: ${recordingStatus}`}</Text>
                    </View>
                </View>
            </View>
        </BasicBackButtonLayout>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 128,
        height: 128,
        borderRadius: 64,
        backgroundColor: 'red',
    },
    recordingStatusText: {
        marginTop: 16,
    },
});

export default RecordingDetails;