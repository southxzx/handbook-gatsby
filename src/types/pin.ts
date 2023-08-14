interface IPin {
  lng: number;
  lat: number;
  key: string;
  images?: Array<{
    url: string;
    title: string;
  }>;
}

export default IPin;
