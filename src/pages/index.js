import FirstComponent from '@components/FirstComponent'

export default function Home () {
  return (
    <main
      className='flex flex-col items-center justify-between min-h-screen p-24 text-white bg-black'
    >
      <h1 className='text-5xl font-bold text-center'>Welcome to Next.js!</h1>
      <p className='text-2xl text-center'>
        Get started by editing <code>pages/index.js</code>
      </p>
      <FirstComponent />
    </main>
  )
}
