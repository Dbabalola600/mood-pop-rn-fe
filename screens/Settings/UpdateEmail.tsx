import { View } from "react-native"
import BasicBackButtonLayout from "../../components/Layout/BasicBackButtonLayout"
import AppButton from "../../components/Display/AppButton"
import AppText from "../../components/Display/AppText"
import AppTextField from "../../components/Input/AppTextField"
import apptw from "../../utils/lib/tailwind"


const UpdateEmail = () => {
    return (
        <BasicBackButtonLayout>
            <View>

                <View >
                    <AppText
                        style={apptw`left-32 bottom-10 text-2xl`}>
                        Update Email
                    </AppText>
                </View>


                <View
                    style={apptw`px-6`}
                >
                    <AppTextField
                        title="Old Email"
                        keyboardType="email-address"
                        // control={control}
                        // errorMessage={errors.userName?.message}
                        validationName="journaltitle"
                        placeholder="old Email"
                    />

                    <AppTextField
                        title="New Email"
                        keyboardType="email-address"
                        // control={control}
                        // errorMessage={errors.userName?.message}
                        validationName="journaltitle"
                        placeholder="new Email"
                    />


                </View>
                <View style={apptw`mb-19 px-6`}>
                    <AppButton
                        buttonStyle={apptw`my-6`}
                        // text={isButtonLoading ? "Loading..." : "Update Password"}
                        // onPress={onSubmit}
                        text="Update Email"
                    />
                </View>

            </View>

        </BasicBackButtonLayout>
    )
}


export default UpdateEmail