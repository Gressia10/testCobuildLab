import React, { useState } from 'react';
import {
  Container,
  Button,
  Text,
  Form,
  Item as FormItem,
  Input,
  Label,
} from 'native-base';

import * as task from '../client/task/task'

export default function AddButton({title, body, email, navigation}) {

  return (
    <Button full primary style={{ paddingBottom: 4 }} onPress={() => {task.addTask(email, title, body, navigation)}}>
        <Text>Add</Text>
    </Button>
    
  );
}