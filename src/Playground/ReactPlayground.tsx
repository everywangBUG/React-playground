import { Allotment } from 'allotment';
import 'allotment/dist/style.css';
import { Header } from '../components/Header';
import { Preview } from '../components/Preview';
import { CodeEditor } from '../components/CodeEditor';
import './ReactPlayground.scss'

export const ReactPlayground: React.FC = () => {
  return (
    <div style={{height: '100vh'}}>
      <Allotment defaultSizes={[100, 100]}>
        <Allotment.Pane minSize={500}>
          <Header />
          <CodeEditor />
        </Allotment.Pane>
        <Allotment.Pane minSize={0}>
          <Preview />
        </Allotment.Pane>
      </Allotment>
    </div>
  )
}
