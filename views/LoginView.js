import React from 'react';
import {
  Container,
} from 'native-base';

import Login from "../components/Login"

export default function LoginView({navigation}) {

  return (
    <Container>
      <Login navigation={navigation}/>
    </Container>
  );
}