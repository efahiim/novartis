import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Iframe } from '@components/iframe';

export default {
  title: 'Iframe',
  component: Iframe,
} as ComponentMeta<typeof Iframe>;

const Template: ComponentStory<typeof Iframe> = (args) => <Iframe {...args} />;

export const Video = Template.bind({});
Video.args = {
  url: 'https://cdnapisec.kaltura.com/html5/html5lib/v2.97/mwEmbedFrame.php/p/2076321/uiconf_id/46847003/entry_id/1_708w1m76?wid=_2076321&iframeembed=true&playerId=kaltura_player&entry_id=1_708w1m76&flashvars%5BstreamerType%5D=auto&amp;flashvars%5BlocalizationCode%5D=en&amp;flashvars%5BleadWithHTML5%5D=true&amp;flashvars%5BsideBarContainer.plugin%5D=true&amp;flashvars%5BsideBarContainer.position%5D=left&amp;flashvars%5BsideBarContainer.clickToClose%5D=true&amp;flashvars%5Bchapters.plugin%5D=true&amp;flashvars%5Bchapters.layout%5D=vertical&amp;flashvars%5Bchapters.thumbnailRotator%5D=false&amp;flashvars%5BstreamSelector.plugin%5D=true&amp;flashvars%5BEmbedPlayer.SpinnerTarget%5D=videoHolder&amp;flashvars%5BdualScreen.plugin%5D=true&amp;flashvars%5Bhotspots.plugin%5D=1&amp;flashvars%5BKaltura.addCrossoriginToIframe%5D=true&amp;&wid=1_jecs9qj3'
};
