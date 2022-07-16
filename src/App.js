import { useState } from 'react';
import Field from './components/field';
import Language from './components/language';
import Translate from './components/translate';

//styles
import './style.css';

const App = () => {

    const [language, setLanguage] = useState('es');
    const [text, setText] = useState('');

    return (
        <div>
            <Field value={text} onChange={setText}/>
            <Translate text={text} language={language} />
            <Language language={language} onLanguageChange={setLanguage}/>
        </div>
    )
}

export default App;