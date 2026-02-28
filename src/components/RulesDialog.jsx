import React from 'react'
import { XIcon, Hash, Check, Minus } from 'lucide-react'

const Dialog = ({ isOpen, onClose, title }) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors z-50 ${
        isOpen ? 'visible bg-black/60' : 'invisible'
      }`}
    >
      <div
        onClick={e => e.stopPropagation()}
        className={`bg-slate-800 w-[90%] rounded-xl shadow p-6 transition-all md:h-[60%] md:w-[50%] ${
          isOpen ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
        }`}
      >
        <div className='flex flex-col gap-3 h-full'>
          <div className='flex w-[96%] mx-auto justify-center items-center'>
            {title && <h3 className='text-2xl font-semibold md:text-4xl'>{title}</h3>}
            <span onClick={onClose} className='fixed right-6 p-1 cursor-pointer ml-auto rounded-lg hover:bg-rose-700/50 hover:text-rose-700 duration-75'>
              <XIcon className='w-8 h-8' />
            </span>
          </div>

          <div className='flex-1 overflow-y-auto'>
            <div className="flex flex-col w-full mx-auto gap-6 py-4">
                <div>
                    <p className="text-white/60 text-md text-center md:text-xl">{"Adivina el numero secreto de 4 digitos"}</p>
                </div>

                <div className='flex flex-col gap-6 items-center md:w-3/4 md:mx-auto md:items-start'>
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                        <Hash className="w-5 h-5 text-indigo-500" />
                        </div>
                        <div>
                        <p className="font-medium text-foreground text-sm md:text-2xl">Numero secreto</p>
                        <p className="text-sm text-white/60 md:text-lg">
                            {"Se genera un numero aleatorio de 4 digitos (0-9). Los digitos pueden repetirse."}
                        </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                        <Check className="w-5 h-5 text-green-500" />
                        </div>
                        <div>
                        <p className="font-medium text-foreground text-sm md:text-2xl">Bien</p>
                        <p className="text-sm text-white/60 md:text-lg">
                            {"Indica cuantos digitos estan en la posicion correcta."}
                        </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                        <Minus className="w-5 h-5 text-amber-500" />
                        </div>
                        <div>
                        <p className="font-medium text-foreground text-sm md:text-2xl">Regular</p>
                        <p className="text-sm text-white/60 md:text-lg">
                            {"Indica cuantos digitos existen en el numero pero estan en una posicion incorrecta."}
                        </p>
                        </div>
                    </div>
                </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialog