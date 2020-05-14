const DB = require('./db');
const Koa = require('koa');
const cors = require('@koa/cors');
const _ = require('koa-route');

const threadList = require('./db/list').threadList();
const threadSingle = require('./db/single').threadSingle();

const app = new Koa();

app.use(cors());

const threads = {
	index(ctx) {
		ctx.status = 200;
		ctx.body = {
			data: threadList,
		};
	},

	show(ctx, slug) {
		const thread = threadSingle.slug === slug;
		// const thread = DB.threads.find((thread) => thread.slug === slug);

		if (!thread) {
			return ctx.throw('Thread not found', 404);
		}

		// const replies = DB.replies.filter(({ thread_id }) => thread_id === thread.id);

		ctx.body = {
			data: threadSingle,
		};
		ctx.status = 200;
	},
};

app.use(_.get('/api/threads', threads.index));
app.use(_.get('/api/threads/:slug', threads.show));

app.listen(process.env.API_PORT);

console.log('API is ready!');
