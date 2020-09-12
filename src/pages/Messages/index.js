import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List} from '../../components/molecules';
import {colors, fonts} from '../../utils';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';

const Messages = ({navigation}) => {
  const [doctors] = useState([
    {
      id: 1,
      profile: DummyDoctor1,
      name: 'Vegan Lexis',
      desc: 'Baik bu, terima kasih banyaak atas ....',
    },
    {
      id: 2,
      profile: DummyDoctor2,
      name: 'Alexander John',
      desc: 'Baik bu, terima kasih banyaak atas ....',
    },
    {
      id: 3,
      profile: DummyDoctor3,
      name: 'Mulan Corris',
      desc: 'Baik bu, terima kasih banyaak atas ....',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map((doctor) => {
          return (
            <List
              profile={doctor.profile}
              name={doctor.name}
              desc={doctor.desc}
              key={doctor.id}
              onPress={() => navigation.navigate('Chatting')}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
