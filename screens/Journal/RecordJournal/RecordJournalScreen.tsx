import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, ScrollView } from "react-native";
import AppButton from "../../../components/Display/AppButton";
import AppText from "../../../components/Display/AppText";
import AppTextField from "../../../components/Input/AppTextField";
import LargeTextField from "../../../components/Input/LargeTextField";
import BasicBackButtonLayout from "../../../components/Layout/BasicBackButtonLayout";
import apptw from "../../../utils/lib/tailwind";
import { RootStackParamList } from "../../allroutes";


type Props = NativeStackScreenProps<
    RootStackParamList,
    "WriteJournal"
>;


const RecordJournalScreen = ({ navigation }: Props) => {
return(
    <BasicBackButtonLayout>
        <View>

        <ScrollView style={apptw`flex-1`}
                contentContainerStyle={apptw`flex-grow`}
            >

                <View style={apptw`mx-5`}>
                    <AppText style={apptw`text-center `}>
                        Say something down why don't you?
                    </AppText>
                </View>
                <View style={apptw`mx-5`}>
                    <AppText style={apptw`text-[10px] text-primary`}>
                        only you get to see this ❤️
                    </AppText>
                </View>

                <View style={apptw`px-6`}>
                    <AppTextField
                        title="Title"
                        // control={control}
                        // errorMessage={errors.title?.message}
                        validationName="title"
                        placeholder="Title"
                    />

                   

                </View>

                <View style={apptw`mb-19 px-6`}>
                    <AppButton
                        buttonStyle={apptw`my-6`}
                        // text={isButtonLoading ? "Loading..." : "Create Note"}
                        // onPress={onSubmit}
                    text="Create Note"
                    />
                </View>
            </ScrollView>
        </View>
    </BasicBackButtonLayout>
)

}


export default RecordJournalScreen;