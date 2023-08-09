import { View, Text, FlatList } from 'react-native';
import React from 'react';

function renderExpenseItem(itemData) {
  <ExpenseItem description={...itemData.item} />;
}
export default function ExpensesList({ expense }) {
  return (
    <FlatList
      data={expense}
      keyExtractor={(data) => data?.id}
      renderItem={renderExpenseItem}
    />
  );
}

const styles = StyleSheet.create({});
