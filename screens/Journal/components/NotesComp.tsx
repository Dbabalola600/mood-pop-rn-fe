import { ScrollView, View } from "react-native";
import AppText from "../../../components/Display/AppText";
import apptw from "../../../utils/lib/tailwind";
import { JournalArr } from "../../../utils/lib/MockData";
import JournalDisplay from "../../../components/Display/JournalDisplay";
import PressAppText from "../../../components/Display/PressAppText";
import { useNavigation } from "@react-navigation/native";




export default function NotesComp() {
    const navigation = useNavigation()
    return (
        <View>

            <View
                style={apptw`flex-row justify-between mt-5`}
            >
                <View
                    style={apptw` pb-5`}
                >
                    <AppText
                        style={apptw`text-bold text-2xl `}
                    >
                        Your Notes
                    </AppText>

                    <View
                        style={apptw`bg-primary w-full h-1 rounded-full`}
                    />
                </View>

                <PressAppText 
                style={apptw`text-primary`}
                onPress={()=>{navigation.navigate("AllWrittenScreen")}}
                >
                    View All →
                </PressAppText>
            </View>




            <ScrollView
                nestedScrollEnabled
                showsVerticalScrollIndicator
                style={apptw`h-[50]`}
            >
                {JournalArr.slice(0, 4).map((items, index) => (
                    <View

                    >
                        <JournalDisplay
                            date={items.content}
                            title={items.title}
                        />

                    </View>
                ))}

            </ScrollView>

        </View>
    )
}