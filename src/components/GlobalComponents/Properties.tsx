import React, { Fragment } from "react";
import { FaBed, FaBath } from "react-icons/fa";
import { Link } from "react-router-dom";
import { hitImages } from "../model";

const Properties: React.FC<hitImages> = ({
  hitImageId,
  hitImageCoverPhotoUrl,
  hitImageAgencyName,
  hitImageTitle,
  hitAgencyUrlLogo,
  hitRentFrequency,
  hitPrice,
  hitImageBaths,
  hitImageRooms,
  hitPurpose,
}) => {
  return (
    <Link
      to={
        hitPurpose === "for-rent"
          ? `/properties/for-rent/${hitImageId}`
          : `/properties/for-sale/${hitImageId}`
      }
      className="flex flex-col"
      key={hitImageId}
    >
      <img
        src={hitImageCoverPhotoUrl}
        className="rounded-3xl lg:h-[500px] w-full"
      />
      <div className="flex justify-between items-start mt-2">
        <p className="font-bold mt-2">{hitImageAgencyName}</p>
        <img
          src={hitAgencyUrlLogo}
          alt=""
          className="w-[50px] h-[50px] rounded-full"
        />
      </div>
      <p className="font-bold">
        ${hitPrice}
        {hitRentFrequency ? `/${hitRentFrequency}` : ""}
      </p>
      <p className="flex items-center">
       <span className="flex items-center"> <span className="mx-2">{hitImageRooms}</span>
        <FaBed /> </span> &nbsp;&nbsp;|<span className="flex items-center"><span className="mx-2">{hitImageBaths}</span>
        <FaBath /></span>
      </p>
      <p className="truncate">{hitImageTitle}</p>
    </Link>
  );
};

export default Properties;
