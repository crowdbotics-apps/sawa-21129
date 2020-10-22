import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList155629Navigator from '../features/NotificationList155629/navigator';
import Settings155628Navigator from '../features/Settings155628/navigator';
import Settings155620Navigator from '../features/Settings155620/navigator';
import UserProfile155618Navigator from '../features/UserProfile155618/navigator';
import UserProfile146152Navigator from '../features/UserProfile146152/navigator';
import Tutorial146151Navigator from '../features/Tutorial146151/navigator';
import NotificationList146123Navigator from '../features/NotificationList146123/navigator';
import Settings146122Navigator from '../features/Settings146122/navigator';
import Settings146114Navigator from '../features/Settings146114/navigator';
import UserProfile146112Navigator from '../features/UserProfile146112/navigator';
import UserProfile139596Navigator from '../features/UserProfile139596/navigator';
import Tutorial139595Navigator from '../features/Tutorial139595/navigator';
import NotificationList139567Navigator from '../features/NotificationList139567/navigator';
import Settings139566Navigator from '../features/Settings139566/navigator';
import Settings139558Navigator from '../features/Settings139558/navigator';
import UserProfile139556Navigator from '../features/UserProfile139556/navigator';
import UserProfile139466Navigator from '../features/UserProfile139466/navigator';
import Tutorial139465Navigator from '../features/Tutorial139465/navigator';
import NotificationList139437Navigator from '../features/NotificationList139437/navigator';
import Settings139436Navigator from '../features/Settings139436/navigator';
import Settings139428Navigator from '../features/Settings139428/navigator';
import UserProfile139426Navigator from '../features/UserProfile139426/navigator';
import UserProfile133000Navigator from '../features/UserProfile133000/navigator';
import Tutorial132999Navigator from '../features/Tutorial132999/navigator';
import NotificationList132971Navigator from '../features/NotificationList132971/navigator';
import Settings132970Navigator from '../features/Settings132970/navigator';
import Settings132962Navigator from '../features/Settings132962/navigator';
import UserProfile132960Navigator from '../features/UserProfile132960/navigator';
import UserProfile128548Navigator from '../features/UserProfile128548/navigator';
import Tutorial128547Navigator from '../features/Tutorial128547/navigator';
import NotificationList128519Navigator from '../features/NotificationList128519/navigator';
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
NotificationList155629: { screen: NotificationList155629Navigator },
Settings155628: { screen: Settings155628Navigator },
Settings155620: { screen: Settings155620Navigator },
UserProfile155618: { screen: UserProfile155618Navigator },
UserProfile146152: { screen: UserProfile146152Navigator },
Tutorial146151: { screen: Tutorial146151Navigator },
NotificationList146123: { screen: NotificationList146123Navigator },
Settings146122: { screen: Settings146122Navigator },
Settings146114: { screen: Settings146114Navigator },
UserProfile146112: { screen: UserProfile146112Navigator },
UserProfile139596: { screen: UserProfile139596Navigator },
Tutorial139595: { screen: Tutorial139595Navigator },
NotificationList139567: { screen: NotificationList139567Navigator },
Settings139566: { screen: Settings139566Navigator },
Settings139558: { screen: Settings139558Navigator },
UserProfile139556: { screen: UserProfile139556Navigator },
UserProfile139466: { screen: UserProfile139466Navigator },
Tutorial139465: { screen: Tutorial139465Navigator },
NotificationList139437: { screen: NotificationList139437Navigator },
Settings139436: { screen: Settings139436Navigator },
Settings139428: { screen: Settings139428Navigator },
UserProfile139426: { screen: UserProfile139426Navigator },
UserProfile133000: { screen: UserProfile133000Navigator },
Tutorial132999: { screen: Tutorial132999Navigator },
NotificationList132971: { screen: NotificationList132971Navigator },
Settings132970: { screen: Settings132970Navigator },
Settings132962: { screen: Settings132962Navigator },
UserProfile132960: { screen: UserProfile132960Navigator },
UserProfile128548: { screen: UserProfile128548Navigator },
Tutorial128547: { screen: Tutorial128547Navigator },
NotificationList128519: { screen: NotificationList128519Navigator },
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
