import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Colors, Fonts } from '@/shared/tokens';
import { CustomLink } from '@/shared/Link/CustomLink';
import { useAtomValue, useSetAtom } from 'jotai';
import { loadUserAtom, userAtom } from '@/entities/users/model/user.state';
import { IUser } from '@/entities/users/model/user.model';
import { FlatList } from 'react-native-gesture-handler';
import UserCard from '@/entities/users/ui/UserCard';

export default function UsersList() {
  const { users, error, isLoading } = useAtomValue(userAtom);
  const loadUsers = useSetAtom(loadUserAtom);

  useEffect(() => {
    loadUsers();
  }, []);

  const renderUsers = ({ item }: { item: IUser }) => {
    return (
      <View style={styles.item}>
        <UserCard {...item} key={item.id} />
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <CustomLink href="/" text="Вернуться на главную страницу" />
        <Text style={styles.text}>Список пользователей</Text>
        <View>
          {isLoading && (
            <ActivityIndicator
              style={styles.activity}
              size={'large'}
              color={Colors.primary}
            />
          )}
          {users.length > 0 && (
            <FlatList
              refreshing={isLoading}
              onRefresh={loadUsers}
              data={users}
              keyExtractor={(user) => user.id.toString()}
              renderItem={renderUsers}
            />
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center', paddingTop: 20 },
  text: {
    color: Colors.white,
    fontSize: Fonts.f18,
  },
  item: {
    padding: 20,
  },

  activity: {
    marginTop: 30,
  },
});
