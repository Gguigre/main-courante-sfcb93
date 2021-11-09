export type OneDTO = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type One = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const adaptOne = (rawData: OneDTO[]): One[] => {
  return rawData;
};
