import { GestureResponderEvent, Pressable, View, Text } from "react-native";
import apptw from "../../utils/lib/tailwind";
import AppText from "./AppText";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native-svg"



type MyProps = {
    image: any
    name: any
    Acceptclicky: ((event: GestureResponderEvent) => void) | null | undefined;
    Declineclicky: ((event: GestureResponderEvent) => void) | null | undefined;
}

const UserNotification = (props: MyProps) => {
    return (
        <View style={apptw`bg-white h-20 rounded-xl flex-row justify-between px-3 py-5 mb-5`}>
            <View style={apptw`h-12 w-12`}>
                {props.image === undefined ? (
                    <Ionicons
                        name="md-person-outline"
                        size={37}
                        color="#0413BB"
                    />
                ) : (
                    <Image>{props.image}</Image>
                )}
            </View>

            <View style={apptw`flex-1 ml-3`}>
                <Text
                    style={apptw`text-base`}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                >
                    {props.name}
                </Text>
            </View>

            <View
            style={apptw` justify-between flex-row`}
            >

                

                <Pressable
                    style={({ pressed }) =>
                        apptw.style(
                            `${pressed ? "bg-opacity-75" : "bg-opacity-100"
                            } bg-green-500 px-5 rounded-full mx-3`,
                        )
                    }
                    onPress={props.Acceptclicky}
                >
                    <AppText style={apptw`text-white text-xl pt-1 mx-auto`}>✓</AppText>
                </Pressable>

                <Pressable
                    style={({ pressed }) =>
                        apptw.style(
                            `${pressed ? "bg-opacity-75" : "bg-opacity-100"
                            } bg-red-500 px-5 rounded-full`,
                        )
                    }
                    onPress={props.Declineclicky}
                >
                    <AppText style={apptw`text-white pt-2 mx-auto`}>X</AppText>
                </Pressable>
            </View>

        </View>
    );

}


export default UserNotification


