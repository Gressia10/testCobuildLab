import React from 'react';
import {
  Container,
  Button,
  Text, 
  Picker, 
  Right,
} from 'native-base';

import * as task from '../client/task/task'

/**
 * Componente funcional que muestra el status de una Tarea y permite cambiarlo
 *
 * @param {String} status el status actual de la tarea
 * @param {Function} setStatus event handler para cambio de estado `status`
 * @param {Function} navigation para la navegacion
 *  @returns {React.FunctionComponent}
 */

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