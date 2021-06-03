import React from 'react'
import {Home} from './pages/Home'
import {MyLinks} from './pages/MyLinks'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {Ionicons} from '@expo/vector-icons'


const Drawer = createDrawerNavigator()

export function Routes(){
  return(
    <Drawer.Navigator 
    drawerContentOptions={{
      activeBackgroundColor: "#2ccbb9",
      activeTintColor: "#fff",
      marginTop: 16,
      labelStyle:{
        fontSize: 19,
      }
    }}>
      <Drawer.Screen name='Home'component={Home} options={{
        title: 'Encutar Link',
        drawerIcon: ({focused,size,color})=>(
          <Ionicons 
          name={focused ? 'cube' : 'cube-outline'} 
          color={color} 
          size={size}/>
        )

      }}/>
      <Drawer.Screen name='MyLinks' component={MyLinks} options={{
        title: 'Meus Links',
        drawerIcon: ({focused,size,color})=>(
          <Ionicons 
          name={focused ? 'stats-chart' : 'stats-chart-outline'} 
          color={color} 
          size={size}/>
        )

      }} />
    </Drawer.Navigator>
  )
}