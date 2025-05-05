export type Tag = {
  id: string;
  name: string;
};

export type Movie = {
  id: string;
  tags: Tag[];
  description: string;
};
