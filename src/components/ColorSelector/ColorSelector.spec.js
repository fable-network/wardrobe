
import React from 'react';
import { shallow } from 'enzyme';
import ColorSelector from './ColorSelector';

describe('ColorSelector Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
      
      const wrapper1 = shallow(<ColorSelector  color="#e25454"  disableInteraction={true}/>);
      expect(wrapper1).toMatchSnapshot();
      
      const wrapper2 = shallow(<ColorSelector  color="#5F9DC7"  onClick={() => alert('Clicked!')}/>);
      expect(wrapper2).toMatchSnapshot();
      
      const wrapper3 = shallow(<ColorSelector  patternImage="src/static/images/patternImage.jpg"/>);
      expect(wrapper3).toMatchSnapshot();
      
      const wrapper4 = shallow(<ColorSelector  color="#aecc76"  text="Lime green"/>);
      expect(wrapper4).toMatchSnapshot();
      
      const wrapper5 = shallow(<ColorSelector  color="#aecc76"  selected={true}  text="Lime green"/>);
      expect(wrapper5).toMatchSnapshot();
      
      const wrapper6 = shallow(<ColorSelector  color="#e25454"  fixedSize='40px'  onClick={() => alert('40px')}/>);
      expect(wrapper6).toMatchSnapshot();
      
    });
  });
});
