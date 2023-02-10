import Head from 'next/head'
import Image from 'next/image'


export default function Home() {

    async function restart(){
        await fetch('/api/restart', {method: "post"})
    }

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-900 p-8 mx-auto text-center min-h-screen space-y-16">
        <h1 className="text-white font-bold text-xl">
          Welcome to the DeBot Admin Panel
        </h1>

          <section className="text-white grid grid-col-1 max-w-sm mx-auto space-y-2">
              <label>Want to <span className="italic">restart</span> the bot?</label>
              <button className="bg-red-500 py-2 rounded" onClick={() => {restart()}}>Restart</button>
          </section>


      </main>


    </div>
  )
}
