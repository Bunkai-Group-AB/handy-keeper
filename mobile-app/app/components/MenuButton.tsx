import { Ionicons } from '@expo/vector-icons'
import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  composeRestyleFunctions,
  spacing,
  SpacingProps,
  useTheme,
} from '@shopify/restyle'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Theme } from '../theme'

type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme>

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
])

type MenuButtonProps = {
  text: string
  buttonColor: string
  onPress: () => void
  iconName: keyof typeof Ionicons.glyphMap
  disabled?: boolean
}

const MenuButton: React.FC<MenuButtonProps> = ({
  text,
  buttonColor,
  iconName,
  disabled,
  onPress,
}) => {
  const theme = useTheme<Theme>()
  const backgroundColor = disabled
    ? theme.colors.buttonDisabled
    : theme.colors.buttonPrimary

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!!disabled}
      style={[styles.buttonContainer, { backgroundColor: backgroundColor }]}
    >
      <Ionicons name={iconName as any} size={53} color="white" />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: 'roboto',
    paddingTop: 20,
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
