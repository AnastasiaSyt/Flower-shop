import { FilterState } from '../Redux/filterSlice';
import ICards from '../types/ICards';

export const filterCards = (cards: ICards[], filter: FilterState): ICards[] => {
  return cards.filter((card: ICards) => {
    const { occasions, category, color, flower, priceRange, sizeRange } = filter;

    if (priceRange.length === 2 && (card.price < priceRange[0] || card.price > priceRange[1])) {
      return false;
    }

    if (sizeRange.length === 2 && (card.size < sizeRange[0] || card.size > sizeRange[1])) {
      return false;
    }

    if (
      occasions.length > 0 &&
      !occasions.some((occasion: string) => card.occasions.includes(occasion))
    ) {
      return false;
    }

    if (
      flower.length > 0 &&
      !flower.some((flowerItem: string) => card.flower.includes(flowerItem))
    ) {
      return false;
    }

    if (
      category.length > 0 &&
      !category.some((categoryItem: string) => card.category.includes(categoryItem))
    ) {
      return false;
    }

    if (color.length > 0 && !color.every((colorItem: string) => card.color.includes(colorItem))) {
      return false;
    }

    return true;
  });
};
