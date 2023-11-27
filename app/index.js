import { View, Text} from 'react-native';
import { View , Scrollview, SafeAreaView } from 'react-native';
import { Stack useRouter } from 'expo-router';
import { COLORS, icons,images,SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn,Welcome} from '../components';
import React from 'react';

const Home = () =>{

    const router = useRouter();

    return(
        <SafeAreaView  style{{flex: 1, background: COLORS.lightWhite}} >
           <Stack.Screen
           options ={{

            headerStyle: { backgroundColor: COLORS.lightWhite},
            headerShadowVisible: false,
            headerLeft: () =>(
                <ScreenHeaderBtn iconUrl={icons.menu} dimension ="60%"/>
            ),

            headerRight: () =>(
                <ScreenHeaderBtn iconUrl={images.profile} dimension ="100%"/>
            ),
            headerTitle: ""
           }}
           />

           <Scrollview  showsVerticalScrollIndcator ={false}>

            <View 
             style={{
                flex: 1,
                padding: SIZES.medium
             }}>

                <Welcome/>
                <Popularjobs/>
                <Nearbyjobs/>
             </View>

           </Scrollview>

        </SafeAreaView>
    )
}

export default Home;