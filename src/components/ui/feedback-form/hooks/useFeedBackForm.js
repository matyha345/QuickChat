import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { sendToTelegram } from "../../../services/sendToTelegram"
import { useState } from "react"
import { useTranslation } from "react-i18next"


export const useFeedBackForm = () => {
    const [lastSubmissionTime, setLastSubmissionTime] = useState(null)
    const [remainingTime, setRemainingTime] = useState(0)
    const { t } = useTranslation()

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const mutation = useMutation({
        mutationFn: async data => {
            return sendToTelegram(data)
        },
        onError: error => {
            console.error('Ошибка при отправке данных на Telegram:', error)
        },
        onSuccess: () => {
            reset()
        }
    })



    return {
        remainingTime,
        setRemainingTime,
        lastSubmissionTime,
        setLastSubmissionTime,
        t,
        handleSubmit,
        mutation,
        register,
        errors,
        reset
    }
}

