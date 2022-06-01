import { useNavigation } from '@react-navigation/native';
import { useCurrentPostContext } from '../../../app/context/currentPost/useCurrentPostContext';

export const useCurrentPostScreen = () => {
  const { currentPost } = useCurrentPostContext();

  const navigation = useNavigation();

  const createPost = () => {
    navigation.navigate('CreatePost');
  };

  return {
    currentPost: currentPost.currentPost,
    createPost,
  };
};
