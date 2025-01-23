import { useTheme } from '@shopify/restyle'
import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { Box, Text } from './restyle'
import { Spacer } from './Spacer'

type Props = {
  imgSrc: string
  label: string
  onPress: () => void
}

const Card = ({ imgSrc, label, onPress }: Props) => {
  const theme = useTheme()
  const buttonVariants = theme.buttonVariants.menuButton.default

  return (
    <Box
      height={buttonVariants.height}
      width={buttonVariants.width}
      borderRadius={'xl'}
      backgroundColor={'buttonPrimary'}
    >
      <TouchableOpacity
        onPress={() => console.log('im pressed')}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Box flex={1} alignItems={'center'} justifyContent={'center'}>
          <Text variant={'buttonLabel'}>{label}</Text>
        </Box>
        <Box flex={2} alignItems={'center'} justifyContent={'center'}>
          <Image
            source={{ uri: imgSrc }}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          />
        </Box>
        <Spacer size="l"></Spacer>
      </TouchableOpacity>
    </Box>
  )
}

export { Card }
