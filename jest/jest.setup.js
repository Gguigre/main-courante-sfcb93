/* eslint-disable no-undef */
import 'cross-fetch/polyfill';
import nock from 'nock';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

nock.disableNetConnect();
