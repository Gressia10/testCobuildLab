import React, { useState } from 'react';
import {
  Container,
  Form,
  Item as FormItem,
  Input,
  Label,
} from 'native-base';

import AddButton from "./addButton"

/**
 * Componente funcional que muestra el formulario para agregar una nueva tarea
 * renderiza el componente AddButton 
 * 
 * @param {Function} navigation para la navegacion
 *  @returns {React.FunctionComponent}
 */

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
