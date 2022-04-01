import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import HomeScreen from "./components/HomeScreen/homescreen";
import AppBar from "./components/AppBar/AppBar";
import styles from './styles.js';

export default function App() {
    return (
        <SafeAreaView styles={styles.container}>
            <PaperProvider styles={styles.top}>
                <AppBar></AppBar>
                <HomeScreen></HomeScreen>
            </PaperProvider>
        </SafeAreaView>
    );
}