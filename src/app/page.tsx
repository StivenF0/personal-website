
/*
  Colors:
  - neutral.700 = 404040
  - lightgray = d9d9d9
  - stone.200 = e7e5e4
  - slate.400 = 94a3b8
  - amber.300 = fcd34d
*/

const Home = () => {
  return (
    <main>
      <section className="min-h-screen bg-neutral-700 pt-6">
        <nav className="flex items-center justify-between mx-[3.2rem]">
          <div className="w-[5.6rem] h-[5.6rem] rounded-[50%] bg-lightgray"></div>
          <div className="flex text-lightgray gap-9 underline text-xl">
            <a href="#">Home</a>
            <a href="#">Projetos</a>
            <a href="#">Habilidades</a>
            <a href="#">Contato</a>
          </div>
        </nav>
      </section>
    </main>
  )
}

export default Home