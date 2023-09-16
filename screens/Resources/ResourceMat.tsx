import { View } from "react-native"
import AppText from "../../components/Display/AppText"
import BasicBackButtonLayout from "../../components/Layout/BasicBackButtonLayout"
import apptw from "../../utils/lib/tailwind"
import { MaterialCommunityIcons } from "@expo/vector-icons"



const ResourceMat = () => {
    return (
        <BasicBackButtonLayout>
            <View>
                <AppText style={apptw`left-32 bottom-10 text-2xl`}>Materials</AppText>
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
    )

}

export default ResourceMat