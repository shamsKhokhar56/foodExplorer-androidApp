import { useContext } from 'react';
import i18n from 'i18n-js';
import { LanguageContext } from '../LanguageContext';
import translations from '../services/translations';


const { context, setContext } = useContext(LanguageContext);
i18n.locale = context
i18n.fallbacks = true;
i18n.translations = translations