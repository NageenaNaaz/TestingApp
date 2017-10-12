import React from 'react';
import Home from './Home.jsx';
import {shallow} from 'enzyme';


describe('The main app', () => {
    it('the app should have text', () => {
        const app  = shallow(<Home/>);
        expect(app.contains(<div>Hello jest from react</div>)).toBe(true);
    })
})
