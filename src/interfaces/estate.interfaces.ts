export interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  description: string;
  image: string;
  beds: number;
  baths: number;
  area: string;
  lotSize?: string;
  yearBuilt?: number;
  type: string;
  garage: string;
  heating: string;
  cooling: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  images: string[];
  features: string[];
  agent: {
    name: string;
    image: string;
    phone: string;
    email: string;
  };
  isNew?: boolean;
  has3DTour?: boolean;
  priceReduced?: boolean;
  isVerified?: boolean;
  matchScore?: number;
  saved?: boolean;
  category?: string;
}

export interface Filter {
  type: string[];
  priceRange: string;
  location?: string;
  bedrooms?: string;
  bathrooms?: string;
  features?: string[];
  has3DTour?: boolean;
}
