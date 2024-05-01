import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { animals } from './animals.json';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Animal Gallery</Text>
      </View>
      <ScrollView style={styles.scrollview}>
        <View style={styles.animalContainer}>
          {
            animals.map((animal) => (
              <TouchableOpacity key={animal.name} onPress={() => handleAnimalPress(animal)}>
                <Image source={{uri: animal.imageSource}} style={styles.animalImage} />
              </TouchableOpacity>
            ))
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const handleAnimalPress = (animal) => {
  console.log("Pressed", animal.name);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    position: 'relative',
  },
  header: {
    backgroundColor: '#2C2C2C',
    paddingVertical: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollview: {
    padding: 16,
    marginTop: 50,
  },
  animalContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  animalImage: {
    height: 150,
    width: 150,
    marginBottom: 25,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#2C2C2C',

  },

});
