import { View } from "react-native"
import BasicBackButtonLayout from "../../components/Layout/BasicBackButtonLayout"
import apptw from "../../utils/lib/tailwind"
import AppText from "../../components/Display/AppText"
import AppTextField from "../../components/Input/AppTextField"
import AppButton from "../../components/Display/AppButton"



const UpdatePassword = () => {
    return (
        <BasicBackButtonLayout>
            <View

            >
                <View >
                    <AppText
                        style={apptw`left-32 bottom-10 text-2xl`}>
                        Update Password
                    </AppText>
                </View>


                <View
                    style={apptw`px-6`}
                >
                    <AppTextField
                        title="Old Password"
                        // control={control}
                        // errorMessage={errors.userName?.message}
                        validationName="journaltitle"
                        placeholder="old password"
                    />

                    <AppTextField
                        title="New Password"
                        // control={control}
                        // errorMessage={errors.userName?.message}
                        validationName="journaltitle"
                        placeholder="new password"
                    />


                </View>
                <View style={apptw`mb-19 px-6`}>
                    <AppButton
                        buttonStyle={apptw`my-6`}
                        // text={isButtonLoading ? "Loading..." : "Update Password"}
                        // onPress={onSubmit}
                        text="Update Password"
                    />
                </View>

            </View>

        </BasicBackButtonLayout>
    )
}


export default UpdatePassword