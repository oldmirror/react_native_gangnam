import { Button, InputItem, Toast, Provider } from '@ant-design/react-native';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { USER_LIST } from './users';

type Props = {};
export default class App extends Component<Props> {
  state = {
    theme: undefined,
    name: '',
    password: '',
    name_error: '',
    password_error: ''
  };

  login = () => {
    const { name, password } = this.state;
    if (!name) {
      this.setState({
        name_error: '이름을 입력해주세요',
      });
    } else if (!password) {
      this.setState({
        password_error: '비밀번호를 입력해주세요.',
      });
    } else {
      const users_by_name = USER_LIST.filter((user) => user.name === name);
      if (users_by_name.length > 0) {
        const user = users_by_name[0];
        if (user.password !== password) {
          this.setState({
            password_error: '비밀번호가 틀립니다.',
          });
        } else {
          Toast.info('로그인에 성공했습니다', 1);
        }
      } else {
        this.setState({
          name_error: '이름에 해당하는 사용자가 없습니다',
        });
      }
    }
  }

  render() {
    return (
      <Provider theme={this.state.theme}>
        <View style={styles.container}>
          <InputItem
            placeholder='Name'
            error={Boolean(this.state.name_error)}
            onErrorClick={() => Toast.show(this.state.name_error, 1)}
            onChange={(name) => this.setState({ name, name_error: '' })}
          />
          <InputItem
            type='password'
            placeholder='Password'
            error={Boolean(this.state.password_error)}
            onErrorClick={() => Toast.show(this.state.password_error, 1)}
            onChange={(password) => this.setState({ password, password_error: '' })}
          />
          <Button onPress={this.login}>로그인</Button>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
