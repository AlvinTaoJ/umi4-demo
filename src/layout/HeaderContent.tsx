import React from 'react';
import type { HeaderViewProps } from '@ant-design/pro-layout/es/components/Header';

interface HeaderContentProps extends HeaderViewProps {
  defaultDom: React.ReactNode;
}

const HeaderContent: React.FC<HeaderContentProps> = (props) => {
  return <>{props.defaultDom}</>;
};

export default HeaderContent;
