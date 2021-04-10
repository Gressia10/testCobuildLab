import React from "react";
import LoginView from "../views/LoginView";
import SignupView from "../views/SignupView";
import TasksView from "../views/TaskView";
import AddTaskView from "../views/AddTaskView";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default  function Navigation() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Login" component={LoginView} />
      <Stack.Screen name="Signup" component={SignupView} />
      <Stack.Screen name="Tasks" options={{headerShown:false}} component={TasksView} />
      <Stack.Screen name="AddTask" options={{title: 'Add Task', headerTintColor : 'white', headerStyle : { backgroundColor : 'darkblue' }}} 
      component={AddTaskView} />
    </Stack.Navigator>
  );
}