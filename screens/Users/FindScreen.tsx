import { RouteProp, useIsFocused, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../allroutes";
import LoggedInLayout from "../../components/Layout/LoggedLayout";
import { View } from "react-native";
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




type FindScreenRouteProp = RouteProp<RootStackParamList, 'FindScreen'>; // Replace ParamList with your actual param list

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



const FindScreen: React.FC<Props> = ({ route }) => {
    const [isButtLoading, setButtLoading] = useState(false)
    const navigation = useNavigation()
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
        setButtLoading(true)
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
                navigation.navigate("DashBoardScreen")
        } else {
            Toast.show({
                type: 'error',
                text1: 'Unknown Error',
            })
        }

        setButtLoading(false)
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

                                <View
                                >
                                    {data?.data.data.map((info: any, index: any) => (

                                        <View
                                            key={info._id}
                                        >
                                            <UserSearchResult
                                                text={isButtLoading ? "sending..." : "Request"}
                                                clicky={() => { SendReq(info._id) }}
                                                image={info.image}
                                                name={info.UserName}
                                            />


                                        </View>

                                    ))}
                                </View>

                            </>

                        }




                    </View>


                }



            </View>


        </LoggedInLayout>
    )

}

export default FindScreen