import { StatusBar } from 'expo-status-bar'
import React, {useState} from 'react'
import { Text, TextInput, View, FlatList, Alert } from 'react-native'
import { styles } from './home.styles'
import { Button } from '../../components/Button'
import { Listitem } from '../../components/ListItem'
import uuid from 'react-native-uuid'

interface Iusers {
    name: string
    id: string
}

export const Home = () => {
    const [users, setusers] = useState<Iusers[]>([] as Iusers[])
    const [name, setname] = useState('')

    const handleAddUser = () => {
        const userAlreadyExists = users.find(user => user.name === name)
        const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        if(!name) {
            return Alert.alert('Nome não pode ser vazio')
        }
        if(userAlreadyExists) {
            return Alert.alert('Nome já adicionado')
            
        }

        if(!nameRegex.test(name)) {
            return Alert.alert('Nome inválido')
        }
        const newUser = {
            name,
            id: uuid.v4() as string
        }
        setusers([...users, newUser])
        setname('')
    }

    const handleRemoveUser = (id: string) => {
      
        const newUsers = users.filter(user => user.id !== id)
        const user = users.find(user => user.id === id)
        Alert.alert(
            'Remover convidado', 
            `Deseja remover o convidado ${user?.name}?`, 
            [{
                text: 'Não',
                style: 'cancel'
            }, 
            {
                text: 'Sim',
                onPress: () => {
                    setusers(newUsers)
                    Alert.alert('Convidado removido com sucesso')
                }
               
            }]
            
            )
    }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>React</Text>
      <Text style={styles.eventDate}>Domingo, 03 de setembro de 2023</Text>
      <View style={styles.formGroup}>
        <TextInput 
            style={styles.input} 
            placeholder="Nome" 
            placeholderTextColor={styles.inputPlaceholder.color}
            value={name}
            onChangeText={setname}
             />
      <Button type='add' onClick={handleAddUser} />
      </View>
      <View style={styles.list}
     >
        <Text style={styles.listTitle}>Lista de convidados</Text>
        <FlatList 
            data={users}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Listitem name={item.name} onRemove={() => handleRemoveUser(item.id)} />}
            ListEmptyComponent={() => <Text style={styles.emptyList}>Nenhum convidado adicionado</Text>}
        />
        </View>
      <StatusBar style="inverted" />
    </View>
  )
}
