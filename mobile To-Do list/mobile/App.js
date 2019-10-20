import React,{Component} from 'react';
import {
View,
Text,
TextInput,
Button,
TouchableOpacity,
Alert,
StyleSheet,
} from 'react-native';


class App extends Component{
  
  constructor(){
    super();
    this.state={
      doItem:"",
      doList:[],
    }
  
  }
  
  componentDidMount(){
    fetch('http://192.168.1.100:3000/users')
    .then((response)=>response.json())
    .then((res)=>{
        this.setState({
          doList:res.message
        })
      alert(res.message);
    }).done()
  }


  render(){

    const itemsArray=this.state.doList.map((item)=>{
      return(
        <View style={styles.doItem}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      )
    })

    return(
    <View>
        <TextInput onChangeText={(text)=>this.setState({doItem:text})} />
        
        <TouchableOpacity>
          <Text>Add Items</Text>
        </TouchableOpacity>

        <View style={styles.doList}>
          {itemsArray}
        </View>

    </View>
)
  }
}

const styles=StyleSheet.create({
  doList:{
    flex:1
  },

  itemText:{
    fontSize:10
  }
})


export default App;