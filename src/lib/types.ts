export const equipmentTypes = [
  "Crane",
  "Forklift",
  "Trailer",
  "Excavator",
  "Boom Loader",
] as const;

export type EquipmentType = (typeof equipmentTypes)[number];

export type Equipment = {
  id: number;
  name: string;
  type: EquipmentType;
  capacity: number;
  imageUrl: string;
  shortestHireTime: string; // e.g., "1 day", "1 week"
  availability: "Available" | "On-site inspection required" | "Unavailable";
  description: string;
  specifications: { [key: string]: string };
};

export type SortOption = {
  key: "capacity" | "shortestHireTime" | "availability";
  order: "asc" | "desc";
};
