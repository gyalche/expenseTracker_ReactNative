import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AllExpenses from './screens/AllExpenses';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ExpenseOverView() {
  <Tab.Navigator
    screenOptions={({ navigation }) => ({
      headerStyle: { backgroundColor: gray },
      headerTintColor: 'white',
      tabBarStyle: { backgroundColor: gray },
      tabBarActiveTintColor: blue,
      headerRight: ({ tintColor }) => {
        <IconButton
          icon="add"
          size={24}
          color={tintColor}
          onPress={() => {
            navigation.navigate('ManageExpense');
          }}
        />;
      },
    })}>
    <Tab.Screen
      name="RecentExpenses"
      component={RecentExpenses}
      options={{
        title: 'Recent Expenses',
        label: 'Recent',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="hourglass" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="AllExpenses"
      component={AllExpenses}
      options={{
        title: 'All Expenses',
        label: 'All',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="calender" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>;
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <expensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: gray },
              headerTintColor: white,
            }}>
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpenseOverView}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpenses}
              options={{
                presentation: 'modal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </expensesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
