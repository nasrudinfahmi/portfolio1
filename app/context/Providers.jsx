import NavbarProvider from './NavbarContext';
import ScrollProvider from './ScrollContext';

function Providers({ children }) {
  return (
    <>
      <NavbarProvider>
        <ScrollProvider>{children}</ScrollProvider>
      </NavbarProvider>
    </>
  );
}

export default Providers;
