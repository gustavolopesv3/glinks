import React from 'react'
import {View, Text} from 'react-native'
import {StatusBarPage} from '../../components/StatusBarPage'
import {LinearGradient} from 'expo-linear-gradient'

export function MyLinks(){
  return(
    <LinearGradient 
    colors={['#132742', '#1ddbb9']}
    style={{flex:1 , justifyContent:'center'}}
    >
      <StatusBarPage 
      barStyle='light-content'
      backgroundColor= '#132742'
      />
      <Text>
        Pagina Home
      </Text>
    </LinearGradient>
  )
}