import { apisAreAvailable } from 'expo';
const { request, gql, GraphQLClient } = require("graphql-request");
import { AsyncStorage } from 'react-native';
import {QUERY_LOGIN} from '../setting/queries'
import * as type from '../setting/variables'

export default function login (email, password, navigation){
    const ENDPOINT = type.WORKSPACE_ENDPOINT;

    const variables = {
        email: email,
        password: password,
    }

    const client = new GraphQLClient(ENDPOINT, {
        headers: {
          Authorization: "Bearer "+type.TOKEN
        }
      });

    client.request(QUERY_LOGIN, variables).then(r => {
        AsyncStorage.setItem('id', JSON.stringify(r.usersList.items[0].id));
        if(r.usersList.items[0].id != null){
            navigation.navigate('Tasks')
        }
    });

}
