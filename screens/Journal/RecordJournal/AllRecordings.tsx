import { SafeAreaView, View, Text, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import tw from "twrnc";
import LoggedLayout from "../../../components/Layout/LoggedLayout";
import AppText from "../../../components/Display/AppText";
import JournalDisplay from "../../../components/Display/JournalDisplay";
import { JournalArr } from "../../../utils/lib/MockData";
import apptw from "../../../utils/lib/tailwind";


export default function AllRecordingScreen() {
    return (
     
            <LoggedLayout>
             
             <View style={apptw`mx-2`}>
               <AppText 
               style={apptw`text-center my-3 font-bold `}
               >
                All Recordings
               </AppText>





                <ScrollView
                    nestedScrollEnabled
                    showsVerticalScrollIndicator
                    // style={apptw`h-[50]`}
                >
                    {JournalArr.map((items, index) => (
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



            </LoggedLayout>

    )
}