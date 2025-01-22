import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@shopify/restyle'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Box } from './Box'
import { Text } from './Text'

type Props = {
  onPress: () => void
  iconName: keyof typeof Ionicons.glyphMap
  disabled?: boolean
  text: string
}

const MenuButton = ({ text, iconName, disabled, onPress }: Props) => {
  const theme = useTheme()
  const buttonVariants = theme.buttonVariants.menuButton.default

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!!disabled}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        //todo: moev margin to parent component
        marginHorizontal: theme.spacing.s,
      }}
    >
      <Box
        backgroundColor={disabled ? 'buttonDisabled' : 'buttonPrimary'}
        width={buttonVariants.width}
        height={buttonVariants.height}
        borderRadius={'xl'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Ionicons
          name={iconName as any}
          size={70}
          color={!disabled ? 'white' : 'lightgrey'}
        />
        <Text variant={!disabled ? 'buttonLabel' : 'buttonLabelDisabled'}>
          {text}
        </Text>
      </Box>
    </TouchableOpacity>
  )
}

export { MenuButton }
