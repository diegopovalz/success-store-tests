interface PreviewProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
