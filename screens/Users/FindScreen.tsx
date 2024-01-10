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
import { usersArr } from "../../utils/lib/data/MockData";




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
    const [users, setUsers] = useState<any[]>([])


    const find = route.params.find




    const { data, error, isLoading, mutate } = useSWR<MyData>(
        `${BASE_URL}/users/search?Username=${find}`,
        fetcher
    );
    useSWRNativeRevalidate({ mutate });



    const showInfo = async () => {
        console.log(usersArr)
        setUsers(
            usersArr.filter(item => item.name.toLowerCase().includes(find.toLowerCase()))
        )
    }


    useEffect(() => {
        showInfo()
    }, [isFocused])

    const SendReq = async (id: any) => {
        setButtLoading(true)
      


        Toast.show({
            type: 'success',
            text1: 'Request Sent',
        }),
            navigation.goBack()


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



                        {users.length < 1 ?
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
                                    {users.map((info: any, index: any) => (

                                        <View
                                            key={index}
                                        >
                                            <UserSearchResult
                                                text={isButtLoading ? "sending..." : "Request"}
                                                clicky={() => { SendReq(index) }}
                                                image={info.image}
                                                name={info.name}
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