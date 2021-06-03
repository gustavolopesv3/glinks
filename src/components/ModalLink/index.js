import React from 'react'
import { TouchableOpacity, View, TouchableWithoutFeedback, Share } from 'react-native'
import {Feather} from '@expo/vector-icons'
import {ModalContainer, Container, Header, LinkArea, Title, LongUrl, ShortLinkArea, ShortLinkUrl} from './styles'
import Clipboard from 'expo-clipboard'
export function ModalLink({onClose}){

  function copyLink(){
    Clipboard.setString('https://lopesit.com.br')
    alert('Link copiado')
  }

  async function handleShare(){
    try {
      const result = await Share.share({
        message: `Link: seulink.com`
      })
      if(result.action === Share.sharedAction){
        if(result.activityType){
          console.log('activityType')
        }else{
          //compartilhou
          console.log('compartilhado com sucesso!!!')
        }
      }else if(result.action === Share.dismissedAction){
        console.log('Modal fechado')
      }

    } catch (error) {
      console.log(error.messege)
    }
  }

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
        <TouchableOpacity onPress={handleShare}>
          <Feather name='share' color='#212743' size={30}/>
        </TouchableOpacity>
      </Header>
      <LinkArea>
        <Title>Link encurtado</Title>
        <LongUrl numberOfLines={1}>https://www.lopesit.com.br</LongUrl>
        <ShortLinkArea activeOpacity={1} onPress={copyLink}>
          <ShortLinkUrl numberOfLines={1}>https://bit.ly/kwjer</ShortLinkUrl>
          <TouchableOpacity onPress={copyLink}>
            <Feather name='copy' color='#fff' size={25}/>
          </TouchableOpacity>
        </ShortLinkArea>
      </LinkArea>
    </Container>
  </ModalContainer>
  )
  

}