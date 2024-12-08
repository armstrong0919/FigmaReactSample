import React from "react"
import { Notification } from "./Notification"
import figma from "@figma/code-connect"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  Notification,
  "https://www.figma.com/design/fWOC4cgldpU7HJEiR2kTIO?node-id=124%3A8256",
  {
    props: {
      body: figma.string("Body"),
      dismissible: figma.boolean("Dismissible"),
      title: figma.string("Title"),
      hasIcon: figma.boolean("Has Icon"),
      icon: figma.instance("Icon"),
      hasButton: figma.boolean("Has Button"),
      variant: figma.enum("Variant", {
        Message: "message",
        Alert: "alert",
      }),
    },
    example: (props) => <Notification />,
  },
)