import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

Vue.config.productionTip = false;

Vue.filter('formatedDate', function(value) {
	if (!value) return '';

	return new Date(value).toLocaleDateString();
});

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');
