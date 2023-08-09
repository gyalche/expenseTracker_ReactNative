import { View, Text, TextInput, Alert } from 'react-native';
import React from 'react';
import Input from './Input';
import Button from '../../UI/Button';

export default function ExpenseForm({ onCancel, onSubmit, submitButtonLabel }) {
  const [inputValues, setInputValues] = useState({
    amount: '',
    date: '',
    description: '',
  });
  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputValues((data) => {
      return {
        ...data,
        [inputIdentifier]: enteredValue,
      };
    });
  };

  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionValid = expenseData.date.trim().length > 0;
    if (!amountIsValid || !dateValid || !descriptionValid) {
      Alert.alert('Invalid input', 'Please check your inputs');
      return;
    }

    onSubmit(expenseData);
  }

  return (
    <View style={styles.form}>
      <View style={styles.inputRow}>
        <Input
          label="amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangeHandler('amount'),
            value: inputValues.amount,
          }}
        />
        <Input
          label="date"
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangeHandler('date'),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="description"
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          onChangeText: inputChangeHandler('description'),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttonContainer}>
        <Button mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button onPress={submitHandler}>{submitButtonLabel}</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: green,
    color: white,
  },
});
