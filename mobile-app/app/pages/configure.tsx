import { useTheme } from '@shopify/restyle'
import React from 'react'
import { ScrollView } from 'react-native'
import { Box, Spacer, Text } from '../components'
import Card from '../components/Card'
import { Theme } from '../theme'

const Configure = () => {
  const theme = useTheme<Theme>()
  const items = [
    { imgSrc: 'https://picsum.photos/200/300', label: 'Lag 1' },
    { imgSrc: 'https://picsum.photos/200/300', label: 'Lag 2' },
    { imgSrc: 'https://picsum.photos/200/300', label: 'Lag 3' },
    { imgSrc: 'https://picsum.photos/200/300', label: 'Lag 4' },
    { imgSrc: 'https://picsum.photos/200/300', label: 'Lag 4' },
    { imgSrc: 'https://picsum.photos/200/300', label: 'Lag 4' },
  ]

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.colors.backgroundDark }}
    >
      <Box flex={1} backgroundColor={'backgroundDark'}>
        <Box flex={1} justifyContent={'center'} alignItems={'center'}>
          <Text variant={'banner'}>Välj lag att Konfigurera</Text>
        </Box>

        <Box
          flex={4}
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          {items.map((item, index) => (
            <Box key={index} width="50%" alignItems={'center'}>
              <Card
                imgSrc={item.imgSrc}
                label={item.label}
                onPress={() => {}}
              />
              <Spacer size="s" />
            </Box>
          ))}
        </Box>
      </Box>
    </ScrollView>
  )
}

export default Configure
