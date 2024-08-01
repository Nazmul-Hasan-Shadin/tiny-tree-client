
import CategoryCard from "../ui/CategoryCar";
import Container from "@/container/Container";
import HeaderTitile from "../ui/HeaderTitle/HeaderTitile";
import { useGetAllCategoriesQuery } from "@/redux/api/categoriesBaseApi";

interface Category {
  _id:string,
  name: string;
  image: string;
}

const Categories = () => {
  const { data: categories } = useGetAllCategoriesQuery(undefined);

  return (
    <div  data-aos="fade-up">
      <Container>
        <div className="space-y-9">
          <HeaderTitile header={"Our Category"} />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-items-center gap-3">
            {categories?.data?.map((category:Category) => {
              return <CategoryCard key={category?._id} category={category} />;
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
