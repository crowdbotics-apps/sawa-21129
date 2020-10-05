import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList128383Navigator from '../features/NotificationList128383/navigator';
import Settings128382Navigator from '../features/Settings128382/navigator';
import Settings128374Navigator from '../features/Settings128374/navigator';
import UserProfile128372Navigator from '../features/UserProfile128372/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
