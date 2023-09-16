import { KeyboardAvoidingView, Platform, ScrollView, View, StyleSheet, Pressable, Image, RefreshControl } from "react-native"
import LoggedInLayout from "../components/Layout/LoggedLayout"
import AppText from "../components/Display/AppText"
import apptw from "../utils/lib/tailwind"
import tw from "twrnc"
import PostsDisplay from "../components/Display/PostsDisplay"
import SearchBar from "../components/Input/SearchBar"
import SearchBar2 from "../components/Input/SearchBar2"
import AppButtonWIcon from "../components/Display/AppButtonWIcon"
import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "./allroutes"
import { authSelector } from "../state/authSlice"
import { useSelector } from "react-redux"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { useEffect, useState } from "react"
import authRequest from "../utils/requests/authReq"
import { useIsFocused } from "@react-navigation/native"

import Blankcontent from "../assets/Blankcontent.svg"
import Loader from "../components/Display/Loader"


type DashBoardProps = NativeStackScreenProps<RootStackParamList, "DashBoard">


type UserIn = {
    _id: string | null
    UserName: string | null,
    email: string | null,
    password: string | null,
    image: string | null,
    isVerified: boolean | null,
    isActive: boolean | null,
    role: string | null
}


type Posts = {
    userId: string,
    post: string
    category: string
    date: string
}

const DashBoard = ({ navigation }: DashBoardProps) => {
    const [isLoading, setLoading] = useState(false)
    const { _id } = useSelector(authSelector)
    const [userIn, setUser] = useState<UserIn | null>(null)
    const [post, setPost] = useState<Posts[]>([])
    const isFocused = useIsFocused(); //reloads useeffect when in focus
    const [refreshing, setRefreshing] = useState(false);

    const navigatetoWritejournal = () => {
        navigation.navigate("WriteJournal")
    }
    const navigatetonewpost = () => {
        navigation.navigate("NewPost")
    }
    const navigatetoseekhelp = () => {
        navigation.navigate("SeekHelp")
    }

    const navigateToSettings = () => {
        navigation.navigate("SettingsScreen")
    }

    const navigateToFriends = () => {
        navigation.navigate("UsersScreen")
    }

    const navigatetoProfile = () => {
        navigation.navigate("ProfileScreen")
    }



    const showInfo = async () => {
        setLoading(true)

        const resposne = await authRequest.GetUserFull(_id)
        setUser(resposne.data)

        const PostResponse = await authRequest.GetUserPosts(_id)
        setPost(PostResponse.data.data)


        setLoading(false)
    }



    useEffect(() => {

        if (isFocused) {
            showInfo();
        }
    }, [isFocused]);

    const austh = useSelector(authSelector)



    if (austh._id === "") {
        navigation.navigate("SignIn")
    } else {
        if (isLoading === true) {
            return (
                <Loader />
            )
        } else {

            return (

                <GestureHandlerRootView style={{ flex: 1 }}>



                    <LoggedInLayout>



                        <ScrollView
                            showsVerticalScrollIndicator={true}
                            style={tw`px-6`}
                        // refreshControl={<RefreshControl refreshing={isLoading} onRefresh={showInfo} />}


                        >



                            <View
                                style={apptw`flex-row justify-between py-5`}
                            >
                                <View>
                                    <Pressable
                                        onPress={navigatetoProfile}
                                    >
                                        <AppText>

                                            {userIn?.image === undefined ? (
                                                <Ionicons
                                                    style={apptw` `}
                                                    name="md-person-outline"

                                                    size={29}
                                                    color="#0413BB" />
                                            ) : (

                                                <Image
                                                    style={apptw`rounded-full w-10 h-10`}
                                                    // height={5}
                                                    source={{ uri: `${userIn?.image}` }}
                                                />


                                                // <Image

                                                // >
                                                //     {userIn.image}
                                                // </Image>
                                            )}
                                            Hi {userIn?.UserName}
                                        </AppText>
                                    </Pressable>

                                </View>





                                <View>
                                    <Pressable
                                        onPress={navigateToSettings}
                                    >

                                        <Ionicons
                                            name="settings"
                                            size={24}
                                            color="#0413BB" />
                                    </Pressable>


                                </View>

                            </View>




                            <View
                                style={apptw` center`}
                            >

                                <SearchBar2 />


                            </View>


                            <View
                                style={apptw`bg-white pt-5  rounded-full`}
                            >
                                <View>
                                    <AppText
                                        style={apptw`text-center`}
                                    >
                                        What would you like to do?
                                    </AppText>
                                </View>

                                <View
                                    style={{
                                        borderBlockColor: "gray",
                                        borderBottomWidth: StyleSheet.hairlineWidth
                                    }}
                                />

                                <ScrollView
                                    style={apptw`flex-row  mx-10 rounded-full`}
                                    horizontal={true}
                                    contentContainerStyle={tw.style(`justify-between`, {
                                        flexGrow: 1,
                                    })}
                                >
                                    <AppButtonWIcon
                                        text="New Post"
                                        onPress={navigatetonewpost}
                                        buttonStyle={apptw`w-[30] bg-white mr-4 rounded-full`}
                                        textStyle={apptw`text-[3] text-black  mx-auto`}
                                        icon={
                                            <MaterialIcons
                                                name="post-add"
                                                size={20}
                                                style={tw`mx-auto`}
                                                color="#0413BB"
                                            />
                                        }
                                    />


                                    <AppButtonWIcon
                                        text="New Journal"
                                        buttonStyle={apptw`w-[30] bg-white mr-4 rounded-full`}
                                        textStyle={apptw`text-[3] text-black  mx-auto`}
                                        onPress={navigatetoWritejournal}
                                        icon={

                                            <FontAwesome name="pencil-square"
                                                size={20}
                                                style={tw`mx-auto`}
                                                color="#0413BB"
                                            />

                                        }
                                    />

                                    <AppButtonWIcon
                                        text="Seek Help"
                                        onPress={navigatetoseekhelp}
                                        buttonStyle={apptw`w-[30] bg-white mr-4 rounded-full`}
                                        textStyle={apptw`text-[3] text-black  mx-auto`}
                                        icon={

                                            <MaterialCommunityIcons
                                                name="handshake"
                                                size={20}
                                                style={tw`mx-auto`}
                                                color="#0413BB"
                                            />

                                        }
                                    />


                                    <AppButtonWIcon
                                        text="View Friends"
                                        buttonStyle={apptw`w-[30] bg-white mr-4 rounded-full`}
                                        textStyle={apptw`text-[3] text-black  mx-auto`}
                                        onPress={navigateToFriends}
                                        icon={

                                            <Ionicons
                                                name="people-sharp"
                                                size={20}
                                                style={tw`mx-auto`}
                                                color="#0413BB"
                                            />



                                        }
                                    />

                                </ScrollView>






                            </View>


                            <View
                                style={apptw`mt-5 pb-5`}
                            >
                                <AppText
                                    style={apptw`text-bold text-2xl `}
                                >
                                    Your Posts
                                </AppText>

                                <View
                                    style={apptw`bg-primary w-1/2 h-1 rounded-full`}
                                />
                            </View>

                            {/* Posts */}

                            {post[0] === undefined ? (
                                <View>



                                    <Blankcontent
                                        width={"300"}
                                        height={"200"}
                                        style={apptw`mx-auto `}
                                    />


                                </View>
                            ) : (
                                <View>
                                    {post?.map((info, index) => (
                                        <View
                                            // style={apptw`pt-5`}
                                            key={index}
                                        >
                                            <PostsDisplay
                                                content={info.post}
                                                date={info.date}
                                                image={userIn?.image}
                                                name={userIn?.UserName}
                                            />
                                        </View>
                                    ))}

                                </View>

                            )}




                            {/* <ScrollView
                        showsVerticalScrollIndicator={true}
                    > */}


                            {/* </ScrollView> */}





                        </ScrollView>

                        <View
                            style={apptw`pt-10`}
                        >

                        </View>
                    </LoggedInLayout>

                </GestureHandlerRootView>



            )

        }
    }
}


export default DashBoard