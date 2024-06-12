import { View } from "react-native";
import BasicBackButtonLayout from "../../components/Layout/BasicBackButtonLayout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { HomeStackParamList, RootStackParamList } from "../allroutes";
import SearchBar2 from "../../components/Input/SearchBar2";
import apptw from "../../utils/lib/tailwind";
import PressAppText from "../../components/Display/PressAppText";
import FollowingScreen from "./FollowingScreen";
import FollowerScreen from "./FollowerScreen";




type MyProps = NativeStackScreenProps<HomeStackParamList>

export default function UsersScreen({ navigation }: MyProps) {



    const [useSearch, SetSearch] = useState("")

    const search = (text: any) => {
        console.log(text)


        SetSearch(text)

        navigation.navigate("FindScreen", { find: text })
    }


    const [selcetedShow, setShow] = useState("following")
    return (
        <BasicBackButtonLayout>
            <View
                style={apptw`mt-4`}
            >



                <View>
                    <SearchBar2 onPress={search} />
                </View>

                <View
                    style={apptw`flex flex-row mx-10 justify-between`}
                >
                    <PressAppText
                        onPress={() => setShow("following")}
                        style={
                            selcetedShow == "following" ?
                                apptw`text-primary underline` :
                                apptw``
                        }
                    >

                        Following
                    </PressAppText>
                    <PressAppText
                        onPress={() => setShow("followers")}
                        style={
                            selcetedShow == "followers" ?
                                apptw`text-primary underline` :
                                apptw``
                        }
                    >

                        Followers
                    </PressAppText>

                </View>


                {selcetedShow === "following" && <FollowingScreen />}
                {selcetedShow === "followers" && <FollowerScreen />}


            </View>
        </BasicBackButtonLayout>

    )
}