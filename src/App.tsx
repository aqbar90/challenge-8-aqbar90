import HomePage from './pages/HomePage';
/**
 * Main App Component
 *
 * TODO untuk mentee:
 * 1. Import Home page component (setelah dibuat)
 * 2. Render Home component di sini
 * 3. Atau setup routing jika membuat multiple pages
 *
 * Current: Placeholder untuk testing Tailwind setup
 */

function App() {
  return (
    <div
      className='
    min-h-screen
    bg-neutral-50
    text-neutral-900
    transition-colors
    duration-300
    dark:bg-neutral-950
    dark:text-white
  '
    >
      <HomePage />
    </div>
  );
}
export default App;
