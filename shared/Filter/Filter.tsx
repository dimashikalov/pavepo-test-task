import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Colors, Fonts, Gaps } from '@/shared/tokens';

interface UserFilterProps {
  searchText: string;
  setSearchText: (text: string) => void;
}

const Filter: React.FC<UserFilterProps> = ({ searchText, setSearchText }) => {
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
};
const styles = StyleSheet.create({
  container: {
    marginBottom: Gaps.g10,
    width: '100%', // Занимает всю ширину контейнера
  },
  searchInput: {
    height: 40,
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
  },
});
export default Filter;
