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
		error,
	] = useResults()

	return (
		<>
			<SearchBar
				term={term}
				onTermChange={q => setTerm(q)}
				onTermSubmit={() => searchApi(term)}
			/>
			{error ? <Text>{error}</Text> : null}
			<ScrollView>
				<ResultsList title='$' results={costEffective} />
				<ResultsList title='$$' results={bitPricier} />
				<ResultsList title='$$$' results={bitSpender} />
			</ScrollView>
		</>
	)
}

const styles = StyleSheet.create({})

export default SearchScreen
