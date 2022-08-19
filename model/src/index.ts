import { Request, Response } from "express";

/**
 * --------------------------------------------
 * ---------- SHARED TYPE --------------------
 * --------------------------------------------
 */
export type Person = {
  name: string;
  height: number;
  mass: string;
  gender: string;
  homeworld: string;
};

export type GetPeopleResponse = {
  count: number;
  next: string;
  previous: string;
  results: Person[];
};
