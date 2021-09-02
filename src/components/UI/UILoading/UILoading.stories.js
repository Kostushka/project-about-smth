import UILoading from './UILoading';

export default {
    title: 'UI-Kit/UILoading',
    component: UILoading,
};

const Template = (args) => <UILoading {...args} />;

const props = {
    theme: 'gold',
    isShadow: false,
    classes: '',
};

export const Gold = Template.bind({});

Gold.args = {
    ...props,
    theme: 'gold',
};
export const White = Template.bind({});

White.args = {
    ...props,
    theme: 'white',
    isShadow: true,
};
export const Blue = Template.bind({});

Blue.args = {
    ...props,
    theme: 'blue',
};
