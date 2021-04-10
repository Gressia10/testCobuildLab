import React from 'react';
import {
  Container,
} from 'native-base';

import Tasks from "../components/Tasks";

export default function TasksView({navigation}) {

  return (
    <Container>
      <Tasks navigation={navigation}/>
    </Container>
  );
}