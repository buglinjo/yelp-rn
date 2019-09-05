import React, { useState } from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
	const [term, setTerm] = useState('')
	const [
		searchApi,
		results,
		costEffective,
		bitPricier,
		bitSpender,
		error
	] = useResults()

	const filterResultsByPrice = price => {}

	return (
		<>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={searchApi}
			/>
			{error ? <Text>{error}</Text> : null}
			<ScrollView>
				<ResultsList title='Cost Effective' results={costEffective} />
				<ResultsList title='Bit Pricier' results={bitPricier} />
				<ResultsList title='Bit Spender' results={bitSpender} />
			</ScrollView>
		</>
	)
}

const styles = StyleSheet.create({})

export default SearchScreen
