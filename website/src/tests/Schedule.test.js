//localStorage is not imported to be used as a class, but to be initiated with jest.
import localStorage from './localStorageMock';

import React from 'react';
import renderer from 'react-test-renderer';
import {Event} from "../components/Schedule/Event";
import {Slot} from "../components/Schedule/Slot";

/*
describe('Schedule Overview', () => {
    it('renders the whole Schedule application', () => {
        const instance = renderer.create(<Schedule />);
        const tree = instance.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
*/

describe('Schedule Components', () => {
    it('renders the Event Component', () => {
        const instance = renderer.create(
            <Event />
        );
        const tree = instance.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders the Slot Component', () => {
        const instance = renderer.create(
            <Slot day={"Mo"}
                   id={1}
                   interval={0}
                   color={"#c7b9e5"}/>
        );
        const tree = instance.toJSON();
        expect(tree).toMatchSnapshot();
    });

    /* Todo: Test other components that auto-generate colors
    *  - find out how to do this
    */
});