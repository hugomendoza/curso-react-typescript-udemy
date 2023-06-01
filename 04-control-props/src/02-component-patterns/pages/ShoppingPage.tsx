import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";

import "../styles/custom-styles.css";

export const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{
        display: "flex", 
        flexDirection: "row",
        flexWrap: "wrap",
      }}>
        
        {
          products.map( product => (
            <ProductCard
              product={product}
              className="bg-dark"
              key={product.id}
              onChange={ onProductCountChange }
              value={ shoppingCart[product.id]?.count || 0 }
            >
              <ProductImage
                className="custom-image"
                style={{
                  boxShadow: "10px 10px 10px rgba(229, 229, 229, 0.2)",
                }}
              />
              <ProductTitle
                title="Hola Mundo"
                className="text-white text-bold"
              />
              <ProductButtons
                className="custom-buttons"
              />
            </ProductCard>
          ))
        }


      </div>

      <div className="shopping-cart">
        
        {/* {Object.values(shoppingCart).map((value, index) => {
          return (
            <ProductCard
              key={value.id}
              product={value}
              className="bg-dark"
              style={{ width: "100px" }}
              // onChange={ () => onProductCountChange() }
            >
              <ProductImage
                className="custom-image"
                style={{
                  boxShadow: "10px 10px 10px rgba(229, 229, 229, 0.2)",
                }}
              />
              <ProductButtons
                className="custom-buttons"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              />
            </ProductCard>
          );
        })} */}

        {
          Object.entries(shoppingCart).map(([ key, product ]) => (
            <ProductCard
              key={key}
              product={product}
              className="bg-dark"
              style={{ width: "100px" }}
              value={product.count}
              onChange={ onProductCountChange }
            >
              <ProductImage
                className="custom-image"
                style={{
                  boxShadow: "10px 10px 10px rgba(229, 229, 229, 0.2)",
                }}
              />
              <ProductButtons
                className="custom-buttons"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              />
            </ProductCard>
          ))
        }
      </div>
    </div>
  )
}