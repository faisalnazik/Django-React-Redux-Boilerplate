import PropTypes from 'prop-types';
import { Tree, TreeNode } from 'react-organizational-chart';
// @mui
import { useTheme } from '@mui/material/styles';
// utils
import flattenArray from '../../utils/flattenArray';
//
import { SimpleNode, StandardNode, GroupNode } from './node';

// ----------------------------------------------------------------------

OrganizationalChart.propTypes = {
  data: PropTypes.object,
  option: PropTypes.string,
  sx: PropTypes.object,
};

export default function OrganizationalChart({ data, option = 'simple', sx, ...other }) {
  const theme = useTheme();

  return (
    <Tree
      lineWidth={'1.5px'}
      nodePadding={'4px'}
      lineBorderRadius={'24px'}
      lineColor={theme.palette.divider}
      label={
        (option === 'simple' && <SimpleNode sx={sx} node={data} />) ||
        (option === 'standard' && <StandardNode sx={sx} node={data} />) ||
        (option === 'group' && <GroupNode sx={sx} node={data} />)
      }
      {...other}
    >
      {data.children.map((list) => (
        <List key={list.name} depth={1} data={list} option={option} sx={sx} />
      ))}
    </Tree>
  );
}

// ----------------------------------------------------------------------

List.propTypes = {
  data: PropTypes.object,
  depth: PropTypes.number,
  option: PropTypes.string,
  sx: PropTypes.object,
};

export function List({ data, depth, option, sx }) {
  const hasChildren = data.children && !!data.children;

  return (
    <TreeNode
      label={
        (option === 'simple' && <SimpleNode sx={sx} node={data} />) ||
        (option === 'standard' && (
          <StandardNode
            sx={sx}
            node={data}
            onEdit={() => console.log('EDIT', data.name)}
            onDelete={() => console.log('DELETE', data.name)}
          />
        )) ||
        (option === 'group' && (
          <GroupNode sx={sx} node={data} depth={depth} length={flattenArray(data.children, 'children')?.length} />
        ))
      }
    >
      {hasChildren && <SubList data={data.children} depth={depth} option={option} sx={sx} />}
    </TreeNode>
  );
}

// ----------------------------------------------------------------------

SubList.propTypes = {
  data: PropTypes.object,
  depth: PropTypes.number,
  option: PropTypes.string,
  sx: PropTypes.object,
};

function SubList({ data, depth, option, sx }) {
  return (
    <>
      {data.map((list) => (
        <List key={list.name} data={list} depth={depth + 1} option={option} sx={sx} />
      ))}
    </>
  );
}
