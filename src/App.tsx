import React, { useState } from 'react'
import { isValidAddress, toChecksumAddress } from 'rskjs-util'

import './App.scss'

function App () {
  const [address, setAddress] = useState<string>('')
  const [chainId, setChainId] = useState<number>(0)
  const [response, setResponse] = useState<string | null>(null)

  const convert = () => {
    console.log('convert it!')
    if (!isValidAddress(address)) {
      return setResponse('[ERROR] Not a valid address')
    }

    if (isNaN(chainId) && chainId.toString() !== '') {
      return setResponse('[ERROR] ChainId must be a number, or 0')
    }

    setResponse(toChecksumAddress(address, chainId === 0 ? null : chainId))
  }

  return (
    <div className="App">
      <header className="App-header">
        Quick Checksum Converter
      </header>
      <section>
        <p>
          <label>{'Address: '}
            <input type="text" value={address} onChange={(evt) => setAddress(evt.target.value)} />
          </label>
        </p>
        <p>
          <label>{'Chain Id: '}
            <input type="text" value={chainId} onChange={(evt) => setChainId(parseInt(evt.target.value))} />
          </label>
        </p>
        <p>
          <button onClick={convert}>Convert It!</button>
        </p>
      </section>
      <section>
        {response && <div className="response">{response}</div>}
      </section>
    </div>
  )
}

export default App
