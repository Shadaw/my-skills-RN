import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type SkillCardProps = {
  skill: string;
  onPress: () => void;
}

export const SkillCard = ({ skill, onPress }: SkillCardProps) => {
  return (
    <TouchableOpacity style={styles.buttonSkill} onPress={onPress}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 17,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
