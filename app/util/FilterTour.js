class FilterTour {
  constructor(searchParams) {
    this.searchParams = searchParams;
    this.apiURL = [];
    this.entry = [];
  }

  init() {
    const params = new URLSearchParams(this.searchParams);
    for (let entry of params.entries()) {
      switch (entry[0]) {
        case "min_price": {
          this.apiURL.push(`price[gte]=${entry[1]}`);
          this.entry.push(`min_price=${entry[1]}`);
          break;
        }
        case "max_price": {
          this.apiURL.push(`price[lte]=${entry[1]}`);
          this.entry.push(`max_price=${entry[1]}`);
          break;
        }
        case "query": {
          this.apiURL.push(`query=${entry[1]}`);
          break;
        }
        case "max_ratings": {
          this.apiURL.push(`ratingsAverage[lte]=${entry[1]}`);
          this.entry.push(`max_ratings=${entry[1]}`);
          break;
        }
        case "min_ratings": {
          this.apiURL.push(`ratingsAverage[gte]=${entry[1]}`);
          this.entry.push(`min_ratings=${entry[1]}`);
          break;
        }
      }
    }
  }

  getServerQuery() {
    return this.apiURL?.join("&");
  }
  getFilteredEntry() {
    return this.entry;
  }
}

export default FilterTour;
