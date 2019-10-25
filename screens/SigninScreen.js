import React from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components';
import {Button} from 'native-base';

const SigninScreen = props => {
  const handleSignin = async () => {
    try {
      const signin = '';
      console.log(signin);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Title>Signin page</Title>
      <SigninButton onPress={() => handleSignin()}>
        <SigninText>Sign in</SigninText>
      </SigninButton>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 32px;
  color: gray;
`;

const SigninButton = styled(Button)`
  margin-top: 10px;
`;

const SigninText = styled.Text`
  width: 100px;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
`;

SigninScreen.navigationOptions = {
  title: 'Sign In or Register',
};

export default SigninScreen;
