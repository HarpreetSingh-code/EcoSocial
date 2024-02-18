import { View, Text, StatusBar, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import commonStyles from '../../utils/commonStyles'
import styles from './styles'
import colors from '../../utils/colors'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { navigationConstants } from '../../utils/constants'

const Dashboard = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  useEffect(() => {
    StatusBar.setTranslucent(false)
    StatusBar.setBackgroundColor(colors.mainTheme)
  }, [])
  const goToProfile = () => {
    navigation.navigate(navigationConstants.profile, {
      //props here
    })
  }
  const _list = [
    {
      id: 2,
      image: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
      likes: 200,
      comments: 100,
      shareLink: ""
    },
    {
      id: 2,
      image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      likes: 400,
      comments: 10,
      shareLink: ""
    },
    {
      id: 2,
      image: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
      likes: 900,
      comments: 550,
      shareLink: ""
    },
    {
      id: 2,
      image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      likes: 100,
      comments: 80,
      shareLink: ""
    },
  ]
  const [list, setList] = useState<any>([])
  useEffect(() => {
    setList(_list)
  }, [])
  return (
    <View style={commonStyles.scene}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome, User</Text>
        <TouchableOpacity onPress={goToProfile}>
          <Image source={require('../../assets/images/profile.jpg')} style={styles.profileAvatar} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }: any) => {
          return (
            <View style={styles.itemContainer}>
              <View style={commonStyles.flexRow}>
                <Image source={require('../../assets/images/profile.jpg')} style={styles.itemAvatar} />
                <View>
                  <Text style={styles.itemUserName}>User name</Text>
                  <Text style={styles.itemdateCreated}>{new Date().toString()}</Text>
                </View>
              </View>
              <Image source={{ uri: item?.image }} style={styles.itemImage} />
            </View>
          )
        }}
      />
    </View>
  )
}

export default Dashboard