import { useNavigation } from '@react-navigation/native';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { PressableProps } from 'react-native-gesture-handler';
import { Colors, Fonts, Radius } from '../tokens';
const { width } = Dimensions.get('window');

export default function MyBackButton({ ...props }: PressableProps) {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => {
        navigation.goBack();
      }}
    >
      <View style={styles.button}>
        <Text style={styles.text}>Назад к списку</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: Radius.r10,
    backgroundColor: Colors.blackLight,
    justifyContent: 'center',
    alignItems: 'center',
    padding: width * 0.03,
  },

  text: {
    fontFamily: 'FiraSans',
    fontSize: Fonts.f16,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'center',
    color: Colors.white,
  },
});
