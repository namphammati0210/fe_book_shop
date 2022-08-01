const ProductItem = ({ imgSrc, name, price, description }) => (
  <div>
    <img
      src={imgSrc}
      className="w-[250px] cursor-pointer hover:opacity-50 rounded-md"
    />
    <div className="flex justify-between w-[250px] mt-3">
      <div className="flex flex-col gap-2">
        <p className="text-base">{name}</p>
        <p className="text-sm font-light">{description}</p>
      </div>

      <p className="text-base">{price}</p>
    </div>
  </div>
);

export default ProductItem;
