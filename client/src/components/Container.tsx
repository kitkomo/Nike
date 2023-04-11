import React from 'react'

interface ContainerProps {
	children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	return <div className='max-w-7xl m-auto'>{children}</div>
}

export default Container
