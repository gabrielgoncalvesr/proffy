import React from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import heartIcon from '../../assets/images/icons/heart.png';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const GiveClasses = () => {

    const { goBack } = useNavigation();

    const handleNavigationBack = () => {
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={giveClassesBgImage}
                style={styles.content}
                resizeMode="contain"
            >
                <Text style={styles.title}>
                    Quer ser um Proffy?
                </Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma web.
                </Text>
            </ImageBackground>

            <RectButton style={styles.okButton} onPress={handleNavigationBack}>
                <Text style={styles.okButtonText}>
                    Tudo Bem!
                </Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses;