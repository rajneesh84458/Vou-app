import React, { Component } from 'react'
import { Text, View,SafeAreaView,FlatList,StyleSheet,TouchableOpacity,Image } from 'react-native'

export default class Myfees extends Component {

    state ={
            dataSource:[]
    }

    componentDidMount () {
       const url ="https://jsonplaceholder.typicode.com/users";
       fetch(url)
       .then(response =>response.json())
       .then((res2)=>{
              console.log(res2)
              this.setState({dataSource:res2})
       })

    }
    _renderItem = ({item}) =>{

           return (
                    <View style ={{width:'95%',height:170,borderWidth:1,borderColor:'#3498DB',borderRadius:10,marginBottom:10,marginHorizontal:10}}>
                        <Text style={styles.textStyle}>Credit :{item.username}</Text>
                        <Text style={styles.textStyle}>Debit :{item.username}</Text>
                        <Text style={styles.textStyle}>Description :{item.username}</Text>
                        <Text style={styles.textStyle}>Receipt No. :{item.username}</Text>
                        <Text style={styles.textStyle}> Transaction Dt :{item.username}</Text>
                    </View>
           )
    }
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
               
              <FlatList
                       data={this.state.dataSource}
                       renderItem ={this._renderItem}
                       keyExtractor ={(item,index) =>index.toString()}
                       />
                        <TouchableOpacity onPress ={()=>this.props.navigation.navigate('PayFees')}>
                  <Image source ={require('../images/card.png')}
                         style={{width:60,height:60,resizeMode:'cover',position:'relative',bottom:480,left:290}}/>
                </TouchableOpacity>
                <View style={{width:'100%',height:35,backgroundColor:'white',flexDirection:'row',justifyContent:'space-around'}}>
                 <TouchableOpacity style={{width:150,height:30,backgroundColor:'#74B9FF',borderRadius:50,padding:5}}>
                     <Text style={{color:'white'}}>Total Debit :574467.0</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={{width:150,height:30,backgroundColor:'#74B9FF',borderRadius:50,padding:5}}>
                     <Text style={{color:'white'}}>Total Credit :574467.0</Text>
                 </TouchableOpacity>
                 
                </View>
                <View style={{width:'100%',height:20,backgroundColor:'#74B9FF',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'white'}}>Due amount :0.0</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles =StyleSheet.create({
     textStyle:{
            fontSize:17,
            padding:4,
            marginBottom:5
     }
})