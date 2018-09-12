import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import TabNav from './main/tabnav';
import pageThree from './pageThree';

let headerLeftView = navigation => {
	return (
		<View>
			<TouchableOpacity
				style={{ width: 44, height: 44, justifyContent: 'center', alignItems: 'center' }}
				onPress={() => {
					navigation.goBack();
				}}>
				<Text
					style={{
						fontSize: 18,
						color: '#f7f7f7'
					}}>
					返回
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const Routes = {
	initialRouteName: 'main',
	routes: {
		main: {
			screen: TabNav,
			navigationOptions: {
				headerTitleStyle: {
					flex: 1,
					textAlign: 'center',
					fontFamily: 'PingFangSC-Medium',
					fontSize: 18
				},
				title: '主页',
				headerTintColor: '#fff',
				headerStyle: {
					backgroundColor: '#5AA9FA',
					height: 44,
					shadowOpacity: 0,
					elevation: 0,
					borderBottomWidth: 0
				}
			}
		},
		pageThree: {
			screen: pageThree,
			navigationOptions: ({ navigation }) => {
				return {
					headerTitleStyle: {
						flex: 1,
						textAlign: 'center',
						fontFamily: 'PingFangSC-Medium',
						fontSize: 18
					},
					title: '第三个页面',
					headerTintColor: '#fff',
					headerStyle: {
						backgroundColor: '#5AA9FA',
						height: 44,
						shadowOpacity: 0,
						elevation: 0,
						borderBottomWidth: 0
					},
					headerLeft: headerLeftView(navigation),
					headerRight: <Text />
				};
			}
		}
	}
};

export default Routes;
