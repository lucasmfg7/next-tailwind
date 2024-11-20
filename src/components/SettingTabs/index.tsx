'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import { TabItemTrigger } from './TabItemTrigger'

export const SettingTabs = () => {
  const [currentTab, setCurrentTab] = useState('tab1')
  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        {[
          { value: 'tab1', title: 'My details' },
          { value: 'tab2', title: 'Profile' },
          { value: 'tab3', title: 'Password' },
          { value: 'tab4', title: 'Team' },
          { value: 'tab5', title: 'Plan' },
          { value: 'tab6', title: 'Billing' },
          { value: 'tab7', title: 'E-mail' },
          { value: 'tab8', title: 'Notifications' },
          { value: 'tab9', title: 'Integrations' },
          { value: 'tab10', title: 'API' },
        ].map(({ value, title }) => (
          <TabItemTrigger
            key={value}
            value={value}
            title={title}
            isSelected={currentTab === value}
          />
        ))}
      </Tabs.List>
    </Tabs.Root>
  )
}
