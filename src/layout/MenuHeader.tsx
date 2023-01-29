import React from 'react';
import type { SiderMenuProps } from '@ant-design/pro-layout/es/components/SiderMenu/SiderMenu';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Row } from 'antd';

interface MenuHeaderProps extends SiderMenuProps {
  breadcrumb?: Record<string, any>;
  matchMenuKeys?: string[];
  collapsed: boolean;
  toggleCollapsed: () => void;
}

const MenuHeader: React.FC<MenuHeaderProps> = ({
  breadcrumb = [],
  matchMenuKeys = [],
  collapsed,
  toggleCollapsed,
}) => {
  return (
    <Row justify="space-between" style={{ width: '100%' }}>
      {!collapsed && <div>{breadcrumb[matchMenuKeys[0]].name}</div>}
      <div>
        {collapsed ? (
          <MenuUnfoldOutlined onClick={toggleCollapsed} />
        ) : (
          <MenuFoldOutlined onClick={toggleCollapsed} />
        )}
      </div>
    </Row>
  );
};

export default MenuHeader;
