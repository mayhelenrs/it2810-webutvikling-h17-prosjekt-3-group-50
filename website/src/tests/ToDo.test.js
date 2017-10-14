//localStorage is not imported to be used as a class, but to be initiated with jest.
import localStorage from './localStorageMock';

import React from 'react';
import renderer from 'react-test-renderer';
import {ToDoView} from "../views/ToDoView";
import {ToDo} from "../components/Todo/ToDo";
import {ToDoItem} from "../components/Todo/ToDoItem";
import {CategoryItem} from "../components/Todo/Items";

/* Main function for testing the: */
/* todo application */
describe('ToDo Overview', () => {
    it('renders the whole Todo application', () => {
        const instance = renderer.create(<ToDoView />);
        const tree = instance.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

/* Test function for testing the: */
/* todo components */
describe('ToDo Components', () => {
    it('renders the Category Component', () => {
       const instance = renderer.create(<ToDo/>);
       const tree = instance.toJSON();
       expect(tree).toMatchSnapshot();
    });

    it('renders the CategoryItem Component', () => {
        const instance = renderer.create(<CategoryItem/>);
        const tree = instance.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders the ToDo Component', () => {
        const instance = renderer.create(<ToDo />);
        const tree = instance.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders the ToDoItem Component', () => {
        const instance = renderer.create(<ToDoItem/>);
        const tree = instance.toJSON();
        expect(tree).toMatchSnapshot();
    });
});