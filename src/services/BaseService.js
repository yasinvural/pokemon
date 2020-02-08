import axios from "axios";

class BaseService {
  constructor() {
    this.http = axios.create({
      baseURL: "https://pokeapi.co/api/v2/"
    });

    this.http.interceptors.response.use(
      success => {
        return success;
      },
      error => {
        // handle errors
      }
    );
  }

  async get(url) {
    return this.http.get(url);
  }

  async post(url, data, config) {
    return this.http.post(url, data, config);
  }

  async put(url, data, config) {
    return this.http.put(url, data, config);
  }

  async delete(url, config) {
    return this.http.delete(url, config);
  }
}

const baseService = new BaseService();

export { baseService };
