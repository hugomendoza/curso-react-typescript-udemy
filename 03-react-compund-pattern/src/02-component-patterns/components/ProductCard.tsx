import { ReactElement, CSSProperties } from "react";
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';

import { createContext } from 'react';
import { Product, ProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement| ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({ children, product, className, style }:Props) => {

  const { counter, increaseBy} = useProduct();

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div
        className={`${styles.productCard} ${className}`}
        style={style}
      >
        { children }
      </div>
    </Provider>
  )
}

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;  