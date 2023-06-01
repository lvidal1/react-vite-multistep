import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import appStore from '../store/appStore';

const FINAL_PATH = '/';

const useStepper = () => {
  const location = useLocation();
  const { step: currentStep, setCurrentStep, steps, completeStep } = appStore();
  const [canAccess, setCanAccess] = useState(false);

  useEffect(() => {
    const pathname = location.pathname;
    const stepIndex = steps.findIndex((step) => step.path === pathname);

    if (stepIndex >= 0) {
      if (stepIndex > 0) {
        const previousStep = steps[stepIndex - 1];
        const hasPassedPreviousStep = previousStep.completed;

        if (hasPassedPreviousStep) {
          setCurrentStep(stepIndex);
          setCanAccess(true);
        }
      } else {
        setCurrentStep(stepIndex);
        setCanAccess(true);
      }
    }
  }, [location, steps, setCurrentStep]);

  const getInitialStep = () => {
    return steps[0]?.path;
  };

  const getReviewStep = () => {
    return steps[steps.length - 1]?.path;
  };

  const getNextStep = () => {
    if (canAccess) {
      completeStep(currentStep);

      const nextStepIndex = currentStep + 1;

      if (nextStepIndex < steps.length) {
        const nextStep = steps[currentStep + 1];
        if (nextStep?.path) {
          return nextStep?.path;
        }
      } else {
        return FINAL_PATH;
      }
    }
  };

  return {
    getInitialStep,
    getReviewStep,
    currentStep,
    getNextStep,
    canAccess
  };
};

export default useStepper;
