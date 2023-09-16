import { ScrollView, View } from "react-native"
import AppText from "../../components/Display/AppText"
import PressAppText from "../../components/Display/PressAppText"
import BasicBackButtonLayout from "../../components/Layout/BasicBackButtonLayout"
import apptw from "../../utils/lib/tailwind"
import AppButton from "../../components/Display/AppButton"
import AppTextField from "../../components/Input/AppTextField"
import tw from "twrnc"


const ForgotPassword = () => {
    return (
        <BasicBackButtonLayout>
            <>
                <View>

                </View>
                <ScrollView
                    style={tw`px-5 mt-5`}
                    contentContainerStyle={tw.style(` justify-between`, {
                        flexGrow: 1,
                    })}
                >
                    <View>

                        <AppText
                            style={apptw`text-3xl text-center text-primary`}>
                            Forgot Password
                        </AppText>
                        <AppText
                            style={apptw`text-lg text-center text-specpurple pb-5`}>
                            Enter email associated with your account
                        </AppText>




                        <AppTextField
                            title="Email"
                            // control={control}
                            // errorMessage={errors.userName?.message}
                            validationName="Email"
                            placeholder="email"
                        />






                    </View>
                    <View style={apptw`mb-19`}>
                        <AppButton
                            buttonStyle={apptw`  my-6`}
                            // text={isButtonLoading ? "Loading..." : "Sign In"}
                            // onPress={onSubmit}
                            text="Reset Password"

                        />






                    </View>
                </ScrollView>

            </>

        </BasicBackButtonLayout>
    )
}

export default ForgotPassword