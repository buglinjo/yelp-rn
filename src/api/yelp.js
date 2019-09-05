import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'Bearer jXndshq7_3XJiO-jGtmvE9gxGc6-J-qr8aBMuEnkUasdMMKUY4nWYaW3Xhuq03X5s8T1Twx23Z9jslGChyjLFX1h2HIXdgi-88vTqH7VQAdL40Xpd-r_Cq73EQRvXXYx'
	}
})
