import React from 'react';
import { StyleSheet, Text } from 'react-native';



type HeadlineProps = {
  children: string;
}

const Headline: React.FC<HeadlineProps> = ({ children }) => {
  return (
    <Text style={styles.headline}>{children}</Text>
  )
}



const styles = StyleSheet.create({

  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },

})



export { Headline };
