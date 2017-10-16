//localStorage is not imported to be used as a class, but to be initiated with jest.
import localStorage from './localStorageMock';

import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {shallow, mount, render} from 'enzyme';
import {ToDoView} from "../views/ToDoView";
import {ToDo} from "../components/Todo/ToDo";
import {ToDoItem} from "../components/Todo/ToDoItem";
import {CategoryItem} from "../components/Todo/Items";

Enzyme.configure({ adapter: new Adapter() });

/* Main function for testing the: */
/* todo application */
describe('ToDo Overview', () => {
    it('renders the whole Todo application', () => {
        const instance = renderer.create(<ToDoView />);
        const tree = instance.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

/* Test function for testing the rendering of: */
/* todo components */
describe('ToDo Component Renders', () => {
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

// Test instatiation of CategoryItem properties.
describe('CategoryItem', () => {
    it('instantiates properties properly ', () => {
        const wrapper = shallow(
            <CategoryItem className="items"
                           value={"Home"}
                           color={"rgb(43, 186, 178)"}
                           key={3}
                           onClick={() => this.handleClicks(3)}/>
        );
        let current = wrapper.instance()['_currentElement'];
        expect(current.key).toEqual("3");
        expect(current.props.value).toEqual("Home");
        expect(current.props.color).toEqual("rgb(43, 186, 178)");
    });
});

// Test instatiation of TodoItem and its properties/State.
describe('TodoItem', () => {
    it('instantiates properties and state properly', () => {
        const todo = shallow(<ToDo/>);
        const wrapper = shallow(
            <ToDoItem className="items"
                      value={todo}
                      key={2}
                      color={"rgb(43, 186, 178)"}
                      onClick={() => this.handleClicks(index)}/>
        );
        expect(wrapper).toMatchSnapshot();
    });

    //Tests if the handleClick function changes the state from false to true
    it('handleClick changes state', ()=> {
        const todo = shallow(<ToDo/>);
        const wrapper = shallow(
            <ToDoItem className="items"
                      value={todo}
                      key={2}
                      color={"rgb(43, 186, 178)"}
                      onClick={() => this.handleClicks(index)}/>
        );
        expect(wrapper.instance()['_instance'].state).toEqual({"checked": false});
        wrapper.instance()['_instance'].handleClick();
        expect(wrapper.instance()['_instance'].state).toEqual({"checked": true});
    });
});