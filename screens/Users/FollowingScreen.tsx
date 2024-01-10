import { View } from "react-native";
import BasicBackButtonLayout from "../../components/Layout/BasicBackButtonLayout";
import AppText from "../../components/Display/AppText";
import { useEffect, useState } from "react";
import { useSWRNativeRevalidate } from "@nandorojo/swr-react-native";
import { find } from "@reduxjs/toolkit/dist/utils";
import useSWR from "swr";
import { BASE_URL } from "../../utils/lib/envvar";
import { useIsFocused } from "@react-navigation/native";
import { SecureStorage } from "../../services/secureStorage";
import Loader from "../../components/Display/Loader";
import UserSearchResult from "../../components/Display/UserSearchResult";
import apptw from "../../utils/lib/tailwind";
import People1 from "../../assets/People1.svg"
import followRequest from "../../utils/requests/followRequest";
import { followingArr } from "../../utils/lib/data/MockData";


interface MyData {
    data: any
}


const fetcher = async (url: string): Promise<MyData> => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
};


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



export default function FollowingScreen() {

    const [isLoading, setLoading] = useState(false)
    const [isButtLoading, setButtLoading] = useState(false)
    const isFocused = useIsFocused()
    const [isUser, setUser] = useState<any[]>([])


    const showInfo = async () => {

        setLoading(true)


        setUser(followingArr)

        setLoading(false)

    }

    useEffect(() => {
        showInfo()
    }, [isFocused])

   
    return (

        <View>

            {isLoading ?
                <Loader /> :

                <View
                    style={apptw`px-4 mt-5`}
                >

                    {isUser.length < 1 ?
                        <>
                            <People1
                                width={"300"}
                                height={"200"}
                                style={apptw`mx-auto  mt-5`}

                            />
                        </> :

                        <>
                            {isUser.map((info: any, index) => (
                                <View
                                    key={index}
                                >

                                    <UserSearchResult
                                        clicky={() => { }}
                                        image={info.image}
                                        name={info.name}
                                        text={"Remove"}
                                    />


                                </View>

                            ))}
                        </>
                    }


                </View>

            }




        </View>


    )
}