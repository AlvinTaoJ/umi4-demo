import React, { PureComponent } from 'react';
import { Checkbox } from '@alifd/next';

// 引入本组件使用到的第三方样式，Checkbox 和 展开/收起 icon 样式
import '@alifd/next/es/icon/index.css';
import '@alifd/next/es/checkbox/index.css';

const indentUnit = 24;

class TreeNodeItem extends PureComponent {
  handleExpandIconClick = (e) => {
    e.stopPropagation();

    const { data, onExpanded, isExpanded } = this.props;
    const result = !isExpanded;
    if (typeof onExpanded === 'function') {
      onExpanded(data, result, e);
    }
  };

  handleCheckChange = (checked, e) => {
    const { data, onChecked } = this.props;
    if (typeof onChecked === 'function') {
      onChecked(data, checked, e);
    }
  };

  // 展开/收起 icon 属性定义
  getIconProps = () => {
    const { isExpanded, keysMap = {}, data = {} } = this.props;
    const { children } = keysMap;
    const childrenData = data[children];
    const iconProps = {
      className: isExpanded
        ? 'next-icon next-icon-arrow-down'
        : 'next-icon next-icon-arrow-right',
    };

    if (!(childrenData && childrenData.length)) {
      iconProps.className = 'icon-empty';
    }
    iconProps.onClick = this.handleExpandIconClick;

    return iconProps;
  };

  checkboxRender = () => {
    const { isChecked } = this.props;
    const cProps = {
      checked: isChecked,
      indeterminate: false,
    };
    if (isChecked === 'some') {
      cProps.checked = false;
      cProps.indeterminate = true;
    }
    return (
      <Checkbox
        {...cProps}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onChange={this.handleCheckChange}
      />
    );
  };

  handleClick = () => {
    console.log('handleClick');
    this.props.onClick();
  };

  render() {
    const { keysMap = {}, data = {} } = this.props;
    const { parentIds } = data;
    const pLen = parentIds.length;
    const { text: kText, id: kId } = keysMap;
    const strId = String(data[kId]);
    const tspnJsx = data[kText];

    console.log('treenode render');

    return (
      <li
        className="vui-tree-item"
        // 定义当前项需要缩进的宽度
        style={{ paddingLeft: `${pLen * indentUnit}px` }}
        key={strId}
      >
        <span className="vui-tree-item-title">
          <i {...this.getIconProps()} />
          {this.checkboxRender()}
          <span className="text" onClick={this.handleClick}>
            {tspnJsx}
          </span>
        </span>
      </li>
    );
  }
}

export default TreeNodeItem;
