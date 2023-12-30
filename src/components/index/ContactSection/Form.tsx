"use client";

const Form = () => {
  return (
    <form
      className="bg-lightgray w-[50rem] h-full rounded-[3.3rem] px-14 shadow-xl flex flex-col justify-center"
      onSubmit={(e) => { e.preventDefault }}
    >
      <h1 className="text-center text-5xl font-semibold text-neutral-700 mt-4">Contate-me</h1>
      <div className="p-4" />
      <p className="font-semibold text-neutral-700 opacity-80 text-lg"># Vamos trabalhar e construir uma ideia juntos.</p>
      <p className="font-semibold text-neutral-700 text-xl mt-2">Nome:</p>
      <input
        name="name"
        type="text"
        className="w-[43rem] h-10 mt-2 rounded-lg shadow-md"
      />
      <p className="font-semibold text-neutral-700 text-xl mt-2">Email:</p>
      <input
        name="email"
        type="email"
        className="w-[43rem] h-10 mt-2 rounded-lg shadow-md"
      />
      <p className="font-semibold text-neutral-700 text-xl mt-2">Mensagem:</p>
      <textarea
        name="content"
        className="w-[43rem] h-36 mt-2 rounded-lg shadow-md resize-none"
      />
      <input
        type="button"
        className="mt-4 w-[20rem] h-12 bg-amber-300 shadow-md mx-auto rounded-2xl text-2xl font-semibold text-neutral-700 cursor-pointer"
        value="Enviar"
      />
    </form>
  )
}

export default Form