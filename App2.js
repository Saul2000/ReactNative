import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Button, Alert} from 'react-native'

class MyNewProject extends Component {

  saludo = () => { Alert.alert('Hola mundo!') }
  
  render(){

    return(
     <View style={styles.container}>

       <View style={styles.header}>

       <View style={styles.headerLeft}>
         <Image source={require('./assets/favicon.png')} style={styles.logo} />
       </View>

       <View style={styles.headerRight}>
         <Button title="Login" onPress={this.saludo}/>
       </View>

      </View>

      <View style={[styles.body, styles.negrita]}>
       <Text>Hola mundo!</Text>
      </View>

     </View> 
    )

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column'
  },
  negrita:{
    fontWeight:'bold'
  },  
  header : {
    flex: 0.3,
    flexDirection: 'row',
    marginTop:40
  },
  headerLeft : {
    flex: 1,
    // backgroundColor: 'green'
  }, 
  headerRight : {
    flex: 1,
    // backgroundColor: 'white'
  },
  body : {
    flex: 1,
    alignItems: 'center'
    // backgroundColor: 'red'
  },
  logo:{
    width:75,
    height:75,
    borderRadius:50,
    resizeMode:'contain'
  }
})

export default MyNewProject