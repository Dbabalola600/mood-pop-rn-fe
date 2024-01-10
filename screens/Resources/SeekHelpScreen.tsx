import { View } from "react-native";
import BasicBackButtonLayout from "../../components/Layout/BasicBackButtonLayout";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../../components/Display/AppText";
import apptw from "../../utils/lib/tailwind";











export default function SeekHelpScreen() {

    return (
        <BasicBackButtonLayout>
            <View>


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


            </View>
        </BasicBackButtonLayout>
    )
}