import { View } from "react-native";
import BasicBackButtonLayout from "../../components/Layout/BasicBackButtonLayout";
import AppText from "../../components/Display/AppText";
import { useIsFocused } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import followRequest from "../../utils/requests/followRequest";
import Loader from "../../components/Display/Loader";
import UserSearchResult from "../../components/Display/UserSearchResult";
import apptw from "../../utils/lib/tailwind";
import People2 from "../../assets/People2.svg"
import { followerArr } from "../../utils/lib/data/MockData";



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


export default function FollowerScreen() {


    const [isLoading, setLoading] = useState(false)
    const [isButtLoading, setButtLoading] = useState(false)
    const isFocused = useIsFocused()
    const [isUser, setUser] = useState<any[]>([])


    const showInfo = async () => {

        setLoading(true)


        setUser(followerArr)

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
                        <People2
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