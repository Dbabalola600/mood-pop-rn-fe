import { RouteProp, useIsFocused, useNavigation } from "@react-navigation/native";
import { HomeStackParamList, RootStackParamList } from "../allroutes";
import LoggedInLayout from "../../components/Layout/LoggedLayout";
import { FlatList, View } from "react-native";
import AppText from "../../components/Display/AppText";
import apptw from "../../utils/lib/tailwind";
import UserSearchResult from "../../components/Display/UserSearchResult";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import followRequest from "../../utils/requests/followRequest";
import { SecureStorage } from "../../services/secureStorage";
import { useSWRNativeRevalidate } from "@nandorojo/swr-react-native"
import { BASE_URL } from "../../utils/lib/envvar";
import useSWR from "swr";
import Loader from "../../components/Display/Loader";
import { NativeStackScreenProps } from "@react-navigation/native-stack";




type FindScreenRouteProp = NativeStackScreenProps<HomeStackParamList, 'FindScreen'>;

type Props = {
    route: FindScreenRouteProp;
};


interface MyData {
    data: any
}


const fetcher = async (url: string): Promise<MyData> => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
};



const FindScreen = ({ navigation, route }: FindScreenRouteProp) => {
    const [isButtLoading, setButtLoading] = useState<string[]>([]);
    // const navigation = useNavigation()
    const isFocused = useIsFocused()
    // const [find, setFind] = useState("")


    const find = route.params.find




    const { data, error, isLoading, mutate } = useSWR<MyData>(
        `${BASE_URL}/users/search?Username=${find}`,
        fetcher
    );
    useSWRNativeRevalidate({ mutate });



    // console.log(data?.data.data)

    const SendReq = async (id: any) => {
        setButtLoading((prev) => [...prev, id])
        const userId = await SecureStorage.getInst().getValueFor("userId")


        const body = {
            toId: id,
            fromId: userId
        }

        const response = await followRequest.newFollowRequest(body.toId, body.fromId)
        if (response.status === 200 || response.status === 202) {

            Toast.show({
                type: 'success',
                text1: 'Request Sent',
            }),
                navigation.navigate("DashBoard")
        } else {
            Toast.show({
                type: 'error',
                text1: 'Unknown Error',
            })
        }

        setButtLoading((prev) => prev.filter((itemId) => itemId !== id));
    }
    return (
        <LoggedInLayout>
            <View>

                <View >
                    <AppText style={apptw` mx-auto text-2xl`}> Search Results for {find}</AppText>
                </View>

                {isLoading ?

                    <Loader /> :

                    <View
                        style={apptw`px-5 pt-2`}
                    >



                        {data?.data.data.length < 1 ?
                            <>

                                <View>
                                    <AppText
                                        style={apptw`mt-10 mx-auto text-primary`}
                                    >

                                        User not found
                                    </AppText>

                                </View>
                            </> :
                            <>


                                <FlatList

                                    data={data?.data.data}
                                    // keyExtractor={(item) => item._id}
                                    renderItem={({ item, index }) => (
                                        <UserSearchResult
                                            clicky={() => { SendReq(item._id) }}
                                            image={item.image}
                                            name={item.UserName}
                                            text={
                                              isButtLoading.includes(item._id) ? "sending..." : "Request"
                                            }
                                        />
                                    )}

                                />

                            </>

                        }




                    </View>


                }



            </View>


        </LoggedInLayout>
    )

}

export default FindScreen