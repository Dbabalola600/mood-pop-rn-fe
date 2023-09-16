import { useIsFocused } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import UserSearchResult from "../../components/Display/UserSearchResult";
import { authSelector } from "../../state/authSlice";
import apptw from "../../utils/lib/tailwind";
import authRequest from "../../utils/requests/authReq";
import People1 from "../../assets/People1.svg"
import Loader from "../../components/Display/Loader";


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


const Followers = () => {
    const [userIn, setUser] = useState<UserIn[]>([])
    const { _id } = useSelector(authSelector)
    const [isLoading, setLoading] = useState(false)
    const isFocused = useIsFocused();

    const showFollowing = async () => {
        setLoading(true)
        const response = await authRequest.GetFollowers(_id)
        console.log(response)

        setUser(response)

        setLoading(false)
    }

    useEffect(() => {
        if (isFocused) {

            showFollowing()
        }
    }, [isFocused])


    if (isLoading === true) {
        return (
            <Loader />
        )
    } else {
        return (
            <View>



                {userIn[0] === undefined ? (
                    <View>

                        <People1
                            width={"300"}
                            height={"200"}
                            style={apptw`mx-auto  mt-5`}

                        />

                    </View>
                ) : (

                    <View>
                        {userIn.map((info, index) => (
                            <View
                                key={index}
                                style={apptw`mt-3`}
                            >
                                <UserSearchResult
                                    text={"Remove"}
                                    clicky={() => { }}
                                    image={info.image}
                                    name={info.UserName}
                                />


                            </View>
                        ))}

                    </View>

                )}

            </View>

        )
    }
}

export default Followers