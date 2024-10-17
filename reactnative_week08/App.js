import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, Image, Pressable, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./HomeScreen"
import Screen02 from "./Screen02"
import Screen03 from "./Screen03"

const Stack = createNativeStackNavigator();

export default App = () => {
return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={Screen02} />
        <Stack.Screen name="AddTodo" component={Screen03} />
      </Stack.Navigator>
    </NavigationContainer>
    //<Screen03/>

);
};