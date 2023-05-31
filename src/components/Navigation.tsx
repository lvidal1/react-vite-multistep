import appStore from '../store/appStore';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { IStep } from '../store/types';

import styles from '@styles/components/Navigation.module.scss';

function Navigation() {
  const { steps, step: currentStep } = appStore();
  const navigate = useNavigate();

  const getBackground = (step: IStep, _idx: number) => {
    if (currentStep == _idx) return styles['icon__current'];
    if (step.completed) return styles['icon__completed'];
    return styles['icon__next'];
  };

  return (
    <ul className={styles.steps}>
      {steps.map((step, _idx) => {
        return (
          <li key={_idx} className={styles.step}>
            <span className={classNames(styles.icon, getBackground(step, _idx))}></span>
            {step.completed ? (
              <span
                onClick={() => navigate(step.path)}
                className={classNames(styles.label, styles['label__clickable'])}>
                {step.label}
              </span>
            ) : (
              <span className={classNames(styles.label)}>{step.label}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default Navigation;
