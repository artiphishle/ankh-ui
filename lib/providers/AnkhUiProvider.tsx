import {useAnkhCmsConfig} from '@/hooks/useAnkhCmsConfig';
import {IAnkhCmsConfig} from 'ankh-types';
import {createContext, PropsWithChildren, useEffect} from 'react';

const UiContext = createContext({data: {}, isLoading: true, error: null});

export function AnkhUiProvider({children, fetchData}: IAnkhUiProvider) {
  const [config, setConfig] = useAnkhCmsConfig();

  useEffect(() => {
    const getData = async () => {
      try {
        setConfig({...config, isLoading: true});

        const data: IAnkhCmsConfig = await fetchData();

        setConfig({data, isLoading: false, error: null});
      } catch (error: any) {
        setConfig({...config, isLoading: false, error});
      }
    };
    getData();
  }, [fetchData]);

  return <UiContext.Provider value={config}> {children} </UiContext.Provider>;
}

interface IAnkhUiProvider extends PropsWithChildren {
  fetchData: () => Promise<IAnkhCmsConfig>;
}
