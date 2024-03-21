import { ReactNode, createContext, useContext, useState } from "react";
import { Products } from "../@types/types";
import { api } from "../api/api";
import { formatPrice } from "../util/formatPrice";
import { toast } from "react-toastify";

interface ListingProviderProps {
    children: ReactNode;
}

interface ListingContextData {
    productsList: Products[] | undefined;
    listingProducts: () => void;
    searchProducts: (params: string) => void;
    textParams: string | undefined;
    setTextParams: (params: string) => void;
}

const ListingContext = createContext<ListingContextData>({} as ListingContextData)

export function ListingProvider({ children }: ListingProviderProps) {
    const [productsList, setProductsList] = useState<Products[]>()
    const [textParams, setTextParams] = useState<string>();

    async function listingProducts() {
        const { data } = await api.get<Products[]>('/produtos')

        const formatedPriceProduct = data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price)
        }))

        setProductsList(formatedPriceProduct)
    }

    async function searchProducts(params: string) {
        const { data } = await api.get<Products[]>(`/produtos?${params}`)

        const formatedPriceProduct = data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price)
        }))

        setProductsList(formatedPriceProduct)

        if(!data.length) {
            toast.info('Nenhum produto foi encontrado na aplicação dos filtros')
        }
    }

    return (
        <ListingContext.Provider
            value={{ productsList, listingProducts, searchProducts, textParams, setTextParams }}
        >
            {children}
        </ListingContext.Provider>
    )
}

export function useListing(): ListingContextData {
    const context = useContext(ListingContext)
    return context
}
