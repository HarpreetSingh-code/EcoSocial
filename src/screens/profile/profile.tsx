import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import commonStyles from '../../utils/commonStyles'
import images from '../../utils/images'
import colors from '../../utils/colors'
import { useDispatch } from 'react-redux'
import { setAppState } from '../../store/slice/appSlice'
import { logoutUser } from '../../utils/commonMethods'

const Profile = () => {
    const dispatch = useDispatch()
    const profileStats = {
        posts: 200,
        followers: 990,
        points: '20k'
    }
    const [userStats, setUserStats] = useState(profileStats)
    const StatTile = ({ title, stat }: { title: any, stat: any }) => {
        return (
            <View style={styles.stateTileContainer}>
                <Text style={styles.stateTileTitle}>{title}</Text>
                <Text style={styles.stateTileStat}>{stat}</Text>
            </View>
        )
    }
    const Tile = ({ onPress, icon, title, style }: { onPress?: any, icon?: any, title?: any, style?: any }) => {
        return (
            <TouchableOpacity style={[styles.tileContainer, style]} onPress={onPress} activeOpacity={0.8}>
                <Image style={styles.tileIcon} source={icon} />
                <Text style={[styles.tileTitle, { color: icon == images.logout_red ? colors.red : colors.black }]}>{title}</Text>
            </TouchableOpacity>
        )
    }
    const logoutPress = () => {
        logoutUser(dispatch)
        alert("User logged out!")
    }
    return (
        <View style={commonStyles.scene}>
            <View style={styles.backgroundContainer}>
                <Image source={require('../../assets/images/profile.jpg')} style={styles.profileAvatar} />
                <Text style={styles.userTitle}>User</Text>
                <Text style={styles.userName}>@user_name</Text>
                <View style={commonStyles.flexRow}>
                    <StatTile title={"Posts"} stat={userStats.posts} />
                    <StatTile title={"Followers"} stat={userStats.followers} />
                    <StatTile title={"Points"} stat={userStats.points} />
                </View>
            </View>
            <Tile
                title={"Logout"}
                icon={images.logout_red}
                onPress={logoutPress}
            />
        </View>
    )
}

export default Profile