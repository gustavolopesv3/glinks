import React from 'react'
import {Text, View} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {ContainerButton, Item} from './styles'
export function ListItem(){
  return(
    <View>
      <ContainerButton activeOpacity={0.8} onPress={()=>{}}>
        <Feather 
          name='link'
          color='#fff'
          size={24}
        />
        <Item numberOfLines={1}>https://www.google.comcomcomcomcomcomcomcomcomcomcomcomcomcom</Item>
      </ContainerButton>
    </View>
  )
}