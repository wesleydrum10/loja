import Header from "../../components/Header/Header";
import { BoxSortContent, BtnFilter, CardList, ContentLabel, FilterContainer, MainContainer } from "./styles";
import CardProducts from "../../components/CardProducts/CardProducts";
import { useListing } from "../../context/useListing";
import { useEffect, useState } from "react";
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";

export default function ProductsPage() {
  const { productsList } = useListing()
  const [filterName, setFilterName] = useState<boolean>(false)
  const [filterInclusionDate, setFilterInclusionDate] = useState<boolean>(false)
  const [filterPrice, setFilterPrice] = useState<boolean>(false)
  const [orderInclusionDate, setOrderInclusionDate] = useState<boolean>(false)
  const [orderPrice, setOrderPrice] = useState<boolean>(false)
  const [filterNameValue, setFilterNameValue] = useState<string>()
  const [filterInclusionDateValue, setFilterInclusionDateValue] = useState<string>()
  const [filterPriceValue, setFilterPriceValue] = useState<number>()
  const [paramsFilterValue, setParamsFilterValue] = useState<string>()
  const [sortOldestInclusionDate, setSortOldestInclusionDate] = useState<boolean>()
  const [sortMostRecentInclusionDate, setSortMostRecentInclusionDate] = useState<boolean>()
  const [sortOldestPrice, setSortOldestPrice] = useState<boolean>()
  const [sortMostRecentPrice, setSortMostRecentPrice] = useState<boolean>()
  const [paramsSortValue, setParamsSortValue] = useState<string>()

  const { searchProducts, listingProducts } = useListing()

  const handleFilters = () => {
    let paramsFilter = ''

    if (paramsFilterValue !== undefined) {
      listingProducts()
      setParamsFilterValue(undefined)
      setFilterName(false)
      setFilterNameValue('')
      setFilterInclusionDate(false)
      setFilterPrice(false)
      setFilterPriceValue(undefined)
    } else {

      if (filterNameValue !== "") {
        paramsFilter = `name_like=${filterNameValue}`
      }

      if (filterInclusionDateValue !== undefined) {
        paramsFilter = `&inclusion_date=${filterInclusionDateValue}`
      }

      if (filterPriceValue) {
        paramsFilter = `&q=${filterPriceValue}`
      }

      setParamsFilterValue(paramsFilter)
    }

  }

  const handleOrder = () => {
    let paramsSort = ''

    if (paramsSortValue !== undefined) {
      listingProducts()
      setParamsSortValue(undefined)
      setOrderInclusionDate(false)
      setOrderPrice(false)
    }

    if (sortOldestInclusionDate) {
      paramsSort = '_sort=inclusion_date&_order=asc'
    }

    if (sortMostRecentInclusionDate) {
      paramsSort = '_sort=inclusion_date&_order=desc'
    }

    if (sortOldestPrice) {
      paramsSort = '_sort=price&_order=asc'
    }

    if (sortMostRecentPrice) {
      paramsSort = '_sort=price&_order=desc'
    }

    setParamsSortValue(paramsSort)
  }

  useEffect(() => {
    if (paramsFilterValue) {
      searchProducts(paramsFilterValue)
    }

    if (paramsSortValue) {
      searchProducts(paramsSortValue)
    }

  }, [paramsFilterValue, paramsSortValue])

  return (
    <>
      <Header origin="/" />
      <MainContainer>
        <FilterContainer>
          <h3>Filtrar por:</h3>
          <ContentLabel>
            <label onClick={() => setFilterName(!filterName)}>
              Nome
              {filterName ? <MdOutlineExpandMore /> : <MdOutlineExpandLess />}
            </label>
            {filterName && (
              <div>
                <input className="input-filter" type="text" name="name" onChange={(e) => setFilterNameValue(e.target.value)} />
              </div>
            )}
          </ContentLabel>
          <ContentLabel>
            <label onClick={() => setFilterInclusionDate(!filterInclusionDate)}>
              Data de inclusão
              {filterInclusionDate ? <MdOutlineExpandMore /> : <MdOutlineExpandLess />}
            </label>
            {filterInclusionDate && (
              <div>
                <input className="input-filter" type="date" name="inclusion_date" onChange={(e) => setFilterInclusionDateValue(e.target.value)} />
              </div>
            )}
          </ContentLabel>
          <ContentLabel>
            <label onClick={() => setFilterPrice(!filterPrice)}>
              Preço
              {filterPrice ? <MdOutlineExpandMore /> : <MdOutlineExpandLess />}
            </label>
            {filterPrice && (
              <div>
                <input className="input-filter" type="number" name="price" onChange={(e) => setFilterPriceValue(e.target.value as unknown as number)} />
              </div>
            )}
          </ContentLabel>
          <BtnFilter onClick={() => handleFilters()}>{paramsFilterValue === undefined ? 'Filtrar' : 'Limpar filtros'}</BtnFilter>
          <h3>Ordernar por:</h3>
          <ContentLabel>
            <label onClick={() => setOrderInclusionDate(!orderInclusionDate)}>
              Data de inclusão
              {orderInclusionDate ? <MdOutlineExpandMore /> : <MdOutlineExpandLess />}
            </label>
            {orderInclusionDate && (
              <BoxSortContent>
                <span>
                  Mais Antigos
                  <input type="radio" name="inclusion_date" onChange={(e) => setSortOldestInclusionDate(e.target.checked)} />
                </span>
                <span>
                  Mais Recentes
                  <input type="radio" name="inclusion_date" onChange={(e) => setSortMostRecentInclusionDate(e.target.checked)} />
                </span>
              </BoxSortContent>
            )}
          </ContentLabel>
          <ContentLabel>
            <label onClick={() => setOrderPrice(!orderPrice)}>
              Preço
              {orderPrice ? <MdOutlineExpandMore /> : <MdOutlineExpandLess />}
            </label>
            {orderPrice && (
              <BoxSortContent>
                <span>
                  Maior
                  <input type="radio" name="price" onChange={(e) => setSortMostRecentPrice(e.target.checked)} />
                </span>
                <span>
                  Menor
                  <input type="radio" name="price" onChange={(e) => setSortOldestPrice(e.target.checked)} />
                </span>
              </BoxSortContent>
            )}
          </ContentLabel>
          <BtnFilter onClick={() => handleOrder()}>Ordenar</BtnFilter>
        </FilterContainer>
        <CardList>
          {productsList?.map(product =>
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
          )}
        </CardList>
      </MainContainer>
    </>
  );
}
