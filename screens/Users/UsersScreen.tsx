import { GestureHandlerRootView } from "react-native-gesture-handler"
import BasicBackButtonLayout from "../../components/Layout/BasicBackButtonLayout"
import { View } from "react-native"
import AppText from "../../components/Display/AppText"
import apptw from "../../utils/lib/tailwind"
import UserSearchResult from "../../components/Display/UserSearchResult"
import SearchBar2 from "../../components/Input/SearchBar2"
import { useSelector } from "react-redux"
import { authSelector } from "../../state/authSlice"
import { useEffect, useState } from "react"
import authRequest from "../../utils/requests/authReq"
import { useIsFocused } from "@react-navigation/native"
import Following from "./Following"
import Followers from "./Followers"


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


type UserIn2 = {
    _id: string | null
    UserName: string | null,
    email: string | null,
    password: string | null,
    image: string | null,
    isVerified: boolean | null,
    isActive: boolean | null,
    role: string | null
}


const UsersScreen = () => {
    const { _id } = useSelector(authSelector)
    const [isLoading, setLoading] = useState(false)
    const [userIn, setUser] = useState<UserIn[]>([])
    const isFocused = useIsFocused();
    const [userIn2, setUser2] = useState<UserIn2[]>([])


    const showFollowers = async () => {
        setLoading(true)
        const response = await authRequest.GetFollowers(_id)
        console.log(response)

        setUser(response)

        setLoading(false)
    }


    const showFollowing = async () => {
        setLoading(true)
        const response = await authRequest.GetFollowing(_id)
        console.log(response)

        setUser2(response)

        setLoading(false)
    }



    useEffect(() => {
        if (isFocused) {
            showFollowers(),
                showFollowing()
        }
    }, [isFocused])


    return (
        <BasicBackButtonLayout>
            <View>
                <AppText style={apptw`left-32 bottom-10 text-2xl`}>
                    Partners
                </AppText>


            </View>




            <View
                style={apptw`px-5`}
            >

                <SearchBar2 />
                {/* following */}
                <View
                    style={apptw`mt-5 pb-5`}
                >
                    <AppText
                        style={apptw`text-bold text-2xl `}
                    >
                        Following
                    </AppText>

                    <View
                        style={apptw`bg-primary w-1/2 h-1 rounded-full`}
                    />


                    <Following />
                </View>



                {/* followers */}
                <View
                    style={apptw`mt-5 pb-5`}
                >
                    <AppText
                        style={apptw`text-bold text-2xl `}
                    >
                        Followers
                    </AppText>

                    <View
                        style={apptw`bg-primary w-1/2 h-1 rounded-full`}
                    />

                    <Followers />
                </View>
            </View>


        </BasicBackButtonLayout>


    )
}

export default UsersScreen