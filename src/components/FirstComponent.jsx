import { useExampleStore } from '@stores/exampleStore'

const FirstComponent = () => {
  const count = useExampleStore(state => state.count)
  const { increment, decrement } = useExampleStore()

  return (
    <div className='flex flex-col items-center text-center'>
      <p>First component</p>
      <p className='text-2xl font-bold'>COUNTER: {count}</p>
      <div className='flex gap-8'>
        <button onClick={decrement} className='px-4 py-2 font-bold text-black bg-white rounded-lg'>-</button>
        <button onClick={increment} className='px-4 py-2 font-bold text-black bg-white rounded-lg'>+</button>
      </div>
    </div>
  )
}
export default FirstComponent
