import React from 'react'

const Footer = () => {
  return (
    <section>
        <footer className="bg-black text-white h-[8rem] w-screen font-sans flex flex-col items-center justify-center py-6">
            <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} CineBuzz. All rights reserved.
            </p>
            
            <p className="text-xs text-gray-500 mt-2">
            Made with ❤️ by Gokul kumar GR
            </p>
            
        </footer>
    </section>
  )
}

export default Footer