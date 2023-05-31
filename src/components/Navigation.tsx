import appStore from '../store/appStore';
import classNames from 'classnames';
import { IStep } from '../store/types';

function Navigation() {
  const { steps, step: currentStep } = appStore();

  const getBackground = (step: IStep, _idx: number) => {
    if (currentStep == _idx) return 'bg-purple-400';
    if (step.completed) return 'bg-purple-100';
    return 'bg-purple-500';
  };

  return (
    <ul className="space-y-3">
      {steps.map((step, _idx) => {
        return (
          <li key={_idx} className="flex items-center space-x-2 px-2">
            <span className={classNames('h-4 w-4 rounded-sm', getBackground(step, _idx))}></span>
            <span className={'text-purple-100'}>{step.label}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default Navigation;
