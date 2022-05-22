import axios from 'axios'
import { BASE_URL } from '@/constants'
import type { IPost } from '@/types/IPost'

const api = axios.create({
	baseURL: BASE_URL,
})

export async function getPosts() {
	const { data } = await api.get<IPost[]>('')

	return data
}
