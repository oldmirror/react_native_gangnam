import React from "react";
import {View, Text} from "react-native";
import {StyleSheet} from "react-native";

interface IProps {
}

const Loading: React.FC<IProps> = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                ⌛️
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#262926',
        alignItems: 'center',
        justifyContent: 'center',
        height: '85%'
    },
    text: {
        fontSize: 100
    }
})

export default Loading;
