export const SEARCH_NAME = "search_name";
export const SEARCH_DATE = "search_date";
export const SEARCH_PRICE = "search_price";
export const SORT_DATE = "sort_date";
export const SORT_PRICE = "sort_price";

export const INITIAL_STATE = {
  products: [],
  query: {
    name_like: null,
    inclusion_date: null,
    q: null,
    _sort: null,
    _order: null,
  },
};

export const productReducer = (
  state: {
    _sort: any;
    price: any;
    inclusion_date: any;
    name_like: any;
  },
  action: { type: any }
) => {
  switch (action.type) {
    case SEARCH_NAME: {
      return {
        ...state,
        name_like: state.name_like,
      };
    }
    case SEARCH_DATE: {
      return {
        ...state,
        inclusion_date: state.inclusion_date,
      };
    }
    case SEARCH_PRICE: {
      return {
        ...state,
        price: state.price,
      };
    }
    case SORT_DATE: {
      return {
        ...state,
        _sort: state._sort,
      };
    }
    case SORT_PRICE: {
      return {
        ...state,
        _sort: state._sort,
      };
    }
    default: {
        return state
    }
  }
};
