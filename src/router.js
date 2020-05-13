import Vue from 'vue';
import Router from 'vue-router';

/**
 * Layouts.
 */
import Main from '@/layouts/Main';

/**
 * Views.
 */
import Home from '@/views/Home';
import ThreadDetail from '@/views/threads/ThreadDetail.vue';
import NotFound from '@/views/NotFound';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Main,
			children: [
				{
					path: '',
					component: Home,
				},
				{
					name: 'threadDetail',
					path: '/thread/:slug',
					component: ThreadDetail,
				},
				{
					path: '/404',
					component: NotFound,
				},
			],
		},

		{
			path: '*',
			name: 'notFound',
			redirect: '/404',
		},
	],
});
