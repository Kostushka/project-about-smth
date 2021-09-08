import { useState } from 'react';
import UIInput from './UIInput';

export default {
    title: 'UI-Kit/UIInput',
    component: UIInput,
};

const Template = (arg) => {
    const [input, setInput] = useState('');
    const handleInputChange = (value) => {
        setInput(value);
    };
    return (
        <UIInput {...arg} value={input} handleInputChange={handleInputChange} />
    );
};

const props = {
    value: '',
    handleInputChange: (e) => console.log('Input Change'),
    placeholder: 'Placeholder',
    classes: '',
};

export const Default = Template.bind({});

Default.args = {
    ...props,
};
