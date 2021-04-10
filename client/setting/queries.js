const { gql} = require("graphql-request");

export const QUERY_LOGIN =gql `
    query userCreate(
        $email:String!
        $password:String!
    ){
        usersList(filter: {
            email: {
            contains: $email
            },
            password:{
            contains: $password
            }
        }) {
            items {
            id
            lastName
            firstName
            email
            }
        }
        }
`;

export const MUTATION_SIGNUP =gql `
mutation userCreate(
    $email:String!
    $password:String!
    $firstName:String!
    $lastName:String!
){
    userCreate(data: {
    email: $email
    password:$password
    firstName:$firstName
    lastName:$lastName
    }) {
    id
    email
    password
    }
}
`;

export const ADD_TASK = gql`
mutation ($id:ID!, $email:String!, $title:String!, $body:String!){
    userUpdate(
    filter: {
      id: $id
    },
    data: {
      tasks: {
        create: {
            title: $title,
            body: $body,
            user_assigned:{connect:{email:$email}}
        },
      }
    }) {
      tasks{
        count
      }
    }
}
`;

export const GET_TASK_USER =gql `
query user(
    $id:ID!
) {
    user(id: $id) {
      tasks {
        items{
          id
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

export const ID_TASK = gql`
  query task($id:ID!){
    task(id: $id) {
      id
      title
      body
      status
      user_assigned{
        id
        email
        firstName
        lastName
      } 
    }
  }
`;