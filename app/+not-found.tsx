import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import { Colors, Fonts, Gaps } from '@/shared/tokens';
import { CustomLink } from '@/shared/Link/CustomLink';

const { width } = Dimensions.get('window');

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>
          Ооо... что-то пошло не так. Попробуйте вернуться на главный экран
          приложения
        </Text>

        <CustomLink href="/" text="На главный экран" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    padding: width * 0.05,
  },
  content: {
    alignItems: 'center',
    width: '100%',
    gap: Gaps.g20,
  },

  text: {
    fontSize: Fonts.f18,
    color: Colors.white,
    textAlign: 'center',
  },
});
