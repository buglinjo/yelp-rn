import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
	const [results, setResults] = useState([])
	const [costEffective, setCostEffective] = useState([])
	const [bitPricier, setBitPricier] = useState([])
	const [bitSpender, setBitSpender] = useState([])
	const [error, setError] = useState('')

	const searchApi = async q => {
		try {
			const { data } = await yelp.get('/search', {
				params: {
					limit: 50,
					term: q,
					location: 'san jose'
				}
			})
			setResults(data.businesses)
			const [ca, bp, bs] = filterResultsByPrice(data.businesses)
			setCostEffective(ca)
			setBitPricier(bp)
			setBitSpender(bs)
		} catch (e) {
			setError('Something went wrong')
		}
	}

	useEffect(() => {
		searchApi('pasta')
	}, [])

	return [searchApi, results, costEffective, bitPricier, bitSpender, error]
}

const filterResultsByPrice = results => {
	let res = {
		$: [],
		$$: [],
		$$$: []
	}

	for (const result of results) {
		if (res[result.price]) {
			res[result.price].push(result)
		}
	}

	return [res['$'], res['$$'], res['$$$']]
}
