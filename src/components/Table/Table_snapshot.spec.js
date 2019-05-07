/* eslint-disable */
// This file was automatically generated
import React from 'react';
import 'jest-styled-components';
import Table from './Table';


jest.mock('../../charts/HighChart', () => () => <high-charts />);

describe('Table Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = mount(
        <Table>
          <Table.Header>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Age</Table.Cell>
            <Table.Cell>Gender</Table.Cell>
            <Table.Cell>Address</Table.Cell>
            <Table.Cell>Phone Number</Table.Cell>
          </Table.Header>
          <Table.Row>
            <Table.Cell>Ali</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Male</Table.Cell>
            <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
            <Table.Cell>0612376543</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Ali</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Male</Table.Cell>
            <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
            <Table.Cell>0612376543</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Ali</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Male</Table.Cell>
            <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
            <Table.Cell>0612376543</Table.Cell>
          </Table.Row>
        </Table>
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = mount(
        <Table layout={[1, 1, 1, 2, 1]}>
          <Table.Header>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Age</Table.Cell>
            <Table.Cell>Gender</Table.Cell>
            <Table.Cell>Address</Table.Cell>
            <Table.Cell>Phone Number</Table.Cell>
          </Table.Header>
          <Table.Row>
            <Table.Cell>Ali</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Male</Table.Cell>
            <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
            <Table.Cell>0612376543</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Ali</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Male</Table.Cell>
            <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
            <Table.Cell>0612376543</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Ali</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Male</Table.Cell>
            <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
            <Table.Cell>0612376543</Table.Cell>
          </Table.Row>
        </Table>
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = mount(
        <Table appearance="light" showBorders>
          <Table.Header>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Age</Table.Cell>
            <Table.Cell>Gender</Table.Cell>
            <Table.Cell>Address</Table.Cell>
            <Table.Cell>Phone Number</Table.Cell>
          </Table.Header>
          <Table.Row>
            <Table.Cell>Ali</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Male</Table.Cell>
            <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
            <Table.Cell>0612376543</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Ali</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Male</Table.Cell>
            <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
            <Table.Cell>0612376543</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Ali</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Male</Table.Cell>
            <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
            <Table.Cell>0612376543</Table.Cell>
          </Table.Row>
        </Table>
      );
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = mount(
        <Table appearance="dark">
          <Table.Header>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Age</Table.Cell>
            <Table.Cell>Gender</Table.Cell>
            <Table.Cell>Address</Table.Cell>
            <Table.Cell>Phone Number</Table.Cell>
          </Table.Header>
          <Table.Row>
            <Table.Cell>Ali</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Male</Table.Cell>
            <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
            <Table.Cell>0612376543</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Ali</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Male</Table.Cell>
            <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
            <Table.Cell>0612376543</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Ali</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Male</Table.Cell>
            <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
            <Table.Cell>0612376543</Table.Cell>
          </Table.Row>
        </Table>
      );
      expect(wrapper4).toMatchSnapshot();

      const wrapper5 = mount(
        <Table appearance="dark" showBorders>
          <Table.Header>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Age</Table.Cell>
            <Table.Cell>Gender</Table.Cell>
            <Table.Cell>Address</Table.Cell>
            <Table.Cell>Phone Number</Table.Cell>
          </Table.Header>
          <Table.Row>
            <Table.Cell>Ali</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Male</Table.Cell>
            <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
            <Table.Cell>0612376543</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Ali</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Male</Table.Cell>
            <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
            <Table.Cell>0612376543</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Ali</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Male</Table.Cell>
            <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
            <Table.Cell>0612376543</Table.Cell>
          </Table.Row>
        </Table>
      );
      expect(wrapper5).toMatchSnapshot();

      const wrapper6 = mount(
        <Table appearance="light" alternatingRowColors={false}>
          <Table.Header>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Age</Table.Cell>
            <Table.Cell>Gender</Table.Cell>
            <Table.Cell>Address</Table.Cell>
            <Table.Cell>Phone Number</Table.Cell>
          </Table.Header>
          <Table.Row>
            <Table.Cell>Ali</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Male</Table.Cell>
            <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
            <Table.Cell>0612376543</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Ali</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Male</Table.Cell>
            <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
            <Table.Cell>0612376543</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Ali</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Male</Table.Cell>
            <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
            <Table.Cell>0612376543</Table.Cell>
          </Table.Row>
        </Table>
      );
      expect(wrapper6).toMatchSnapshot();

      const wrapper7 = mount(
        <Table appearance="dark" alternatingRowColors={false}>
          <Table.Header>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Age</Table.Cell>
            <Table.Cell>Gender</Table.Cell>
            <Table.Cell>Address</Table.Cell>
            <Table.Cell>Phone Number</Table.Cell>
          </Table.Header>
          <Table.Row>
            <Table.Cell>Ali</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Male</Table.Cell>
            <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
            <Table.Cell>0612376543</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Ali</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Male</Table.Cell>
            <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
            <Table.Cell>0612376543</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Ali</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Male</Table.Cell>
            <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
            <Table.Cell>0612376543</Table.Cell>
          </Table.Row>
        </Table>
      );
      expect(wrapper7).toMatchSnapshot();

      const wrapper8 = mount(
        <Table appearance="light" minWidth="2200px">
          <Table.Header>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Age</Table.Cell>
            <Table.Cell>Gender</Table.Cell>
            <Table.Cell>Address</Table.Cell>
            <Table.Cell>Phone Number</Table.Cell>
          </Table.Header>
          <Table.Row>
            <Table.Cell>Ali</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Male</Table.Cell>
            <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
            <Table.Cell>0612376543</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Ali</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Male</Table.Cell>
            <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
            <Table.Cell>0612376543</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Ali</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Male</Table.Cell>
            <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
            <Table.Cell>0612376543</Table.Cell>
          </Table.Row>
        </Table>
      );
      expect(wrapper8).toMatchSnapshot();

    });
  });
});
