import { GestureResponderEvent, Pressable, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import apptw from "../../utils/lib/tailwind"
import AppText from "./AppText"


type Props = {
    onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
    title: any
    date: any
}


const JournalDisplay = (props: Props) => {
    return (


        <Pressable
            onPress={props.onPress}
            style={apptw`bg-white rounded-full px-5 py-3 mb-5`}

        >

            <View
                style={apptw``}
            >
                <AppText
                    style={apptw`text-black font-bold`}
                >
                    Title: {props.title}
                </AppText>
                <AppText
                    style={apptw`text-zinc-400`}
                >
                    Date: {props.date}
                </AppText>

            </View>


        </Pressable>
    )
}

export default JournalDisplay