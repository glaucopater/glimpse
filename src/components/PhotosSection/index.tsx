import { graphql, StaticQuery } from "gatsby";
import React from "react";
import Gallery from "./Gallery";
import Section, { Props } from "./Section";
import { useWindowSize } from "../../hooks";

export const PhotosSection = (props: Props) => {
  const [width, height] = useWindowSize();

  return (
    <Section {...props}>
      <StaticQuery
        query={graphql`
        {
          allBwYaml {
            edges {
              node {
                title
                author
                image {
                  id
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                      originalImg
                    }
                  }
                }
              }
            }
          }
          allColorYaml {
            edges {
              node {
                title
                author
                image {
                  id
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                      originalImg
                    }
                  }
                }
              }
            }
          }
        allAbstractYaml {
            edges {
              node {
                title
                author
                image {
                  id
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                      originalImg
                    }
                  }
                }
              }
            }
          }
        }
      `}
        render={(data) => {
          const section = props.section[0].toUpperCase() + props.section.substr(1);
          const sectionName = `all${section}Yaml`;
          const itemsPerRow = width < 879 ? 1 : 2;

          return (
            <>
              <h2 style={{ margin: "0 1rem", textAlign: "right" }}>{props.title}</h2>
              <Gallery
                images={data[sectionName].edges.map(({ node }: any) => {
                  if (!node.image)
                    console.log("node", node);
                  return ({
                    id: node.image.id,
                    ...node.image.childImageSharp.fluid,
                    caption: `${node.title} – ${node.author}`,
                  });
                })}
                itemsPerRow={[itemsPerRow, itemsPerRow]}
              />
            </>
          );
        }
        }
      />
    </Section>);
};

export default PhotosSection;