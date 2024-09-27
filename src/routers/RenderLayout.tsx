import * as React from 'react';
import { AppProvider, DashboardLayout, type Router} from '@toolpad/core';
import { routerLayout } from './RenderRouter';
import { Theme } from '../theme/style/theme';
import PageContent from './RenderContent';
import { DashboardProps } from '../shared/interface/dashboard';

export default function DashboardLayoutBasic(props: DashboardProps) {
    const { window } = props;
  
    const [pathname, setPathname] = React.useState('/dashboard');
  
    const router = React.useMemo<Router>(() => {
      return {
        pathname,
        searchParams: new URLSearchParams(),
        navigate: (path) => setPathname(String(path)),
      };
    }, [pathname]);
    const Window = window !== undefined ? window() : undefined;

    return(
      <AppProvider
      navigation={routerLayout}
      router={router}
      theme={Theme}
      window={Window}
    >
      <DashboardLayout>
        <PageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
    )
  }