import React, { Fragment, useEffect, useState } from "react";
import { useFetch, baseUrl } from "../components/FetchData";
import Properties from "../components/GlobalComponents/Properties";

const Sale = () => {
  const [hitSaleImages, setHitSaleImages] = useState<string[]>([]);
  const [displayImageText, setDisplayImageText] =
    useState<string>("Loading...");
  useEffect(() => {
    fetchImageForSale();
  }, []);

  const fetchImageForSale = async () => {
    try {
      const { hits } = await useFetch(
        `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPag=6&hasVideo=true`
      );
      console.log(hits);
      if (hits) {
        const images = hits.map(
          (hitImage: {
            externalID: string;
            baths: number;
            rooms: number;
            agency: { name: string; logo: { url: string } };
            coverPhoto: { url: string };
            title: string;
            rentFrequency: string | null;
            price: string;
            purpose: string;
          }) => {
            setDisplayImageText("");

            console.log(hitImage.externalID);
            return (
              <Properties
                key={hitImage?.externalID}
                hitImageId={hitImage?.externalID}
                hitImageAgencyName={`${hitImage?.agency?.name}`}
                hitImageCoverPhotoUrl={`${hitImage?.coverPhoto?.url}`}
                hitImageTitle={`${hitImage?.title}`}
                hitAgencyUrlLogo={`${hitImage?.agency?.logo?.url}`}
                hitRentFrequency={``}
                hitImageRooms={hitImage?.rooms}
                hitImageBaths={hitImage?.baths}
                hitPrice={`${hitImage?.price}`}
                hitPurpose={`${hitImage?.purpose}`}
              />
            );
          }
        );

        setHitSaleImages(images);
      }
    } catch (error: any) {
      console.log(error.message);
      setDisplayImageText(`${error.message}`);
    }
  };

  return (
    <Fragment>
      <section>
        <div className="p-4 bg-[url(./assets/PropertiesBg.svg)] bg-no-repeat relative bg-cover bg-center min-h-[60vh]">
          <p className="absolute bottom-0 rounded-t-2xl bg-white px-8 flex justify-center flex-col items-center w-[280px] py-6 font-bold text-2xl ">
            Properties For Sale
          </p>
        </div>
      </section>
      <section>
        <div className="my-24 w-[95%] lg:w-[85%] mx-auto">
          <p className="text-center mt-12 font-bold text-2xl">
            {displayImageText}
          </p>
          <div className="my-8">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {hitSaleImages}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Sale;
