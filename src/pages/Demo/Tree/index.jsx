import React, { useCallback, useState } from 'react';
import Tree from './components/Tree';

// 生成4层（从0开始）结构，每层10个节点；除 '0-0-0-0' 节点外
function treeData(path = '0', level = 2, count = 10) {
  const list = [];
  for (let i = 0; i < count; i += 1) {
    const key = `${path}-${i}`;
    const treeNode = {
      title: key,
      label: key,
      key,
      more: key,
    };

    if (level === 1 && key === '0-0-0-0') {
      // 100万个子节点
      // treeNode.children = treeData(key, level - 1 , 1000000);
      treeNode.children = treeData(key, level - 1, 10);
    } else if (level > 0) {
      treeNode.children = treeData(key, level - 1);
    }

    list.push(treeNode);
  }
  return list;
}

// const dataSource = treeData();
const keysMap = { text: 'title', children: 'children', id: 'key' };
const virtualConfig = { visibleHeight: 500, itemHeight: 28 };

const Index = () => {
  const [checkedKeys, setCheckedKeys] = useState(new Set([]));
  const [expandedKeys, setExpandedKeys] = useState(new Set(['0-1']));

  const handleCheck = useCallback((record, isChecked, checkedKeys) => {
    setCheckedKeys(checkedKeys);
  }, []);
  const handleExpand = useCallback((record, isExpanded, expandedKeys) => {
    console.log(record, isExpanded, expandedKeys);
    setExpandedKeys(expandedKeys);
  }, []);

  const [dataSource, setDataSource] = useState(treeData());

  const handleChangeTest = () => {
    setDataSource((value) => {
      let newData = [...value];
      newData[0].title = 'change';
      return newData;
    });
  };

  return (
    <div className="tree-container">
      <Tree
        data={dataSource}
        onClick={handleChangeTest}
        visibleHeight={500}
        itemHeight={28}
        expandedIds={expandedKeys}
        checkedIds={checkedKeys}
        onChecked={handleCheck}
        onExpanded={handleExpand}
      />
    </div>
  );
};

export default Index;
