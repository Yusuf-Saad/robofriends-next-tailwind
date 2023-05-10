'use client'

import Card from '../components/Card'
import { useRobotsContext } from './RobotsContextProvider';

export default function RobotList() {
  const { robots } = useRobotsContext();
  return (
    <main>
      {robots.map(robot => {
          return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
        })
      }
    </main>
  )
}