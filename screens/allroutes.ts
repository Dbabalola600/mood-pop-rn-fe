
import { NavigatorScreenParams } from "@react-navigation/native";



export type RootStackParamList ={
    HomeNavigation: NavigatorScreenParams<HomeStackParamList>
    AuthNavigator: NavigatorScreenParams<AuthStackParamList>;
}

export type AuthStackParamList ={
    Welcome: undefined,
    Test: undefined,
    SignIn: undefined
    SignUp: undefined
    ForgotPassword: undefined
}

export type HomeStackParamList ={
    DashBoard: undefined
    Profile: undefined
    Journal: undefined
    Resources: undefined
    Feed: undefined
    Notification: undefined
    Settings: undefined
    WriteJournal: undefined
    RecordJournalScreen:undefined
    AllRecordingScreen: undefined
    RecordingDetails: {id: any}
    AllWrittenScreen: undefined
    WrittenDetails:{id:any}
    NewPost: undefined
    FindScreen:{find:any}
    ContactSupportScreen: undefined
    UpdateUsernameScreen: undefined
    UpdatePasswordScreen: undefined
    UpdateEmailScreen: undefined
    UpdateProfilePictureScreen: undefined
    AllUsersScreen: undefined
    FollowerScreen: undefined
    FollowingScreen: undefined
    SeekHelpScreen: undefined
    MaterialResourcesScreen: undefined

}