import { View, Text } from 'react-native';
import React from 'react';

export default function ExpensesSummary({ expenses, periodName }) {
  const expenseAmount = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>{expenseAmount.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: gray,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  period: {
    fontSize: 12,
    color: black,
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: purple,
  },
});
