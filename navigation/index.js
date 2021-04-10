import React from "react";
import LoginView from "../views/LoginView";
import SignupView from "../views/SignupView";
import TasksView from "../views/TaskView";
import AddTaskView from "../views/AddTaskView";
import TaskIdView from "../views/TaskIdView"
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default  function Navigation() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Login" options={{headerTintColor : 'white', headerStyle : { backgroundColor : 'darkblue' }}} 
      component={LoginView} />
      <Stack.Screen name="Signup" options={{headerTintColor : 'white', headerStyle : { backgroundColor : 'darkblue' }}}
      component={SignupView} />
      <Stack.Screen name="Tasks" options={{headerShown:false}} component={TasksView} />
      <Stack.Screen name="AddTask" options={{title: 'Add Task', headerTintColor : 'white', headerStyle : { backgroundColor : 'darkblue' }}} 
      component={AddTaskView} />
      <Stack.Screen name="TaskId" options={{title: 'Task', headerTintColor : 'white', headerStyle : { backgroundColor : 'darkblue' }}} 
      component={TaskIdView} />
    </Stack.Navigator>
  );
}