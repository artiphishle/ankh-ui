import {createGlobalState} from 'react-use';

const initialState = {
  data: {},
  isLoading: true,
  error: null,
};

export const useAnkhCmsConfig = createGlobalState(initialState);
