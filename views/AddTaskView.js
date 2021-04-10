import React from 'react';
import {
  Container,
} from 'native-base';

import AddTask from "../components/AddTask"

export default function AddTaskView({navigation}) {

  return (
    <Container>
      <AddTask navigation={navigation}/>
    </Container>
  );
}