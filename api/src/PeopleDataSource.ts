import { RESTDataSource } from "apollo-datasource-rest";
import { GetPeopleResponse, Person } from 'model'

class PeopleDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://swapi.dev/api/";
  }

  getPeople(page: number = 1): Promise<GetPeopleResponse> {
    return this.get<GetPeopleResponse>(`people/?page=${page}`);
  }

  async getPerson(search: string): Promise<Person> {
    const peopleResponse = await this.get<GetPeopleResponse>(`people/?search=${search}`);
    return peopleResponse.results[0];
  }
}

export default PeopleDataSource;
