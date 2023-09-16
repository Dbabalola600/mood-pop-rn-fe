import React from "react";
import { ScrollView, TextInput, View } from "react-native";
import AppText from "../../components/Display/AppText";
import BasicBackButtonLayout from "../../components/Layout/BasicBackButtonLayout";
import apptw from "../../utils/lib/tailwind";
import AppTextField from "../../components/Input/AppTextField";
import AppButton from "../../components/Display/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RecordJournal = () => {
    return (

        <BasicBackButtonLayout>
            <View>
                <AppText style={apptw`left-32 bottom-10 text-2xl`}>
                    Record Journal
                </AppText>


            </View>


            <View>
                <View
                    style={apptw`text-center mx-auto`}
                >
                    <MaterialCommunityIcons
                        name="hazard-lights"
                        size={100}
                        style={apptw``}
                        color="#0413BB" />
                </View>

                <AppText
                    style={apptw`text-center text-3xl`}
                >
                    Coming Soon
                </AppText>

            </View>


        </BasicBackButtonLayout>
    );
};

export default RecordJournal;
