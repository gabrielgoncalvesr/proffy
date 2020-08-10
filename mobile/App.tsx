import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';

import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';

import AppStack from './src/routes/AppStack';

const App = () => {

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Archivo_400Regular,
        Archivo_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <>
                <AppStack />
                <StatusBar style="light" />
            </>
        );
    }
}

export default App;