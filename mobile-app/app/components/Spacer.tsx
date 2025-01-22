import { useTheme } from '@shopify/restyle'
import React from 'react'
import { View } from 'react-native'
import { Theme } from '../theme'

type Props = {
  isHorizontal?: boolean
  size: keyof Theme['spacing']
  color?: keyof Theme['colors']
}

const Spacer = ({ isHorizontal, size, color }: Props) => {
  const theme = useTheme<Theme>()
  const spacing = theme.spacing[size]
  const bgColor = !!color ? theme.colors[color] : theme.colors['backgroundDark']
  const defaultValue = 0

  return (
    <View
      style={{
        width: isHorizontal ? spacing : defaultValue,
        height: !isHorizontal ? spacing : defaultValue,
        backgroundColor: bgColor,
      }}
    />
  )
}

export { Spacer }
