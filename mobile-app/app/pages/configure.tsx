import { useTheme } from '@shopify/restyle'
import React from 'react'
import { ScrollView } from 'react-native'
import { Box, Card, Spacer, Text } from '../components'
import { Theme } from '../theme'

const Configure = () => {
  const theme = useTheme<Theme>()

  const teams = [
    {
      imgSrc:
        '/Users/Gidzk/Documents/projects/bunkai/handykeeper/mobile-app/app/assets/icons/lhk.png',
      label: 'LHK',
    },

    {
      imgSrc:
        '/Users/Gidzk/Documents/projects/bunkai/handykeeper/mobile-app/app/assets/icons/savehof.png',
      label: 'Sävehof',
    },
    {
      imgSrc:
        '/Users/Gidzk/Documents/projects/bunkai/handykeeper/mobile-app/app/assets/images/kärra_hf.png',
      label: 'Kärra HF',
    },
  ]

  return (
    <Box flex={1} backgroundColor={'backgroundDark'}>
      <Box flex={0.3} justifyContent={'center'} alignItems={'center'}>
        <Text variant={'banner'}>Konfigurera Lag</Text>
      </Box>
      <ScrollView
        style={{ flex: 1, backgroundColor: theme.colors.backgroundDark }}
      >
        <Spacer size="l" />
        <Box flexDirection="row" flexWrap="wrap" justifyContent="space-around">
          {teams.map((item, index) => (
            <Box key={index} alignItems={'center'}>
              <Card
                imgSrc={item.imgSrc}
                label={item.label}
                onPress={() => {}}
              />
              <Spacer size="s" />
            </Box>
          ))}
        </Box>
      </ScrollView>
    </Box>
  )
}

export default Configure
