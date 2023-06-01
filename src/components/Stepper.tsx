import Navigation from '@components/Navigation';

type StepperProps = {
  children?: JSX.Element | string;
};

function Stepper({ children }: StepperProps) {
  return (
    <div data-testid="Stepper">
      <Navigation />
      <div className="mt-4 md:mt-0">{children}</div>
    </div>
  );
}

export default Stepper;
