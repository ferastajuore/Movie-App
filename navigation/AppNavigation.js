import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home';
import Movie from '../screens/Movie';
import Person from '../screens/Person';
import Search from '../screens/Search';

const Stack = createStackNavigator();

const AppNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
				<Stack.Screen name="Movie" options={{ headerShown: false }} component={Movie} />
				<Stack.Screen name="Person" options={{ headerShown: false }} component={Person} />
				<Stack.Screen name="Search" options={{ headerShown: false }} component={Search} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({});

export default AppNavigation;
