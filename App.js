
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>KAJPATH</Text>
      <Text style={styles.bangla}>কাজপথ</Text>
      <Text style={styles.tagline}>আইডিয়া থেকে নিজের কাজ।</Text>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0B1220',
  },
  logo: {
    fontSize: 38,
    fontWeight: '800',
    letterSpacing: 3,
    color: '#FFFFFF',
  },
  bangla: {
    fontSize: 25,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 8,
  },
  tagline: {
    fontSize: 15,
    color: '#CBD5E1',
    marginTop: 10,
  },
});
