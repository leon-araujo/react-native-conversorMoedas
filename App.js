import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/Home";
import Dolar from './src/Dolar';
import Euro from './src/Euro';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home}
        options={{
          title: "Conversor de Moedas",
          headerStyle: {
            backgroundColor: "#1C6FCA",
          },
          headerTintColor: "#F0F1F2",
          headerTitleAlign: 'center',
        }}
        />
        <Stack.Screen name="Dolar" component={Dolar}
        options={{
          title: "Conversor de Moedas",
          headerStyle: {
            backgroundColor: "#1C6FCA",
          },
          headerTintColor: "#F0F1F2",
          headerTitleAlign: 'center',
        }}
        />
        <Stack.Screen name="Euro" component={Euro}
        options={{
          title: "Conversor de Moedas",
          headerStyle: {
            backgroundColor: "#1C6FCA",
          },
          headerTintColor: "#F0F1F2",
          headerTitleAlign: 'center',
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
