const { GraphQLClient } = require("graphql-request");
import { AsyncStorage } from 'react-native';
import * as type from '../setting/variables';
import {GET_TASK_USER} from '../setting/queries';
import {ADD_TASK} from '../setting/queries'
import {ID_TASK} from '../setting/queries'
import {UPDATE_TASK} from '../setting/queries'
import {alert} from '../setting/alert'
import {DELETE_TASK} from '../setting/queries'
import {UPDATE_STATUS} from '../setting/queries'



export async function task(navigation, setTask){
  const idUser = await AsyncStorage.getItem('id');
  const arrayId= idUser.split('"', 2)
  const ENDPOINT = await type.WORKSPACE_ENDPOINT;
  
  const variables = await {
      id:arrayId[1]
  }

  const client = await new GraphQLClient(ENDPOINT, {
      headers: {
        Authorization: "Bearer "+type.TOKEN
      }
    });

  await client.request(GET_TASK_USER, variables).then(r => {
  setTask(r.user.tasks.items)
  }).catch(error => {
    alert()
  });
}

export async function getTask(setEmail, setTitle, setBody, setStatus){
  const idTask = await AsyncStorage.getItem('id_task');
  const arrayId= idTask.split('"', 2)
  const ENDPOINT = await type.WORKSPACE_ENDPOINT;
  
  
  const variables = await {
      id:arrayId[1]
  }

  const client = await new GraphQLClient(ENDPOINT, {
      headers: {
        Authorization: "Bearer "+type.TOKEN
      }
    });

  await client.request(ID_TASK, variables).then(r => {
    setEmail(r.task.user_assigned.email);
    setTitle(r.task.title);
    setBody(r.task.body);
    setStatus(r.task.status);
  }).catch(error => {
    alert()
  });
}

export async function addTask(email, title, body, navigation){
  const idUser = await AsyncStorage.getItem('id');
  const arrayId= idUser.split('"', 2);
  const ENDPOINT = await type.WORKSPACE_ENDPOINT;
  const variables = await {
      id:arrayId[1], 
      email:email, 
      title:title,
      body:body
  }

  const client = await new GraphQLClient(ENDPOINT, {
      headers: {
        Authorization: "Bearer "+type.TOKEN
      }
    });

  await client.request(ADD_TASK, variables).then(r => {
    if(r){
      navigation.navigate("Tasks");
    }
  }).catch(error => {
    alert()
  });
}

export async function updateTask(email, title, body, navigation){
  const idTask = await AsyncStorage.getItem('id_task');
  const arrayId= idTask.split('"', 2)
  const ENDPOINT = await type.WORKSPACE_ENDPOINT;
  
  
  const variables = await {
      id:arrayId[1],
      title:title,
      body:body,
      email:email
  }

  const client = await new GraphQLClient(ENDPOINT, {
      headers: {
        Authorization: "Bearer "+type.TOKEN
      }
    });

  await client.request(UPDATE_TASK, variables).then(r => {
    if(r){
      navigation.navigate("Tasks");
    }
  }).catch(error => {
    alert()
  });
} 

export async function deleteTask(navigation){
  const idTask = await AsyncStorage.getItem('id_task');
  const arrayId= idTask.split('"', 2)
  const ENDPOINT = await type.WORKSPACE_ENDPOINT;
  
  
  const variables = await {
      id:arrayId[1]
  }

  const client = await new GraphQLClient(ENDPOINT, {
      headers: {
        Authorization: "Bearer "+type.TOKEN
      }
    });

  await client.request(DELETE_TASK, variables).then(r => {
    if(r){
      navigation.navigate("Tasks");
    }
  }).catch(error => {
    alert()
  });
}

export async function updateStatus(status, navigation){
  const idTask = await AsyncStorage.getItem('id_task');
  const arrayId= idTask.split('"', 2)
  const ENDPOINT = await type.WORKSPACE_ENDPOINT;
  
  
  const variables = await {
      id:arrayId[1],
      status:status
  }

  const client = await new GraphQLClient(ENDPOINT, {
      headers: {
        Authorization: "Bearer "+type.TOKEN
      }
    });

  await client.request(UPDATE_STATUS, variables).then(r => {
    if(r){
      navigation.navigate("Tasks");
    }
  }).catch(error => {
    alert()
  });
}