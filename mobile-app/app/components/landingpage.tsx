import { Image, ImageBackground, StyleSheet, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ImageAssets } from '../assets/imageAssets'
import MenuButton from './MenuButton'

export default function LandingPage() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={ImageAssets.backgroundCourt}
          style={styles.image}
        >
          <Image source={ImageAssets.handball} />
          <View style={{ flexDirection: 'column' }}>
            <MenuButton text="Spela" />
            <MenuButton text="Analysera" />
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  text: {
    color: 'white',
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
