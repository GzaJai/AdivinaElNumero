import { Github, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='w-full py-4 flex items-center justify-between px-6 text-white/80'>
      <p className='text-lg'>
        Hecho por <a href="https://github.com/GzaJai/" target="_blank" rel="noopener noreferrer"
          className='text-primary font-medium hover:underline'>
          Gonzalo Jaime
        </a>
      </p>

      <div className='flex items-center gap-3'>
        <a href="https://github.com/GzaJai/" target="_blank" rel="noopener noreferrer"
          className='p-2 rounded-lg hover:text-indigo-600 hover:bg-indigo-600/20 transition-colors'>
          <Github className='w-8 h-8' />
        </a>
        <a href="https://www.linkedin.com/in/gjaimeguinazu/" target="_blank" rel="noopener noreferrer"
          className='p-2 rounded-lg hover:text-indigo-600 hover:bg-indigo-600/20 transition-colors'>
          <Linkedin className='w-8 h-8' />
        </a>
      </div>
    </footer>
  )
}

export default Footer