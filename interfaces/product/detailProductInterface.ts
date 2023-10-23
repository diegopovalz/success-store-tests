interface DetailProduct extends CartProduct {
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}
