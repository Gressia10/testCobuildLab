const { gql, GraphQLClient } = require("graphql-request");
import { AsyncStorage } from 'react-native';
import * as type from '../setting/variables'



export default async function task(navigation, setTask){
    const idUser = await AsyncStorage.getItem('id');
    const arrayId= idUser.split('"', 2)
    console.log('id '+arrayId[1]);
    const ENDPOINT = await type.WORKSPACE_ENDPOINT;
    const GET_TASK_USER =gql `
    query user(
        $id:ID!
    ) {
        user(id: $id) {
          tasks {
            items{
              title
              body
              user_assigned{
                id
                email
                firstName
                lastName
              }
            }
          }
        }
      }
    `;
    
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