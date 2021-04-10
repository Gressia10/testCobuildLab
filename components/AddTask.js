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
    const [email, setEmail] = useState("");

  return (
    <Container>
      <Form>
        <FormItem floatingLabel>
          <Label>Title</Label>
          <Input value={title} onChangeText={text => setTitle(text)} />
        </FormItem>
        <FormItem floatingLabel last>
          <Label>Body</Label>
          <Input value={body} onChangeText={text => setBody(text)} />
        </FormItem>
        <FormItem floatingLabel>
          <Label>Email to assign</Label>
          <Input value={email} onChangeText={text => setEmail(text)} />
        </FormItem>

        <AddButton title={title} body={body} email={email} navigation={navigation}/>
      </Form>
    </Container>
  );
}
