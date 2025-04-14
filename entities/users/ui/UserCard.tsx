import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IUser } from '../model/user.model';
import { Colors, Fonts, Radius } from '@/shared/tokens';

export default function UserCard(user: IUser) {
  return (
    <Pressable style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Name: {user.name}</Text>
        <Text style={styles.text}>Username: {user.username}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderRadius: Radius.r10,
    backgroundColor: Colors.blackLight,
  },
  text: {
    color: Colors.white,
    fontSize: Fonts.f18,
  },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
});
