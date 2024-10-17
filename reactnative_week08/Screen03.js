import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, Image, Pressable, TextInput, StyleSheet, Button } from 'react-native';

export default function Screen03 ({navigation, route}){
      const {tit} = route.params;
      const [newTodo, setNewTodo] = useState('');
      //Add job
    const addToDo = async ()=> {
        if(!newTodo) return;

        const response =await fetch('https://66ff34f02b9aac9c997e841a.mockapi.io/api/todo', {
            method:"POST",
            headers:{
              'Content-Type': 'application/json',
            },
            body:JSON.stringify({name: newTodo}),
        });
        if(response.ok)
        {
          setNewTodo('');
        }
    };
    return(
      <View style={{flex:1}}>
          <View style={{flex:1, flexDirection: 'row'}}>
                <View style={{flex:4}}>
                    <Image 
                    source={require('./Icon11.png')}
                    style={{width:36, height:36, marginTop:10, marginLeft:10}}
                />
                </View>
                <View style={{flex:6}}>
                    <Text style={styles.text1}>
                        Hi {tit}
                    </Text>
                    <Text style={styles.text2}>
                        Have a great day a head
                    </Text>
                </View>
            </View>
            <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                  <Text style={{fontSize: 30, fontWeight: 700}}>
                        ADD YOUR JOB
                  </Text>
            </View>

            <View style={{flex:6, alignItems:"center"}}>
                  <TextInput
                  style={{width:300, height:50, borderRadius:3, borderWidth:2, borderColor:"#00BDD6", marginLeft:20}}
                  placeholder="   Input your job"
                  value={newTodo}
                  onChangeText={setNewTodo}
                   />
                   <Pressable 
                    onPress={()=>{
                      addToDo();
                      navigation.navigate('Details', {tit:tit});
                    }}
                    style={{
                      marginTop:40,
                      width: 190,height: 44,
                      padding: 9,
                      borderRadius:12,
                      backgroundColor:"#00BDD6", 
                      color:"#FFFFFF", 
                      fontSize:16,
                      alignItems:'center'
                    }}
                  >
                    FINISH ->
                  </Pressable>

                  <Image 
                  source ={require("./Image95.png")}
                  style={{marginTop:80,width:200, height: 200}}
               />
            </View>
      </View>

    );
}

const styles = StyleSheet.create({

  text1: {
    marginTop:10,
    marginLeft:20,
    fontSize: 20,
    fontWeight:700,
  },
  })