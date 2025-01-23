import { useTheme } from '@shopify/restyle'
import { StyleSheet } from 'react-native'
import { Box, MenuButton, Spacer, Text } from '../components'
import { Theme } from '../theme'
// todo fix later

const MenuScreen = () => {
  const theme = useTheme<Theme>()

  return (
    <Box flex={1}>
      <Box
        flex={1}
        justifyContent={'center'}
        alignItems={'center'}
        backgroundColor={'backgroundDark'}
      >
        <Text
          variant="banner"
          style={{
            textAlign: 'center',
            lineHeight: 50,
            flexWrap: 'wrap',
          }}
        >
          MÅLVAKTS HJÄLPEN
        </Text>
        <Spacer size="xl" color="backgroundDark" />
        <Box width="100%" justifyContent="center" alignItems="center">
          <Text variant={'caption'}>Namn namnsson</Text>
        </Box>
      </Box>
      <Box flex={1.5} alignItems="center" backgroundColor={'backgroundDark'}>
        <Box flexDirection={'row'}>
          <MenuButton
            text="Spela"
            onPress={onPressPlay}
            iconName="football-outline"
          />
          <Spacer isHorizontal size="m" color="backgroundDark" />

          <MenuButton
            text="Konfigurera lag"
            onPress={onPressSettings}
            iconName="cog-outline"
          />
        </Box>
        <Spacer size="l" color="backgroundDark" />
        <Box flexDirection={'row'}>
          <MenuButton
            disabled
            text="Statistik"
            onPress={onPressStats}
            iconName="stats-chart-outline"
          />
          <Spacer isHorizontal size="m" color="backgroundDark" />
          <MenuButton
            disabled
            text="Analys"
            onPress={onPressAnalysis}
            iconName="pulse-outline"
          />
        </Box>
      </Box>
    </Box>
  )
}

// placeholder to use later
const onPressPlay = () => {
  return
}

const onPressSettings = () => {
  return
}

const onPressStats = () => {
  return
}

const onPressAnalysis = () => {
  return
}

export default MenuScreen

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
})
