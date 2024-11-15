import BottomSheet from "@gorhom/bottom-sheet";
import { useState } from "react";
import {  Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MyComponent = () => {
const [openbottomsheet,setopenBottomSheet]=useState(false)



  return(
  <SafeAreaView style={{flex:1,backgroundColor:"red"}}>
    <View style={{flex:1}}>
    <Text>Accounts page</Text>
    <Button title="Open Bottom Sheet" onPress={()=>{setopenBottomSheet(true)}}></Button>
    {openbottomsheet&&<BottomSheet/>}
    </View>
    </SafeAreaView>
)};

export default MyComponent;
