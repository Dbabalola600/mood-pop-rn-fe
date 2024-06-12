import { Modal, View, StyleSheet, Animated } from "react-native"
import React, { useEffect, useRef } from 'react';

import Loader from "../../assets/loader_anim.svg"
import Logo from "../../assets/MoodLogo.svg"

const PulseLoadingModal = ({loading}: any) => {


    useEffect(() => {
        if (loading) {
            Animated.loop(
                Animated.timing(
                    spinValue,
                    {
                        toValue: 1,
                        duration: 2000,
                        useNativeDriver: true, // Use native driver for better performance
                    }
                )
            ).start();
        } else {
            spinValue.setValue(0); // Reset the animation value
        }
    }, [loading]);



    const spinValue = useRef(new Animated.Value(0)).current;


    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });
    return (
        <Modal
            transparent={true}
        >
            <View
                style={styles.modalContainer}
            >

                {/* <Animated.View style={[{ transform: [{ rotate: spin }] }]}> */}

                    <Logo
                        width={200}
                        height={200}
                    />
                {/* </Animated.View> */}

            </View>

        </Modal>
    )
}


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',

    },
    FormContainer: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingBottom: 30,
        paddingHorizontal: 15,
        width: '95%',
        borderRadius: 20
        // marginHorizontal: 20
    },
});
export default PulseLoadingModal