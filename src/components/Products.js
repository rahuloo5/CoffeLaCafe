import React from "react";
import Title from "./Global/Title";
import { StaticQuery, graphql } from "gatsby";
import Product from "./Product";
const getProducts = graphql`
  {
    
    products:allContentfulCoffeProduct {
    edges {
      node {
        price
        title
        imagee {
          fluid(maxHeight:750) {
            src
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
  }
`;

export default function Products() {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="our products" />
              <div className="row">
                {data.products.edges.map(({ node: product }) => {
                  return <Product key={product.id} product={product} />;
                })}
              </div>
            </div>
          </section>
        );
      }}
    />
  );
}