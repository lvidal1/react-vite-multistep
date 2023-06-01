import arrowDownIconURL from '@images/icon-arrow-down.png';
import classNames from 'classnames';

type ArrowDownIconProps = {
  className?: string;
};

function ArrowDownIcon({ className }: ArrowDownIconProps) {
  return <img src={arrowDownIconURL} className={classNames('w-5', className)} />;
}

export default ArrowDownIcon;
