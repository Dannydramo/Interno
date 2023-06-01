import { Fragment, useEffect, useState } from "react";
import { baseUrl, useFetch } from "../FetchData";
import Properties from "../GlobalComponents/Properties";

const HomePageProjects = () => {
  const [hitRentImages, setHitRentImages] = useState<string[]>([]);
  const [hitSaleImages, setHitSaleImages] = useState<string[]>([]);
  const [displayImageText, setDisplayImageText] =
    useState<string>("Loading...");

  useEffect(() => {
    fetchImageForRent();
    fetchImageForSale();
  }, []);

  // Function for displaying Image for House that are for rent

  const fetchImageForRent = async () => {
    try {
      const { hits } = await useFetch(
        `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPag=6&hasVideo=true`
      );
      console.log(hits);
      if (hits) {
        const images = hits
          .slice(0, 3)
          .map(
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

  // Function for displaying Image for House that are for sale

  const fetchImageForSale = async () => {
    try {
      const { hits } = await useFetch(
        `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPag=6&hasVideo=true`
      );
      console.log(hits);
      if (hits) {
        const images = hits
          .slice(0, 3)
          .map(
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
        <div className="my-24 w-[95%] lg:w-[85%] mx-auto">
          <h1 className="text-center font-bold text-5xl">
            Featured Properties
          </h1>

          <p className="text-center mt-12 font-bold text-2xl">
            {displayImageText}
          </p>

          <div className="my-8">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {hitRentImages}
            </div>
          </div>

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

export default HomePageProjects;
