import Author from '../author';

export default interface Article {
  authors: Author[];
  name: string;
  city: string;
  publisher: string;
  year: number;
  pages: number;
}
