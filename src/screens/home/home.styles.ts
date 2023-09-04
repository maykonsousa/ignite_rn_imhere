import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
            
    },
    eventName: {
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48,
    },
    eventDate: {
      color: '#6b6b6b',
      fontSize: 16,
  
    },
    formGroup: {
        marginTop: 24,
        flexDirection: 'row',
        gap:10,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        color: '#FDFCFE',
        fontSize: 18,
        padding: 16,
        borderRadius: 5,
      
        
    },
    inputPlaceholder: {
        color: '#6b6b6b',

    },

    list : {
        marginTop: 32,
    },
    listTitle: {
        color: '#FDFCFE',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 18,
    },
    emptyList: {
        color: '#6b6b6b',
        fontSize: 16,
        marginTop: 16,
    },
    
    
    
  
  });