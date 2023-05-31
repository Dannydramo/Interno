import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
// import { PropDetails } from "../model";

import ReactPlayer from "react-player";
// Install react player as npm install react-player @types/react-player
interface PropDetails {
  responseDetails:
    | {
        title?: string;
        agency?: {
          name: string;
          logo: { url: string };
        };
        description?: string;
        phoneNumber?: { mobile: string };
        photos?: { url: string }[];
        amenities?: {
          amenities: {
            text: string;
          }[];
        }[];
        furnishingStatus?: string;
        rooms?: number;
        baths?: number;
        rentFrequency?: string;
        purpose?: string;
        type?: string;
        videos?: { url: string }[];
        location?: { name: string }[];
        price?: number;
        contactName?: string;
      }
    | undefined;
}

const PropertiesDetails: React.FC<PropDetails> = ({ responseDetails }) => {
  const {
    title,
    photos,
    amenities,
    description,
    phoneNumber,
    agency,
    rooms,
    baths,
    type,
    location,
    furnishingStatus,
    price,
    purpose,
    contactName,
    videos,
  } = responseDetails || {};

  const agencyName = agency?.name || "";
  const agencyLogo = agency?.logo?.url || "";

  return (
    <Fragment>
      <section>
        <div className="min-h-[60vh] lg:max-h-[70vh]">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="w-full h-full"
          >
            {photos &&
              photos.map((photo) => (
                <SwiperSlide
                  key={photo.url}
                  className="flex justify-between space-x-3"
                >
                  <img
                    src={photo.url}
                    alt="Property"
                    className="min-h-[60vh] lg:max-h-[70vh] w-full object-cover"
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className="mt-12 w-[95%] lg:w-[85%] mx-auto">
          <div className="">
            <div className="bg-[#F4F0EC] rounded-xl p-8 flex flex-col max-w-[700px] space-y-4 mt-4">
              <p>{title || "N/A"}</p>
              <p>
                <span className="font-bold">No of Rooms:</span>{" "}
                <span>{rooms || "N/A"}</span>
              </p>
              <p>
                <span className="font-bold">No of Baths:</span>{" "}
                <span>{baths || "N/A"}</span>
              </p>
              <p>
                <span className="font-bold">Type:</span>{" "}
                <span>{type || "N/A"}</span>
              </p>
              <p>
                <span className="font-bold">Purpose:</span>{" "}
                <span>{purpose || "N/A"}</span>
              </p>
              <p>
                <span className="font-bold">Price:</span>{" "}
                <span>${price || "N/A"}</span>
              </p>
              <p>
                <span className="font-bold">Furnishing Status:</span>{" "}
                <span>{furnishingStatus || "not furnished"}</span>
              </p>
              <p className="flex space-x-2">
                <span className="font-bold">Location:</span>{" "}
                <p className="flex flex-wrap space-x-3">
                  {location?.map((locationName, index) => (
                    <p key={index}>{locationName.name},</p>
                  ))}
                </p>
              </p>
              <p className="flex items-center space-x-2">
                <span className="font-bold">Agency:</span>{" "}
                <span>
                  <img
                    src={agencyLogo}
                    alt=""
                    className="h-[50px] w-[50px] rounded-full"
                  />
                </span>
                <span>{agencyName}</span>
              </p>
              <p>
                <span className="font-bold">Contact:</span>{" "}
                <span>{phoneNumber?.mobile || "N/A"}</span>
              </p>
              <p>
                <span className="font-bold">Contact Name:</span>{" "}
                <span>{contactName || ""}</span>
              </p>
            </div>
          </div>

          <div className="">
            <p className="my-4">{description || "No description available"}</p>
            <div className="flex flex-wrap">
              {amenities &&
                amenities.map((amenityGroup, index) => (
                  <ul key={index} className="flex flex-wrap">
                    {amenityGroup.amenities.map((amenity, innerIndex) => (
                      <li
                        key={innerIndex}
                        className="mr-4 p-4 my-2 bg-[#fbfaf8]"
                      >
                        {amenity.text || "N/A"}
                      </li>
                    ))}
                  </ul>
                ))}
            </div>
          </div>

          {videos && videos.length > 0 && (
            <ReactPlayer url={videos[0].url} controls width="100%" />
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default PropertiesDetails;
