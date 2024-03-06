import React, {useMemo} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native';
import Title from '../../components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import UserStory from '../../components/UserStory/UserStory';
import style from './style';
import UserPost from '../../components/UserPost/UserPost';
import 'react-native-gesture-handler';
import globalStyle from '../../assets/styles/globalStyle';
import {Routes} from '../../navigation/Routes';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {ScrollView} from 'react-native-gesture-handler';
import TrainingFocusFlatFun from '../../components/TrainingFocusFlatFun/TrainingFocusFlatFun';
import images from '../../assets/images';

const trainingFocusData = [
  {
    id: 1,
    name: 'workout_1',
    workoutImg: images.focusImg1,
  },
  {
    id: 2,
    name: 'workout_2',
    workoutImg: images.focusImg2,
  },
  {
    id: 3,
    name: 'workout_3',
    workoutImg: images.focusImg3,
  },
  {
    id: 4,
    name: 'workout_4',
    workoutImg: images.focusImg4,
  },
  {
    id: 5,
    name: 'workout_1',
    workoutImg: images.focusImg1,
  },
  {
    id: 6,
    name: 'workout_2',
    workoutImg: images.focusImg2,
  },
  {
    id: 7,
    name: 'workout_3',
    workoutImg: images.focusImg3,
  },
  {
    id: 8,
    name: 'workout_4',
    workoutImg: images.focusImg4,
  },
];
const Home = ({navigation}) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <View>
        <ScrollView>
          <View style={style.header}>
            <Title title={'Generate Workout'} />
            <TouchableOpacity onPress={openDrawer} style={style.messageIcon}>
              <FontAwesomeIcon icon={faBars} size={24} color={'#79869F'} />
            </TouchableOpacity>
          </View>
          <View style={style.userPostContainer}>
            <Text style={style.subHeader}>Area of Focus</Text>
          </View>
          <View style={[style.Pad20]}>
            <FlatList
              data={trainingFocusData}
              numColumns={2}
              renderItem={({item, index}) => (
                <TrainingFocusFlatFun item={item} />
              )}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
