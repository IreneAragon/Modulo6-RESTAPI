export interface CharacterEntityVm {
  id: string;
  image: string;
  name: string;
  status: string;
  type: string;
  gender:string;
  origin: {
    name: string,
    url: string,
  },
  url: string;
}
