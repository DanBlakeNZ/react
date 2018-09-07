import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('Should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({ // use toEqual for arrays and objects
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('Should setup edit expense action object', () => {
  const action = editExpense('1234', {note: 'New note value'})
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '1234',
    updates: {
      note: 'New note value'
    }
  });
});

test('Should setup add expense action object with provided values', () => {
  const expenseData = {
		description: 'Rent',
		amount: 109500, 
    createdAt: 1000,
    note: 'This was last months rent' 
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String) // Because the id returned will be random, so just test the type of the value - in this instance it is a string.
    }
  })
});

test('Should setup add expense action object with no provided values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: "",
      amount: 0, 
      createdAt: 0,
      note: "",
      id: expect.any(String)
    }
  })
});