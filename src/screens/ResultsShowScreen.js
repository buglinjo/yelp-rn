import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
	const id = navigation.getParam('id')
	const [result, setResult] = useState(null)

	const getResult = async () => {
		try {
			const { data } = await yelp.get(`/${id}`)
			setResult(data)
		} catch (e) {
			console.error(e)
		}
	}

	useEffect(() => {
		getResult()
	}, [])

	if (!result) {
		return null
	}

	return (
		<View>
			<Text>{result.name}</Text>
		</View>
	)
}

const styles = StyleSheet.create({})

export default ResultsShowScreen
