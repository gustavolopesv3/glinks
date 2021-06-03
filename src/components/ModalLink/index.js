import React from 'react'
import { Text, TouchableOpacity, View, TouchableWithoutFeedback } from 'react-native'
import {Feather} from '@expo/vector-icons'
import {ModalContainer, Container, Header, LinkArea, Title, LongUrl, ShortLinkArea, ShortLinkUrl} from './styles'

export function ModalLink({onClose}){
  return(
    <ModalContainer>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{flex:1}}></View>
      </TouchableWithoutFeedback>
    <Container>
      <Header>
        <TouchableOpacity>
          <Feather name='x' color='#212743' size={30} onPress={onClose}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name='share' color='#212743' size={30}/>
        </TouchableOpacity>
      </Header>
      <LinkArea>
        <Title>Link encurtado</Title>
        <LongUrl numberOfLines={1}>https://www.lopesit.com.br</LongUrl>
        <ShortLinkArea activeOpacity={1} >
          <ShortLinkUrl numberOfLines={1}>https://bit.ly/kwjer</ShortLinkUrl>
          <TouchableOpacity>
            <Feather name='copy' color='#fff' size={25}/>
          </TouchableOpacity>
        </ShortLinkArea>
      </LinkArea>
    </Container>
  </ModalContainer>
  )
  

}