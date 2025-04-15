import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { Colors, Fonts, Gaps } from '@/shared/tokens';
import { CustomLink } from '@/shared/Link/CustomLink';
import { useAtomValue, useSetAtom } from 'jotai';
import { loadUserAtom, userAtom } from '@/entities/users/model/user.state';
import { IUser } from '@/entities/users/model/user.model';
import { FlatList } from 'react-native-gesture-handler';
import UserCard from '@/entities/users/ui/UserCard';
import Filter from '@/shared/Filter/Filter';

const { width } = Dimensions.get('window');

export default function UsersList() {
  const { users, error, isLoading } = useAtomValue(userAtom);
  const loadUsers = useSetAtom(loadUserAtom);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchText.toLowerCase()) ||
        user.username.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [users, searchText]);

  const renderUsers = ({ item }: { item: IUser }) => {
    return (
      <View style={styles.item}>
        <UserCard {...item} key={item.id} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomLink href="/" text="Вернуться на главную страницу" />
        <Text style={styles.title}>Список пользователей</Text>
        <Filter searchText={searchText} setSearchText={setSearchText} />
      </View>
      <View style={styles.content}>
        {isLoading && (
          <ActivityIndicator
            style={styles.activity}
            size={'large'}
            color={Colors.primary}
          />
        )}
        {error && (
          <Text style={styles.errorText}>
            Произошла ошибка загрузки, попробуйте позже
          </Text>
        )}
        {filteredUsers.length > 0 && (
          <FlatList
            refreshing={isLoading}
            onRefresh={loadUsers}
            data={filteredUsers}
            keyExtractor={(user) => user.id.toString()}
            renderItem={renderUsers}
          />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, // Позволяет контейнеру занимать всю доступную высоту
    backgroundColor: Colors.blackLight, // Убедитесь, что у вас есть цвет фона
    padding: width * 0.05,
  },
  header: {
    alignItems: 'center',
    marginBottom: Gaps.g20, // Отступ между заголовком и контентом
  },
  title: {
    color: Colors.white,
    fontSize: Fonts.f20, // Увеличенный размер шрифта для заголовка
    marginBottom: Gaps.g10, // Отступ под заголовком
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    height: 40,
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: Gaps.g10,
    width: '100%', // Занимает всю ширину контейнера
    backgroundColor: Colors.white,
  },
  item: {
    width: '100%', // Занимает всю ширину
    padding: width * 0.05,
  },
  activity: {
    marginTop: 30,
  },
  noUsersText: {
    color: Colors.white,
    fontSize: Fonts.f18,
    textAlign: 'center',
  },
  errorText: {
    color: Colors.red,
    fontSize: Fonts.f18,
    textAlign: 'center',
  },
});
