import axios from 'axios'

class userAPI {
	async login(email: string, password: string) {
		const response = await axios.post('http://localhost:7000/api/user/login', {
			email,
			password,
		})
		return response
	}

	async registration(email: string, password: string) {
		const response = await axios.post(
			'http://localhost:7000/api/user/register',
			{
				email,
				password,
				role: 'ADMIN',
			},
		)
		return response
	}

	async check() {
		const response = await axios.get(
			'http://localhost:7000/api/auth/registration',
		)
		return response
	}
}

export default new userAPI