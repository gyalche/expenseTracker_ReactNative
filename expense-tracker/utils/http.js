import axios from 'axios';

export function storeExpense(expenseData) {
  axios.post(
    'https://react-native-udemy-14fe1-default-rtdb.firebaseio.com/expenses.json',
    expenseData
  );
}
