import { StyleSheet, Text, TouchableOpacity } from 'react-native'

type MenuButtonProps = {
  text: string
  textStyle?: StyleSheet
}

export default function MenuButton(props: MenuButtonProps) {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    padding: 20,
    color: '#ececec',
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
