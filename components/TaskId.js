import React, { useState, useEffect } from 'react';
import {
  Container,
  Button,
  Text,
  Form,
  Item as FormItem,
  Input,
  Label, 
  Right, 
} from 'native-base';

import * as task from '../client/task/task'
import UpdateStatus from '../components/UpdateStatus'
import UpdateButton from '../components/UpdateButton'
import DeleteButton from '../components/DeleteButton'

export default function TaskId({navigation}) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");
    const [state, setState]=useState(true);

    useEffect(()=>{
        task.getTask(setEmail, setTitle, setBody, setStatus);
    }, [state]);

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
            <DeleteButton navigation={navigation}/>
            <UpdateButton title={title} body={body} email={email} navigation={navigation}/>
        </Form>
        <UpdateStatus status={status} setStatus={setStatus} navigation={navigation}/>
    </Container>
  );
}