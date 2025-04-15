import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors, Fonts, Radius } from '@/shared/tokens';
import { useLocalSearchParams } from 'expo-router';
import { useAtomValue } from 'jotai';
import { userAtom } from '@/entities/users/model/user.state';
import { IUser } from '@/entities/users/model/user.model';

export default function User() {
  const { id } = useLocalSearchParams();
  const { users } = useAtomValue(userAtom);
  const [user, setUser] = useState<IUser | undefined>(undefined);

  const getUser = () => {
    const findUser = users.find((el) => el.id.toString() === id);
    if (findUser) {
      setUser(findUser);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user.name}</Text>
      <Text style={styles.subtitle}>Username: {user.username}</Text>
      <Text style={styles.subtitle}>Email: {user.email}</Text>
      <Text style={styles.subtitle}>Phone: {user.phone}</Text>
      <Text style={styles.subtitle}>Website: {user.website}</Text>

      <View style={styles.addressContainer}>
        <Text style={styles.addressTitle}>Address:</Text>
        <Text style={styles.text}>Street: {user.address.street}</Text>
        <Text style={styles.text}>Suite: {user.address.suite}</Text>
        <Text style={styles.text}>City: {user.address.city}</Text>
        <Text style={styles.text}>Zipcode: {user.address.zipcode}</Text>
        <Text style={styles.text}>
          Geo: {`Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}`}
        </Text>
      </View>

      <View style={styles.companyContainer}>
        <Text style={styles.companyTitle}>Company:</Text>
        <Text style={styles.text}>Name: {user.company.name}</Text>
        <Text style={styles.text}>Catchphrase: {user.company.catchPhrase}</Text>
        <Text style={styles.text}>BS: {user.company.bs}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.blackLight,
    borderRadius: Radius.r10,
    margin: 10,
  },
  title: {
    fontSize: Fonts.f20,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: Fonts.f16,
    color: Colors.white,
    marginBottom: 5,
  },
  addressContainer: {
    marginVertical: 15,
  },
  addressTitle: {
    fontSize: Fonts.f18,
    fontWeight: 'bold',
    color: Colors.white,
  },
  companyContainer: {
    marginVertical: 15,
  },
  companyTitle: {
    fontSize: Fonts.f18,
    fontWeight: 'bold',
    color: Colors.white,
  },
  text: {
    color: Colors.white,
    fontSize: Fonts.f16,
  },
});
