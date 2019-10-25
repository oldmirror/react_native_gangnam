import React from 'react';
import styled from 'styled-components';
import {Button, Input} from 'native-base';
import {Text, View} from 'react-native';

const HomeScreen = props => {
  return (
    <Container>
      <Title>Here is a first react-native app</Title>
      <Button
        onPress={() => props.navigation.navigate('Signin')}
        title="Go to Signin">
        <Text>Button</Text>
      </Button>
    </Container>
  );
};

HomeScreen.navigationOptions = {
  title: 'Welcome',
};

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: palevioletred;
`;

export default HomeScreen;
