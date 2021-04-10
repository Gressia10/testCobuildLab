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

import login from '../client/auth/login'

export default function AddButton({title, body, navigation}) {

  return (
    <Button full primary style={{ paddingBottom: 4 }} onPress={() => {console.log("aaaa");navigation.navigate('Tasks')}}>
        <Text>Add</Text>
    </Button>
    
  );
}