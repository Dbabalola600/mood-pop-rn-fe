import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    Keyboard,
    Platform,
    Pressable,
    ScrollView,
    TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import apptw from "../../utils/lib/tailwind";

type BasicBackButtonLayoutProp = {
    children: React.ReactNode;
};

const BasicLayout = ({ children }: BasicBackButtonLayoutProp) => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback
            onPress={() => (Platform.OS != "web" ? Keyboard.dismiss() : null)}
        >
            <ScrollView
                style={apptw.style(`bg-secondary  flex-1 shadow-md py-6 pt-10 pb-5`)}
                contentContainerStyle={apptw`flex-grow`}
            // edges={["top", "left", "right"]}
            >


                {children}
            </ScrollView>
        </TouchableWithoutFeedback>
    );
};

export default BasicLayout;
