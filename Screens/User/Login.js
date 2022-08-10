import { StyleSheet, Text, View ,Button} from 'react-native'
import React,{useState,useEffect} from 'react'
import FormContainer from '../../Shared/Form/FormContainer'
import Input from '../../Shared/Form/Input'
import Error from '../../Shared/Error'

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    // Handle Submit
    const handleSubmit = () => {
        const user = {
          email,
          password,
        };
    
        if (email === "" || password === "") {
          setError("Please fill in your credentials");
        } else {
          console.log("Successful")
        }
      };
    return (

        <FormContainer title={"Login"}>
            <Input
                placeholder={"Enter Email"}
                name={"email"}
                id={"email"}
                value={email}
                onChangeText={(text) => setEmail(text.toLowerCase())}
            />
            <Input
                placeholder={"Enter Password"}
                name={"password"}
                id={"password"}
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <View style={styles.buttonGroup}>
                {error ? <Error message={error} />:null}
                <Button title="Login" onPress={() => handleSubmit()} />
            </View>
            <View style={[{ marginTop: 40 }, styles.buttonGroup]}>
                <Text style={styles.middleText} >Don't Have an Account Yet?</Text>
                <Button title="Register" onPress={() => props.navigation.navigate("Register")} />
            </View>
        </FormContainer>
    )
}

export default Login

const styles = StyleSheet.create({
    buttonGroup: {
        width: "80%",
        alignItems: "center",
      },
      middleText: {
        marginBottom: 20,
        alignSelf: "center",
      },
})