class FilterTour {
  constructor(searchParams) {
    this.searchParams = searchParams;
    this.apiURL = [];
  }

  init() {
    const params = new URLSearchParams(this.searchParams);
    for (let entry of params.entries()) {
      switch (entry[0]) {
        case "min_price": {
          this.apiURL.push(`price[gte]=${entry[1]}`);
          break;
        }
        case "max_price": {
          this.apiURL.push(`price[lte]=${entry[1]}`);
          break;
        }
        case "query": {
          this.apiURL.push(`query=${entry[1]}`);
          break;
        }
      }
    }
  }

  getServerQuery() {
    return this.apiURL.join("&");
  }
}

export default FilterTour;
