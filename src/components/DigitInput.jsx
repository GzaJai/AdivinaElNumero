import { useRef } from "react"

export function DigitInput({ value, onChange, disabled = false }) {
  const inputRefs = useRef([])

  const handleChange = (index, e) => {
    const val = e.target.value.replace(/\D/g, "").slice(-1)
    if (!val) return

    const newDigits = [...value]
    newDigits[index] = val
    onChange(newDigits)

    if (index < 3) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      e.preventDefault()
      const newDigits = [...value]

      if (newDigits[index]) {
        newDigits[index] = ""
        onChange(newDigits)
      } else if (index > 0) {
        newDigits[index - 1] = ""
        onChange(newDigits)
        inputRefs.current[index - 1]?.focus()
      }

    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus()

    } else if (e.key === "ArrowRight" && index < 3) {
      inputRefs.current[index + 1]?.focus()

    } else if (/^[0-9]$/.test(e.key)) {
      e.preventDefault()
      console.log(e.key);
      console.log(value);
      
      
      const newDigits = [...value]
      newDigits[index] = e.key
      onChange(newDigits)

      if (index < 3) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 4)

    if (pasted.length > 0) {
      const newDigits = [...value]

      for (let i = 0; i < pasted.length && i < 4; i++) {
        newDigits[i] = pasted[i]
      }

      onChange(newDigits)

      const focusIndex = Math.min(pasted.length, 3)
      inputRefs.current[focusIndex]?.focus()
    }
  }

  return (
    <div className="flex items-center gap-3">
      {[0, 1, 2, 3].map((index) => (
        <input
          key={index}
          ref={(el) => { inputRefs.current[index] = el }}
          type="tel"
          inputMode="numeric"
          maxLength={1}
          value={value[index]}
          disabled={disabled}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          onChange={(e) => handleChange(index, e)}
          className="w-16 h-20 md:w-20 md:h-24 text-center text-3xl md:text-4xl font-mono font-bold rounded-xl border-2 bg-secondary text-foreground transition-all duration-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 focus:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label={`Digito ${index + 1}`}
        />
      ))}
    </div>
  )
}