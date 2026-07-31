export type FeatureIcon =
  | "file"
  | "mic"
  | "chart"
  | "pen"
  | "book"
  | "wallet";

export interface Feature {
  icon: FeatureIcon;
  title: string;
  description: string;
}