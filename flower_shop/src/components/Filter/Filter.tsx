import CheckboxList from "./CheckboxList/CheckboxList";
import ColorList from "./ColorList.tsx/ColorList";
import RangeSlider from "./RangeSlider/RangeSlider";
import "./Filter.scss";
import Button from "../Button/Button";

export default function Filter() {
  const kindOfGift = ["все", "цветы", "букеты", "композиция"];
  const occasion = [
    "свадьба",
    "юбилей",
    "8 марта",
    "день рождения",
    "14 февраля",
    "свидание",
    "рождество",
    "выпускной",
  ];

  const flowers = [
    "роза",
    "гербера",
    "тюльпан",
    "гвоздика",
    "лилия",
    "хризантема",
    "пион",
  ];
  return (
    <div className="filter">
      <CheckboxList items={kindOfGift} title="тип" />
      <CheckboxList items={occasion} title="повод" />
      <ColorList title="цвет" />
      <CheckboxList items={flowers} title="цветок" />
      <RangeSlider minValue={0} maxValue={160} title="стоимость" />
      <RangeSlider minValue={20} maxValue={80} title="высота" />
      <Button buttonType="solid" size="medium">
        СБРОСИТЬ ФИЛЬТРЫ
      </Button>
    </div>
  );
}
