import ICards from '../types/ICards';

export const filterCards = (cards: ICards[], filter): ICards[] => {
  return cards.filter((card: ICards) => {
    const { price, size, occasions, category, color, flower } = filter;

    if (price !== null && card.price > price) {
      return false;
    }

    if (size !== null && card.size !== size) {
      return false;
    }

    if (
      occasions.length > 0 &&
      !occasions.some((occasion: string) => card.occasions.includes(occasion))
    ) {
      return false;
    }

    if (flower.length > 0 && !flower.some((flower: string) => card.flower.includes(flower))) {
      return false;
    }

    if (
      category.length > 0 &&
      !category.some((category: string) => card.category.includes(category))
    ) {
      return false;
    }

    if (color !== null && card.color !== color) {
      return false;
    }

    return true;
  });
};
