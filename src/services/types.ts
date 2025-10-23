export interface EBook {
  key: string;
  title: string;
  author?: string;
  size?: number;
  url?: string;
}

export interface LayoutContext {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}
