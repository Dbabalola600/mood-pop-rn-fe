import { View } from "react-native"
import apptw from "../../utils/lib/tailwind"
import AppText from "./AppText"
import { useState } from "react"
import { ScrollView } from "react-native-gesture-handler"
import { Ionicons } from "@expo/vector-icons"
import { Image } from "react-native-svg"


type FeedProps = {
    image: any,
    name: string | any,
    date: string | any,
    content: string | any

}




const FeedDisplay = (props: FeedProps) => {

    const [innerScrollViewActive, setInnerScrollViewActive] = useState(false);

    return (
        <ScrollView
            showsVerticalScrollIndicator={true}
        >
            <View
                style={apptw`bg-white rounded-b-xl rounded-t-md mb-5 flex`}>
                <View style={apptw`flex-row p-5 rounded-t-md`}>

                    {props.image === undefined ? (
                        <View>
                            <Ionicons name="md-person-outline"
                                size={50}
                                color="#0413BB" />
                        </View>
                    ) : (
                        <Image>
                            {props.image}
                        </Image>
                    )}



                    <View
                        style={apptw`mx-3`}
                    >

                        <AppText>
                            {props.name}


                        </AppText>
                        <AppText>{props.date}</AppText>
                    </View>


                </View>

                <View style={apptw`bg-specpurple w-full p-5 rounded-b-xl  max-h-48`}>
                    <AppText style={apptw`text-center`}> {props.content}</AppText>
                </View>
            </View>

        </ScrollView>


    )

}

export default FeedDisplay