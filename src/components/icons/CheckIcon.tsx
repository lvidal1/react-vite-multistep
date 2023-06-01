import checkIconURL from '@images/icon-check.png';
import classNames from 'classnames';

type CheckIconProps = {
  className?: string;
};

function CheckIcon({ className }: CheckIconProps) {
  return <img src={checkIconURL} className={classNames('w-4', className)} />;
}

export default CheckIcon;
