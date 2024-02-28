import axios from 'axios'

const $TELEGRAM_BOT_TOKEN = '7000655759:AAFOGiJqRw2vkcEmIfhNBvSGwM6Kz42hJXU'
const $TELEGRAM_CHAT_ID = '@QuickChatBotForm'
const $API = `https://api.telegram.org/bot${$TELEGRAM_BOT_TOKEN}/sendMessage`

export const sendToTelegram = async formData => {

	const message = `
    *🌟 Новый отзыв 🐞*

		*Имя:* *${formData.username}*

		*Текст:* ${formData.about}

		_________________________
	`

	const response = await axios.post(
		$API,
		{
			chat_id: $TELEGRAM_CHAT_ID,
			text: message,
			parse_mode: 'markdown'
		},
		{
			headers: {
				'Content-Type': 'application/json'
			}
		}
	)
}
