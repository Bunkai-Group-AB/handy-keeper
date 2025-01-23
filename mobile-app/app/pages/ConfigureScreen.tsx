import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '../components'

const ConfigurePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Configure Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default ConfigurePage
