import React, {useState} from 'react'
import {TouchableWithoutFeedback, Keyboard,
  KeyboardAvoidingView, 
  Platform, Modal, ActivityIndicator} from 'react-native'
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
import {api} from '../../services/api'

export function Home(){
  const [linkInput, SetLinkInPut] = useState('')
  const [data, setData] = useState({})
  const [modalVisible, SetModelVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

   async function handleShortLink(){
    setIsLoading(true)
    try {
      const response = await api.post('/shorten',
    {
      long_url: linkInput, 
    })
    
    setData(response.data)
    SetModelVisible(true)

    Keyboard.dismiss()
    setIsLoading(false)
    SetLinkInPut('')

    } catch{
      alert('ops... algo deu errado, verifique seu link')
      Keyboard.dismiss()
      SetLinkInPut('')
      setIsLoading(false)
    }
    //SetModelVisible(true)
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
              {
                isLoading ?(
                  <ActivityIndicator color='#121212' size={24}/>
                ):(<ButtonLinkText>Gerar Link</ButtonLinkText>)
              }
              
            </ButtonLink>
          </ContainerContent>
        </KeyboardAvoidingView>
        <Modal visible={modalVisible} transparent animationType='slide'>
          <ModalLink onClose={()=>SetModelVisible(false)} linkEncurtado={data}/>
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}