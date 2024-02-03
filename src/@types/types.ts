export interface Products {
    id: number;
    name: string;
    price: number;
    inclusion_date?: string;
    image: string;
    description: string;
    discounted_product?: boolean;
    amount: number;
}

export interface ProductsInBag {
    id: number;
    name: string;
    price: number;
    image: string;
    amount: number
}

export interface BagItemsAmount {
    [key: number]: number;
}

export interface ParamsSearch {
    name: string;
    filterName: boolean | false;
    filterInclusionDate: boolean | false;
    filterPrice: boolean | false;
    orderInclusionDate: boolean | false;
    orderPrice: boolean | false;
    filterNameValue: string;
    filterInclusionDateValue: string;
    filterPriceValue: number;
    paramsFilterValue: string;
    sortOldestInclusionDate: boolean | false;
    sortMostRecentInclusionDate: boolean | false;
    sortOldestPrice: boolean | false;
    sortMostRecentPrice: boolean | false;
    paramsSort: string;
    valueParams: string | undefined;
    textParams: string | undefined
}