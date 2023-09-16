import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../screens/allroutes";
import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword";
import PasswordToken from "../screens/ForgotPassword/PasswordToken";
import SignUp from "../screens/SignUp";
import Tabs from "./Tabs";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import Test from "../screens/Tests/Test";
import WriteJournal from "../screens/Journal/WriteJournal";
import UpdateEmail from "../screens/Settings/UpdateEmail";
import UpdatePassword from "../screens/Settings/UpdatePassword";
import UpdateProfilePicture from "../screens/Settings/UpdateProfilePicture";
import UpdateUsername from "../screens/Settings/UpdateUsername";
import NewPost from "../screens/Post/NewPost";
import ResourceMat from "../screens/Resources/ResourceMat";
import SeekHelp from "../screens/Resources/SeekHelp";
import FindScreen from "../screens/Users/FindScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import UsersScreen from "../screens/Users/UsersScreen";
import RecordJournal from "../screens/Journal/RecordJournal";
import JournalDetails from "../screens/Journal/JournalDetails";
import ContactSupport from "../screens/Settings/ContactSupport";




const Stack = createNativeStackNavigator<RootStackParamList>();




const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='Welcome'
        >

            <Stack.Screen
                name="Welcome"
                component={Welcome}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
            />

            <Stack.Screen
                name="SignUp"
                component={SignUp}
            />

            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
            />

            <Stack.Screen
                name="PasswordToken"
                component={PasswordToken}
            />
            <Stack.Screen
                name='DashBoard'
                component={Tabs}
            />

            <Stack.Screen
                name='Test'
                component={Test}
            />

            {/* settigns */}
            <Stack.Screen
              name='SettingsScreen'
              component={SettingsScreen}
            />
            <Stack.Screen
                name='ProfileScreen'
                component={ProfileScreen}
            />
            <Stack.Screen
                name='UpdatePassword'
                component={UpdatePassword}
            />
            <Stack.Screen
                name="UpdateEmail"
                component={UpdateEmail}
            />
            <Stack.Screen
                name='UpdateProfilePicture'
                component={UpdateProfilePicture}
            />

            <Stack.Screen
                name="UpdateUsername"
                component={UpdateUsername}
            />
             <Stack.Screen
              name='ContactSupport'
              component={ContactSupport}
            />



            {/* journal */}
            <Stack.Screen
                name="WriteJournal"
                component={WriteJournal}
            />
             <Stack.Screen
              name='RecordJournal'
              component={RecordJournal}
            />
              <Stack.Screen
              name='JournalDetails'
              component={JournalDetails}
            />


            {/* posts */}
            <Stack.Screen
                name='NewPost'
                component={NewPost}
            />


            {/* resources */}

            <Stack.Screen
                name='SeekHelp'
                component={SeekHelp}
            />

            <Stack.Screen
                name="ResourceMat"
                component={ResourceMat}
            />


            {/* misc */}
            <Stack.Screen
              name="FindScreen"
              component={FindScreen}
            />
              <Stack.Screen
              name="UsersScreen"
              component={UsersScreen}
            />
        </Stack.Navigator>
    )

}

export default AuthStack