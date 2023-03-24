import React from 'react'

const FormContact = () => {
    return (
        <form>
            <div>
                <h1 className='text-white font-bold text-5xl font-mont tracking-tighter'>Nous contacter</h1>
                <h3 className='text-[#ee6e25] text-sm font-semibold font-opensans'>ou demandez un devis</h3>
            </div>
            <div className="grid gap-2 md:grid-cols-2 font-opensans">
                <div>
                    <label className="block text-3sm text-white dark:text-white">Nom et Prénom <span className='text-[#c6080c]'>*</span> </label>
                    <input type="text" id="first_name" className="bg-[#5a4834] border border-[#5a4834] text-white text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                </div>
                <div>
                    <label className="block text-3sm text-white dark:text-white">Entreprise <span className='text-[#c6080c]'>*</span> </label>
                    <input type="text" id="first_name" className="bg-[#5a4834] border border-[#5a4834] text-white text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                </div>
                <div>
                    <label className="block text-3sm text-white dark:text-white">E-mail <span className='text-[#c6080c]'>*</span> </label>
                    <input type="mail" id="first_name" className="bg-[#5a4834] border border-[#5a4834] text-white text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                </div>
                <div>
                    <label className="block text-3sm text-white dark:text-white">Téléphone <span className='text-sm'>{"("}indicatif pays{")"}</span>  <span className='text-[#c6080c]'>*</span> </label>
                    <input type="text" id="first_name" className="bg-[#5a4834] border border-[#5a4834] text-white text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                </div>
            </div>
            <div>
                <label className="block text-3sm text-white dark:text-white">Message <span className='text-[#c6080c]'>*</span> </label>
                <textarea name="postContent" className="bg-[#5a4834] border border-[#5a4834] text-white text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" rows={4} cols={40} />
            </div>
            <div className='flex items-center justify-between'>
                <div className='mt-2'>
                    <label>
                        <input type="file" className="text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-[#fc7326] file:text-white
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700
          " />
                    </label>
                    <div className="h-6"></div>
                </div>
                <div>
                    <button className="bg-[#0a0393] hover:bg-[#fc7326] text-white py-2 px-4">
                        Envoyez
                    </button>
                </div>
            </div>
        </form>
    )
}

export default FormContact