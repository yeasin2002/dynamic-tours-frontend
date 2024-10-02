export default function filterManager(searchParams, filterType, selectedValue) {
  const params = new URLSearchParams(searchParams);
  const [name, value] = selectedValue.split("=");

  const compareValue = {
    price: { max: "max_price", min: "min_price" },
    ratings: { max: "max_ratings", min: "min_ratings" },
  };

  const checkParamsAndModify = function (typeOfFilter) {
    if (value && name === typeOfFilter.max) {
      params.delete(typeOfFilter.min);
      params.set(name, value);
    } else if (value && name === typeOfFilter.min) {
      params.delete(typeOfFilter.max);
      params.set(name, value);
    } else {
      params.delete(name);
    }
  };

  switch (filterType) {
    case "Price": {
      checkParamsAndModify(compareValue.price);
      break;
    }
    case "Ratings": {
      checkParamsAndModify(compareValue.ratings);
      break;
    }
    case "Sort": {
      if (name) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
    }
  }
  return params;
}
