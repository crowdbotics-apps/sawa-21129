import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings128518Navigator from '../features/Settings128518/navigator';
import Settings128510Navigator from '../features/Settings128510/navigator';
import UserProfile128508Navigator from '../features/UserProfile128508/navigator';
import UserProfile128412Navigator from '../features/UserProfile128412/navigator';
import Tutorial128411Navigator from '../features/Tutorial128411/navigator';
import NotificationList128383Navigator from '../features/NotificationList128383/navigator';
import Settings128382Navigator from '../features/Settings128382/navigator';
import Settings128374Navigator from '../features/Settings128374/navigator';
import UserProfile128372Navigator from '../features/UserProfile128372/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings128518: { screen: Settings128518Navigator },
Settings128510: { screen: Settings128510Navigator },
UserProfile128508: { screen: UserProfile128508Navigator },
UserProfile128412: { screen: UserProfile128412Navigator },
Tutorial128411: { screen: Tutorial128411Navigator },
NotificationList128383: { screen: NotificationList128383Navigator },
Settings128382: { screen: Settings128382Navigator },
Settings128374: { screen: Settings128374Navigator },
UserProfile128372: { screen: UserProfile128372Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
