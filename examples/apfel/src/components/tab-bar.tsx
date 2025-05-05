import { Text } from '@react-three/uikit'
import { SquareDashed } from '@react-three/uikit-lucide'
import { TabBar, TabBarItem } from '@/tab-bar.js'

export function TabBarWithText() {
  return (
    <TabBar defaultValue="1">
      <TabBarItem value="1" icon={<SquareDashed />}>
        <Text>Label</Text>
      </TabBarItem>
      <TabBarItem value="2" icon={<SquareDashed />}>
        <Text>Label</Text>
      </TabBarItem>
      <TabBarItem value="3" icon={<SquareDashed />}>
        <Text>Label</Text>
      </TabBarItem>
      <TabBarItem value="4" icon={<SquareDashed />}>
        <Text>Label</Text>
      </TabBarItem>
    </TabBar>
  )
}
