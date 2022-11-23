import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@lexarno/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children: 'Esse é um texto de exemplo',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
