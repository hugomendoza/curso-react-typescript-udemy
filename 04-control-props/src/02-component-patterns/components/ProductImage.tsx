import { useContext, CSSProperties } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

import noImage from '../assets/no-image.jpg';

export interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img, className, style }:Props) => {

  const { product } = useContext(ProductContext);

  let imgToShow:string;

  if (img) {
    imgToShow = img;
  } else if (product.image) {
    imgToShow = product.image;
  } else {
    imgToShow = noImage;
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={ imgToShow }
      alt="Product img"
    />
  )
}