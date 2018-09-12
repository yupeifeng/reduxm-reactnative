import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { actionInjection, connectStore } from 'reduxm-reactnative';
import './reducer';
import './action';
import pageThree from '../../../pageThree';

@connectStore(['pageTwoStore'], ['pageTwoStore'])
@actionInjection('pageTwoAction')
export default class pageTwo extends React.Component {
	render() {
		return (
			<View
				style={[
					styles.container,
					{
						alignItems: 'center',
						justifyContent: 'center'
					}
				]}>
				<Text>{this.props.pageTwoStore.text}</Text>

				<TouchableOpacity
					activeOpacity={1}
					onPress={() => {
						this.props.navigation.navigate('pageThree', { value: 1 });
					}}>
					<Text>点击调整至第三个页面</Text>
				</TouchableOpacity>
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
