import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const ResultsDetail = ({ result, index }) => {
	addMargin = index === 0 ? { marginLeft: 20 } : null

	return (
		<View style={{ ...styles.container, ...addMargin }}>
			<Image style={styles.image} source={{ uri: result.image_url }} />
			<Text style={styles.name}>{result.name}</Text>
			<Text>
				{result.rating} Stars | {result.review_count} Reviews
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginRight: 20,
	},
	image: {
		width: 250,
		height: 150,
		borderRadius: 4,
		marginBottom: 5,
	},
	name: {
		fontWeight: 'bold',
	},
})

export default ResultsDetail
