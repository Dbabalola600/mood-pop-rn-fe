import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../allroutes";
import BasicBackButtonLayout from "../../../components/Layout/BasicBackButtonLayout";
import { View } from "react-native";




type DetailsScreenProps = RouteProp<RootStackParamList, "WrittenDetails">



type Props = {
    route: DetailsScreenProps
}
const WrittenDetails: React.FC<Props> = ({ route }) => {
    return (
        <BasicBackButtonLayout>
            <View>

            </View>
        </BasicBackButtonLayout>
    )
}


export default WrittenDetails;