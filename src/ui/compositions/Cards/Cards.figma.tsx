import React from "react"
import { Card } from "./Cards"
import figma from "@figma/code-connect"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  Card,
  "https://www.figma.com/design/fWOC4cgldpU7HJEiR2kTIO?node-id=2142%3A11380",
  {
    props: {
      icon: figma.instance("Icon"),
      body: figma.string("Body"),
      heading: figma.string("Heading"),
      button: figma.boolean("Button"),
      asset: figma.boolean("Asset"),
      assetType: figma.enum("Asset Type", {
        Icon: "icon",
        Image: "image",
      }),
      variant: figma.enum("Variant", {
        Stroke: "stroke",
        Default: "default",
      }),
      direction: figma.enum("Direction", {
        Horizontal: "horizontal",
        Vertical: "vertical",
      }),
    },
    example: (props) => <Card />,
  },
)