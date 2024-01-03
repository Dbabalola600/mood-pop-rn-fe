import { View } from "react-native"
import LoggedInLayout from "../../components/Layout/LoggedLayout"
import apptw from "../../utils/lib/tailwind"
import AppText from "../../components/Display/AppText"
import SearchBar2 from "../../components/Input/SearchBar2"
import { useEffect, useState } from "react"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../allroutes"
import Blankcontent from "../../assets/Blankcontent.svg"
import PostsDisplay from "../../components/Display/PostsDisplay"
import { postsArr } from "../../utils/lib/MockData"
import { SecureStorage } from "../../services/secureStorage"

type DashBoardProps = NativeStackScreenProps<RootStackParamList, "DashBoardScreen">

function DashBoardScreen({ navigation }: DashBoardProps) {
    const [user, Setuser] = useState<any>("");
    const [useSearch, SetSearch] = useState("")

    const search = (text: any) => {
        console.log(text)


        SetSearch(text)

        navigation.navigate("FindScreen", {find: text})
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
                Setuser(userName);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
        setGreetingBasedOnTime();

    }, []);





    return (
        <LoggedInLayout>
            <View>
                <View style={apptw`flex-row justify-between mx-2 mt-4 `}>
                    <AppText style={apptw`m`}>
                        {greeting}  {user}
                    </AppText>

                    <View style={apptw`m`}>
                        {/* Share Profile */}
                    </View>
                </View>


                <View>
                    <SearchBar2 onPress={search} />
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


                <View style={apptw`mx-2`}>



                    <Blankcontent
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
        </LoggedInLayout>
    )
}



export default DashBoardScreen