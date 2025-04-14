import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, Fonts } from '@/shared/tokens';
import { Link } from 'expo-router';
import { CustomLink } from '@/shared/Link/CustomLink';

export default function Users() {
  return (
    <View style={styles.container}>
      <CustomLink
        href="/"
        style={styles.text}
        text="Вернуться на главную страницу"
      />

      <Text style={styles.text}>users</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: {
    color: Colors.white,
    fontSize: Fonts.f18,
  },
});
