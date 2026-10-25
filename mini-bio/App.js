import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>      
        <View style={styles.moldura}>
      <Image source={require('./assets/foto.jpg')} style={styles.foto} />
    </View>

    <Text style={styles.nome}>Nina Lira</Text>
    

    <Text style={styles.bio}>
       Sou Nina, tenho 21 anos e moro em Recife. Sou estudante de Ciência da Computação na Universidade Católica de Pernambuco. Tenho interesse em desenvolvimento back-end e banco de dados. No meu tempo livre, me interesso por literatura e música.
       </Text>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#F3EBE0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  moldura: {
    padding: 4,
    backgroundColor: '#1C1A1A',
    borderWidth: 3,
    borderColor: '#1C1A1A',
    borderRadius: 16,
    marginBottom: 24,
  },
  foto: {
    width: 260,
    height: 320,
    borderRadius: 10,
    resizeMode: 'cover',
  },
   nome: {
    width: '100%',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 14,
    color: '#1C1A1A',
  },
  
  bio: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    color: '#5B534D',
  },
});