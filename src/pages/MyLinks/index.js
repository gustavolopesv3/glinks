import React,{useState, useEffect} from 'react'
import {Modal, ActivityIndicator} from 'react-native'
import {useIsFocused} from '@react-navigation/native'
import {getLinksSave, deleteLink} from '../../utils/storageLinks'

import {StatusBarPage} from '../../components/StatusBarPage'
import {ModalLink} from '../../components/ModalLink'
import { ListItem } from '../../components/ListItem'
import { Menu } from '../../components/Menu'
import { Container, Title,ListLinks, ContainerEmpy, WarningText  } from './styles'


export function MyLinks(){

  const isFocused = useIsFocused()

  const [links, setLinks] = useState([])
  const [dataLink, setDataLink] = useState({})
  const [modalVisible, SetModelVisible] = useState(false)
  const [isLoading, SetIsLoading] = useState(false)

  useEffect(()=>{
    async function getLinks(){
      const result = await getLinksSave('GLinks')
      setLinks(result)
      SetIsLoading(false)
    }
    getLinks()
  },[isFocused])

  function handleItem(item){
    setDataLink(item)
    SetModelVisible(true)
  }

  async function handleDelete(id){
    const result = await deleteLink(links, id)
    setLinks(result)
  }


  return(
  
        <Container>
          <StatusBarPage 
          barStyle='light-content'
          backgroundColor= '#132742'
          />
          <Menu/>
          <Title>Meus Links...</Title>

          { isLoading && (
            <ContainerEmpy>
            <ActivityIndicator color='#fff' size={25}/>
          </ContainerEmpy>
          ) }

          {!isLoading && links.length === 0 && (
            <ContainerEmpy>
              <WarningText>Parece que sua lista estar vazia :/ </WarningText>
            </ContainerEmpy>
          )
          }
          <ListLinks
          data={links}
          keyExtractor={(item)=> String(item.id)}
          renderItem={({item})=> <ListItem data={item} selectedItem={handleItem} deleteItem={handleDelete}/>}
          contentContainerStyle={{paddingBottom:20}}
          showsVerticalScrollIndicator={false}
          />
          <Modal visible={modalVisible} transparent animationType='slide'>
            <ModalLink onClose={()=>SetModelVisible(false)} linkEncurtado={dataLink}/>
          </Modal>
        </Container>


  )
}