import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import CategoryContainer from './components/categories/CategoryContainer';
import CategoryFilterContainer from './components/categories/CategoryFilterContainer';

export default class App extends React.Component {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <CategoryFilterContainer filter={() => console.log("asd")}/>
                <CategoryContainer filter={() => console.log("The beast")}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});