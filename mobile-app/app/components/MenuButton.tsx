import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'




type MenuButtonProps = {
  text: string
  buttonColor: string
  iconName: string
}

const MenuButton: React.FC<MenuButtonProps> = ({text,buttonColor,iconName}) => 
    <>
      <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: buttonColor }]}>
        <Ionicons name={iconName as any} size={24} color="white"/>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </>
  


const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: 'roboto',
    padding: 20,
    color: '#ececec',
  },

  buttonContainer: { 
    width: 170,
    height: 180,  
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ececec',
    marginHorizontal: 5,
  },
})

export { MenuButton }
