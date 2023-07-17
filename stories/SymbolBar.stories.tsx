import { Meta, StoryObj } from '@storybook/react'
import SymbolBar from '../client/components/SymbolBar/SymbolBar'
import React from 'react'

const meta: Meta<typeof SymbolBar> = {
  title: 'SymbolBar',
  component: SymbolBar,
}

type SymbolBarStory = StoryObj<typeof SymbolBar>

export const symbolBar: SymbolBarStory = {
  name: 'symbolBar',

  // render: () => <SymbolBar />,
}

export default meta
