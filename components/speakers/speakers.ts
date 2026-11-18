export type Speaker = {
  id: string;
  name: string;
  youtubeId: string | null;
  edition: string;
  image: string;
};

export const speakers: Speaker[] = [
  {
    id: "dr-leah-jalo",
    name: "Dr. Leah Jalo",
    youtubeId: "XWodP0cepuU",
    edition: "First Edition",
    image: "/speaker placeholder/570310.jpg",
  },
  {
    id: "rev-dr-hyeladi-mshelia",
    name: "Rev. Dr. Hyeladi Mshelia",
    youtubeId: "lo5x2CEe_6M",
    edition: "First Edition",
    image: "/speaker placeholder/570311.jpg",
  },
  {
    id: "adamu-usman-garko",
    name: "Adamu Usman Garko",
    youtubeId: "6brV2MHgrCo",
    edition: "First Edition",
    image: "/speaker placeholder/570312.jpg",
  },
  {
    id: "gambo-hassan-bisau",
    name: "Gambo Hassan Bisau",
    youtubeId: "3LjV_pYqjKM",
    edition: "First Edition",
    image: "/speaker placeholder/570307.jpg",
  },
  {
    id: "hon-karu-simon-elisha",
    name: "Hon. Karu Simon Elisha",
    youtubeId: "vOXyiz1WaAY",
    edition: "First Edition",
    image: "/speaker placeholder/570308.jpg",
  },
  {
    id: "sadiya-yunusa-bello",
    name: "Sadiya Yunusa Bello",
    youtubeId: null,
    edition: "First Edition",
    image: "/speaker placeholder/570309.jpg",
  },
];
