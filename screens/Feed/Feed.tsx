import { ScrollView, View, StyleSheet, KeyboardAvoidingView, Platform, Pressable } from "react-native"
import AppText from "../../components/Display/AppText"
import LoggedInLayout from "../../components/Layout/LoggedLayout"
import apptw from "../../utils/lib/tailwind"
import SearchBar2 from "../../components/Input/SearchBar2"
import { MaterialIcons, FontAwesome, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"
import AppButtonWIcon from "../../components/Display/AppButtonWIcon"
import tw from "twrnc"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../allroutes"
import BasicLayout from "../../components/Layout/BasicLayout"
import FeedDisplay from "../../components/Display/FeedDisplay"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import BlankFeed from "../../assets/BlankFeed.svg"
import { useEffect, useState } from "react"
import { authSelector } from "../../state/authSlice"
import { useSelector } from "react-redux"
import authRequest from "../../utils/requests/authReq"
import { useIsFocused } from "@react-navigation/native"
import Loader from "../../components/Display/Loader"


type FeedProps = NativeStackScreenProps<RootStackParamList, "Feed">


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


const Feed = ({ navigation }: FeedProps) => {
    const [post, setPost] = useState<Post[]>([])
    const [isLoading, setLoading] = useState(false)
    const { _id } = useSelector(authSelector)
    const isFocused = useIsFocused();
    const showInfo = async () => {
        setLoading(true)

        const response = await authRequest.GetFollowingPost(_id)

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



    if (isLoading === true) {
        return (
            <Loader />
        )
    } else {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>


            <BasicLayout>
                <View
                    style={apptw`px-5`}
                >
                    <View >
                        <AppText style={apptw`text-center text-2xl`}>Feed</AppText>
                    </View>



                    <View
                        style={apptw`flex-row justify-between`}
                    >

                        <Pressable
                            onPress={navigatetonewpost}
                            style={apptw`bg-white  rounded-full p-5`}

                        >
                            <AppText>


                                <MaterialIcons
                                    name="post-add"
                                    size={25}
                                    style={apptw`pt-5`}
                                    color="#0413BB"
                                />


                                NewPost
                            </AppText>
                        </Pressable>



                        <Pressable
                            onPress={navigateToFriends}
                            style={apptw`bg-white  rounded-full p-5`}

                        >
                            <AppText>


                                <Ionicons
                                    name="people-sharp"
                                    size={25}
                                    style={apptw`pt-5`}
                                    color="#0413BB"
                                />


                                View Friends
                            </AppText>
                        </Pressable>


                    </View>

                    <View
                        style={apptw`mt-5`}
                    >
                        <View
                            style={apptw`mt-5 pb-5`}
                        >
                            <AppText
                                style={apptw`text-bold text-sm `}
                            >
                                These are from peope you follow
                            </AppText>

                            <View
                                style={apptw`bg-primary w-1/2 h-1 rounded-full`}
                            />
                        </View>




                        {post[0] === undefined ? (
                            <View>
                                <BlankFeed
                                    width={"300"}
                                    height={"200"}
                                    style={apptw`mx-auto `}
                                />

                            </View>
                        ) : (
                            <View>
                                {post.map((info, index) => (
                                    <View
                                        key={index}
                                    >
                                        <FeedDisplay
                                            content={info.post.post}
                                            date={info.post.date}
                                            image={info.user.image}
                                            name={info.user.UserName}
                                        />

                                    </View>
                                ))}

                            </View>
                        )}




                    </View>

                </View>

            </BasicLayout>

        </GestureHandlerRootView>
    )}
}


export default Feed