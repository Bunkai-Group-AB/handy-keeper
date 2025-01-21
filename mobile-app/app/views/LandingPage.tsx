import { StyleSheet, View } from 'react-native'
import { MenuButton } from '../components'
import theme from '../theme'


const LandingPage = () => {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <MenuButton text="Spela" buttonColor={theme.colors.button} iconName="play" />
          <MenuButton text="Konfigurera" buttonColor={theme.colors.button} iconName="settings" />
        </View>
        <View style={styles.row}>
          <MenuButton text="Statistik" buttonColor={theme.colors.button} iconName="stats" />
          <MenuButton text="Analys" buttonColor={theme.colors.button} iconName="analysis" />
        </View>
      </View>
    )
  }
  
  
  export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.backgroundDark,
  },

  headerContainer : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: theme.spacing.large,
  },

    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: 10
      },

  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  text: {
    color: theme.colors.text,
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#143a84',
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
