import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@lexarno/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/lexarno.png',
    alt: 'Alex Arno',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: 'Alex Arno',
  },
}
