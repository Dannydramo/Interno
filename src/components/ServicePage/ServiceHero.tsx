import React, { Fragment } from "react";

const ServiceHero = () => {
  return (
    <Fragment>
      <section>
        <div className="p-4 bg-[url(./assets/ServiceBg.svg)] bg-no-repeat bg-cover bg-center min-h-[60vh]"></div>

        <div className="my-12 w-[95%] lg:w-[85%] mx-auto">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            <div className="text-center p-4 hover:bg-[#F4F0EC] rounded-xl duration-500 ease-linear cursor-pointer text-base">
              <h1 className="font-bold text-xl mb-4">Project Plan</h1>
              <p className="my-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione magni, atque ipsam quia pariatur maiores, nesciunt ut
                incidunt repellat sunt dolore quis sed. Accusantium officiis
                possimus eum, placeat exercitationem ut!
              </p>
              <button>Read More</button>
            </div>
            <div className="text-center p-4 hover:bg-[#F4F0EC] rounded-xl duration-500 ease-linear cursor-pointer text-base">
              {" "}
              <h1 className="font-bold text-xl mb-4">Interior Work</h1>
              <p className="my-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione magni, atque ipsam quia pariatur maiores, nesciunt ut
                incidunt repellat sunt dolore quis sed. Accusantium officiis
                possimus eum, placeat exercitationem ut!
              </p>
              <button>Read More</button>
            </div>
            <div className="text-center p-4 hover:bg-[#F4F0EC] rounded-xl duration-500 ease-linear cursor-pointer text-base">
              {" "}
              <h1 className="font-bold text-xl mb-4">Retail Design</h1>
              <p className="my-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione magni, atque ipsam quia pariatur maiores, nesciunt ut
                incidunt repellat sunt dolore quis sed. Accusantium officiis
                possimus eum, placeat exercitationem ut!
              </p>
              <button>Read More</button>
            </div>
            <div className="text-center p-4 hover:bg-[#F4F0EC] rounded-xl duration-500 ease-linear cursor-pointer text-base">
              {" "}
              <h1 className="font-bold text-xl mb-4">2d/3d Art Work</h1>
              <p className="my-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione magni, atque ipsam quia pariatur maiores, nesciunt ut
                incidunt repellat sunt dolore quis sed. Accusantium officiis
                possimus eum, placeat exercitationem ut!
              </p>
              <button>Read More</button>
            </div>
            <div className="text-center p-4 hover:bg-[#F4F0EC] rounded-xl duration-500 ease-linear cursor-pointer text-base">
              {" "}
              <h1 className="font-bold text-xl mb-4">Interior Work</h1>
              <p className="my-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione magni, atque ipsam quia pariatur maiores, nesciunt ut
                incidunt repellat sunt dolore quis sed. Accusantium officiis
                possimus eum, placeat exercitationem ut!
              </p>
              <button>Read More</button>
            </div>
            <div className="text-center p-4 hover:bg-[#F4F0EC] rounded-xl duration-500 ease-linear cursor-pointer text-base">
              {" "}
              <h1 className="font-bold text-xl mb-4">Decoration Work</h1>
              <p className="my-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione magni, atque ipsam quia pariatur maiores, nesciunt ut
                incidunt repellat sunt dolore quis sed. Accusantium officiis
                possimus eum, placeat exercitationem ut!
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ServiceHero;
