import ProductView from "@/components/products-view/ProductsView";

const Products = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  return (
    <div>
      <ProductView data={data} />
    </div>
  );
};

export default Products;
