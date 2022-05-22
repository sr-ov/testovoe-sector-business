import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import orderBy from 'lodash.orderby'
import type { IPost } from '@/types/IPost'
import { getPosts } from '@/api'

type SortKey = 'id' | 'title' | 'body'
type SortFilter = 'asc' | 'desc'

export enum SortKeys {
	Id = 'id',
	Title = 'title',
	Body = 'body',
}
export enum SortFilters {
	Asc = 'asc',
	Desc = 'desc',
}

export const useStore = defineStore('store', () => {
	const state = reactive({
		searchValue: '',
		posts: [] as IPost[],
		labels: ['ID', 'Заголовок', 'Описание'],
		slice: [0, 10],
		sortFilter: SortFilters.Asc as SortFilter,
		sortKey: SortKeys.Id as SortKey,
	})

	const postsCount = computed(() => state.posts.length)

	const posts = computed(() => {
		const posts = state.posts.slice(...state.slice)

		if (state.searchValue) {
			return posts.filter(
				(el) =>
					el.title.includes(state.searchValue) ||
					el.body.includes(state.searchValue)
			)
		}

		return posts
	})

	const sortBy = computed(() =>
		orderBy(posts.value, [state.sortKey], [state.sortFilter])
	)

	const toggleSortFilter = () => {
		state.sortFilter =
			state.sortFilter === SortFilters.Asc
				? SortFilters.Desc
				: SortFilters.Asc
	}

	const setPosts = async () => {
		state.posts = await getPosts()
	}

	const setSortKey = (newSortKey: SortKey) => {
		const prevSortKey = state.sortKey

		if (prevSortKey === newSortKey) {
			toggleSortFilter()
		} else {
			state.sortFilter = SortFilters.Asc
			state.sortKey = newSortKey
		}
	}

	return {
		state,
		getters: {
			posts,
			postsCount,
			sortBy,
		},
		actions: {
			setPosts,
			setSortKey,
		},
	}
})
