import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Store } from 'reduxm-reactnative';
import Routes from './apps/routes';

export default class App extends Component {
	constructor(props) {
		super(props);
		// 模拟器不显示warning
		console.disableYellowBox = true;
	}

	render() {
		const AppStackNavigator = createStackNavigator(Routes.routes, {
			initialRouteName: Routes.initialRouteName,
			cardStyle: { flex: 1, backgroundColor: '#fff' }
		});

		return Store.createStore(
			<View style={styles.container}>
				<AppStackNavigator />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
