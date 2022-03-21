import React, { useState, useEffect, useCallback } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

type Skill = {
  id: string;
  name: string;
};

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState<Skill[]>([]);
  const [gretting, setGretting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      return setGretting('Good morning');
    }

    if (currentHour >= 12 && currentHour < 18) {
      return setGretting('Good afternoon');
    }

    if (currentHour >= 18) {
      return setGretting('Good night');
    }
  }, []);

  const handleAddNewSkill = useCallback(() => {
    const data = {
      id: new Date().getTime().toString(),
      name: newSkill,
    };

    setSkills(previousSkills => [...previousSkills, data]);
    setNewSkill('');
  }, [newSkill]);

  const handleRemoveSkill = useCallback((id: string) => {
    setSkills(previousSkills =>
      previousSkills.filter(skill => skill.id !== id),
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Gustavo</Text>
      <Text style={styles.gretting}>{gretting}</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        value={newSkill}
        onChangeText={setNewSkill}
      />
      <Button onPress={handleAddNewSkill}>Add</Button>
      <Text style={[styles.title, { marginVertical: 50 }]}>My skills</Text>
      <FlatList
        data={skills}
        keyExtractor={skill => skill.id}
        renderItem={({ item: skill }) => (
          <SkillCard
            skill={skill.name}
            onPress={() => handleRemoveSkill(skill.id)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    padding: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  gretting: {
    color: '#fff',
  },
});
