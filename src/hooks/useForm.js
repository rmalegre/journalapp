// Hook Use Form
import { useState } from 'react'

export const useForm = (initialForm ) => {
    const [form, setForm] = useState(initialForm);

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const onReset = () => {
        setForm(initialForm);
    };

    return {
        ...form,
        form,
        onInputChange,
        onReset,
    };
}