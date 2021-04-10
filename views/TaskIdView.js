import React from 'react';
import {
  Container,
} from 'native-base';

import TaskId from '../components/TaskId'

export default function TaskIdView({navigation}) {
  return (
    <Container>
      <TaskId navigation={navigation}/>
    </Container>
  );
}