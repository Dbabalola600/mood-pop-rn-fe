import { SafeAreaView, View, Text, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import tw from "twrnc";
import LoggedLayout from "../../components/Layout/LoggedLayout";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import AppButtonWIcon from "../../components/Display/AppButtonWIcon";
import apptw from "../../utils/lib/tailwind";
import BlankFeed from "../../assets/BlankFeed.svg"
import PostsDisplay from "../../components/Display/PostsDisplay";
import { postsArr } from "../../utils/lib/MockData";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../allroutes";




type FeedProps = NativeStackScreenProps<RootStackParamList, "FeedScreen">

export default function FeedScreen({ navigation }: FeedProps) {

    const navigatetonewpost = () => {
        navigation.navigate("NewPost")
    }


    const navigateToFriends = () => {
        navigation.navigate("UsersScreen")
    }


    return (

        <LoggedLayout>

            <View>
                <View style={apptw`flex-row justify-between mx-4  pt-5`}>

                    <AppButtonWIcon
                        text="New Post"
                        buttonStyle={apptw`w-[20] h-[20] bg-specpurple mr-4 rounded-full`}
                        textStyle={apptw`text-[2] text-black  mx-auto`}
                        onPress={navigatetonewpost}
                        icon={

                            <MaterialIcons
                                name="post-add"
                                size={20}
                                style={apptw`mx-auto`}
                                color="black"
                            />

                        }

                    />

                    <AppButtonWIcon
                        text="View Friends"
                        buttonStyle={apptw`w-[20] h-[20] bg-specpurple mr-4 rounded-full`}
                        textStyle={apptw`text-[2] text-black  mx-auto`}
                        onPress={navigateToFriends}
                        icon={

                            <Ionicons
                                name="people-sharp"
                                size={20}
                                style={apptw`mx-auto`}
                                color="black"
                            />



                        }

                    />

                </View>





                <View style={apptw`mx-2`}>
                    <BlankFeed
                        width={"300"}
                        height={"200"}
                        style={apptw`mx-auto `}
                    />


                    {postsArr.map((item, index) => (
                        <View>
                            <PostsDisplay
                                content={item.post}
                                date={item.date}
                                image={item.image}
                                name={item.user}
                            />
                        </View>
                    ))}

                </View>
            </View>


        </LoggedLayout>

    )
}