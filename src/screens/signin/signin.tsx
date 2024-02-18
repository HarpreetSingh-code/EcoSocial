import { View, Text } from 'react-native'
import React, { useState } from 'react'
import LottieView from 'lottie-react-native';
import lotties from '../../utils/lotties';
import commonStyles from '../../utils/commonStyles';
import styles from './styles';
import { BigLogo } from '../../components/logo';
import InputTextField from '../../components/inputTextField';
import { appConstants, navigationConstants } from '../../utils/constants';
import { SubmitButton } from '../../components/button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import images from '../../utils/images';

const Signin = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const [formData, setFormData] = useState({
        mobile: {
            isValid: true,
            value: ''
        }
    })
    const validateForm = () => {
        let isError: any = false;
        if (formData?.mobile?.value?.length != 10) {
            isError = true;
            setFormData((prev: any) => { return { ...prev, mobile: { value: formData.mobile.value, isValid: false } } })
        }
        if (!isError) {
            console.log('success');
            navigation.navigate(navigationConstants.verifyOtp, {
                // props here
                mobile: formData.mobile.value
            })
        }
    }
    return (
        <View style={commonStyles.scene}>
            <LottieView
                source={lotties.auth_background}
                autoPlay
                loop
                style={styles.lottieBackground} />
            <View style={styles.container}>
                <BigLogo style={styles.bigLogo} />
                <View>
                    <Text style={styles.title}>{appConstants.welcome}</Text>
                    <Text style={styles.description}>{appConstants.enterYourMobileNumberToRecieveAnLoginOTP}</Text>
                    <InputTextField
                        icon={images.phone_black}
                        onChangeText={(text: any) => setFormData((prev: any) => { return { ...prev, mobile: { value: text, isValid: true } } })}
                        placeholder={appConstants.enterMobileNumber + '...'}
                        value={formData.mobile.value}
                        isValid={formData.mobile.isValid}
                        keyboardType='number-pad'
                        maxLength={10} />
                    <SubmitButton
                        onPress={validateForm}
                        style={styles.submitBtn}
                        title={appConstants.submit}
                    />
                </View>
            </View>
        </View>
    )
}

export default Signin