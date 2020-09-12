import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyUser, IconRemovePhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = ({name, desc}) => {
  return (
    <View style={styles.container}>
      <View style={styles.borderProfile}>
        <Image source={DummyUser} style={styles.avatar} />
        <IconRemovePhoto style={styles.removePhoto} />
      </View>
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  profession: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 3,
  },
  removePhoto: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
