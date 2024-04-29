
import Framework7, { utils, getDevice, createStore } from 'framework7/lite';
import Panel from 'framework7/components/panel';
import Input from 'framework7/components/input';
import Skeleton from 'framework7/components/skeleton';
import PhotoBrowser from 'framework7/components/photo-browser';

Framework7.use([
  Panel,
  Input,
  Skeleton,
  PhotoBrowser
]);

export default Framework7;
export { utils, getDevice, createStore };
