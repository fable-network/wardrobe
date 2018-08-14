/* eslint-disable */
// This file was automatically generated
import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = shallow(<Button appearance="primary">Push Me</Button>);
      expect(wrapper1).toMatchSnapshot();
        
      const wrapper2 = shallow(<Button appearance="primary" disabled>Don't Push Me</Button>);
      expect(wrapper2).toMatchSnapshot();
        
      const wrapper3 = shallow(<Button appearance="secondary">Push Me</Button>);
      expect(wrapper3).toMatchSnapshot();
        
      const wrapper4 = shallow(<Button appearance="secondary" disabled>Don't Push Me</Button>);
      expect(wrapper4).toMatchSnapshot();
        
      const wrapper5 = shallow(<Button size="small">Push Me</Button>);
      expect(wrapper5).toMatchSnapshot();
        
    });
  });
});
