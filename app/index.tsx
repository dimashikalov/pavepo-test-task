import { CustomLink } from '@/shared/Link/CustomLink';
import { Colors } from '@/shared/tokens';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Приложение создано для компании Pavepo</Text>
      <CustomLink href="/users" text="Перейти к пользователям" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: {
    color: Colors.white,
  },
});
