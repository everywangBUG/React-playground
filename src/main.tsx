import { createRoot } from 'react-dom/client';
import { ReactPlayground } from './Playground/ReactPlayground';
import { PlaygroundProvider } from './context/PlaygroundProvider';

createRoot(document.getElementById('root')!).render(
    <PlaygroundProvider>
        <ReactPlayground />
    </PlaygroundProvider>
);
