import React from "react"
import { graphql } from 'react-apollo'
import productsQuery from '../queries/ProductsQuery.gql'
import ProductList from "./ProductList";

const ShelfAmp: React.FC = ({ data }) => {
  const { loading , error, products } = data || {}

  return (
    <div>
      <h1>{products[0].productId}</h1>
      <ProductList products={products}/>
    </div>
  )
}

const options = {
  ssr: true,
  variables: {
    category: "",
    orderBy: "OrderByNameASC",
    from: 0,
    to: 9,
    hideUnavailableItems: false
  }
}

const EnhancedShelfAmp = graphql(productsQuery, options)(ShelfAmp)



export default EnhancedShelfAmp