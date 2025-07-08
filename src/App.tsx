
import { ModeToggle } from './components/mode-toggle';
import LandingPage from './pages/LandingPage';
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

      <div className='w-full relative'>
        {/* <div className='absolute top-4 left-4'> */}

        {/* <ModeToggle /> */}
        {/* </div> */}
        <LandingPage />
      </div>


    </ThemeProvider>
  );
}

export default App;
