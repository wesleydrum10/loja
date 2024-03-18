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
  Mark,
  ShowFilter,
} from "./styles";
import CardProducts from "../../components/CardProducts/CardProducts";
import { useListing } from "../../context/useListing";
import { ChangeEvent, useEffect, useState } from "react";
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

    if (!!filterNameValue) {
      paramsFilter = `name_like=${filterNameValue}`;
    }

    if (!!filterInclusionDateValue) {
      paramsFilter = `${paramsFilter}&inclusion_date=${filterInclusionDateValue}`;
    }

    if (!!filterPriceValue) {
      paramsFilter = `${paramsFilter}&q=${filterPriceValue}`;
    }

    setParamsFilterValue(paramsFilter);
  };

  const handleOrder = (e: ChangeEvent<HTMLInputElement> | undefined) => {
    let paramsSort = "";

    switch (e?.target.name) {
      case "price-desc": {
        paramsSort = `_sort=price${
          (sortMostRecentInclusionDate || sortOldestInclusionDate) &&
          ",inclusion_date"
        }&_order=desc${
          (sortMostRecentInclusionDate && ",desc") ||
          (sortOldestInclusionDate && ",asc")
        }`;
        setSortMostRecentPrice(e.target.checked);
        setSortOldestPrice(false);
        break;
      }
      case "price-asc": {
        paramsSort = `_sort=price${
          (sortMostRecentInclusionDate || sortOldestInclusionDate) &&
          ",inclusion_date"
        }&_order=asc${
          (sortMostRecentInclusionDate && ",desc") ||
          (sortOldestInclusionDate && ",asc")
        }`;
        setSortOldestPrice(e.target.checked);
        setSortMostRecentPrice(false);
        break;
      }
      case "inclusion_date-desc": {
        paramsSort = `&_sort=inclusion_date${
          (sortMostRecentPrice || sortOldestPrice) && ",price"
        }&_order=desc${
          (sortMostRecentPrice && ",desc") || (sortOldestPrice && ",asc")
        }`;
        setSortMostRecentInclusionDate(e.target.checked);
        setSortOldestInclusionDate(false);
        break;
      }
      case "inclusion_date-asc": {
        paramsSort = `&_sort=inclusion_date${
          (sortMostRecentPrice || sortOldestPrice) && ",price"
        }&_order=asc${
          (sortMostRecentPrice && ",desc") || (sortOldestPrice && ",asc")
        }`;
        setSortOldestInclusionDate(e.target.checked);
        setSortMostRecentInclusionDate(false);
        break;
      }
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
  }, [paramsSortValue, paramsFilterValue]);

  return (
    <>
      <Header origin="/" />
      <ShowFilter>
        <span onClick={() => setIsFilter(!isFilter)}>
          <div>
            <IoFilterSharp /> {isFilter ? "Esconder filtro" : "Filtrar"}{" "}
            {paramsFilterValue && <Mark />}
          </div>
        </span>
        <span onClick={() => setIsSort(!isSort)}>
          <div>
            <GrSort /> {isSort ? "Esconder ordenação" : "Ordenar"}{" "}
            {paramsSortValue && <Mark />}
          </div>
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
                        value={filterNameValue}
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
                        value={filterInclusionDateValue}
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
                        value={filterPriceValue}
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
                          checked={sortMostRecentInclusionDate}
                          type="radio"
                          name="inclusion_date-desc"
                          onChange={(e) => handleOrder(e)}
                        />
                      </span>
                      <span>
                        Mais Recentes
                        <input
                          checked={sortOldestInclusionDate}
                          type="radio"
                          name="inclusion_date-asc"
                          onChange={(e) => handleOrder(e)}
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
                          checked={sortMostRecentPrice}
                          type="radio"
                          name="price-desc"
                          onChange={(e) => handleOrder(e)}
                        />
                      </span>
                      <span>
                        Menor
                        <input
                          checked={sortOldestPrice}
                          type="radio"
                          name="price-asc"
                          onChange={(e) => handleOrder(e)}
                        />
                      </span>
                    </BoxSortContent>
                  )}
                </ContentLabel>
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
              discounted_product={product.discounted_product}
            />
          ))}
        </CardList>
      </MainContainer>
    </>
  );
}
