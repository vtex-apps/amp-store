import React from "react"
import { graphql } from 'react-apollo'
import productsQuery from '../queries/ProductsQuery.gql'
import ProductList from "./ProductList";

const Shelf: React.FC = ({ data }) => {
  const { loading , error, products } = data || {}

  return (
    <section className="pv4 pb9">
      <ProductList products={products}/>
    </section>
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

const EnhancedShelf = graphql(productsQuery, options)(Shelf)



export default EnhancedShelf