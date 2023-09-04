import React from 'react'
import { Text, View } from 'react-native'
import { Button } from '../Button'
import { styles } from './ListItem.styles'

interface ListitemProps{
    name: string
    onRemove: () => void
}

export const Listitem = ({name, onRemove}:ListitemProps) => {
  return (
    <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Button type='remove' onClick={onRemove} />
    </View>
  )
}
