import React from 'react';
import { Dimensions, StyleSheet, TextInput, View } from 'react-native';
import { Colors, Fonts, Gaps } from '@/shared/tokens';

interface IUserFilterProps {
  searchText: string;
  setSearchText: (text: string) => void;
}

const { width } = Dimensions.get('window');
export default function Filter({
  searchText,
  setSearchText,
}: IUserFilterProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Поиск пользователей..."
        value={searchText}
        onChangeText={setSearchText}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: Gaps.g10,
    width: '100%',
  },
  searchInput: {
    height: 40,
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: width * 0.03,
    backgroundColor: Colors.white,
  },
});
