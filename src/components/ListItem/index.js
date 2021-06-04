import React from 'react'
import {Text, View} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {ContainerButton, Item, ActionContainer} from './styles'
import Swipeable from 'react-native-gesture-handler/Swipeable'

export function ListItem({data, selectedItem, deleteItem}){

  function RightAction(){
    return(
      <ActionContainer  onPress={()=> deleteItem(data.id)} >
        <Feather name='trash' color='#fff' size={24}/> 
      </ActionContainer>
    )
  }

  return(
    <View>
      <Swipeable renderRightActions={RightAction}>
        <ContainerButton activeOpacity={0.8} onPress={()=>selectedItem(data)}>
          <Feather 
            name='link'
            color='#fff'
            size={24}
          />
          <Item numberOfLines={1}>{data.long_url}</Item>
        </ContainerButton>
      </Swipeable>
    </View>
  )
}