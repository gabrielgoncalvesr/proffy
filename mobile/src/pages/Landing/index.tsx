import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import heartIcon from '../../assets/images/icons/heart.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';

import styles from './styles';

const Landing = () => {

    const { navigate } = useNavigation();

    const [totalConnections, setTtotalConnections] = useState(0);

    useEffect(() => {
        api.get('/connections').then(response => {
            const { total } = response.data;

            setTtotalConnections(total);
        })
    }, []);

    const handleNavigateToGiveClasesPage = () => {
        navigate('GiveClasses');
    }

    const handleNavigateToStudyPages = () => {
        navigate('Study');
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />

            <Text style={styles.title}>
                Seja Bem-Vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton
                    style={[styles.button, styles.buttonPrimary]}
                    onPress={handleNavigateToStudyPages}
                >
                    <Image source={studyIcon} />

                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton
                    style={[styles.button, styles.buttonSecundary]}
                    onPress={handleNavigateToGiveClasesPage}
                >
                    <Image source={giveClassesIcon} />

                    <Text style={styles.buttonText}>Ensinar</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas {' '}

                <Image source={heartIcon} />
            </Text>
        </View>
    )
}

export default Landing;