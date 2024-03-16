import Header from "../../components/Header/Header";
import {
  BoxSortContent,
  BtnFilter,
  CardList,
  ClearAction,
  ClearFiltersContainer,
  ContentLabel,
  FilterContainer,
  MainContainer,
  ShowFilter,
} from "./styles";
import CardProducts from "../../components/CardProducts/CardProducts";
import { useListing } from "../../context/useListing";
import { useEffect, useState } from "react";
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";
import { GrSort } from "react-icons/gr";
import { CgTrash } from "react-icons/cg";

export default function ProductsPage() {
  const { productsList } = useListing();
  const [filterName, setFilterName] = useState<boolean>(false);
  const [filterInclusionDate, setFilterInclusionDate] =
    useState<boolean>(false);
  const [filterPrice, setFilterPrice] = useState<boolean>(false);
  const [orderInclusionDate, setOrderInclusionDate] = useState<boolean>(false);
  const [orderPrice, setOrderPrice] = useState<boolean>(false);
  const [filterNameValue, setFilterNameValue] = useState<string>();
  const [filterInclusionDateValue, setFilterInclusionDateValue] =
    useState<string>();
  const [filterPriceValue, setFilterPriceValue] = useState<number>();
  const [paramsFilterValue, setParamsFilterValue] = useState<string>();
  const [sortOldestInclusionDate, setSortOldestInclusionDate] =
    useState<boolean>();
  const [sortMostRecentInclusionDate, setSortMostRecentInclusionDate] =
    useState<boolean>();
  const [sortOldestPrice, setSortOldestPrice] = useState<boolean>();
  const [sortMostRecentPrice, setSortMostRecentPrice] = useState<boolean>();
  const [paramsSortValue, setParamsSortValue] = useState<string>();
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [isSort, setIsSort] = useState<boolean>(false);

  const { searchProducts, listingProducts } = useListing();

  const ClearFilters = () => {
    listingProducts();
    setParamsFilterValue(undefined);
    setFilterName(false);
    setFilterNameValue("");
    setFilterInclusionDate(false);
    setFilterInclusionDateValue("");
    setFilterPrice(false);
    setFilterPriceValue(undefined);
  };

  const ClearSorts = () => {
    listingProducts();
    setParamsSortValue(undefined);
    setOrderInclusionDate(false);
    setOrderPrice(false);
  };

  const handleFilters = () => {
    let paramsFilter = "";

    if (filterNameValue !== undefined) {
      paramsFilter = `name_like=${filterNameValue}`;
    }

    if (filterInclusionDateValue !== undefined) {
      paramsFilter = `${paramsFilter}&inclusion_date=${filterInclusionDateValue}`;
    }

    if (filterPriceValue !== undefined) {
      paramsFilter = `${paramsFilter}&q=${filterPriceValue}`;
    }

    setParamsFilterValue(paramsFilter);
  };

  const handleOrder = () => {
    let paramsSort = "";

    if (sortOldestInclusionDate) {
      paramsSort = `_sort=inclusion_date&_order=asc`;
    }

    if (sortMostRecentInclusionDate) {
      paramsSort = `&_sort=inclusion_date&_order=desc`;
    }

    if (sortOldestPrice) {
      paramsSort = `&_sort=price&_order=asc`;
    }

    if (sortMostRecentPrice) {
      paramsSort = `&_sort=price&_order=desc`;
    }

    setParamsSortValue(paramsSort);
  };

  useEffect(() => {
    if (paramsFilterValue && paramsSortValue) {
      searchProducts(`${paramsFilterValue}${paramsSortValue}`);
    } else if (paramsFilterValue) {
      searchProducts(paramsFilterValue);
    }

    if (paramsSortValue && paramsFilterValue) {
      searchProducts(`${paramsFilterValue}${paramsSortValue}`);
    } else if (paramsSortValue) {
      searchProducts(paramsSortValue);
    }
  }, [
    paramsFilterValue,
    paramsSortValue,
    filterNameValue,
    filterInclusionDateValue,
    filterPriceValue,
    sortMostRecentInclusionDate,
    sortOldestInclusionDate,
    sortOldestPrice,
    sortMostRecentPrice,
  ]);

  return (
    <>
      <Header origin="/" />
      <ShowFilter>
        <span onClick={() => setIsFilter(!isFilter)}>
          <IoFilterSharp /> {isFilter ? "Esconder filtro" : "Filtrar"}{" "}
        </span>
        <span onClick={() => setIsSort(!isSort)}>
          <GrSort /> {isSort ? "Esconder ordenação" : "Ordenar"}{" "}
        </span>
      </ShowFilter>
      <MainContainer>
        {(isFilter || isSort) && (
          <FilterContainer>
            {isFilter && (
              <>
                <ClearFiltersContainer>
                  <h4>Filtrar por: </h4>
                  {paramsFilterValue !== undefined && (
                    <ClearAction onClick={() => ClearFilters()}>
                      <CgTrash />
                      <span>Remover Filtros</span>
                    </ClearAction>
                  )}
                </ClearFiltersContainer>
                <ContentLabel>
                  <label onClick={() => setFilterName(!filterName)}>
                    Nome
                    {filterName ? (
                      <MdOutlineExpandLess />
                    ) : (
                      <MdOutlineExpandMore />
                    )}
                  </label>
                  {filterName && (
                    <div>
                      <input
                        className="input-filter"
                        type="text"
                        name="name"
                        onChange={(e) => setFilterNameValue(e.target.value)}
                      />
                    </div>
                  )}
                </ContentLabel>
                <ContentLabel>
                  <label
                    onClick={() => setFilterInclusionDate(!filterInclusionDate)}
                  >
                    Data de inclusão
                    {filterInclusionDate ? (
                      <MdOutlineExpandLess />
                    ) : (
                      <MdOutlineExpandMore />
                    )}
                  </label>
                  {filterInclusionDate && (
                    <div>
                      <input
                        className="input-filter"
                        type="date"
                        name="inclusion_date"
                        onChange={(e) =>
                          setFilterInclusionDateValue(e.target.value)
                        }
                      />
                    </div>
                  )}
                </ContentLabel>
                <ContentLabel>
                  <label onClick={() => setFilterPrice(!filterPrice)}>
                    Preço
                    {filterPrice ? (
                      <MdOutlineExpandLess />
                    ) : (
                      <MdOutlineExpandMore />
                    )}
                  </label>
                  {filterPrice && (
                    <div>
                      <input
                        className="input-filter"
                        type="number"
                        name="price"
                        onChange={(e) =>
                          setFilterPriceValue(
                            e.target.value as unknown as number
                          )
                        }
                      />
                    </div>
                  )}
                </ContentLabel>
                <BtnFilter onClick={() => handleFilters()}>Filtrar</BtnFilter>
              </>
            )}
            {isSort && (
              <>
                <ClearFiltersContainer>
                  <h4>Ordenar por: </h4>
                  {paramsSortValue !== undefined && (
                    <ClearAction onClick={() => ClearSorts()}>
                      <CgTrash />
                      <span>Remover ordenação</span>
                    </ClearAction>
                  )}
                </ClearFiltersContainer>
                <ContentLabel>
                  <label
                    onClick={() => setOrderInclusionDate(!orderInclusionDate)}
                  >
                    Data de inclusão
                    {orderInclusionDate ? (
                      <MdOutlineExpandLess />
                    ) : (
                      <MdOutlineExpandMore />
                    )}
                  </label>
                  {orderInclusionDate && (
                    <BoxSortContent>
                      <span>
                        Mais Antigos
                        <input
                          type="radio"
                          name="inclusion_date"
                          onChange={(e) =>
                            setSortOldestInclusionDate(e.target.checked)
                          }
                        />
                      </span>
                      <span>
                        Mais Recentes
                        <input
                          type="radio"
                          name="inclusion_date"
                          onChange={(e) =>
                            setSortMostRecentInclusionDate(e.target.checked)
                          }
                        />
                      </span>
                    </BoxSortContent>
                  )}
                </ContentLabel>
                <ContentLabel>
                  <label onClick={() => setOrderPrice(!orderPrice)}>
                    Preço
                    {orderPrice ? (
                      <MdOutlineExpandLess />
                    ) : (
                      <MdOutlineExpandMore />
                    )}
                  </label>
                  {orderPrice && (
                    <BoxSortContent>
                      <span>
                        Maior
                        <input
                          type="radio"
                          name="price"
                          onChange={(e) =>
                            setSortMostRecentPrice(e.target.checked)
                          }
                        />
                      </span>
                      <span>
                        Menor
                        <input
                          type="radio"
                          name="price"
                          onChange={(e) => setSortOldestPrice(e.target.checked)}
                        />
                      </span>
                    </BoxSortContent>
                  )}
                </ContentLabel>
                <BtnFilter onClick={() => handleOrder()}>Ordenar</BtnFilter>
              </>
            )}
          </FilterContainer>
        )}

        <CardList>
          {productsList?.map((product) => (
            <CardProducts
              key={product.id}
              name={product.name}
              price={product.price}
              inclusion_date={product.inclusion_date}
              image={product.image}
              description={product.description}
              id={product.id}
              amount={product.amount}
            />
          ))}
        </CardList>
      </MainContainer>
    </>
  );
}
