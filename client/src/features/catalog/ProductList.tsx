import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
}

const ProductList = (props: ProductListProps) => {
  const { products } = props;
  return (
    <>
      <Grid container spacing={4}>
        {products?.map((product: Product, i) => (
          <Grid item xs={3} key={`${product.id} - ${i}`}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductList;
