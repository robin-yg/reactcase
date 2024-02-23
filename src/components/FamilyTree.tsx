import React, { useState } from 'react';
import Tree from 'react-d3-tree';
import { RawNodeDatum } from 'react-d3-tree';
import { familyData, henning } from './data';

interface HomeProps { }

const convertToTreeNodes = (person: any): RawNodeDatum => {
  return {
    name: person.Name,
    children: person.Children.map(convertToTreeNodes),
  };
};

const FamilyTree: React.FC<HomeProps> = () => {
  const [tree, setTree] = useState<RawNodeDatum | RawNodeDatum[]>({
    name: henning.Name,
    children: henning.Children.map(convertToTreeNodes),
  });

  return (
    <div style={{ width: '400px', height: '400px', border: '2px solid black', borderRadius: '5px' }}>
      <Tree data={tree} orientation="vertical"
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf" />
    </div>
  );
};

export default FamilyTree;
