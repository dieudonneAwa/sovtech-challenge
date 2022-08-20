import { Context } from "../server";

export const resolvers = {
  Query: {
    getPeople: async (
      _parent: any,
      { page }: { page: number },
      context: Context
    ) => {
      try {
        return await context.dataSources.swapi.getPeople(page);
      } catch (error) {
        throw error;
      }
    },

    getPersonByName: async (
      _parent: any,
      { name }: { name: string },
      context: Context
    ) => {
      try {
        const personResponse = await context.dataSources.swapi.getPersonByName(
          name
        );
        return personResponse;
      } catch (error) {
        throw error;
      }
    },
  },
};
