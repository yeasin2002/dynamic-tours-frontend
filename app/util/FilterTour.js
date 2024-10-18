class FilterTour {
  constructor(searchParams) {
    this.searchParams = searchParams;
    this.apiURL = [];
    this.entry = []; // inside entry we are storing a key value pair like this max_rating[0] = 3000[1] and later converting it to server API
    this.activeFilter = {};
  }

  init() {
    const params = new URLSearchParams(this.searchParams);
    for (let entry of params.entries()) {
      switch (entry[0]) {
        case "min_price": {
          this.apiURL.push(`price[gte]=${entry[1]}`);
          this.entry.push(`min_price=${entry[1]}`);
          this.activeFilter.Price = "min_price";
          break;
        }
        case "max_price": {
          this.apiURL.push(`price[lte]=${entry[1]}`);
          this.entry.push(`max_price=${entry[1]}`);
          this.activeFilter.Price = "max_price";
          break;
        }
        case "query": {
          this.apiURL.push(`query=${entry[1].toString()}`);
          break;
        }
        case "max_ratings": {
          this.apiURL.push(`ratingsAverage[lte]=${entry[1]}`);
          this.entry.push(`max_ratings=${entry[1]}`);
          this.activeFilter.Ratings = "max_ratings";
          break;
        }
        case "min_ratings": {
          this.apiURL.push(`ratingsAverage[gte]=${entry[1]}`);
          this.entry.push(`min_ratings=${entry[1]}`);
          this.activeFilter.Ratings = "min_ratings";
          break;
        }
        case "sort": {
          if (entry[1] === "latest") {
            this.apiURL.push(`sort=createdAt`);
            this.activeFilter.Sort = "sort";
          } else if (entry[1] === "top_rated") {
            this.apiURL.push(`sort=-ratingsAverage`);
            this.activeFilter.Sort = "sort";
          } else if (entry[1] === "most_reviewed") {
            this.apiURL.push(`sort=-totalRating`);
            this.activeFilter.Sort = "sort";
          }
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
  getActiveFilter() {
    return this.activeFilter;
  }
}

export default FilterTour;
