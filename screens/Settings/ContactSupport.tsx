import { ScrollView, View } from "react-native"
import AppText from "../../components/Display/AppText"
import BasicBackButtonLayout from "../../components/Layout/BasicBackButtonLayout"
import apptw from "../../utils/lib/tailwind"


const ContactSupport = () => {
    return (
        <BasicBackButtonLayout>
            <View>
                <AppText style={apptw`left-32 bottom-10 text-2xl`}>Support</AppText>
            </View>
           


           <View
           style={apptw`mx-5`}
           >
            <AppText>
                Feel free to send an Email 
            </AppText>

            <View style={apptw`bg-white rounded-xl mt-5 p-5`}>
            <AppText>
            mood.pop.app@gmail.com
            </AppText>
            </View>
           
           </View>
        </BasicBackButtonLayout>
    )
}

export default ContactSupport

