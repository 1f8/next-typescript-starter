import { CountProvider, useCount } from '../state/contexts/CountContext'
import useCurrentTime from '../state/hooks/useCurrentTime'

const CountComponent  = () => {
  const [, setCount] = useCount()
  const increment = () => setCount((c: number) => c + 1)

  return (
    <p>
      <button type='button' onClick={increment}>
        +
      </button>
    </p>
  )
}

const DisplayState  = () => {
  const [count] = useCount()
  const time = useCurrentTime()

  return (
    <>
      <p>
        Times Clicked: {count}
      </p>
      <p>
        Time: {time}
      </p>
    </>
  )
}

const Home = () => {
  return (
    <CountProvider>
      <div className='home flex flex-col items-center justify-center h-screen text-center'>
        <h1>こんにちは！!</h1>
        <CountComponent />
        <DisplayState />
      </div>
    </CountProvider>
  )
}

Home.displayName = 'HomeComponent'

export default Home
