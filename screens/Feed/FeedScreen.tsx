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
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import postRequest from "../../utils/requests/postRequest";
import Loader from "../../components/Display/Loader";




type FeedProps = NativeStackScreenProps<RootStackParamList, "FeedScreen">


type Post = {
    post: {
        userId: string,
        post: string
        category: string
        date: string
    },
    user: {
        _id: string,
        UserName: string,
        email: string,
        isVerified: string,
        image: string
    }

}



export default function FeedScreen({ navigation }: FeedProps) {
    const [post, setPost] = useState<Post[]>([])
    const [isLoading, setLoading] = useState(false)
    const isFocused = useIsFocused();


    const showInfo = async () => {
        setLoading(true)

        const response = await postRequest.GetFollowingPost()
        // console.log(response)

        setPost(response)

        setLoading(false)
    }


    const navigatetonewpost = () => {
        navigation.navigate("NewPost")
    }


    const navigateToFriends = () => {
        navigation.navigate("UsersScreen")
    }


    useEffect(() => {

        if (isFocused) {
            showInfo();
        }
    }, [isFocused]);

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



                {isLoading ?

                    <>
                        <Loader />
                    </> :
                    <>
                        <View style={apptw`mx-2 mt-10`}>

                            {post.length < 1 ?
                                <>
                                    <BlankFeed
                                        width={"300"}
                                        height={"200"}
                                        style={apptw`mx-auto `}
                                    />
                                </> :
                                <>
                                    {post.map((info, index) => (
                                        <View
                                            key={index}

                                        >
                                            <PostsDisplay
                                                content={info.post.category}
                                                date={info.post.date}
                                                image={info.user.image}
                                                name={info.user.UserName}
                                            />
                                        </View>
                                    ))}
                                </>


                            }





                        </View>
                    </>

                }


            </View>


        </LoggedLayout>

    )
}