import { ActivityIndicator, KeyboardAvoidingView, Platform, View } from "react-native";
import BasicBackButtonLayout from "../../components/Layout/BasicBackButtonLayout";
import apptw from "../../utils/lib/tailwind";
import AppText from "../../components/Display/AppText";
import LoggedInLayout from "../../components/Layout/LoggedLayout";
import BasicLayout from "../../components/Layout/BasicLayout";
import UserNotification from "../../components/Display/UserNotification";
import { useSelector } from "react-redux";
import { authSelector } from "../../state/authSlice";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import authRequest from "../../utils/requests/authReq";
import Loader from "../../components/Display/Loader";



type UserIn = {
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

const Notifications = () => {
    const { _id } = useSelector(authSelector)
    const isFocused = useIsFocused();
    const [isLoading, setLoading] = useState(false)
    const [userIn, setUser] = useState<UserIn[]>([])
    const navigation = useNavigation()

    const showInfo = async () => {
        setLoading(true)

        const response = await authRequest.getFollowRequests(_id)


        setUser(response.data)

        setLoading(false)
    }



    useEffect(() => {
        console.log("running")
        if (isFocused) {
            showInfo();
        }
    }, [isFocused]);


    const AcceptReq = async (fId: any, ReqId: any) => {
        const body = {
            userId: _id,
            fId: fId,
            ReqId: ReqId
        }
        const Response = await authRequest.acceptFollowRequest(_id, fId, ReqId)
        if (Response.status === 200 || 202) {
            navigation.navigate("DashBoard")
        }
    }

    const DeclineReq = async () => {

    }


    console.log(userIn[1])
    if (isLoading === true) {
        return (
            <Loader />
        )
    } else {
        return (
            <KeyboardAvoidingView
                style={apptw` flex-1`}
                behavior={Platform.OS === "ios" ? "padding" : "height"}

            >

                <BasicLayout>
                    <View >
                        <AppText style={apptw`left-32  text-2xl`}>Notifications</AppText>
                    </View>




                    {userIn[0] === undefined ? (
                        <View >
                            <AppText
                                style={apptw`text-center mt-20`}>
                                You have no new notifications.
                            </AppText>
                        </View>
                    ) : (
                        <View
                            style={apptw`mx-5 mt-5`}
                        >

                            {userIn.map((info, index) => (
                                <View
                                    key={index}
                                >
                                    <UserNotification
                                        Acceptclicky={() => {
                                            AcceptReq(
                                                info.user._id,
                                                info.peep._id
                                            )
                                        }}
                                        image={info.user.image}
                                        name={info.user.UserName}
                                        Declineclicky={() => { }}
                                    />

                                </View>
                            ))}

                        </View>
                    )}





                </BasicLayout>

            </KeyboardAvoidingView>
        );
    }
};
export default Notifications;