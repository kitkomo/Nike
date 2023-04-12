import React from 'react';
import UserStore from './UserStore';
import ProductStore from './ProductStore';

type RootStateContextValue = {
	userStore: UserStore
	productStore: ProductStore
}

const userStore = new UserStore()
const productStore = new ProductStore()

export const RootStateContext = React.createContext<RootStateContextValue>({} as RootStateContextValue)

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
	return (
		<RootStateContext.Provider value={{userStore, productStore}}>
			{children}
		</RootStateContext.Provider>
	)
}

export const useRootStore = () => React.useContext(RootStateContext)