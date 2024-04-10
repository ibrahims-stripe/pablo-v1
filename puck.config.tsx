import type { Config } from "@measured/puck";
import { Section } from "./app/config/components/Section/Section";
import { spacingOptions } from "./app/config/components/options";
import { Columns, ColumnsProps } from "./app/config/blocks/Columns";
import { Flex, FlexProps } from "./app/config/blocks/Flex";
import { Heading, HeadingProps } from "./app/config/blocks/Heading";
import { Card, CardProps } from "./app/config/blocks/Card";
import { Hero, HeroProps } from "./app/config/blocks/Hero"
import { ButtonGroup, ButtonGroupProps } from "./app/config/blocks/ButtonGroup";
import { Text, TextProps } from "./app/config/blocks/Text";
import { VerticalSpace, VerticalSpaceProps } from "./app/config/blocks/VerticalSpace";

type Props = {
  HeadingBlock: { title: string };
  Paragraph: {
    text: string;
    textAlign: "left" | "center" | "right";
  };
  Checkout: {
    label: string;
    url: string;
  };
  Text: TextProps,
  VerticalSpace: VerticalSpaceProps,
  Columns: ColumnsProps,
  Flex: FlexProps,
  Heading: HeadingProps,
  Card: CardProps,
  Hero: HeroProps,
  ButtonGroup: ButtonGroupProps
};

export const config: Config<Props> = {
  root: {
    render: ({ children }) => {
      return <div className="p-16">{children}</div>;
    },
  },
  categories: {
    layout: {
      components: ["VerticalSpace", "Columns", "Flex"]
    },
    typography: {
      components: ["Heading", "Text", "Paragraph"]
    },
    stripe: {
      components: ["Checkout"]
    },
    elements: {
      components: ["Hero", "Card", "ButtonGroup"]
    }

  },
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            {title}
          </h1>
        </div>
      ),
    },
    Paragraph: {
      fields: {
        text: { type: "text" },
        textAlign: {
          type: "radio",
          options: [
            { label: "Left", value: "Left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" }
          ]
        }
      },
      defaultProps: {
        text: "Paragraph to be changed",
        textAlign: "left"
      },
      render: ({ text, textAlign }) => (
        <div>
          <p style={{ textAlign }} className="leading-7 mt-6">
            {text}
          </p>
        </div>
      ),
    },
    Checkout: {
      fields: {
        label: { type: "text" },
        url: { type: "text" },
      },
      label: "Checkout Button",
      defaultProps: { label: "Buy Now", url: "https://buy.stripe.com/test_5kA3cJag96gqcSYdR9" },
      render: ({ label, url }) => (
        <a href={url} className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
          {label}
        </a>
      )
    },
    Text,
    VerticalSpace,
    Hero,
    Columns,
    Flex,
    Heading,
    Card,
    ButtonGroup
  }
};

export default config;
