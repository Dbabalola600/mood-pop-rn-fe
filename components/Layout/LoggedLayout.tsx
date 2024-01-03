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
        <TouchableWithoutFeedback
            onPress={() => (Platform.OS != "web" ? Keyboard.dismiss() : null)}
        >

            <ScrollView
                style={apptw.style(`bg-[#EEEFFE]  flex-1 shadow-md `)}
                contentContainerStyle={apptw`flex-grow`}

            // edges={["top", "left", "right", "bottom"]}
            >

                {/* <View style={tw`flex-row justify-between py-4 px-6`} >

                    <Pressable onPress={() => navigation.toggleDrawer()} style={tw.style("",)}>
                        <SimpleLineIcons
                            name="menu"
                            size={20}
                            style={tw`bg-white`}
                            color="black"
                        />
                    </Pressable>

                    <Pressable 
                    // onPress={navigateToNotifications} 
                    style={tw.style("",)}>
                        <AntDesign
                            name="bells"
                            size={20}
                            style={tw`bg-white`}
                            color="black"
                        />
                    </Pressable>

                </View> */}


                {children}
            </ScrollView>
        </TouchableWithoutFeedback>
    )



}

export default LoggedInLayout;