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
import AddButton from "./addButton"

export default function AddTask({navigation}) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

  return (
    <Container>
      <Form>
        <FormItem floatingLabel>
          <Label>Title</Label>
          <Input value={title} onChangeText={text => setTitle(text)} />
        </FormItem>
        <FormItem floatingLabel last>
          <Label>Body</Label>
          <Input value={body} onChangeText={text => setBody(text)} secureTextEntry={true} />
        </FormItem>

        <AddButton title={title} body={body} navigation={navigation}/>
      </Form>
    </Container>
  );
}
