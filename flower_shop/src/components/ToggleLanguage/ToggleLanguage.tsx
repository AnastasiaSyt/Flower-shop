import { LanguageEnums } from '../../constants/languages';
import './ToggleLanguage.scss';

export default function ToggleLanguage() {
  return (
    // <div className="languages">
    //   <button
    //     onClick={() => onlanguagechange(LanguageEnums.EN)}
    //     className={language === LanguageEnums.EN ? 'languages_button active' : 'languages_button'}
    //   >
    //   </button>
    //   <button
    //     onClick={() => onlanguagechange(LanguageEnums.RU)}
    //     className={language === LanguageEnums.RU ? 'languages_button active' : 'languages_button'}
    //   >
    //   </button>
    // </div>
    <div className="toggle">
      <div>RU</div>
      <div>|</div>
      <div>EN</div>
    </div>
  );
}
