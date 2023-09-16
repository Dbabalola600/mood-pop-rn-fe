import { RouteProp, useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import BasicBackButtonLayout from "../../components/Layout/BasicBackButtonLayout"
import AppText from "../../components/Display/AppText";
import { View } from "react-native";
import { RootStackParamList } from "../allroutes";
import { useEffect, useState } from "react";
import authRequest from "../../utils/requests/authReq";
import UserSearchResult from "../../components/Display/UserSearchResult";
import { ScrollView } from "react-native";
import apptw from "../../utils/lib/tailwind";
import { authSelector } from "../../state/authSlice";
import { useSelector } from "react-redux";
import Toast from "react-native-toast-message";
import Loader from "../../components/Display/Loader";

// Define the type for your route parameters
type FindScreenRouteParams = {
  find: string;
};

type FindScreenRouteProp = RouteProp<RootStackParamList, 'FindScreen'>; // Replace ParamList with your actual param list

type Props = {
  route: FindScreenRouteProp;
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


const FindScreen: React.FC<Props> = ({ route }) => {
  const find = route.params?.find;
  const isFocused = useIsFocused(); //reloads useeffect when in focus
  const [userIn, setUser] = useState<UserIn[]>([])
  const [isLoading, setLoading] = useState(false)
  const navigation = useNavigation()
  const { _id } = useSelector(authSelector)





  const showInfo = async () => {
    setLoading(true)

    const response = await authRequest.SearchUser(find)
    setUser(response.data)
    setLoading(false)
  }

  useEffect(() => {
    console.log("running")
    if (isFocused) {
      showInfo();
    }
  }, [isFocused]);

  const SendReq = async (id: any) => {
    setLoading(true)

    const body = {
      toId: id,
      fromId: _id
    }
    console.log(id)
    const response = await authRequest.newFollowRequest(body.toId, body.fromId)
    if (response.status === 200 || 202) {

      Toast.show({
        type: 'success',
        text1: 'Request Sent',
      }),
        navigation.navigate("DashBoard")
    }
  }



  if (isLoading === true) {
    return (
      <Loader />
    )
  } else {
    return (
      <BasicBackButtonLayout>

        <View
          style={apptw`px-5`}
        >
          <View >
            <AppText style={apptw`left-32 bottom-10 text-2xl`}>Results for {find}</AppText>
          </View>


          {userIn[0] === undefined ? (
            <View>
              <AppText
                style={apptw`mt-10 mx-auto text-primary`}
              >

                User not found
              </AppText>

            </View>
          ) : (

            <View>
              {userIn.map((info, index) => (
                <View
                  key={index}
                >
                  <UserSearchResult
                    text={"Request"}
                    clicky={() => { SendReq(info._id) }}
                    image={info.image}
                    name={info.UserName}
                  />


                </View>
              ))}

            </View>
          )}



        </View>

      </BasicBackButtonLayout>
    )
  }
}

export default FindScreen