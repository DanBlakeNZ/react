import moment from 'moment';
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortbyAmount,
  sortbyDate
} from '../../actions/filters';

test('Should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});


test('Shold generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});

test('Should return text filter object with text value', () => {
  const text = "abc"
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text
  });
});

test('Should return text filter object with text default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

test('Should return amount filter object', () => {
  const action = sortbyAmount();
  expect(action).toEqual({ type: "SORT_BY_AMOUNT" });
});

test('Should return date filter object', () => {
  const action = sortbyDate();
  expect(action).toEqual({ type: "SORT_BY_DATE" });
});