import 'jsdom-global/register';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import NavHeader from '../views/home/navHeader';
import { expect } from 'chai';
import Drawer from 'material-ui/Drawer';
import Login from '../views/home/login';
import Home from '../views/home/home';
import Sample from '../components/sample/sample'
import Dialog from 'material-ui/Dialog';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AutoComplete from 'material-ui/AutoComplete';
import sinon from 'sinon';
//console.log(Article);
describe('<NavHeader />', () => {
  it('should render <NavHeader />', () => {
    const wrapper = mount(<NavHeader />, {
         context: {
           muiTheme: getMuiTheme()
         },
         childContextTypes: {
           muiTheme: React.PropTypes.object.isRequired
         },
       });
    expect(wrapper.find(Drawer)).to.have.length(1);
  });
});

describe('<login />', () =>{
  it('should render <login />' , () => {
    const wrapper = mount(<Login />, {
         context: {
           muiTheme: getMuiTheme()
         },
         childContextTypes: {
           muiTheme: React.PropTypes.object.isRequired
         },
       });
    expect(wrapper.find(Dialog)).to.have.length(1);
  })
})

describe('<home />', () =>{
  it('should render <home />', () =>{
    const wrapper = mount(<Home />,{
      context: {
        muiTheme: getMuiTheme()
      },
      childContextTypes: {
        muiTheme: React.PropTypes.object.isRequired
      },
    });
    expect(wrapper.find(NavHeader)).to.have.length(1);
  })
})
//componentWillMount

describe('componentWillMount',() =>{
  it('should render componentWillMount' , () =>{
    sinon.spy(Sample.prototype, 'componentWillMount');
    const wrapper = mount(<Sample />,{
      context: {
        muiTheme: getMuiTheme()
      },
      childContextTypes: {
        muiTheme: React.PropTypes.object.isRequired
      },
    });
    expect(Sample.prototype.componentWillMount.calledOnce).to.equal(true);
    //expect(wrapper.find(AutoComplete)).to.have.length(1);
  })
})
