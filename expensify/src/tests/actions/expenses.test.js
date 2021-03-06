import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import { ENETRESET } from 'constants';

// REMOVE EXPENSE

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '23321' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '23321'
  });
});

// EDIT EXPENSE

test('should setup edit expense action object', () => {
  const action = editExpense( '23321', { note: 'New value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '23321',
    updates: {
      note: 'New value'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 1500,
    createdAt: 1000,
    note: 'This was last months rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});