import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should add expense', () => {
  const newExpense = {
    id: '3',
    description: 'Food',
    note: "",
    amount: 1500,
    createdAt: 29500
  };
  const action = { 
    type: 'ADD_EXPENSE',
    expense: newExpense
   };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});

test('Should edit expense if id found', () => {
  const description = "Beer"
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      description
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe("Beer");
});

test('Should not edit expense if id not found', () => {
  const description = "Beer"
  const action = {
    type: 'EDIT_EXPENSE',
    id: "-1",
    updates: {
      description
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});