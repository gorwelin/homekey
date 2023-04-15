import { Injectable } from "@angular/core";
import { PropertyType } from "../_enums";
import { Tenure } from "../_enums/tenure.enum";
import { Room } from "./room.model";

export interface Property {
  id: number;
  name: string;
  address: string;
  images: string[];
  videos: string[];
  floorplans: string[];
  dateAdded: string;
  bedrooms: number;
  bathroms: number;
  rooms: Room[];
  houseType: PropertyType;
  tenure: Tenure;
  description: string;
  agentId: number;
  energyRatingId: number;
}
