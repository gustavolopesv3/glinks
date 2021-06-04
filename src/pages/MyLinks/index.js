import React,{useState, useEffect} from 'react'
import {StatusBarPage} from '../../components/StatusBarPage'
import { Container, Title,ListLinks } from './styles'
import { Menu } from '../../components/Menu'
import { ListItem } from '../../components/ListItem'
import {useIsFocused} from '@react-navigation/native'
import {getLinksSave} from '../../utils/storageLinks'

export function MyLinks(){

  const isFocused = useIsFocused()

  const [links, setLinks] = useState([])
  const [dataLink, setDataLink] = useState({})
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(()=>{
    async function getLinks(){
      const result = await getLinksSave('GLinks')
      setLinks(result)
    }
    getLinks()
  },[isFocused])

  return(

      
        <Container>
          <StatusBarPage 
          barStyle='light-content'
          backgroundColor= '#132742'
          />
          <Menu/>
          <Title>Meus Links</Title>
          
          <ListLinks
          data={links}
          keyExtractor={(item)=> String(item.id)}
          renderItem={({item})=> <ListItem data={item}/>}
          contentContainerStyle={{paddingBottom:20}}
          showsVerticalScrollIndicator={false}
          />
        </Container>


  )
}