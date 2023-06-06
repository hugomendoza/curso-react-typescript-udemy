import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  argTypes: {
    size: { control: "select", options: ['normal', 'h1', 'h2', 'h3'] },
    color: { control: "select"},
    fontColor: { control: "color"},
    backgroundColor: { control: "color"}
  }
} satisfies Meta<typeof MyLabel>

type Story = StoryObj<typeof MyLabel>

export const Basic: Story = {
  args: {
    size: 'normal',
    allCaps: false
  },
}

export const AllCaps: Story = {
  args: {
    size: 'normal',
    allCaps: true
  },
}

export const Secondary: Story = {
  args: {
    size: 'normal',
    color: 'secondary'
  },
}

export const Tertiary: Story = {
  args: {
    size: 'normal',
    color: 'tertiary'
  },
}

export const CustomFontColor: Story = {
  args: {
    size: 'h1',
    fontColor: '#5517ac'
  },
}

export const CustomBackgroundColor: Story = {
  args: {
    size: 'h1',
    fontColor: '#FFFFFF',
    backgroundColor: '#000000'
  },
}