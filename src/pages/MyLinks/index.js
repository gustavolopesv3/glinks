import React from 'react'
import {StatusBarPage} from '../../components/StatusBarPage'
import { Container, Title,ListLinks } from './styles'
import { Menu } from '../../components/Menu'
import { ListItem } from '../../components/ListItem'
import { Text } from 'react-native'

export function MyLinks(){
  return(

      
        <Container>
          <StatusBarPage 
          barStyle='light-content'
          backgroundColor= '#132742'
          />
          <Menu/>
          <Title>Meus Links</Title>
          
          <ListLinks
          data={
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
          }
          keyExtractor={(item)=> String(item.id)}
          renderItem={({item})=> <ListItem data={item}/>}
          contentContainerStyle={{paddingBottom:20}}
          showsVerticalScrollIndicator={false}
          />
        </Container>


  )
}