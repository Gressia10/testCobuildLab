import React from 'react';
import {
  Container,
} from 'native-base';

import Signup from "../components/Signup"

export default function SignupView({navigation}) {

  return (
    <Container>
      <Signup navigation={navigation}/>
    </Container>
  );
}