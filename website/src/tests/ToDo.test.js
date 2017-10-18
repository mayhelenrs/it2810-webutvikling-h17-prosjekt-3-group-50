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

// Test instatiation of TodoItem and its properties/State.
describe('TodoItem', () => {
    const todo = shallow(<ToDo/>);
    const wrapper = shallow(
        <ToDoItem className="items"
                  value={todo}
                  key={2}
                  color={"rgb(43, 186, 178)"}
                  onClick={() => this.handleClicks(index)}/>
    );

    it('instantiates properties and state properly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    //Tests if the handleClick function changes the state from false to true
    it('handleClick changes state', ()=> {
        const instance = wrapper.instance();
        expect(instance.state).toEqual({"checked": false});
        instance.handleClick();
        expect(instance.state).toEqual({"checked": true});
    });

    //Uses the static function renderToDoItems() to render 3 items  of the class ToDoItem.
    it('renderToDoItems by colors and data', () => {
        const liste = ["test1", "test2", "test3"];
        const colors = ["rgb(43, 186, 178)", "rgb(43, 186, 178)", "rgb(43, 186, 178)"];
        const instance = todo.instance();

        instance.setState({ displayed_data: liste });
        instance.setState({ displayed_colors: colors});
        let items = instance.renderToDoItems();
        expect(items.length).toEqual(3);
    });

    //Checks if handleSubmit with input exists, and executes handleSubmit
    it('handleSubmit handles new input from onClick', () => {
        const instance = todo.instance();
        const liste = ["test1", "test2", "test3"];
        const colors = ["rgb(43, 186, 178)", "rgb(43, 186, 178)", "rgb(43, 186, 178)"];

        expect(todo.find('input').length).toEqual(2);
        expect(todo.find('input').at(1).length).toEqual(1);

        instance.setState({
            color_data: colors,
            data: liste,
            value: "test4",
        });

        todo.setProps({ selectedColor: () => "rgb(0, 0, 0)"});
        expect(instance.state.data).toEqual(liste);
        expect(instance.state.value).toEqual("test4");
        instance.handleSubmit;
        expect(instance.state.data).toEqual(["test1", "test2", "test3", "test4"]);
    });
});