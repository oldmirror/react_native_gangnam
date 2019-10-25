import React from "react";
import {StyleSheet, View, Image, Text} from "react-native";

interface IProps {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    avatar: string
}

const UserInfo: React.FC<IProps> = ({id, email, firstName, lastName, avatar}) => {
    return (
        <View style={styles.container}>
            <View style={[styles.grid, styles.imageView]}>
                <Image style={[styles.image, {width: 130, height: 170}]} source={{uri: avatar}} />
            </View>
            <View style={[styles.grid, styles.infoView]}>
                <View style={styles.info}><Text style={styles.infoText}># {id}</Text></View>
                <View style={styles.info}><Text style={styles.infoText}>{email}</Text></View>
                <View style={styles.info}><Text style={styles.infoText}>{firstName}</Text></View>
                <View style={styles.info}><Text style={styles.infoText}>{lastName}</Text></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 35
    },
    grid: {

    },
    imageView: {

    },
    image: {
        borderRadius: 10
    },
    infoView: {
        marginLeft: 20
    },
    info: {
        marginVertical: 2
    },
    infoText: {
        color: 'white',
        fontSize: 20
    },
});

export default UserInfo;
