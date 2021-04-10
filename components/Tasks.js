import React, { useState, useEffect, } from 'react';
import { Container, Header, Content, List, ListItem, Text, Body, Title , Button,  Right, Left, Icon} from 'native-base';
import * as task from "../client/task/task"
import { AsyncStorage } from 'react-native';

export default function Tasks ({navigation}){
    const [tasks, setTasks] = useState([]);
    const [state, setState]=useState(true);

    function list(id){
        AsyncStorage.setItem('id_task', JSON.stringify(id))
        navigation.navigate("TaskId");
    }

    useEffect(()=>{
        task.task(navigation, setTasks);
    }, [state]);

    return (
        <Container>
        <Header>
            <Body>
                <Title>Tasks</Title>
            </Body>
            <Right>
                <Button onPress={() => navigation.navigate('AddTask')}>
                    <Text>Add</Text>
                </Button>
                <Button transparent onPress={() => navigation.goBack()}>
                    <Text>Logout</Text>
                </Button>
          </Right>
        </Header>
        <Content>
            <List>
                {tasks.map(item => (
                <ListItem onPress={()=>list(item.id)}>
                    <Left>
                        <Text>{item.title}</Text>
                    </Left>
                    <Right>
                        <Text>-></Text>
                    </Right>
                </ListItem>
                ))}
            </List>
        </Content>
      </Container>
    );
}