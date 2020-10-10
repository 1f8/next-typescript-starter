import { CountProvider, useCount } from 'contexts/CountContext'
import useCurrentTime from 'hooks/useCurrentTime'

const CountComp  = () => {
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

const TestComp = () => {
  return (
    <CountProvider>
      <div className='home flex flex-col items-center justify-center h-screen text-center'>
        <div className='h-2 w-screen my-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'></div>
        <h1>こんにちは！!</h1>
        <CountComp />
        <DisplayState />
        <div className='h-2 w-screen my-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'></div>
      </div>
    </CountProvider>
  )
}

export default TestComp
