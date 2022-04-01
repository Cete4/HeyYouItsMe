import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import HomeScreen from "./components/HomeScreen/homescreen";
import AppBar from "./components/AppBar/AppBar";
import
export default function App() {
    return (
        <SafeAreaView>
            <PaperProvider>
                <AppBar></AppBar>
                <HomeScreen></HomeScreen>
            </PaperProvider>
        </SafeAreaView>
    );
}