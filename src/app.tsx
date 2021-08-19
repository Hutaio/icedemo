import * as React from 'react';
import { runApp, IAppConfig } from 'ice';
import LocaleProvider from '@/components/LocaleProvider';
import { getLocale } from '@/utils/locale';
import ServerError from '@/pages/FeedbackServerError';
import Forbidden from '@/pages/FeedbackForbidden';

const locale = getLocale();

const appConfig: IAppConfig = {
  app: {
    // 是否开启 ErrorBoundary，默认为 false
    errorBoundary: true,
    // 自定义错误边界的 fallback UI
    ErrorBoundaryFallback: ServerError,
    // 自定义错误的处理事件
    onErrorBoundaryHander: (error: Error, componentStack: string) => {
      // Do something with the error
    },
    rootId: 'ice-container',
    addProvider: ({ children }) => <LocaleProvider locale={locale}>{children}</LocaleProvider>,
  },
  auth: {
    // 可选的，设置无权限时的展示组件，默认为 null
    NoAuthFallback: Forbidden,
    // 或者传递一个函数组件
    // NoAuthFallback: () => <div>没有权限..</div>
  },
  router: {
    type: 'hash',
    basename: '/',
    fallback: <div>loading...</div>,
    modifyRoutes: (routes) => {
      return routes;
    },
  },
};
runApp(appConfig);
