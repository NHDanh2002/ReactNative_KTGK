import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import firestore from "@react-native-firebase/firestore"
import { useEffect, useState } from "react"
import Activity from "./Activity"

const Home = () =>{
    const [activity, setActivity] = useState("")
    const [activitys, setActivitys] = useState([])
    const [loading, setLoading] = useState(true)
    const ACTIVITYS = firestore().collection("Activitys")
    async function addActivity(){
        await ACTIVITYS.add({
            title: activity
        });
        setActivity('');
    }
    useEffect(()=>{
        return ACTIVITYS.onSnapshot(querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
                const {title} = doc.data();
                list.push({
                    id: doc.id,
                    title,
                });
            });
            setActivitys(list);
            //console.log(activitys);
            if(loading){
                setLoading(false);
            }
        });
    });
    if(loading){
        return null;
    }
    //console.log(activitys);
    return(
        <SafeAreaView>
            <View>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <TextInput
                        style = {styles.textinput}
                        placeholder="Add new activity"
                        value={activity}
                        onChangeText={setActivity}
                    />
                    <TouchableOpacity onPress={addActivity} style ={styles.button}>
                        <Text style={styles.textbutton}>
                            Add
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent:'center', margin:20}}>
                    <Text style={{textAlign:'center', fontSize:25}}>List Activitys</Text>
                    <FlatList
                        data={activitys}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => <Activity title={item.title}/>}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Home;

const styles = StyleSheet.create({
    textlogin: {
        textAlign:'center',
        fontSize:20,
        fontWeight: 'bold',
        marginTop:20,
        marginBottom:20
    },
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textinput: {
        width:'70%',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "lightgray",
        fontSize: 15,
        padding: 5,
        backgroundColor:"white",
    },
    button: {
        width: '20%',
         backgroundColor: "blue",
         justifyContent:'center',
         alignItems: 'center',
         borderRadius: 10,
         padding:10,
         marginLeft:5,
         marginRight:5,
    },
    textbutton: {
        fontSize: 20,
        fontWeight: 'bold',
        fontSize: 15,
        fontWeight:"bold",
        color: 'white',
    }
  });