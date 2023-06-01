export interface hitImages {
  hitImageId: string;
  hitImageCoverPhotoUrl: string;
  hitImageAgencyName: string;
  hitImageTitle: string;
  hitAgencyUrlLogo: string;
  hitRentFrequency: string;
  hitPrice: string;
  hitImageRooms: number;
  hitImageBaths: number;
  hitPurpose: string;
}

export interface PropDetails {
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
