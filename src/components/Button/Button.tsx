import React from 'react'
import { styles } from './Button.styles'
import { TouchableOpacity, Text, StyleProp, StyleSheet, ViewStyle } from 'react-native'

interface ButtonProps{
    type: 'add' | 'remove'
    onClick: () => void
    
}

export const Button = ({type, onClick}:ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container,styles[type] ]} onPress={onClick} >
        <Text style={styles.text}>{type==='add'? '+': '-'}</Text>
    </TouchableOpacity>
  )
}
