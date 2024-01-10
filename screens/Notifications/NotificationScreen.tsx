import { SafeAreaView, View, Text, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import tw from "twrnc";
import LoggedLayout from "../../components/Layout/LoggedLayout";
import followRequest from "../../utils/requests/followRequest";
import { SecureStorage } from "../../services/secureStorage";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useSWRNativeRevalidate } from "@nandorojo/swr-react-native";
import { find } from "@reduxjs/toolkit/dist/utils";
import useSWR from "swr";
import { BASE_URL } from "../../utils/lib/envvar";
import AppText from "../../components/Display/AppText";
import apptw from "../../utils/lib/tailwind";
import UserNotification from "../../components/Display/UserNotification";
import Toast from "react-native-toast-message";
import Loader from "../../components/Display/Loader";
import { usersArr } from "../../utils/lib/data/MockData";



type userNotifInfo = {

    peep: {
        _id: string,
        userId: string,
        from: string
    }
    user: {
        _id: string,
        UserName: string,
        email: string,
        isVerified: string,
        image: string
    }
}

export default function NotificationScreen() {
    const [isLoading, setLoading] = useState(false)
    const isFocused = useIsFocused()
    const [isUser, setUser] = useState<any[]>([])


    const showInfo = async () => {
        setLoading(true)
        // const response = await followRequest.getFollowRequests()

        setUser(usersArr.slice(0,3))
        setLoading(false)
    }


    useEffect(() => {
        showInfo()
    }, [isFocused])





    const AcceptReq = async (fId: any, ReqId: any) => {



        Toast.show({
            type: "success",
            text1: " Accepted"
        })
        showInfo()

    }



    const DecReq = async () => {
        Toast.show({
            type: "error",
            text1: "Unavailable"
        })
    }
    return (

        <LoggedLayout>


            {isLoading ?
                <Loader /> :



                <View>
                    {isUser.length < 1 ?
                        <>
                            <View>
                                <AppText
                                    style={apptw`text-center mx-auto text-primary text-3xl mt-10`}
                                >

                                    No Notifications
                                </AppText>
                            </View>
                        </> :
                        <>
                            <View
                                style={apptw`px-1 mt-7`}
                            >
                                {isUser.map((info, index) => (

                                    <View
                                        key={index}
                                    >

                                        <UserNotification
                                            Acceptclicky={() => { AcceptReq("", "") }}
                                            Declineclicky={() => { DecReq() }}
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



        </LoggedLayout>

    )
}