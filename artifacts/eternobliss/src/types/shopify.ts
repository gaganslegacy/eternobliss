export type ShopifyProduct = {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml?: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  compareAtPriceRange: {
    minVariantPrice: {
      amount: string;
    };
  };
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string | null;
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: ShopifyVariant;
    }>;
  };
  tags: string[];
  collections: {
    edges: Array<{
      node: {
        handle: string;
        title: string;
      };
    }>;
  };
};

export type ShopifyVariant = {
  id: string;
  title: string;
  price: { amount: string };
  availableForSale: boolean;
  selectedOptions: Array<{
    name: string;
    value: string;
  }>;
};

export type CartItem = {
  lineId: string;
  variantId: string;
  productTitle: string;
  variantTitle: string;
  price: number;
  quantity: number;
  imageUrl: string;
  handle: string;
};

export type ShopifyCollection = {
  id: string;
  handle: string;
  title: string;
  description: string;
  image?: {
    url: string;
    altText: string | null;
  };
  products: {
    edges: Array<{
      node: ShopifyProduct;
    }>;
  };
};
