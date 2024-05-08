import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native"
import { createAccount } from "../store";
import { HelperText } from "react-native-paper";

const Registration = ({navigation})=> {
    //const [controller, dispatch] = useMyContext()
    //const {userLogin} = controller
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [comfirmpassword, setComfirmpassword] = useState("")
    const [valid, setValid] = useState(false);
    const checkEmail = () => {
        return !email.includes("@");
    }
    const checkFullname = () => {
        return fullname == ("")
    }
    const checkPassword = () => {
        return password.length < 6
    }
    const checkComfirmPassword = () =>{
        return comfirmpassword != password
    }
    const checkvalid = () =>{
        if(!checkEmail() && !checkFullname() && !checkComfirmPassword() && !checkPassword())
            setValid(true);
    }
    return(
        <View style={{justifyContent:'center'}}>
            
            <View>
                <View>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../assets/icon.png')}/>
                    </View>
                    <TextInput
                        style = {styles.textinput}
                        //autoFocus
                        value={fullname}
                        onChangeText={setFullname}
                        placeholder="Full Name"
                    />
                    <HelperText type="error" visible = {checkFullname()}>Full name not null</HelperText>
                    <TextInput
                        style = {styles.textinput}
                        placeholder="E-mail"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <HelperText type="error" visible = {checkEmail()}>Wrong Email</HelperText>
                    <TextInput
                        style = {styles.textinput}
                        secureTextEntry
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                    />
                    <HelperText type="error" visible = {checkPassword()}>Password must have more than 6 characters</HelperText>
                    <TextInput
                        style = {styles.textinput}
                        secureTextEntry
                        placeholder="Comfirm Password"
                        value={comfirmpassword}
                        onChangeText={setComfirmpassword}
                    />
                    <HelperText type="error" visible = {checkComfirmPassword()}>Password comfirm must be same with Password</HelperText>

                    <TouchableOpacity style ={styles.button} onPress={()=>createAccount(email,password,fullname)}>
                        <Text style={styles.textbutton}>
                            Create account
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',alignItems:'center', justifyContent:'center'}}>
                    <Text style = {{fontSize:18}}>Already have an account? </Text>
                    <Text onPress={() => navigation.navigate('Login')} style = {{fontSize:18, color:'blue'}}>Login</Text>
                </View>
            </View>
        </View>
    )
}
export default Registration;
const styles = StyleSheet.create({
    textlogin: {
        textAlign:'center',
        fontSize:20,
        fontWeight: 'bold',
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
        fontSize: 15,
        backgroundColor:"white",
        marginLeft: 10,
        marginRight:10,
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