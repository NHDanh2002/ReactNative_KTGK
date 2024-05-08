import React from "react";
import firestore from "@react-native-firebase/firestore"
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-native-paper";

function Activity ({title}) {
    return(
        <View style= {{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth,}}>
            <Text style={{fontSize:20,fontWeight:"bold",marginTop:10}}>{title}</Text>
        </View>
    )
}
export default Activity;
