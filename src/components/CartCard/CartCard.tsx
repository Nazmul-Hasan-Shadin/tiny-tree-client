import { removeCart } from "@/redux/feature/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const CartCard = ({ cart }) => {
  const { title, price, category, description, _id, image, rating } = cart;
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.cart.products);

  const SelectedQuantityOFProduct = products.find(
    (product) => product._id === _id
  )?.selectedQuantity;

  const handleRemoveCart = () => {
    dispatch(removeCart(_id));
  };

  const truncateDescription = (desc, wordLimit) => {
    return (
      desc.split(" ").slice(0, wordLimit).join(" ") +
      (desc.split(" ").length > wordLimit ? "..." : "")
    );
  };

  return (
    <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
      <div className="md:w-4/12 2xl:w-1/4 w-full">
        <img
          src={image}
          alt="Black Leather Purse"
          className="h-full object-center object-cover md:block hidden"
        />
        <img
          src="https://i.ibb.co/TTnzMTf/Rectangle-21.png"
          alt="Black Leather Purse"
          className="md:hidden w-full h-full object-center object-cover"
        />
      </div>
      <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
        <div className="flex items-center justify-between w-full">
          <p className="text-base font-black leading-none "> {title} </p>
        </div>
        <p className="text-md pt-2">quantity: {SelectedQuantityOFProduct}</p>
        <p className="text-xs   py-4">Rating: {rating}</p>
        <p className="w-96 text-xs  text-gray-600">
          {" "}
          {truncateDescription(description, 16)}{" "}
        </p>
        <div className="flex items-center justify-between pt-5">
          <div className="flex itemms-center">
            <p className="text-xs  underline text-gray-800 cursor-pointer">
              Add to favorites
            </p>

            <p
              onClick={handleRemoveCart}
              className="text-xs underline text-red-500 pl-5 cursor-pointer"
            >
              Remove
            </p>
          </div>
          {/* <p className="text-base font-black leading-none text-gray-800">
            ,000
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default CartCard;
