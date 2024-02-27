import axios from 'axios'

const $TELEGRAM_BOT_TOKEN = '7000655759:AAFOGiJqRw2vkcEmIfhNBvSGwM6Kz42hJXU'
const $TELEGRAM_CHAT_ID = '@QuickChatBotForm'
const $API = `https://api.telegram.org/bot${$TELEGRAM_BOT_TOKEN}/sendMessage`

export const sendToTelegram = async formData => {


	const message = `
		! ==== !
		\nНовый Отзыв или баг:
		<pre>
			\n<b>Имя:</b> ${formData.username}
			\nТекст: ${formData.about}
		</pre>
	`

	const response = await axios.post(
		$API,
		{
			chat_id: $TELEGRAM_CHAT_ID,
			text: message,
			parse_mode: 'HTML'
		},
		{
			headers: {
				'Content-Type': 'application/json'
			}
		}
	)

	console.log('Ответ от Telegram:', response.data)
}
