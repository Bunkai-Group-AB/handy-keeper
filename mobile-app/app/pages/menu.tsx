import { useRouter } from 'expo-router'
import { Box, MenuButton, Spacer, Text } from '../components'

// todo fix later

const MenuScreen = () => {
  const router = useRouter()

  return (
    <Box flex={1} backgroundColor={'backgroundDark'}>
      <Box flex={1} justifyContent={'center'} alignItems={'center'}>
        <Text variant="banner">MÅLVAKTS HJÄLPEN</Text>
        <Spacer size="xl" color="backgroundDark" />
        <Box width="100%" justifyContent="center" alignItems="center">
          <Text variant={'caption'}>Namn namnsson</Text>
        </Box>
      </Box>
      <Box flex={1.5} alignItems="center">
        <Box flexDirection={'row'}>
          <MenuButton
            text="Spela"
            onPress={() => onPressPlay()}
            iconName="football-outline"
          />
          <Spacer isHorizontal size="m" />

          <MenuButton
            text="Konfigurera lag"
            onPress={() => router.push('./pages/configure')}
            iconName="cog-outline"
          />
        </Box>
        <Spacer size="l" />
        <Box flexDirection={'row'}>
          <MenuButton
            disabled
            text="Statistik"
            onPress={() => console.log('pressed')}
            iconName="stats-chart-outline"
          />
          <Spacer isHorizontal size="m" />
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
