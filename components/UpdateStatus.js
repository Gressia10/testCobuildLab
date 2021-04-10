import React, { useState } from 'react';
import {
  Container,
  Button,
  Text,
  Form,
  Item as FormItem,
  Input,
  Label, 
  Picker, 
  Right, 
  Left
} from 'native-base';

import * as task from '../client/task/task'

export default function UpdateStatus({status, setStatus, navigation}) {

    function onValueChange(value) {
        setStatus(value)
    }

  return (
    <Container>
        <Right>
            <Picker
            note
            mode="dropdown"
            style={{ width: 150 }}
            selectedValue={status}
            onValueChange={value => onValueChange(value)}
            >
                <Picker.Item label="Unfinished" value="Unfinished" />
                <Picker.Item label="Finished" value="Finished" />
            </Picker>
        </Right>
        <Right>
          <Button onPress={() => {task.updateStatus(status, navigation)}}>
            <Text>Update Status</Text>
          </Button>
        </Right>
    </Container>
  );
}