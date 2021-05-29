import React from "react";
import { View, StyleSheet, TouchableHighlight, Animated } from "react-native";
// import { FontAwesome5, Feather } from "@expo/vector-icons";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';

export default class AddButton extends React.Component {
    mode = new Animated.Value(0);
    buttonSize = new Animated.Value(1);

    handlePress = () => {
        Animated.sequence([
            Animated.timing(this.buttonSize, {
                toValue: 0.95,
                duration: 200
            }),
            Animated.timing(this.buttonSize, {
                toValue: 1
            }),
            Animated.timing(this.mode, {
                toValue: this.mode._value === 0 ? 1 : 0
            })
        ]).start();
    };

    render() {
        // const thermometerX = this.mode.interpolate({
        //     inputRange: [0, 1],
        //     outputRange: [-24, -100]
        // });

        // const thermometerY = this.mode.interpolate({
        //     inputRange: [0, 1],
        //     outputRange: [-50, -100]
        // });

        // const timeX = this.mode.interpolate({
        //     inputRange: [0, 1],
        //     outputRange: [-24, -24]
        // });

        // const timeY = this.mode.interpolate({
        //     inputRange: [0, 1],
        //     outputRange: [-50, -150]
        // });

        const pulseX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-24, 50]
        });

        const pulseY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, -100]
        });

        // const rotation = this.mode.interpolate({
        //     inputRange: [0, 1],
        //     outputRange: ["0deg", "45deg"]
        // });

        const sizeStyle = {
            transform: [{ scale: this.buttonSize }]
        };

        return (
            <View style={{ position: "absolute", alignItems: "center" }}>
                {/* <Animated.View style={{ position: "absolute", left: thermometerX, top: thermometerY }}>
                    <View style={styles.secondaryButton}>
                        <Feather name="thermometer" size={24} color="#FFF" />
                    </View>
                </Animated.View>
                <Animated.View style={{ position: "absolute", left: timeX, top: timeY }}>
                    <View style={styles.secondaryButton}>
                        <Feather name="clock" size={24} color="#FFF" />
                    </View>
                </Animated.View>
                <Animated.View style={{ position: "absolute", left: pulseX, top: pulseY }}>
                    <View style={styles.secondaryButton}>
                        <Feather name="activity" size={24} color="#FFF" />
                    </View>
                </Animated.View> */}
                {/* <Animated.View style={[styles.button, sizeStyle]}> */}
                <View styles={styles.button}>
                <TouchableHighlight onPress={this.handlePress} underlayColor="#7F58FF">
                        {/* <Animated.View style={{ transform: [{ rotate: rotation }] }}> */}
                        <View>
                        <FontAwesome5 name="plus" size={24} color="#FFF" />
                        </View>
                            
                        {/* </Animated.View> */}
                    </TouchableHighlight>
                </View>
                    
                {/* </Animated.View> */}
            </View>
        );
    }
}

