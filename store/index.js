import { Children, createContext, useContext, useMemo, useReducer } from "react";
import firestore from "@react-native-firebase/firestore"
import auth from "@react-native-firebase/auth"
import { Alert } from "react-native";

const MyContext = createContext()

MyContext.displayName = "My store"

const reducer = (state, action) => {
    switch(action.type)
    {
        case "USER_LOGIN":
            return {...state, userLogin: action.value}
        case "LOGOUT":
            return {...state,userLogin: null}
        default: {
            throw new Error("Action not exist")
        }
    }
}


const MyContextControllerProvider = ({Children}) => {
    const initialState ={
        userLogin: null,
        jobs:[]
    }
    const [controller, dispatch] = useReducer(reducer, initialState)
    const value = useMemo(()=> [controller, dispatch])
    return(
        <MyContext.Provider value={value}>
            {Children}
        </MyContext.Provider>
    )
}

const useMyContextProvider = () => {
    const context = useContext(MyContext)
    if(!context){
        return new Error("useMyContextProvider must put inside MyContextControllerProvider")
    }
    return context
}

const USERS = firestore().collection("USERS")

const createAccount = (email, password, fullname) => {
    auth().createUserWithEmailAndPassword(email, password)
    .then(() =>{
        Alert.alert("Create email success with email: " + email)
        USERS.doc(email)
        .set(
            {
                email,
                //password,
                fullname,
            }
        )
    })
}
const login = (dispatch, email, password, fullname, navigation) => {
    auth().signInWithEmailAndPassword(email, password)
    .then(()=> {
        USERS.doc(email)
        .onSnapshot(u => {
            if(u.exists)
            {
                console.log("Login success with account: " + u.id)
                dispatch({type: "USER_LOGIN", value:u.data()})
                navigation.navigate("Home")
            }
        })
    })
    .catch(e=> Alert.alert("Wrong email or password"))
}

const logout = (dispatch) =>{
    auth().signOut()
    .then(()=> dispatch({type: "LOGOUT"}))
}

export {
    MyContextControllerProvider,
    useMyContextProvider,
    createAccount,
    login,
    logout,
}
