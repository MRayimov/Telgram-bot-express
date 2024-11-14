import cors from 'cors';
import express from 'express';
import ServerlessHttp from 'serverless-http';
import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
const bot = new Telegraf('7207628660:AAH4JSiPsM9oJbFWEWrOFbLu9cbjRsaJH10');
const app = express();

app.use(cors());

bot.start(context => context.reply('Welcome'));

bot.on(message('sticker'), ctx => ctx.reply('👍'));
bot.command('oldschool', ctx => ctx.reply('Hello'));

bot.telegram.setMyCommands([
	{
		command: 'test',
		description: 'Test command',
	},
	{
		command: 'greetings',
		description: 'Greetings command',
	},
	{
		command: 'website',
		description: 'Webiste ochish',
	},
]);

bot.command('website', ctx =>
	ctx.reply('Welcome! Open the mini app below:', {
		reply_markup: {
			inline_keyboard: [
				[
					{
						text: 'Open Web App',
						web_app: { url: 'https://go.coddycamp.uz/account/' }, // Replace with your domain
					},
				],
			],
		},
	})
);
bot.launch();

app.get('/', (req, res) => {
	res.send('salom');
});
export const handler = ServerlessHttp(app);
// app.listen(3000, () => {
// 	console.log('Listening on http://localhost:3000');
// });
