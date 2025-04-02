// components/useConsoleEasterEgg.ts
'use client'

import { useEffect } from 'react'

export default function useConsoleEasterEgg() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    console.log(
      '%cWelcome to the Dev Console! 🎉',
      'color: #7f5af0; font-size: 16px; font-weight: bold;'
    )

    console.log(
        `%cThis site was built by Dilkhush Choudhary.\n%cType %cdilkhush()%c to unlock a surprise.`,
        'color: #ccc; font-size: 14px;', '', 'color: #7f5af0; font-weight: bold;', 'color: #ccc;'
      )

    window.dilkhush = () => {
      console.clear()
      console.log('%c👨‍💻 You found the easter egg!', 'font-size: 20px; color: lime')
      console.log('%cKeep building. Keep shipping. 🚀', 'color: cyan')
    }
  }, [])
}

declare global {
  interface Window {
    dilkhush: () => void
  }
}
