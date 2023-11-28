import React from 'react';
import {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import {useRouter} from 'expo-router';
import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

import styles from './welcome.style'


const jobTypes =["Full-Time", "Part-Time","Contractor"];
const  Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobeType]= useState('Full-Time')


  return (
    <View>
      <View style = {styles.container}>
      <Text style = {styles.userName}> Hello Bento</Text>
      <Text style = {styles.welcomeMessage}> Find your perfect job</Text>
      </View>

      <View style = {styles.searchContainer}>
      <View> style = {styles.searchWrapper}
        <TextInput
        style = {styles.searchInput}
        value=''
        onChange={() => {}}
        placeholder='What are you looking for?'>

        </TextInput>

        <TouchableOpacity style = {styles.searchBtn} onPress={()=>{}}>

        <Image
        source={icons.search}
        resizeMode='contain'
        style = {styles.searchBtnImage}/>
        
        </TouchableOpacity>
        </View>
        <View style = {styles.tabsContainer}>

          <FlatList
          data={jobTypes}
          renderItem={({item}) =>(
            <TouchableOpacity>
                <Text 
                style ={styles.tab(activeJobType, item)}
                  onPress={()=>{
                    setActiveJobeType(item);
                    router.push(`/search/${item}`)
                  }}
                >
                  {item}
                </Text>
              
            </TouchableOpacity>
          )
          }/>

      
        </View>
      </View>
    </View>
  )
}

export default Welcome