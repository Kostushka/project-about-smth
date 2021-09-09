import UIVideo from './UIVideo';
import video from './video/error.mp4';

export default {
    title: 'UI-Kit/UIVideo',
    component: UIVideo,
};

const Template = (args) => <UIVideo {...args} />;

const props = {
    src: video,
    playbackRate: 1.0,
    classes: '',
};

export const Default = Template.bind({});

Default.args = {
    ...props,
};
