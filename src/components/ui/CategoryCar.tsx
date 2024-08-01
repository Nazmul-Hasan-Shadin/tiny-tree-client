
 type TCategory={
    image:string;
    name:string
 }

 type CategoryCardProps = {
  category: TCategory;
};

const CategoryCard = ({ category}:CategoryCardProps) => {
  const { image, name } = category;


  return (
    <div className="flex flex-col justify-center space-y-2">
      <div className="">
        <img className="rounded-full w-28 h-28" src={image} alt="" />
      </div>

      <div>
        <h3 className="text-center text-xl font-medium">{name}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
