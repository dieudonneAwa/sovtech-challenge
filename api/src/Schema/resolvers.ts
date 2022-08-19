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

    getPerson: async (
      _parent: any,
      { search }: { search: string },
      context: Context
    ) => {
      try {
        const personResponse = await context.dataSources.swapi.getPerson(
          search
        );
        return personResponse;
      } catch (error) {
        throw error;
      }
    },
  },
};
