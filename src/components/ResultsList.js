import React from 'react'
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from 'react-native'
import ResultsDetail from './ResultsDetail'
import { withNavigation } from 'react-navigation'

const ResultsList = ({ title, results, navigation }) => {
	if (!results.length) {
		return null
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				data={results}
				keyExtractor={result => result.id}
				renderItem={({ item, index }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('ResultsShow', {
									id: item.id,
								})
							}
						>
							<ResultsDetail result={item} index={index} />
						</TouchableOpacity>
					)
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
	},
	title: {
		marginLeft: 20,
		marginBottom: 5,
		fontSize: 18,
		fontWeight: 'bold',
	},
})

export default withNavigation(ResultsList)
