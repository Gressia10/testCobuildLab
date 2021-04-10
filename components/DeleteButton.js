import React from 'react';
import {
  Button,
  Text, 
  Right, 
} from 'native-base';

import * as task from '../client/task/task'

export default function DeleteButton({navigation}) {
  return (
    <Right>
        <Button onPress={() => task.deleteTask(navigation)}>
            <Text>Delete</Text>
        </Button>
    </Right>
  );
}