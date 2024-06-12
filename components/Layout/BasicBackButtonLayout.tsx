import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    Keyboard,
    Platform,
    Pressable,
    ScrollView,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import apptw from "../../utils/lib/tailwind";



type BasicBackButtonLayoutProp = {
    children: React.ReactNode;
};

const BasicBackButtonLayout = ({ children }: BasicBackButtonLayoutProp) => {
    const navigation = useNavigation();

    return (
        <View
        style={{
            flex:1
        }}
            // onPress={() => (Platform.OS != "web" ? Keyboard.dismiss() : null)}
        >
            <View
                style={apptw`bg-secondary   flex-1 shadow-md`}
                // edges={["top", "left", "right"]}
            >
                {/* <Pressable onPress={() => navigation.goBack()} style={tw.style("py-2 px-3", )}>
                    <MaterialIcons
                        name="keyboard-arrow-left"
                        size={40}
                        style={tw`bg-`}
                        color="black"
                    />
                </Pressable> */}

                {children}
            </View>
        </View>
    );
};

export default BasicBackButtonLayout;
