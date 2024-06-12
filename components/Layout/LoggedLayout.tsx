import { useNavigation } from "@react-navigation/native";
import { Keyboard, Platform, Pressable, SafeAreaView, TouchableWithoutFeedback, View, Text, ScrollView } from "react-native";
import tw from "twrnc";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons"
import apptw from "../../utils/lib/tailwind";



type LoggedInLayoutProp = {
    children: React.ReactNode;
};

const LoggedInLayout = ({ children }: LoggedInLayoutProp) => {
    const navigation = useNavigation();


    return (
        <View
            style={{
                flex: 1
            }}
        // onPress={() => (Platform.OS != "web" ? Keyboard.dismiss() : null)}
        >

            <View
                style={apptw.style(`bg-[#EEEFFE]  flex-1 shadow-md `)}
            // style={{

            // }}
            >


                {children}
            </View>
        </View>
    )



}

export default LoggedInLayout;