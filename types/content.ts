export interface GhatItem {
  id: string;
  slug: string;
  name: string;
  hindiName: string;
  significance: string;
  description: string;
  history: string;
  atmosphere: string;
  timeOfDay: "Dawn" | "Afternoon" | "Sunset" | "Night";
  image: string;
  quote?: string;
  coordinates?: { lat: number; lng: number };
}

export interface TempleItem {
  id: string;
  slug: string;
  name: string;
  hindiName: string;
  deity: string;
  architecturalStyle: string;
  history: string;
  significance: string;
  image: string;
  model3DPath?: string;
}

export interface PosterItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Spiritual" | "Ghats" | "Culinary" | "Festivals" | "Atmosphere";
  palette: string[];
  dimensions: string;
  image: string;
  description: string;
}

export interface FoodItem {
  id: string;
  name: string;
  hindiName: string;
  category: "Street" | "Sweet" | "Drink" | "Meal";
  famousLocation: string;
  description: string;
  image: string;
}

export interface StoryChapter {
  id: string;
  title: string;
  period: string;
  excerpt: string;
  narrative: string;
  image: string;
}
