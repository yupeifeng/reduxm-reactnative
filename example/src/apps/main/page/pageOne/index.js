import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import { actionInjection, connectStore } from 'reduxm-reactnative';
import './reducer';
import './action';

@connectStore(['pageOneStore'], ['pageOneStore'])
@actionInjection('pageOneAction')
export default class pageOne extends React.Component {
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
				<Text>{this.props.pageOneStore.text}</Text>
				<TextInput
					style={{
						height: 40,
						width: Dimensions.get('window').width,
						borderColor: 'gray',
						borderWidth: 1
					}}
					onChangeText={text => {
						this.props.changeStore({ inputText: text });
					}}
					value={this.props.pageOneStore.inputText}
					placeholder={'请输入'}
				/>
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
