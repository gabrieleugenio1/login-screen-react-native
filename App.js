import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export default function App(navigation ) {
  return (
<View style={[styles.container, {
    flexDirection: "column",
    backgroundColor:"#E7DDD7"
  }]}>
   
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <View style={[styles.centered, {marginTop:130}]}>        
            <Icon name="user-circle" size={140} color="#000"/>
          </View>
        </View>
        <View>
          <View style={[styles.distancia,{size:140}]}>
            <Input style={{fontSize:25}} placeholderTextColor={"#000"} 
            placeholder='Insira o seu email.'
            leftIcon={{ type: 'Entypo', name: 'email' }}/>
            
            <Input style={{fontSize:25}} placeholderTextColor={"#000"}
            placeholder='Insira a sua senha.' secureTextEntry={true} 
            leftIcon={{ type: 'Entypo', name: 'keyboard' }}/>

          <TouchableOpacity>
           <Text style={styles.botaoEsqueci}>Esqueci a senha.</Text> 
          </TouchableOpacity>

            <View style={styles.centered}>
            <TouchableOpacity style={styles.botoesPrincipais}>
             <Text style={styles.textoBotao}>Login</Text>           
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botoesPrincipais, {backgroundColor:"#FF1616"}]}>
             <Text style={styles.textoBotao}>Cadastre-se</Text>           
            </TouchableOpacity>

            </View>
          </View>
       
        </View>
      </View>

</View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1
  },
  centered: {
    flex: 1,
    alignItems: "center",    
    },
  distancia:{
    marginBottom:220,
    marginHorizontal: 15,
     },

     botoesPrincipais:{
      backgroundColor:"#1670F7",
      width:"80%",
      height:45,
      borderRadius:10,
      alignItems:"center",
      justifyContent:"center",
      marginTop:10,
      },
     botaoEsqueci: {
      height: 30,
      fontSize: 20,
      marginLeft: 20,
      marginBottom: 20,
    },
    textoBotao:{
      fontSize:28,      
    }

  });
  
