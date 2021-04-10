import React, {  useState  } from 'react';
import {
  Container,
  Button,
  Text,
  Form,
  Item as FormItem,
  Input,
  Label,
} from 'native-base';

import signup from '../client/auth/singup'

export default function Signup({navigation}) {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <Container>
        <Form>
            <FormItem floatingLabel>
            <Label >First Name</Label>
            <Input value={name} onChangeText={text => setName(text)} />
            </FormItem>
            <FormItem floatingLabel>
            <Label>Last Name</Label>
            <Input value={lastname} onChangeText={text => setLastname(text)}/>
            </FormItem>
            <FormItem floatingLabel>
            <Label>Email</Label>
            <Input value={email} onChangeText={text => setEmail(text)} />
            </FormItem>
            <FormItem floatingLabel last>
            <Label>Password</Label>
            <Input value={password} onChangeText={text => setPassword(text)} secureTextEntry={true} />
            </FormItem>

            <Button full primary style={{ paddingBottom: 4 }} onPress={async() => await signup(email, password, name, lastname, navigation)} >
            <Text> Sign Up </Text>
            </Button>
            <Button full light primary onPress={() => navigation.goBack()}><Text>Login</Text></Button>
        </Form>
        </Container>
    );
}