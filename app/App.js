import React from 'react';

import {StyleSheet, ScrollView} from 'react-native';
import CategoryContainer from './components/categories/CategoryContainer';
import CategoryFilterContainer from './components/categories/CategoryFilterContainer';
import {StackNavigator} from 'react-navigation';
import Frontpage from "./views/frontpage";
import Schedule from "./views/Schedule";
import Note from "./components/notes/Note";
import {Categories} from "./components/categories/Categories";

export default class App extends React.Component {

    render() {
        return (
            <Categories/>
        );
    }
};

/**
 *
 <ScrollView contentContainerStyle={styles.container}>
 <CategoryFilterContainer filter={() => console.log("asd")}/>
 <CategoryContainer filter={() => console.log("The beast")}/>
 </ScrollView>
 */

const Navigator = StackNavigator({
    Home: {screen: Frontpage},
    Schedule: {screen: Schedule},
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
