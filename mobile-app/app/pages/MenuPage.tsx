import { useTheme } from '@shopify/restyle'
import { StyleSheet, View } from 'react-native'
import { Box, MenuButton, Spacer, Text } from '../components'
import { Theme } from '../theme'
// todo fix later

const MenuPage = () => {
  const theme = useTheme<Theme>()
  return (
    <View style={styles.container}>
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
      </Box>
      <View
        style={[
          styles.buttonContainer,
          { backgroundColor: theme.colors.backgroundDark },
        ]}
      >
        <View style={styles.row}>
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
        </View>
        <Spacer size="l" color="backgroundDark" />
        <View style={styles.row}>
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
        </View>
      </View>
    </View>
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

export default MenuPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: 'white',
    flex: 1.5,
    alignItems: 'center',
  },

  row: {
    flexDirection: 'row',
  },
})
