import { useCallback, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"


export const useFormNumber = () => {

    const [modifiedPhoneNumber, setModifiedPhoneNumber] = useState('')
    const [isButtonDisabledWhatsApp, setIsButtonDisabledWhatsApp] = useState(true)
    const [isButtonDisabledViber, setIsButtonDisabledViber] = useState(true)
    const [isActiveLanguage, setIsActiveLanguage] = useState('ru')

    const {
        register,
        watch,
        reset,
        formState: { errors }
    } = useForm({ shouldUnregister: false, mode: 'onChange' })

    const inputValueWhatsApp = watch('whatsApp')
    const inputValueViber = watch('viber')

    useEffect(() => {
        const enteredPhoneNumber = (inputValueWhatsApp || inputValueViber || '').replace(/[^\d]/g, '')
        const modifiedNumber = enteredPhoneNumber.replace(/^8/, '7')

        setModifiedPhoneNumber(modifiedNumber)

        setIsButtonDisabledWhatsApp(modifiedNumber < 1 || !inputValueWhatsApp)

        setIsButtonDisabledViber(modifiedNumber < 1 || !inputValueViber)
    }, [inputValueWhatsApp, inputValueViber])

    const phoneValidation = {
        required: 'Введите номер телефона',
        pattern: {
            value: /^[\d\s()+-]+$/i,
            message: 'Номер телефона должен содержать только цифры'
        },
        minLength: {
            value: 10,
            message: 'Номер минимум 10 символов'
        }
    }

    const onSubmit = useCallback(
        messenger => {
            if (!Object.keys(errors).length) {
                let link = ''
                if (messenger === 'whatsApp') {
                    link = `https://wa.me/${modifiedPhoneNumber}`
                } else if (messenger === 'viber') {
                    link = `viber://chat?number=${modifiedPhoneNumber}`
                }

                if (link) {
                    console.log('Отправленный номер:', modifiedPhoneNumber) // Выводим
                    window.open(link, '_blank')
                }

                reset()
            }
        },
        [modifiedPhoneNumber, errors]
    )

    const changeTypeButtonWhatsApp = !isButtonDisabledWhatsApp ? 'submit' : 'button'
    const changeTypeButtonViber = !isButtonDisabledViber ? 'submit' : 'button'

    const locales = {
        ru: { title: 'Рус' },
        en: { title: 'En' }
    }

    const { t, i18n } = useTranslation()

    const toggleLanguage = () => {
        const newLanguage = isActiveLanguage === 'ru' ? 'en' : 'ru'
        i18n.changeLanguage(newLanguage)
        setIsActiveLanguage(newLanguage)
    }

    return {
        register,
        phoneValidation,
        onSubmit,
        errors,
        isButtonDisabledWhatsApp,
        isButtonDisabledViber,
        changeTypeButtonWhatsApp,
        changeTypeButtonViber,
        toggleLanguage,
        t,
        locales,
        isActiveLanguage
    }
}