import UIButton from './UIButton';

export default {
    title: 'UI-Kit/UIButton',
    component: UIButton,
};

const Template = (args) => <UIButton {...args} />;

const props = {
    text: 'Hello',
    handleChange: () => console.log('Button click'),
    disabled: false,
    theme: 'light',
    classes: '',
};

export const Light = Template.bind({});

Light.args = {
    ...props,
    theme: 'light',
};

export const Dark = Template.bind({});

Dark.args = {
    ...props,
    theme: 'dark',
};

export const Disbled = Template.bind({});

Disbled.args = {
    ...props,
    disabled: true,
};
