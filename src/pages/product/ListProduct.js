import ProductItem from "../../core/components/ProductItem";

const products = [
  {
    imgSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    name: "Basic Tee",
    price: "$35",
    description: "Black",
  },
  {
    imgSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    name: "Basic Tee 1",
    price: "$351",
    description: "Black1",
  },
  {
    imgSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    name: "Basic Tee 2",
    price: "$352",
    description: "Black2",
  },
  {
    imgSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    name: "Basic Tee 3",
    price: "$353",
    description: "Black3",
  },
];

const ListProduct = () => {
  return (
    <div>
      {products &&
        products.map((product) => (
          <div className="lg:col-span-3 md:col-span-6 sm:col-span-12  m-auto">
            <ProductItem
              imgSrc={product.imgSrc}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          </div>
        ))}
    </div>
  );
};

export default ListProduct;
