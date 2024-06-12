import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, ScrollView, TouchableOpacity, StyleSheet, Text } from "react-native";
import AppButton from "../../../components/Display/AppButton";
import AppText from "../../../components/Display/AppText";
import AppTextField from "../../../components/Input/AppTextField";
import LargeTextField from "../../../components/Input/LargeTextField";
import BasicBackButtonLayout from "../../../components/Layout/BasicBackButtonLayout";
import apptw from "../../../utils/lib/tailwind";
import { HomeStackParamList, RootStackParamList } from "../../allroutes";

import RNFS from 'react-native-fs';

import { useEffect, useState } from "react";
import { Audio, } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import { FontAwesome } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import audioRequest from "../../../utils/requests/audioRequests";
import Toast from "react-native-toast-message";
import zlib from 'zlib';
import { useAudioStore } from "../../../utils/lib/data/audioJournal";


type Props = NativeStackScreenProps<
    HomeStackParamList

>;


const RecordJournalScreen = ({ navigation }: Props) => {



    const { register, handleSubmit, watch, control, formState: { errors } } = useForm()


    const [recording, setRecording] = useState<Audio.Recording | null>(null);
    const [recordingStatus, setRecordingStatus] = useState('idle');
    const [audioPermission, setAudioPermission] = useState(null);
    const [isBase, setBase] = useState("")



    useEffect(() => {

        // Simply get recording permission upon first render
        async function getPermission() {
            await Audio.requestPermissionsAsync().then((permission) => {
                console.log('Permission Granted: ' + permission.granted);
                setAudioPermission(permission.granted)
            }).catch(error => {
                console.log(error);
            });
        }

        // Call function to get permission
        getPermission()
        // Cleanup upon first render
        return () => {
            if (recording) {
                stopRecording();
            }
        };
    }, []);



    async function startRecording() {
        try {
            // needed for IoS
            if (audioPermission) {
                await Audio.setAudioModeAsync({
                    allowsRecordingIOS: true,
                    playsInSilentModeIOS: true
                })
            }

            const newRecording = new Audio.Recording();
            console.log('Starting Recording')




            await newRecording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY); // quality
            await newRecording.startAsync();
            setRecording(newRecording);
            setRecordingStatus('recording');

        } catch (error) {
            console.error('Failed to start recording', error);
        }
    }


    const fileToBase64 = async (uri: any) => {
        const data = await FileSystem.readAsStringAsync(uri, {
            encoding: FileSystem.EncodingType.Base64,



        });
        return data;
    };


    async function stopRecording() {
        try {

            if (recordingStatus === 'recording' && recording !== null) {
                console.log('Stopping Recording')
                await recording.stopAndUnloadAsync();
                const recordingUri = recording.getURI();


                if (recordingUri === null) {
                    console.error('Failed to get recording URI');
                    return;
                }
                // Create a file name for the recording
                const fileName = `recording-${Date.now()}.caf`;

                // Move the recording to the new directory with the new file name
                await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'recordings/', { intermediates: true });
                const newUri = FileSystem.documentDirectory + 'recordings/' + `${fileName}`;

                await FileSystem.moveAsync({
                    from: recordingUri,
                    to: newUri
                });




                // This is for simply playing the sound back
                const playbackObject = new Audio.Sound();
                await playbackObject.loadAsync({ uri: FileSystem.documentDirectory + 'recordings/' + `${fileName}` });
                // await playbackObject.playAsync();




                // resert our states to record again
                setRecording(null);
                setRecordingStatus('stopped');




                return newUri;
            }

        } catch (error) {
            console.error('Failed to stop recording', error);
        }
    }






    const [audiPath, setPath] = useState("")
    async function handleRecordButtonPress() {
        if (recording) {
            const audioUri = await stopRecording(recording);
            if (audioUri) {
                setPath(audioUri)

                console.log('Saved audio file to', audioUri);

            }
        } else {
            await startRecording();
        }
    }





    const addJournal = useAudioStore((state: any) => state.addToJournal)

    const onSubmit = handleSubmit(async (data) => {

        const info = {
            title: data.title,
            date: new Date(),
            content: audiPath
        }


        console.log(info)

        addJournal(info)
        Toast.show({
            type: "success",
            text1: "Good Job"
        })

        navigation.goBack()





    });

    return (
        <BasicBackButtonLayout>
            <View>

                <ScrollView style={apptw``}
                    contentContainerStyle={apptw`flex-grow`}
                >

                    <View style={apptw`mx-5`}>
                        <AppText style={apptw`text-center `}>
                            Say something why don't you?
                        </AppText>
                    </View>
                    <View style={apptw`mx-5`}>
                        <AppText style={apptw`text-[10px] text-primary`}>
                            this is locally stored ❤️
                        </AppText>
                    </View>

                    <View style={apptw`px-6`}>
                        <AppTextField
                            title="Title"
                            control={control}
                            // errorMessage={errors.title?.message}
                            validationName="title"
                            placeholder="Title"
                        />



                    </View>


                    <View style={styles.container}>
                        <TouchableOpacity style={styles.button} onPress={handleRecordButtonPress}>
                            <FontAwesome name={recording ? 'stop-circle' : 'circle'} size={64} color="white" />
                        </TouchableOpacity>
                        <Text style={styles.recordingStatusText}>{`Recording status: ${recordingStatus}`}</Text>
                    </View>

                    <View style={apptw`mb-19 px-6`}>
                        <AppButton
                            buttonStyle={apptw`my-6`}
                            // text={isButtonLoading ? "Loading..." : "Create Note"}
                            onPress={onSubmit}
                            text="Create Note"
                        />
                    </View>
                </ScrollView>
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

export default RecordJournalScreen;