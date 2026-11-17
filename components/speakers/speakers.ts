
export type Speaker = {
  id: string;
  name: string;
  youtubeId: string | null;
  edition: string;
};

export const speakers: Speaker[] = [
  {
    id: "dr-leah-jalo",
    name: "Dr. Leah Jalo",
    youtubeId: "XWodP0cepuU",
    edition: "First Edition",
  },
  {
    id: "rev-dr-hyeladi-mshelia",
    name: "Rev. Dr. Hyeladi Mshelia",
    youtubeId: "lo5x2CEe_6M",
    edition: "First Edition",
  },
  {
    id: "adamu-usman-garko",
    name: "Adamu Usman Garko",
    youtubeId: "6brV2MHgrCo",
    edition: "First Edition",
  },
  {
    id: "gambo-hassan-bisau",
    name: "Gambo Hassan Bisau",
    youtubeId: "3LjV_pYqjKM",
    edition: "First Edition",
  },
  {
    id: "hon-karu-simon-elisha",
    name: "Hon. Karu Simon Elisha",
    youtubeId: "vOXyiz1WaAY",
    edition: "First Edition",
  },
  {
    id: "sadiya-yunusa-bello",
    name: "Sadiya Yunusa Bello",
    youtubeId: null,
    edition: "First Edition",
  },
];
