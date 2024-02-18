import { View, Text } from 'react-native'
import React, { useState } from 'react'
import LottieView from 'lottie-react-native';
import lotties from '../../utils/lotties';
import commonStyles from '../../utils/commonStyles';
import styles from './styles';
import { BigLogo } from '../../components/logo';
import InputTextField from '../../components/inputTextField';
import { appConstants, extraConstants, storageKeysConstants } from '../../utils/constants';
import { SubmitButton } from '../../components/button';
import images from '../../utils/images';
import { useRoute } from '@react-navigation/native';
import { setAppState } from '../../store/slice/appSlice';
import { useDispatch } from 'react-redux';
import { setLocalObject, setLocalValue } from '../../utils/asyncStorage';

const VerifyOtp = () => {
    const route: any = useRoute();
    const dispatch = useDispatch()
    const mobile = route.params.mobile
    const [formData, setFormData] = useState({
        otp: {
            isValid: true,
            value: ''
        }
    })

    const validateForm = () => {
        let isError: any = false;
        if (formData?.otp?.value?.length != 4) {
            isError = true;
            setFormData((prev: any) => { return { ...prev, otp: { value: formData.otp.value, isValid: false } } })
        }
        if (!isError) {
            if (formData.otp.value == '1234') {
                dispatch(setAppState(extraConstants.main))
                setLocalObject(storageKeysConstants.userDetails, { username: "Hello world" })
            } else {
                alert("Wrong OTP! otp--->1234")
            }

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
                    <Text style={styles.title}>{appConstants.verifyMobile}</Text>
                    <Text style={styles.description}>{appConstants.enterTheOtpThatYouRecievedOnYourMobile.replace("<mobile>", `+91 ${mobile}`)}</Text>
                    <InputTextField
                        onChangeText={(text: any) => setFormData((prev: any) => { return { ...prev, otp: { value: text, isValid: true } } })}
                        placeholder={appConstants.enterOtp + '...'}
                        value={formData.otp.value}
                        icon={images.otp_black}
                        isValid={formData.otp.isValid}
                        keyboardType='number-pad'
                        maxLength={4} />
                    <SubmitButton
                        onPress={validateForm}
                        style={styles.submitBtn}
                        title={appConstants.verify}
                    />
                </View>
            </View>
        </View>
    )
}

export default VerifyOtp