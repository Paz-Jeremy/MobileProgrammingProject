import { View } from "react-native";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { CustomButton } from "../components/CustomButton";
import { i18n } from "../context/LanguageContext";

export default function LoginScreen({navigation}:any) {
    const [email, setEmail] = useState('mjsalinas@unitec.edu');

    const {login} = useAuth();

    const handleLogin = () => {
        try{
            const allowed = login(email);
            if (allowed) {
                navigation.navigate('Home', {email});
            }else{
                console.log('no tiene acceso');
            }
        }catch (error){
            console.log(error);
        }
    }

    return(
        <View>
            <CustomInput placeholder={"Ingresa tu correo"} 
            value={email} 
            onChange={setEmail}/>

            <CustomInput type={"password"} 
            placeholder={"Ingresa tu contraseña"} 
            value={email} 
            onChange={setEmail}/>
            
            <CustomButton title={i18n.t('signIn')} 
            onPress={handleLogin}/>
        </View>
    )
}