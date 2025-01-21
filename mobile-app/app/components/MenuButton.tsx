import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@shopify/restyle'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Theme } from '../theme'


type MenuButtonProps = {
  text: string
  buttonColor: string
  iconName: keyof typeof Ionicons.glyphMap
  disabled?: boolean
}

const MenuButton: React.FC<MenuButtonProps> = ({text,buttonColor,iconName, disabled}) => {

  const theme = useTheme<Theme>()
  const backgroundColor = disabled ? theme.colors.buttonDisabled : theme.colors.buttonPrimary
  

return (
    <>
      <TouchableOpacity disabled={!!disabled} style={[styles.buttonContainer, { backgroundColor: backgroundColor }]}>
        <Ionicons name={iconName as any} size={53} color="white"/>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </>
)
}  


const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: 'roboto',
    paddingTop:20,
    color: '#ececec',
    justifyContent: 'center',
    textAlign: 'center',
  },

  buttonContainer: { 
    width: 170,
    height: 180,  
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 5,
  },
})

export { MenuButton }
