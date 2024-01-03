import { GestureResponderEvent, Pressable, View, Text, Image } from "react-native";
import apptw from "../../utils/lib/tailwind";
import AppText from "./AppText";
import { Ionicons } from "@expo/vector-icons";
// import { Image } from "react-native-svg"



type MyProps = {
    image: any
    name: any
    clicky: ((event: GestureResponderEvent) => void) | null | undefined;
    text: any
}

const UserSearchResult = (props: MyProps) => {
    return (
        <View style={apptw`bg-white h-20 rounded-xl flex-row justify-between px-3 py-5 mb-5`}>
            <View style={apptw`h-12 w-12`}>
                {props.image === undefined || props.image === "" ? (
                    <Ionicons
                        name="md-person-outline"
                        size={37}
                        color="#0413BB"
                    />
                ) : (
                    <Image
                        source={{ uri: `${props.image}` }}
                        style={apptw`rounded-full w-10 h-10`}
                    />
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

            <Pressable
                style={({ pressed }) =>
                    apptw.style(
                        `${pressed ? "bg-opacity-75" : "bg-opacity-100"
                        } bg-primary px-5 rounded-full`,
                    )
                }
                onPress={props.clicky}
            >
                <AppText style={apptw`text-white pt-1 mx-auto`}>{props.text}</AppText>
            </Pressable>
        </View>
    );

}


export default UserSearchResult


