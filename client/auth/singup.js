const { gql, GraphQLClient } = require("graphql-request");
import {MUTATION_SIGNUP} from '../setting/queries'
import * as type from '../setting/variables'

export default function signup(email, password, name, lastName, navigation){
    const ENDPOINT = type.WORKSPACE_ENDPOINT;

    
    
    const variables = {
        email: email,
        password: password,
        firstName: name, 
        lastName: lastName
    }

    const client = new GraphQLClient(ENDPOINT, {
        headers: {
          Authorization: "Bearer "+type.TOKEN
        }
      });

    client.request(MUTATION_SIGNUP, variables).then(r => {console.log(r); navigation.navigate('Login')});
}