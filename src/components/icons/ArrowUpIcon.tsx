import arrowUpIconURL from '@images/icon-arrow-down.png';
import classNames from 'classnames';

type ArrowUpIconProps = {
  className?: string;
};

function ArrowUpIcon({ className }: ArrowUpIconProps) {
  return <img src={arrowUpIconURL} className={classNames('w-5', className)} />;
}

export default ArrowUpIcon;
