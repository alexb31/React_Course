import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpensesListItem';
import expenses from '../fixtures/expenses';

test('should render expenseListItem correctly', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[1]}/>);
  expect(wrapper).toMatchSnapshot();
});