import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl, useFetch } from "../components/FetchData";
import PropertiesDetails from "../components/GlobalComponents/PropertiesDetails";

const PropertyDetail = () => {
  const { externalId } = useParams();
  const [responseData, setResponseData] = useState();
  console.log(externalId);

  useEffect(() => {
    propertyDetails();
  }, [externalId]);

  const propertyDetails = async () => {
    try {
      const response = await useFetch(
        `${baseUrl}/properties/detail?externalID=${externalId}`
      );
      console.log(response);

      setResponseData(response);
    } catch (error) {}
  };

  return (
    <Fragment>
      <section>
        <PropertiesDetails responseDetails={responseData} />
      </section>
    </Fragment>
  );
};

export default PropertyDetail;
