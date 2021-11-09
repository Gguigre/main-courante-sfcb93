import { waitFor } from '@testing-library/react-native';
import { wrapWithProvidersAndRender } from '../../../../jest/wrapWithProviderAndRender';
import { mockOne } from '../infra/mocks/mockOne';
import { TabOneScreen } from './TabOneScreen';

describe('TabOneScreen', () => {
  it('renders correctly', async () => {
    mockOne();
    const navigation = {
      navigate: jest.fn(),
    } as any; // eslint-disable-line @typescript-eslint/no-explicit-any

    const { component } = wrapWithProvidersAndRender({
      Component: TabOneScreen,
      props: navigation,
    });

    await waitFor(() => component.getByText('Leanne Graham: Sincere@april.biz'));
    expect(component).toMatchSnapshot();
  });
});
