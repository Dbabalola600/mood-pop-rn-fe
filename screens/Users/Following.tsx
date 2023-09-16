import { useEffect, useState } from "react"
import authRequest from "../../utils/requests/authReq"
import { useIsFocused } from "@react-navigation/native"
import { useSelector } from "react-redux"
import { authSelector } from "../../state/authSlice"
import { View } from "react-native"
import UserSearchResult from "../../components/Display/UserSearchResult"
import apptw from "../../utils/lib/tailwind"
import People2 from "../../assets/People2.svg"
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


const Following = () => {
    const [userIn, setUser] = useState<UserIn[]>([])
    const { _id } = useSelector(authSelector)
    const [isLoading, setLoading] = useState(false)
    const isFocused = useIsFocused();

    const showFollowing = async () => {
        setLoading(true)
        const response = await authRequest.GetFollowing(_id)
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
                    
                    <People2
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

    )}
}


export default Following