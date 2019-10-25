import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import UserInfoList from './components/UserInfoList';

interface IProps {

}

const App: React.FC<IProps> = () => {
    return (
        <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.title}>♘ User Info List..</Text>
    </View>
    <View style={styles.main}>
        <UserInfoList />
        </View>
        </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262926',
        alignItems: 'flex-start'
    },
    header: {
        marginTop: 80,
        backgroundColor: 'black',
        width: '100%'
    },
    title: {
        fontSize: 40,
        color: 'white',
        marginLeft: 20
    },
    main: {
        width: '100%',
        marginTop: 20,
        marginHorizontal: 'auto',
        display: 'flex',
        alignItems: 'center'
    }
});

export default App;
