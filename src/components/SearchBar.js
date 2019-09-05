import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.background}>
			<Feather style={styles.icon} name='search' size={30} />
			<TextInput
				autoCapitalize='none'
				autoCorrect={false}
				style={styles.input}
				placeholder='Search'
				value={term}
				onChangeText={onTermChange}
				onEndEditing={onTermSubmit}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#F0EEEE',
		height: 50,
		borderRadius: 5,
		margin: 20,
		flexDirection: 'row'
	},
	input: {
		fontSize: 18,
		flex: 1
	},
	icon: {
		fontSize: 30,
		alignSelf: 'center',
		marginHorizontal: 10
	}
})

export default SearchBar
