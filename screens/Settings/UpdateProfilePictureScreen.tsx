import { View, Image } from "react-native";
import LoggedInLayout from "../../components/Layout/LoggedLayout";
import AppText from "../../components/Display/AppText";
import AppTextField from "../../components/Input/AppTextField";
import { Controller, useForm } from "react-hook-form";
import AppButton from "../../components/Display/AppButton";
import { useEffect, useState } from "react";
import apptw from "../../utils/lib/tailwind";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as ImageManipulator from 'expo-image-manipulator';
import settingsRequest from "../../utils/requests/settingsRequest";
import Toast from "react-native-toast-message";
import { SecureStorage } from "../../services/secureStorage";
import { HomeStackParamList } from "../allroutes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type BoardProps = NativeStackScreenProps<HomeStackParamList>
export default function UpdateProfilePictureScreen({ navigation }: BoardProps) {
    const [isButtonLoading, setButtonLoading] = useState(false)
    const [image, setImage] = useState<string | null>(null);
    const [base64Image, setBase64Image] = useState<string | null>(null);
    const { register, handleSubmit, watch, control, formState: { errors } } = useForm()


    useEffect(() => {
        (async () => {

            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                console.error('Permission denied');
            }
        })();
    }, []);


    const pickImage = async () => {
        // Launch the image picker
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 10],
            quality: 0.1,
            base64: true
        });
        if (!result.canceled) {
            // Resize the image
            const resizedImage = await ImageManipulator.manipulateAsync(
                result.assets[0].uri,
                [{ resize: { width: 500 } }], // Resize to width of 1000 pixels. Adjust as needed.
                { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
            );

            setImage(resizedImage.uri)
            convertImageToBase64(resizedImage.uri)
        }
    };

    const convertImageToBase64 = async (uri: string) => {
        try {
            const base64 = await FileSystem.readAsStringAsync(uri, {
                encoding: FileSystem.EncodingType.Base64,
            });
            setBase64Image(`data:image/jpeg;base64,${base64}`);
        } catch (error) {
            console.error('Error converting image to base64:', error);
        }
    };



    const submitItem = async () => {
        setButtonLoading(true)

        const image = {
            image: base64Image
        }
        await settingsRequest.updateImage(base64Image).then(async (res) => {
            // console.log(res)
            switch (res.data.status) {
                case 402: {
                    Toast.show({
                        type: "error",
                        text1: `${res.data.message}`
                    })
                    break;
                }
                case 200: {
                    Toast.show({
                        type: "success",
                        text1: "Successful",
                        // text2: "proceed to login"
                    })
                    // navigateToSignIn()
                    await SecureStorage.getInst().save("image", base64Image!)
                    navigation.navigate("DashBoard")
                    break;
                }

                default: {
                    Toast.show({
                        type: "error",
                        text1: "Unknown error try again later",
                        text2: ""
                    })
                    break;

                }
            }
        })

        // console.log(image.image)
        setButtonLoading(false)
    }

    return (
        <LoggedInLayout>
            <View
                style={apptw`  mt-20 mx-5`}
            >


                <>


                    {base64Image && (
                        <Image source={{
                            uri: base64Image,
                            width: 400,
                            height: 200,

                        }}

                            style={{
                                marginBottom: 20,

                                alignSelf: "center"
                            }} />
                    )}
                </>



                <View
                    style={apptw``}
                >
                    <AppButton
                        onPress={pickImage}
                        text="Pick an image from camera roll "
                        buttonStyle={apptw`my-10`}

                    />

                    {
                        base64Image &&
                        <AppButton
                            onPress={submitItem}

                            text={isButtonLoading ? "Loading..." : "Submit"}
                        />

                    }
                </View>



            </View>
        </LoggedInLayout>
    )
}