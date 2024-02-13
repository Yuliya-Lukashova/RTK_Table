import classes from './TableItem.module.scss';

interface TableItemTHProps {
    tag: string;
  }

export const TableItemTH = ({ tag }: TableItemTHProps): JSX.Element => {
    return <th className={classes.table}>{tag}</th>;
  };
  