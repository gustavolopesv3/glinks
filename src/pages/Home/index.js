import React, {useState} from 'react'
import {TouchableWithoutFeedback, Keyboard,
  KeyboardAvoidingView, 
  Platform, Modal} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {StatusBarPage} from '../../components/StatusBarPage'
import {Menu} from '../../components/Menu'
import {
  ContainerLogo,
  Logo, 
  ContainerContent,
  Title, 
  SubTitle,
  ContainerInput,
  BoxIcon,
  Input,
ButtonLink,
ButtonLinkText} from './styles'
import {Feather} from '@expo/vector-icons'
import { ModalLink } from '../../components/ModalLink'

export function Home(){
  const [linkInput, SetLinkInPut] = useState('')
  const [modalVisible, SetModelVisible] = useState(false)

  function handleShortLink(){
    SetModelVisible(true)
  }

  return(
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
      <LinearGradient 
      colors={['#1ddbb9', '#132742']}
      style={{flex:1 , justifyContent:'center'}}
      >
        <StatusBarPage 
        barStyle='light-content'
        backgroundColor= '#1ddbb9'
        />
        <Menu/>
        <KeyboardAvoidingView behavior={
          Platform.OS === 'android' ? 'padding':'position'
        }>
          <ContainerLogo>
            <Logo source={require('../../assets/Logo.png')}/>
          </ContainerLogo>
          <ContainerContent>
            <Title>GLink</Title>
            <SubTitle>Cole seu link para encurtar</SubTitle>


            <ContainerInput>
              <BoxIcon>
                <Feather name='link' size={22} color='#fff'/>
              </BoxIcon>
                <Input 
                placeholder='cole seu link aqui...' 
                placeholderTextColor='white'
                autoCapitalize='none'
                autoCorrect={false}
                KeyboardType='url'
                value={linkInput}
                onChangeText={(text)=> SetLinkInPut(text)}
                />
                
            </ContainerInput>
            <ButtonLink onPress={handleShortLink}>
              <ButtonLinkText>Gerar Link</ButtonLinkText>
            </ButtonLink>
          </ContainerContent>
        </KeyboardAvoidingView>
        <Modal visible={modalVisible} transparent animationType='slide'>
          <ModalLink onClose={()=>SetModelVisible(false)}/>
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}