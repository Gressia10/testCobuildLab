import React from 'react';
import {
  Button,
  Text,
} from 'native-base';

import * as task from '../client/task/task'

/**
 * Componente funcional que muestra un boton para actualizar la informacion de una Tarea 
 *
 * @param {String} title titulo de la tarea
 * @param {String} body cuerpo de la tarea
 * @param {String} email correo del usuario a quien se le asigno la tarea el cual puede ser un correo diferente al del usuario que creo la tarea
 * @param {Function} navigation para la navegacion
 *  @returns {React.FunctionComponent}
 */

export default function UpdateButton({title, body, email, navigation}) {

  return (
    <Button onPress={() => task.updateTask(email, title, body, navigation)}>
        <Text>Update</Text>
    </Button>
  );
}