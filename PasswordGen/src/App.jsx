import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")
  const passwordRef = useRef(null)
  
  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    
    if (numberAllowed) str += "0987654321"
    if (charAllowed) str += "!@#$%^&*()_+"
    
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
      // console.log(char);
    }

    setpassword(pass)
  }, [length, numberAllowed, charAllowed])

  useEffect(() => { generatePassword() }, [length, numberAllowed, charAllowed])

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4">
      <div className="bg-white text-gray-800 rounded-xl shadow-lg p-6 max-w-md w-full space-y-6">
        <h1 className="text-2xl font-bold text-center">Password Generator 🔐</h1>

        <div className="flex gap-2">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="flex-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
            placeholder="Generated Password"
          />
          <button
            onClick={copyPassword}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label htmlFor="length" className="font-medium">Length: {length}</label>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              onChange={(e) => setlength(Number(e.target.value))}
              className="w-2/3"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setnumberAllowed(prev => !prev)}
              id="numberAllowed"
              className="w-4 h-4"
            />
            <label htmlFor="numberAllowed">Include Numbers</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setcharAllowed(prev => !prev)}
              id="charAllowed"
              className="w-4 h-4"
            />
            <label htmlFor="charAllowed">Include Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
