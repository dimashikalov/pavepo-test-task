import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IUser } from '../model/user.model';
import { Colors, Fonts, Radius } from '@/shared/tokens';
import { Link } from 'expo-router';

const { width } = Dimensions.get('window');

export default function UserCard(user: IUser) {
  return (
    <Link
      href={{
        pathname: '/users/[id]',
        params: { id: user.id },
      }}
      asChild
    >
      <Pressable style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Name: {user.name}</Text>
          <Text style={styles.text}>Username: {user.username}</Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderRadius: Radius.r10,
    backgroundColor: Colors.blackLight,
    padding: width * 0.05,
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
