const { gql, GraphQLClient } = require("graphql-request");
import { AsyncStorage } from 'react-native';
import * as type from '../setting/variables';
import {GET_TASK_USER} from '../setting/queries';
import {ADD_TASK} from '../setting/queries'
import {ID_TASK} from '../setting/queries'



export async function task(navigation, setTask){
  const idUser = await AsyncStorage.getItem('id');
  const arrayId= idUser.split('"', 2)
  console.log('id '+arrayId[1]);
  const ENDPOINT = await type.WORKSPACE_ENDPOINT;
  
  const variables = await {
      id:arrayId[1]
  }

  const client = await new GraphQLClient(ENDPOINT, {
      headers: {
        Authorization: "Bearer "+type.TOKEN
      }
    });

  await client.request(GET_TASK_USER, variables).then(r => {console.log(r.user.tasks.items);
  setTask(r.user.tasks.items)});
}

export async function getTask(){
  const idTask = await AsyncStorage.getItem('id_task');
  // const arrayId= idTask.split('"', 2)
  console.log('id '+idTask);
  const ENDPOINT = await type.WORKSPACE_ENDPOINT;
  
  
  const variables = await {
      id:idTask
  }

  const client = await new GraphQLClient(ENDPOINT, {
      headers: {
        Authorization: "Bearer "+type.TOKEN
      }
    });

  await client.request(ID_TASK, variables).then(r => {console.log(r.user.tasks.items);
  });
}

export async function addTask(email, title, body, navigation){
  console.log("asignando");
  const idUser = await AsyncStorage.getItem('id');
  const arrayId= idUser.split('"', 2);
  console.log('id '+arrayId[1]);
  const ENDPOINT = await type.WORKSPACE_ENDPOINT;
  console.log('email: '+email+' title '+title+' body '+ body);
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

  await client.request(ADD_TASK, variables).then(r => {console.log(r)
    if(r){
      navigation.navigate("Tasks");
    };});
}