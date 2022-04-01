import React from 'react';
import {} from 'react-native';
import {Appbar} from 'react-native-paper';
import styles from './style.js';

export default function AppBar() {
    return (
        <Appbar style={styles.bottom}>
            <Appbar.Action
                icon="archive"
                onPress={() => console.log('Pressed archive')}
            />
            <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')}/>
            <Appbar.Action icon="label" onPress={() => console.log('Pressed label')}/>
            <Appbar.Action
                icon="delete"
                onPress={() => console.log('Pressed delete')}
            />
        </Appbar>
    );
}