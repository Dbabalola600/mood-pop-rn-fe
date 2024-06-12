import { Pressable, View, Image } from "react-native"
import apptw from "../../utils/lib/tailwind"
import AppText from "./AppText"
import { useState } from "react"
import { ScrollView } from "react-native-gesture-handler"
import { FontAwesome, Ionicons } from "@expo/vector-icons"



type FeedProps = {
    image: any,
    name: string | any,
    date: string | any,
    content: string | any

}




const PostsDisplay = (props: FeedProps) => {
    return (
        <ScrollView
            style={apptw`mb-5`}
            showsVerticalScrollIndicator={true}
        >
            <View
                style={apptw`bg-white rounded-b-xl rounded-t-md mb-2 `}>
                <View style={apptw`  p-2 rounded-t-md`}>


                    <View style={apptw` flex-row `}>
                        {props.image === undefined || props.image === ""  || props.image === null? (
                            <View>
                                <Ionicons name="md-person-outline"
                                    size={50}

                                    color="#0413BB" />
                            </View>
                        ) : (
                            <Image
                                style={apptw`rounded-full w-10 h-10`}
                                // height={5}
                                source={{ uri: `${props.image}` }}
                            />
                        )}
                        <View
                            style={apptw`mx-3`}
                        >

                            <AppText>
                                {props.name}


                            </AppText>
                            <AppText>{props.date}</AppText>
                        </View>
                    </View>







                </View>

                <View style={apptw`bg-specpurple w-full px-5 pb-2 rounded-b-xl  `}>
                    <AppText style={apptw`text-center`}> {props.content}</AppText>
                </View>
            </View>

        </ScrollView>


    )

}

export default PostsDisplay