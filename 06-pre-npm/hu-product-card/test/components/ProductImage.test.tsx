import React from 'react'
import renderer from 'react-test-renderer'
import { ProductImage, ProductCard } from '../../src/components'
import { product2 } from '../data/products'

describe('ProductCard', () => {

  test('debe mostrar el componente correctamente conla imagen personalizado', () => {
    const wrapper = renderer.create(
      <ProductImage img="https://picsum.photos/id/237/1000/1000" className="custom-class" />
    ) 
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe mostrar el componente con la imagen del producto', () => {

    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {
          () => (
            <ProductImage />
          )
        }
      </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot();

  })

})