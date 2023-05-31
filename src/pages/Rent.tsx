import React, { useState, useEffect, Fragment } from "react";
import { useFetch, baseUrl } from "../components/FetchData";
import Properties from "../components/GlobalComponents/Properties";

const Rent = () => {
  const [hitRentImages, setHitRentImages] = useState<string[]>([]);
  const [displayImageText, setDisplayImageText] =
    useState<string>("Loading...");
  useEffect(() => {
    fetchImageForRent();
  }, []);
  const fetchImageForRent = async () => {
    try {
      const { hits } = await useFetch(
        `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPag=6&hasVideo=true`
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
                hitImageRooms={hitImage?.rooms}
                hitImageBaths={hitImage?.baths}
                hitRentFrequency={`${hitImage?.rentFrequency}`}
                hitPrice={`${hitImage?.price}`}
                hitPurpose={`${hitImage?.purpose}`}
              />
            );
          }
        );

        setHitRentImages(images);
      }
    } catch (error: any) {
      setDisplayImageText(`${error.message}`);
    }
  };

  return (
    <Fragment>
      <section>
        <div className="p-4 bg-[url(./assets/AboutBg.svg)] bg-no-repeat relative bg-cover bg-center min-h-[60vh]">
          <p className="absolute bottom-0 rounded-t-2xl bg-white px-8 flex justify-center flex-col items-center w-[290px] py-6 font-bold text-2xl ">
            Properties For Rent
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
              {hitRentImages}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Rent;
