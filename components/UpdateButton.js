import React from 'react';
import {
  Button,
  Text,
} from 'native-base';

import * as task from '../client/task/task'

export default function UpdateButton({title, body, email, navigation}) {

  return (
    <Button onPress={() => task.updateTask(email, title, body, navigation)}>
        <Text>Update</Text>
    </Button>
  );
}