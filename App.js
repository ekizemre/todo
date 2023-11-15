import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { appStyles as styles } from "./styles";
import React, { useState } from 'react';

export default function App() {

  const [text, setText] = useState("");

  const [tasks, setTasks] = useState([]);

  const handleAddTaskPress = () => {
    setTasks([...tasks, text]);
    setText("");
  };

  const handleDeleteTaskPress = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <SafeAreaView style={{ flex: 2 }}>
      <View style={styles.container}>
        <Text style={styles.title}>To-Do-List ({text})</Text>
        <Text style={styles.subtitle}>Planlarınızı Yazabilirsiniz.</Text>



        <TextInput
          style={styles.input}
          placeholder="Yapılacaklar..."
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleAddTaskPress}>
          <Text style={styles.buttonText}>Plan Oluştur</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <FlatList
          data={tasks}
          renderItem={({ item, index }) => (
            <View style={styles.taskContainer}>
              <Text style={styles.taskText}>{item}</Text>
              <TouchableOpacity style={styles.taskDelete} onPress={() => handleDeleteTaskPress(index)}>
                <Text style={styles.taskDeleteText}>X</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item + Date.now() + Math.random()}
        />


      </View>
    </SafeAreaView>
  );
}

