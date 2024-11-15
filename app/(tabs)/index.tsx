import { Link } from "expo-router";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from "@react-navigation/native";


const Tab = createMaterialTopTabNavigator();

const MyComponent = () => (
 
  <NavigationContainer>
  <Tab.Navigator>
  <Tab.Screen name="Library" component={HomeScreen} />
  <Tab.Screen name="Liked" component={ProfileScreen} />
  <Tab.Screen name="Suggested" component={ProfileScreen} />
</Tab.Navigator>
</NavigationContainer>
);

function HomeScreen (){
  return <View>
  
  <Text>Hi there from home screen</Text>
  </View>
}

function ProfileScreen(){
  return(
    <View>

<Text>
  Hi there form profile screen
</Text>

</View>
  )
}

export default MyComponent;
