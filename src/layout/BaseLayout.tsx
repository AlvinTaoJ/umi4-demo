/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 *
 * @see You can view component api by: https://github.com/ant-design/ant-design-pro-layout
 */
import type {
  MenuDataItem,
  ProLayoutProps,
  Settings,
} from '@ant-design/pro-layout';
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import React from 'react';
import { Link, Outlet, history, useAppData, useLocation } from 'umi';
import {
  GithubOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { useToggle } from 'ahooks';
import MenuHeader from './MenuHeader';
import MenuLeft from './MenuLeft';
import HeaderContent from './HeaderContent';

export type BasicLayoutProps = {
  breadcrumbNameMap: Record<string, MenuDataItem>;
  route: ProLayoutProps['route'] & {
    authority: string[];
  };
  settings: Settings;
} & ProLayoutProps;

export type BasicLayoutContext = { [K in 'location']: BasicLayoutProps[K] } & {
  breadcrumbNameMap: Record<string, MenuDataItem>;
};

const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] =>
  menuList.map((item) => {
    return {
      ...item,
      children: item.children ? menuDataRender(item.children) : undefined,
    };
  });

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const appData = useAppData();
  const loaction = useLocation();
  const [collapsed, { toggle: toggleCollapsed }] = useToggle();

  return (
    <ProLayout
      route={appData.clientRoutes[0]}
      layout="mix"
      splitMenus={true}
      location={loaction}
      collapsed={collapsed}
      collapsedButtonRender={false}
      // onCollapse={handleMenuCollapse}
      onMenuHeaderClick={() => history.push('/')}
      headerContentRender={(props, defaultDom) => (
        <HeaderContent {...props} defaultDom={defaultDom} />
      )}
      menuHeaderRender={(logo, title, props) => (
        <MenuHeader
          {...props}
          collapsed={collapsed}
          toggleCollapsed={toggleCollapsed}
        />
      )}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (
          menuItemProps.isUrl ||
          !menuItemProps.path ||
          location.pathname === menuItemProps.path
        ) {
          return defaultDom;
        }
        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      // breadcrumbRender={(routers = []) => [
      //   {
      //     path: '/',
      //     breadcrumbName: '??????',
      //   },
      //   ...routers,
      // ]}
      // itemRender={(route, params, routes, paths) => {
      //   console.log(route, params, routes, paths);

      //   const first = routes.indexOf(route) === 0;
      //   return first ? (
      //     <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
      //   ) : (
      //     <span>{route.breadcrumbName}</span>
      //   );
      // }}
      menuDataRender={menuDataRender}
    >
      <Outlet />
    </ProLayout>
  );
};

export default BasicLayout;
