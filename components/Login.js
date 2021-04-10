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

/**
 * Componente funcional que muestra un formulario para iniciar sesion
 * 
 *@param {Function} navigation para la navegacion
 *  @returns {React.FunctionComponent}
 */

export default function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <Container>
      <Form>
        <FormItem floatingLabel>
          <Label>Email</Label>
          <Input value={email} onChangeText={text => setEmail(text)} />
        </FormItem>
        <FormItem floatingLabel last>
          <Label>Password</Label>
          <Input value={password} onChangeText={text => setPassword(text)} secureTextEntry={true} />
        </FormItem>

        <Button disabled={password=="" || email==""} full primary style={{ paddingBottom: 4 }} onPress={()=> login(email, password, navigation)}>
          <Text> Login </Text>
        </Button>
        <Button full light primary onPress={() => navigation.navigate('Signup')}><Text> Sign Up </Text></Button>
      </Form>
    </Container>
  );
}
