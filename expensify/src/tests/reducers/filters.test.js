import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const text = "some text";
  const action = {
     type: 'SET_TEXT_FILTER', 
     text: text
    };
  const state = filtersReducer(text, action);
  expect(state.text).toBe(text);
});

test('should set starDate filter', () => {
  const starDate = moment();
  const action = {
    type: 'SET_START_DATE', 
    startDate: starDate
   };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(starDate);
});

test('should set endDate filter', () => {
  const endDate = moment().add(3, "days");
  const action = {
    type: 'SET_END_DATE', 
    endDate: endDate
   };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(endDate);
});