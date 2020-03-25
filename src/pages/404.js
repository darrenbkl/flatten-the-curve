import React from "react";
import { graphql } from "gatsby"
import Img from "gatsby-image";

const a = ({ data }) => {
  return (
    <Img fluid={data.file.childImageSharp.fluid} alt="" />
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "corona.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default a;