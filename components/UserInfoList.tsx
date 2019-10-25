import React, {Component} from "react";
import {FlatList, SafeAreaView, Text, StyleSheet} from "react-native";
import UserInfo from './UserInfo';
import api from "../api/api";
import Loading from './Loading';

interface IState {
    isLoaded: boolean,
    error: string,
    page: number,
    data: Array<Object>
}

class UserInfoList extends Component<{}, IState> {
    public readonly state: Readonly<IState> = {
        isLoaded: false,
        error: '',
        page: 1,
        data: []
    };

    componentDidMount() {
        this._setUserInfoList();
    }

    render() {
        const {isLoaded, error, data} = this.state;
        return (
            error ? (
                <Text style={styles.error}>{error}</Text>
            ) : (
                isLoaded ? (
                    <SafeAreaView>
                        <FlatList
                            data={data}
                            renderItem={({item}: any) =>
                                <UserInfo
                                    id={item.id}
                                    email={item.email}
                                    firstName={item.first_name}
                                    lastName={item.last_name}
                                    avatar={item.avatar}/>}
                            keyExtractor={(item: any) => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            onEndReachedThreshold={0.5}
                            onEndReached={(info: {distanceFromEnd: number}) => {this._handleEndReached()}}
                            contentContainerStyle={{paddingBottom: 110}}
                        />
                    </SafeAreaView>
                ) : (
                    <Loading />
                )
            )
        );
    }

    _setUserInfoList = async () => {
        const {page, data} = this.state;
        try {
            const {
                data: {
                    data: newData
                }
            } = await api.getUserInfoList({page});
            this.setState({
                data: [...data, ...newData]
            });
            // throw '☢️ [500] Server Error.........'
        } catch (e) {
            this.setState({
                error: e
            });
        } finally {
            this.setState({
                isLoaded: true
            });
        }
    };

    _handleEndReached = async () => {
        this.setState((prev) => {
            return {
                page: prev.page + 1
            };
        }, () => {this._setUserInfoList()});
    };
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 25,
        marginTop: '10%'
    }
});

export default UserInfoList;
