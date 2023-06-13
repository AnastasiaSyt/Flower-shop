// import ICards from '../types/ICards';

// export const filterCards = (cards: ICards[], filter): ICards[] => {
//   return cards.filter((card: ICards) => {
//     const { price, size, occasions, category, color, flower } = filter;

//     if (price !== null && card.price > price) {
//       return false;
//     }

//     if (size !== null && card.size !== size) {
//       return false;
//     }

//     if (
//       occasions.length > 0 &&
//       !occasions.some((occasion: string) => card.occasions.includes(occasion))
//     ) {
//       return false;
//     }

//     if (flower.length > 0 && !flower.some((flower: string) => card.flower.includes(flower))) {
//       return false;
//     }

//     if (
//       category.length > 0 &&
//       !category.some((category: string) => card.category.includes(category))
//     ) {
//       return false;
//     }

//     if (color !== null && card.color !== color) {
//       return false;
//     }

//     return true;
//   });
// };

import ICards from '../types/ICards';

export interface IFilter {
  price: number | null;
  size: number | null;
  occasions: string[];
  category: string[];
  color: string[];
  flower: string[];
}

export const filterCards = (cards: ICards[], filter: IFilter): ICards[] => {
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

    if (
      flower.length > 0 &&
      !flower.every((flowerItem: string) => card.flower.includes(flowerItem))
    ) {
      return false;
    }

    // if (
    //   category.length > 0 &&
    //   !category.every((categoryGroup: string[]) =>
    //     categoryGroup.some((categoryItem: string) => card.category.includes(categoryItem))
    //   )
    // ) {
    //   return false;
    // }

    if (
      category.length > 0 &&
      !category.every((categoryItem: string) => card.category.includes(categoryItem))
    ) {
      return false;
    }

    // if (color.length > 0 && !color.includes(card.color)) {
    //   return false;
    // }

    if (color.length > 0 && !color.every((colorItem: string) => card.color.includes(colorItem))) {
      return false;
    }

    return true;
  });
};
