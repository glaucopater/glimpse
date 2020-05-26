import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Gallery from "./Gallery"
import Section, { Props } from "./Section"

export const PhotosSection = (props: Props) => (
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
        }
      `}
      render={(data) => {
        const section = props.section[0].toUpperCase() + props.section.substr(1);
        const sectionName = "all" + section + "Yaml";
        console.log("sectionName", sectionName)

        return (
          <Gallery
            images={data["all" + section + "Yaml"].edges.map(({ node }: any) => {
              if (!node.image)
                console.log("node", node);
              return ({
                id: node.image.id,
                ...node.image.childImageSharp.fluid,
                caption: `${node.title} – ${node.author}`,
              })
            })}
            itemsPerRow={[2, 2]}
          />
        )
      }
      }
    />
  </Section>
)

export default PhotosSection;