import React from 'react';
import {
  Button,
  Text, 
  Right, 
} from 'native-base';

import * as task from '../client/task/task'

/**
 * Componente funcional que muestra un boton para eliminar una tarea 
 * @param {Function} navigation para la navegacion
 *  @returns {React.FunctionComponent}
 */

export default function DeleteButton({navigation}) {
  return (
    <Right>
        <Button onPress={() => task.deleteTask(navigation)}>
            <Text>Delete</Text>
        </Button>
    </Right>
  );
}