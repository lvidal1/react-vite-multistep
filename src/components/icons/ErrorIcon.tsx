import errorIconURL from '@images/icon-error.png';
import classNames from 'classnames';

type ErrorIconProps = {
  className?: string;
};

function ErrorIcon({ className }: ErrorIconProps) {
  return <img src={errorIconURL} className={classNames('w-4', className)} />;
}

export default ErrorIcon;
