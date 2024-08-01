import tree1 from "@/assets/images/Gallery/tree1.jpg";
import tree4 from "@/assets/images/Gallery/treewithwomen.jpg";
import tree2 from "@/assets/images/categories/tomato.png";
import tree3 from "@/assets/images/categories/apple.png";
import HeaderTitile from "../ui/HeaderTitle/HeaderTitile";
import Container from "@/container/Container";
const Gallery = () => {
  return (
    <div data-aos="zoom-in-down"  data-aos-duration="500">
      <Container>
        <HeaderTitile className={''} header={"Gallery"}></HeaderTitile>
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center "
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={tree2}
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={tree3}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={tree4}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={tree1}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
