import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Main from './Main';
import Alerts from './components/Alerts';

describe('Main', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Main/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('has a valid snapshot', () => {
        const component = renderer.create(
            <Main />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});

describe('Alerts', () => {

    const props = {
        type: 'success',
        value: 'Campaign added successfully'
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Alerts {...props} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('has a valid snapshot', () => {
        const component = renderer.create(
            <Alerts {...props} />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});