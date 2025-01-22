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
          flex: 0.5,
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
            flexWrap: 'wrap',
          }}
        >
          MÅLVAKTS KOLLEN
        </Text>
      </View>
      <View
        style={[
          styles.containerButton,
          { backgroundColor: theme.colors.backgroundDark },
        ]}
      >
        <View style={styles.row}>
          <MenuButton
            text="Spela"
            onPress={onPressPlay}
            buttonColor={theme.colors.buttonPrimary}
            iconName="football-outline"
          />
          <MenuButton
            text="Konfigurera lag"
            onPress={onPressSettings}
            buttonColor={theme.colors.buttonDisabled}
            iconName="cog-outline"
          />
        </View>
        <View style={styles.row}>
          <MenuButton
            disabled
            text="Statistik"
            onPress={onPressStats}
            buttonColor={theme.colors.buttonPrimary}
            iconName="stats-chart-outline"
          />
          <MenuButton
            disabled
            text="Analys"
            onPress={onPressAnalysis}
            buttonColor={theme.colors.buttonPrimary}
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

  containerButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  icon: {
    width: 10,
    height: 10,
    marginRight: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#143a84',
    borderRadius: 5,
    marginHorizontal: 10,
    margin: 10,
    padding: 15,
    color: 'red',
  },
})
