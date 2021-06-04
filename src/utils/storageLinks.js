import AsyncStorage from '@react-native-async-storage/async-storage'


export async function getLinksSave(key){
  const myLinks = await AsyncStorage.getItem(key)

  let linkSaves = JSON.parse(myLinks) || []

  return linkSaves

}

export async function saveLink(key, newLink){
  let linkStoraged = await getLinksSave(key)

  //  verificar se ja existe um link
  const hasLink = linkStoraged.some(link => link.id === newLink.id)
  if(hasLink){
    console.log('Esse link ja existe na lista')
    return
  }

  linkStoraged.push(newLink)
  await AsyncStorage.setItem(key, JSON.stringify(linkStoraged))
  console.log('Link salvo com sucesso')
}

export async function deleteLink(links, id){

}