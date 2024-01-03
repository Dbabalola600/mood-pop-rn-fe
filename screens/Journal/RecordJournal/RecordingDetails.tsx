import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../allroutes";
import BasicBackButtonLayout from "../../../components/Layout/BasicBackButtonLayout";
import { View } from "react-native";




type DetailsScreenProps = RouteProp<RootStackParamList, "RecordingDetails">



type Props = {
    route: DetailsScreenProps
}
const RecordingDetails: React.FC<Props> =({route})=>{
    return(
        <BasicBackButtonLayout>
            <View>
                
            </View>
        </BasicBackButtonLayout>
    )
}


export default RecordingDetails;