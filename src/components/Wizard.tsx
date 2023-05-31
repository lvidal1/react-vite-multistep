import Navigation from './Navigation';

type WizardProps = {
  children?: JSX.Element | string;
};

function Wizard({ children }: WizardProps) {
  return (
    <div data-testid="Wizard">
      <Navigation />
      <div className="mt-4">{children}</div>
    </div>
  );
}

export default Wizard;
