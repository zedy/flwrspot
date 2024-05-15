import FlexWrapper from '../elements/FlexWrapper';

// Component
export default function Header() {
  return (
    <header className="w-full flex justify-center h-20">
      <FlexWrapper justifyContent="between" alignItems="center">
        <div>LOGO</div>
        <FlexWrapper classes="w-auto">
          <div>nav</div>
          <div>other</div>
        </FlexWrapper>
      </FlexWrapper>
    </header>
  );
}
