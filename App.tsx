import { StatusBar } from 'expo-status-bar';
import { Settings, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import apptw from './utils/lib/tailwind';
import { Provider } from 'react-redux';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootStackParamList } from './screens/allroutes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import Test from './screens/Tests/Test';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './Navigation/CustomDrawer';

import Notifications from './screens/Notifications/Notifications';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import ForgotPassword from './screens/ForgotPassword/ForgotPassword';
import PasswordToken from './screens/ForgotPassword/PasswordToken';
import DashBoard from './screens/DashBoard';
import Journal from './screens/Journal/Journal';
import Feed from './screens/Feed/Feed';
import Resources from './screens/Resources/Resources';
import SettingsScreen from './screens/Settings/SettingsScreen';
import WriteJournal from './screens/Journal/WriteJournal';
import UpdatePassword from './screens/Settings/UpdatePassword';
import UpdateEmail from './screens/Settings/UpdateEmail';
import UpdateProfilePicture from './screens/Settings/UpdateProfilePicture';
import UpdateUsername from './screens/Settings/UpdateUsername';
import { store } from './state/store';
import NewPost from './screens/Post/NewPost';
import SeekHelp from './screens/Resources/SeekHelp';
import FindScreen from './screens/Users/FindScreen';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MyTabBar from './Navigation/CustomBottomNav';
import Tabs from './Navigation/Tabs';
import UsersScreen from './screens/Users/UsersScreen';
import RecordJournal from './screens/Journal/RecordJournal';
import { PersistGate } from 'redux-persist/integration/react';
import JournalDetails from './screens/Journal/JournalDetails';
import ResourceMat from './screens/Resources/ResourceMat';
import ProfileScreen from './screens/Profile/ProfileScreen';
import ContactSupport from './screens/Settings/ContactSupport';
import AuthStack from './Navigation/AuthStack';
import  Toast, { BaseToast, BaseToastProps, ErrorToast } from 'react-native-toast-message';






function AppNavB() {
  const Tab = createMaterialBottomTabNavigator();


  return (
    <SafeAreaProvider>

      <Tabs />

    </SafeAreaProvider>
  )
}



const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#007BFF'  }}
      contentContainerStyle={{ paddingHorizontal: 10,  }}
      text1Style={{
        fontSize: 20,
        fontWeight: '400'
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17
      }}
      text2Style={{
        fontSize: 15
      }}
    />
  ),
  /*
    Or create a completely new type - `tomatoToast`,
    building the layout from scratch.

    I can consume any custom `props` I want.
    They will be passed when calling the `show` method (see below)
  */
  // tomatoToast: ({ text1, props }) => (
  //   <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
  //     <Text>{text1}</Text>
  //     <Text>{props.uuid}</Text>
  //   </View>
  // )
};


function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();



  return (
    <Provider
      store={store}
    >
      {/* <PersistGate loading={null} persistor={persistor}> */}

      <SafeAreaProvider>
        {/* <StatusBar style='auto' /> */}


        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>



      </SafeAreaProvider>
      {/* </PersistGate> */}
      <Toast config={toastConfig} />
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App