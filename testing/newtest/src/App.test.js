import React from 'react';
import App from './App';
import { mount, shallow } from 'enzyme';

describe('<App/> to be present', () =>{
  it('<App/> to be present', ()=>{
    const components = shallow(<App name="app"/>);
    //console.log(components.props());
    expect (components).toHaveLength(1);
  });

  it('it renders props correctly',()=>{
    const components = shallow(<App name="apps" />);
    //console.log(components.instance().props);
    expect(components.instance().props.name).toBe('apps');
  });
  it('it updates the counter on button click',() =>{
    const components = mount(<App />);
    const button = components.find('button');
    //console.log(button.props());
    // button.simulate('click');
    // button.simulate('click');
    // button.simulate('click');
    // button.simulate('click');
    // button.simulate('click');
    // console.log(components.state());
    button.props().onClick();
    expect(components.state().counter).toEqual(1)
  })
})
