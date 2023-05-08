import Card from './Card'
import { robots } from './robots'

export default function Home() {
  return (
    <main>
        {robots.map(robot => {
          return (
            <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
          )
        })
      }
    </main>
  )
}