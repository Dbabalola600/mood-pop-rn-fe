import { FlatList, ScrollView, View } from "react-native"
import LoggedInLayout from "../../components/Layout/LoggedLayout"
import apptw from "../../utils/lib/tailwind"
import AppText from "../../components/Display/AppText"
import SearchBar2 from "../../components/Input/SearchBar2"
import { useEffect, useState } from "react"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { HomeStackParamList, RootStackParamList } from "../allroutes"
import Blankcontent from "../../assets/Blankcontent.svg"
import PostsDisplay from "../../components/Display/PostsDisplay"
import { JournalArr, postsArr } from "../../utils/lib/MockData"
import { SecureStorage } from "../../services/secureStorage"
import { useIsFocused } from "@react-navigation/native"
import postRequest from "../../utils/requests/postRequest"
import Loader from "../../components/Display/Loader"

type DashBoardProps = NativeStackScreenProps<HomeStackParamList>


type Posts = {
    userId: string,
    post: string
    category: string
    date: string
}

function DashBoardScreen({ navigation }: DashBoardProps) {
    const [user, Setuser] = useState<any>("");
    const [useSearch, SetSearch] = useState("")
    const [post, setPost] = useState<Posts[]>([])
    const isFocused = useIsFocused()
    const [isLoading, setLoading] = useState(false)


    const search = (text: any) => {
        console.log(text)


        SetSearch(text)

        navigation.navigate("FindScreen", { find: text })
    }

    const [greeting, setGreeting] = useState("")




    useEffect(() => {

        const setGreetingBasedOnTime = () => {
            const currentHour = new Date().getHours();

            if (currentHour >= 5 && currentHour < 12) {
                setGreeting('Good morning!');
            } else if (currentHour >= 12 && currentHour < 18) {
                setGreeting('Good afternoon!');
            } else {
                setGreeting('Good evening!');
            }
        };
        const fetchData = async () => {
            try {
                let userName = await SecureStorage.getInst().getValueFor("userName");
                let image = await SecureStorage.getInst().getValueFor("image")
                Setuser({
                    userName,
                    image
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
        setGreetingBasedOnTime();

    }, [isFocused]);


    const showInfo = async () => {
        setLoading(true)
        const response = await postRequest.GetUserPosts()
        // console.log(response.data.data[0])

        setPost(response.data.data)
        setLoading(false)
    }

    useEffect(() => {
        showInfo()
    }, [isFocused])


    return (
        <LoggedInLayout>
           
                <View style={apptw`flex-row justify-between mx-5 mt-4 `}>
                    <AppText style={apptw`m`}>
                        {greeting}  {user.userName}
                    </AppText>

                    <View style={apptw`m`}>
                        {/* Share Profile */}
                    </View>
                </View>


                <View style={apptw`mx-2`}>
                    <SearchBar2 onPress={search} />
                </View>



                <View
                    style={apptw`mt-5 pb-5 mx-5`}
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


                
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <>
                            {post.length === 0 ? (
                                <Blankcontent
                                    width={"300"}
                                    height={"200"}
                                    style={apptw`mx-auto`}
                                />
                            ) : (
                                <FlatList
                                    contentContainerStyle={{
                                        marginHorizontal: 15
                                    }}
                                    scrollEnabled
                                    nestedScrollEnabled
                                    showsVerticalScrollIndicator
                                    data={post}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item }) => (
                                        <PostsDisplay
                                            content={item.category}
                                            date={item.date}
                                            image={user.image}
                                            name={user.userName}
                                        />
                                    )}
                                />
                            )}
                        </>
                    )}



        </LoggedInLayout>
    )
}



export default DashBoardScreen