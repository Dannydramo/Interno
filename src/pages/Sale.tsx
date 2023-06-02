import React, { Fragment, useEffect, useState } from "react";
import { useFetch, baseUrl } from "../components/FetchData";
import Properties from "../components/GlobalComponents/Properties";

const Sale = () => {
  const [hitSaleImages, setHitSaleImages] = useState<string[]>([]);
  const [displayImageText, setDisplayImageText] =
    useState<string>("Loading...");
  const [categoryExternalID, setCategoryExternalID] = useState<string>("4");
  const [maxPrice, setMaxPrice] = useState<string>("50000");
  const [minPrice, setMinPrice] = useState<string>("10000");
  const [areaMax, setAreaMax] = useState<string>("5000");
  const [roomsMin, setRoomsMin] = useState<string>("0");
  const [bathsMin, setBathsMin] = useState<string>("0");
  const [sort, setSort] = useState<string>("price-desc");
  const [locationExternalIDs, setLocationExternalIDs] =
    useState<string>("5002");

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

  const handleBathsMin = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFrequency = e.target.value;
    setBathsMin(selectedFrequency);
    console.log(selectedFrequency);
    try {
      const { hits } = await useFetch(
        `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&categoryExternalID=${categoryExternalID}&bathsMin=${selectedFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}&hasVideo=true`
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

        setHitSaleImages(images);
      }
    } catch (error) {
      // Handle the error appropriately
    }
  };

  const handleMinPrice = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFrequency = e.target.value;
    setMinPrice(selectedFrequency);
    console.log(selectedFrequency);
    try {
      const { hits } = await useFetch(
        `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&priceMin=${selectedFrequency}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}&hasVideo=true`
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

        setHitSaleImages(images);
      }
    } catch (error) {
      // Handle the error appropriately
    }
  };
  const handleRoomsMin = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFrequency = e.target.value;
    setRoomsMin(selectedFrequency);
    console.log(selectedFrequency);
    try {
      const { hits } = await useFetch(
        `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${selectedFrequency}&sort=${sort}&areaMax=${areaMax}&hasVideo=true`
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

        setHitSaleImages(images);
      }
    } catch (error) {
      // Handle the error appropriately
    }
  };
  const handleMaxPrice = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFrequency = e.target.value;
    setMaxPrice(selectedFrequency);
    console.log(selectedFrequency);
    try {
      const { hits } = await useFetch(
        `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&priceMin=${minPrice}&priceMax=${selectedFrequency}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}&hasVideo=true`
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

        setHitSaleImages(images);
      }
    } catch (error) {
      // Handle the error appropriately
    }
  };
  const handleSort = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFrequency = e.target.value;
    setSort(selectedFrequency);
    console.log(selectedFrequency);
    try {
      const { hits } = await useFetch(
        `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${selectedFrequency}&areaMax=${areaMax}&hasVideo=true`
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

        setHitSaleImages(images);
      }
    } catch (error) {
      // Handle the error appropriately
    }
  };
  const handleAreaMax = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFrequency = e.target.value;
    setAreaMax(selectedFrequency);
    console.log(selectedFrequency);
    try {
      const { hits } = await useFetch(
        `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${selectedFrequency}&hasVideo=true`
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

        setHitSaleImages(images);
      }
    } catch (error) {
      // Handle the error appropriately
    }
  };
  const handleCategory = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFrequency = e.target.value;
    setCategoryExternalID(selectedFrequency);
    console.log(selectedFrequency);
    try {
      const { hits } = await useFetch(
        `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&categoryExternalID=${selectedFrequency}&bathsMin=${bathsMin}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}&hasVideo=true`
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

        setHitSaleImages(images);
      }
    } catch (error) {
      // Handle the error appropriately
    }
  };

  return (
    <Fragment>
      <section>
        <div className="p-4 bg-[url(./assets/PropertiesBg.svg)] flex justify-center items-end bg-no-repeat relative bg-cover bg-center min-h-[60vh]">
          <p className="rounded-t-2xl mb-[-1rem] bg-white px-8 flex justify-center flex-col items-end w-[290px] py-6 font-bold text-2xl">
            Properties For Sale
          </p>
        </div>
      </section>
      <section className="flex flex-wrap justify-between sm:justify-center sm:space-x-8 items-center mt-12 w-[95%] lg:w-[85%] mx-auto">
        <select
          className="outline-none border rounded-md p-2 my-2"
          value={bathsMin}
          onChange={handleBathsMin}
        >
          <option value="">Baths</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
        <select
          className="outline-none border rounded-md p-2 my-2"
          value={roomsMin}
          onChange={handleRoomsMin}
        >
          <option value="">Rooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
        <select
          className="outline-none border rounded-md p-2 my-2"
          value={minPrice}
          onChange={handleMinPrice}
        >
          <option value="">Min Price</option>
          <option value="10,000">10,000</option>
          <option value="20,000">20,000</option>
          <option value="30,000">30,000</option>
          <option value="40,000">40,000</option>
          <option value="50,000">40,000</option>
          <option value="60,000">50,000</option>
        </select>
        <select
          className="outline-none border rounded-md p-2 my-2"
          value={maxPrice}
          onChange={handleMaxPrice}
        >
          <option value="">Max Price</option>
          <option value="100,000">100,000</option>
          <option value="200,000">200,000</option>
          <option value="300,000">300,000</option>
          <option value="400,000">400,000</option>
          <option value="500,000">400,000</option>
          <option value="600,000">500,000</option>
        </select>
        <select
          className="outline-none border rounded-md p-2 my-2"
          value={sort}
          onChange={handleSort}
        >
          <option value="">Sort</option>
          <option value="price-asc">Lowest Price</option>
          <option value="price-des">Highest Price</option>
          <option value="date-asc">Newest</option>
          <option value="date-desc">Oldest</option>
          <option value="verified-score">Verified</option>
          <option value="city-level-score">City Level Score</option>
        </select>
        <select
          className="outline-none border rounded-md p-2 my-2"
          value={areaMax}
          onChange={handleAreaMax}
        >
          <option value="">Max Area (sqft)</option>
          <option value="1000">1000</option>
          <option value="2000">2000</option>
          <option value="3000">3000</option>
          <option value="4000">4000</option>
          <option value="5000">5000</option>
          <option value="6000">5000</option>
        </select>
        <select
          className="outline-none border rounded-md p-2 my-2"
          value={categoryExternalID}
          onChange={handleCategory}
        >
          <option value="">Property Type</option>
          <option value="4">Apartment</option>
          <option value="16">Townhouses</option>
          <option value="3">Villas</option>
          <option value="18">Penthouses</option>
          <option value="21">Hotel Apartments</option>
          <option value="19">Villa Compound</option>
          <option value="14">Residential Plot</option>
          <option value="12">Residential Floor</option>
          <option value="17">Residential Building</option>
        </select>
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
