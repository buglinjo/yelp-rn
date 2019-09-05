import React from 'react'
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity
} from 'react-native'
import ResultsDetail from './ResultsDetail'
import { withNavigation } from 'react-navigation'

const ResultsList = ({ title, results, navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				data={results}
				keyExtractor={result => result.id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('ResultsShow', {
									id: item.id
								})
							}
						>
							<ResultsDetail result={item} />
						</TouchableOpacity>
					)
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 20
	},
	title: {
		marginLeft: 20,
		marginBottom: 5,
		fontSize: 18,
		fontWeight: 'bold'
	}
})

export default withNavigation(ResultsList)
