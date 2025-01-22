import { useTheme } from '@shopify/restyle'
import { StyleSheet, View } from 'react-native'
import { MenuButton, Text } from '../components'
import { Theme } from '../theme'
// todo fix later

const MenuPage = () => {
  const theme = useTheme<Theme>()
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors.backgroundDark,
        }}
      >
        <Text
          variant="banner"
          style={{
            height: 200,
            paddingTop: 100,
            textAlign: 'center',
            lineHeight: 50,
            flexWrap: 'wrap',
          }}
        >
          MÅLVAKTS KOLLEN
        </Text>
      </View>
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
          <MenuButton
            text="Konfigurera lag"
            onPress={onPressSettings}
            iconName="cog-outline"
          />
        </View>
        <View style={styles.row}>
          <MenuButton
            disabled
            text="Statistik"
            onPress={onPressStats}
            iconName="stats-chart-outline"
          />
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
    flex: 1.5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})
