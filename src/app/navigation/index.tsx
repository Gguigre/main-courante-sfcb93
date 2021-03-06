/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigationContainerRef } from '@react-navigation/core';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { colors } from '../../../constants/Colors';
import { RootStackParamList, RootTabParamList } from '../../../types';
import { AllPostsScreen } from '../../modules/AllPosts/views/AllPostsScreen';
import { CurrentPostScreen } from '../../modules/CurrentPost/views/CurrentPost';
import { ModalScreen } from '../../shared/views/ModalScreen';
import { NotFoundScreen } from '../../shared/views/NotFoundScreen';
import { Analytics } from '../analytics';
import { useColorScheme } from '../useColorScheme';
import { linkingConfiguration } from './LinkingConfiguration';

export const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  const navigationRef = useNavigationContainerRef<RootStackParamList>();
  const routeNameRef = React.useRef<string>();

  return (
    <NavigationContainer
      linking={linkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute()?.name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute()?.name || '';

        if (previousRouteName !== currentRouteName) {
          await Analytics.setCurrentScreen(currentRouteName);
        }
        routeNameRef.current = currentRouteName;
      }}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="CurrentPost"
      screenOptions={{
        tabBarActiveTintColor: colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="CurrentPost"
        component={CurrentPostScreen}
        options={{
          title: 'Poste en cours',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="AllPosts"
        component={AllPostsScreen}
        options={() => ({
          title: 'Liste des postes',
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        })}
      />
    </BottomTab.Navigator>
  );
};

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) => {
  // eslint-disable-next-line react-native/no-inline-styles
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
};
