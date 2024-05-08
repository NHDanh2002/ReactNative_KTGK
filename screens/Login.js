import { Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native"
import { login } from "../store"
import { useState } from "react"

const Login = ({navigation})=> {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return(
        <View style={{justifyContent:'center'}}>
            <View>
                <View>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../assets/icon.png')}/>
                    </View>
                    <TextInput
                        style = {styles.textinput}
                        autoFocus
                        placeholder="E-mail"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style = {styles.textinput}
                        secureTextEntry
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate("Home")} style ={styles.button}>
                        <Text  style={styles.textbutton}>
                            LOGIN
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',alignItems:'center', justifyContent:'center'}}>
                    <Text style = {{fontSize:18}}>Don't have an account? </Text>
                    <Text onPress={() => navigation.navigate('Registration')} style = {{fontSize:18, color:'blue'}}>Sign up</Text>
                </View>
            </View>
        </View>
    )
}
export default Login;
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
        borderWidth: 2,
        borderColor: "lightgray",
        margin: 10,
        fontSize: 15,
        padding: 5,
        backgroundColor:"white",
    },
    button: {
         backgroundColor: "blue",
         borderRadius: 10,
         justifyContent:"center",
         alignItems:"center",
         padding:10,
         margin: 10,
    },
    textbutton: {
        fontSize: 20,
        fontWeight: 'bold',
        fontSize: 15,
        fontWeight:"bold",
        color: 'white',
    }
  });