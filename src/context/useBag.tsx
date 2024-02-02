import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { Products } from '../@types/types';
import { api } from '../api/api';
import { useNavigate } from 'react-router-dom';

interface BagProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface BagContextData {
  bag: Products[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
  clearBag: () => void;
}

const BagContext = createContext<BagContextData>({} as BagContextData);

export function BagProvider({ children }: BagProviderProps) {
  const [bag, setBag] = useState<Products[]>(() => {

    const storagedBag = localStorage.getItem('@store:bag')

    if (storagedBag) {
      return JSON.parse(storagedBag);
    }

    return [];
  });
  const navigate = useNavigate()

  const addProduct = async (productId: number) => {
    try {
      const productExist = bag.find(({ id }) => id === productId)

      if (productExist) {
        const { data } = await api.get<Products>(`produtos/${productId}`)
        const total = productExist.amount + 1

        if (total > data.amount) {
          toast.error('Quantidade solicitada fora de estoque')
          return
        }

        const newBag = bag.map((product) => product.id === productId ? ({
          ...product,
          amount: total
        }) : product)

        localStorage.setItem('@store:bag', JSON.stringify(newBag))

        setBag(newBag)

        return
      }

      const { data } = await api.get<Products>(`produtos/${productId}`)

      setBag(oldBag => {

        const newBag = [...oldBag, { ...data, amount: 1 }]
        localStorage.setItem('@store:bag', JSON.stringify(newBag))
        return newBag

      })

    } catch {
      toast.error('Erro na adição do produto')
    }


  };

  const removeProduct = (productId: number) => {
    try {
      const existProduct = bag.some(product => product.id === productId)

      if (existProduct) {
        const newBag = bag.filter(({ id }) => id !== productId)
        localStorage.setItem('@store:bag', JSON.stringify(newBag))
        setBag(newBag)

        return
      }
      toast.error('Erro na remoção do produto')

    } catch {
      toast.error('Erro na remoção do produto')
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount <= 0) {
        toast.error('Erro na alteração de quantidade do produto')

        return
      }

      const { data } = await api.get<Products>(`produtos/${productId}`)

      if (amount > data.amount) {
        toast.error('Quantidade solicitada fora de estoque')

        return
      }

      const newBag = bag.map((product) => product.id === productId ? ({
        ...product,
        amount
      }) : product)

      localStorage.setItem('@store:bag', JSON.stringify(newBag))
      setBag(newBag)

    } catch {
      toast.error('Erro na alteração de quantidade do produto')
    }
  };

  const clearBag = () => {
    toast.success('Compra finalizada com sucesso!')
    localStorage.clear()
    setTimeout(() => {
      setBag([])
      navigate('/#')
    }, 4000)
  }

  return (
    <BagContext.Provider
      value={{ bag, addProduct, removeProduct, updateProductAmount, clearBag }}
    >
      {children}
    </BagContext.Provider>
  );
}

export function useBag(): BagContextData {
  const context = useContext(BagContext);
  return context;
}
