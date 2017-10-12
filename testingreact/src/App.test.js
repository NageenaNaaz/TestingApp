import expect from 'expect';
import { shallow } from 'enzyme';
import Home from './Home';
import TextField from 'material-ui/TextField';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

describe('Components : App', () =>{

  it('links back to the search', () =>{
    const wrapper = shallow(<Home/>);
    //console.log(component.instance().props);
    //expect(component.instance().props.name).toBe('Hello');
    expect(wrapper.contains('Hello')).toBe(true);
    expect(wrapper.find(TextField)).to.have.length(1);
  });

  it('indicate whether the message is added to fav');
  it('delete itself when the delete button is clicked');
})
