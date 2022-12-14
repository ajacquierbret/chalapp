import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App = () => (
  <View
    style={{
      ...StyleSheet.absoluteFillObject,
      backgroundColor: '#0A0A0A',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: '600' }}>
      Un coktail ?
    </Text>
    <Text
      style={{
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: '600',
        paddingTop: 12,
      }}
    >
      This is <Text style={{ color: '#32ff7e' }}>Chal</Text>
      <Text style={{ color: '#67e6dc' }}>App!</Text>
    </Text>
    <Text
      style={{
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 18,
        padding: 25,
      }}
    >
      <Text style={{ color: '#ff7675' }}>tomate</Text>,{' '}
      <Text style={{ color: '#badc58' }}>avocat</Text>,{' '}
      <Text style={{ color: '#ffb142' }}>rhum</Text>, et...{' '}
      <Text style={{ color: '#ffeaa7' }}>pastis</Text>!
    </Text>
    <StatusBar style="auto" />
  </View>
);

export default App;
