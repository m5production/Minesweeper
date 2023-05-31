/* eslint linebreak-style: ["error", "windows"] */

import GlobalController from './global/global-controller';
import renderHeading from './heading/render-heading';

renderHeading();

const game = new GlobalController();
game.start();
