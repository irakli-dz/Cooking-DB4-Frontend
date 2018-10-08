export class Recipe {

  _id: string;
  item: string;
  type: string;
  cousine: string;
  rate: number;
  ingredients: string [];

}

export class RecipePaginationRsp {
  docs: Recipe[];
  total: number;
  pages: number;
  page: number;
  limit: number;
}
