import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { connectStore, actionInjection } from 'reduxm-reactnative';
import './reducer';
import './action';

@connectStore(['pageThreeStore'], ['pageThreeStore'])
@actionInjection('pageThreeAction')
export default class pageThree extends React.Component {
	render() {
		let _params = this.props.navigation.state.params || {};
		return (
			<View
				style={[
					styles.container,
					{
						alignItems: 'center',
						justifyContent: 'center'
					}
				]}>
				<Text>{this.props.pageThreeStore.text}</Text>
				<Text
					style={{
						color: '#333333'
					}}>
					关于我们：传值为
					{_params.value}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f3f4f5'
	}
});
