// Modules
import React from 'react'

const Container = ({ children, className }: { children: React.ReactNode, className: string }) => {
  return (
    <main className={`w-full h-full min-h-screen flex-1 ${className}`}>
      {children}
    </main>
  )
}

export default Container;