import { View, Image } from "react-native"
import AppText from "../../components/Display/AppText"
import BasicBackButtonLayout from "../../components/Layout/BasicBackButtonLayout"
import apptw from "../../utils/lib/tailwind"
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { authSelector } from "../../state/authSlice"
import authRequest from "../../utils/requests/authReq"
import { useIsFocused } from "@react-navigation/native"
import { Ionicons, MaterialIcons } from "@expo/vector-icons"

import AppButtonWIcon from "../../components/Display/AppButtonWIcon"
import Loader from "../../components/Display/Loader"

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


const ProfileScreen = () => {
    const [isLoading, setLoading] = useState(false)
    const { _id } = useSelector(authSelector)
    const [userIn, setUser] = useState<UserIn | null>(null)
    const isFocused = useIsFocused(); //reloads useeffect when in focus



    const showInfo = async () => {
        setLoading(true)

        const resposne = await authRequest.GetUserFull(_id)
        setUser(resposne.data)




        setLoading(false)
    }


    useEffect(() => {
        console.log("running")
        if (isFocused) {
            showInfo();
        }
    }, [isFocused]);
    if (isLoading === true) {
        return (
            <Loader />
        )
    } else {
    return (
        <GestureHandlerRootView

            style={{ flex: 1 }}
        >

            <BasicBackButtonLayout>
                <View >
                    <AppText style={apptw`font-bold absolute left-38 bottom-1 text-2xl`}> Profile</AppText>
                </View>

                <ScrollView
                    style={apptw`px-4 pt-5`}
                    contentContainerStyle={apptw.style(``, {
                        flexGrow: 1
                    })}
                >
                    <View
                        style={apptw`bg-white mx-auto rounded-full p-5 `}
                    >
                        {userIn?.image === undefined ? (
                            <Ionicons
                                name="md-person-outline"
                                size={120}
                                color="#0413BB"
                            />
                        ) : (
                            <Image
                                style={apptw`rounded-full w-50 h-50`}
                                // height={5}
                                source={{ uri: `${userIn?.image}` }}
                            />
                        )}
                    </View>


                    <View
                        style={apptw`mb-5`}
                    >
                        <AppText
                            style={apptw`font-bold`}
                        >
                            Username
                        </AppText>
                        <View
                            style={apptw`font-bold bg-white rounded-full px-5`}
                        >
                            <AppText
                            >
                                {userIn?.UserName}
                            </AppText>
                        </View>
                    </View>

                    <View
                        style={apptw`mb-5`}
                    >
                        <AppText
                            style={apptw`font-bold`}
                        >
                            Email
                        </AppText>
                        <View
                            style={apptw`font-bold bg-white rounded-full px-5`}
                        >
                            <AppText
                            >
                                {userIn?.email}
                            </AppText>
                        </View>
                    </View>

                    <View
                        style={apptw`mb-5`}
                    >
                        <AppText
                            style={apptw`font-bold`}
                        >
                            Link
                        </AppText>
                        <View
                            style={apptw`font-bold bg-white rounded-full px-5`}
                        >
                            <AppText
                            >
                                https://mood-pop.vercel.app/Users/{userIn?.UserName}
                            </AppText>
                        </View>
                    </View>






                </ScrollView>

            </BasicBackButtonLayout>
        </GestureHandlerRootView>
    )}
}


export default ProfileScreen