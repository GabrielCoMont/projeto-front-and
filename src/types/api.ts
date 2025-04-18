export interface AutocompleteResponse {
  items: string[];
  itemsReturned: string[];
}

export interface Product {
  productId: string;
  productName: string;
  brand: string;
  link: string;
  items: {
    images: {
      imageUrl: string;
    }[];
    sellers: {
      commertialOffer: {
        Price: number;
        ListPrice: number;
        AvailableQuantity: number;
      };
    }[];
  }[];
  description: string;
}

export interface SearchResponse {
  products: Product[];
} 