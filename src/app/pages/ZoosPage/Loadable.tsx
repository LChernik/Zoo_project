/**
 * Asynchronously loads the component for MapPage
 */

 import { lazyLoad } from 'utils/loadable';

 export const ZoosPage = lazyLoad(
   () => import('./index'),
   module => module.ZoosPage,
 );
 