import { useState } from "react"

function useOnOffMachine() {
  const [isOn, setIsOn] = useState(false)
  const turnOn = () => setIsOn(true)
  const turnOff = () => setIsOn(false)
  return {
    turnOn,
    turnOff,
    isOn,
    isOff: !isOn,
  }
}

export default useOnOffMachine
