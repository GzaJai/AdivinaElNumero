import { Check, Minus } from "lucide-react"
import { cn } from "../utils/cn"

export function GuessHistory({ guesses }) {
  if (guesses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
        <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
          <span className="text-2xl font-mono text-foreground">?</span>
        </div>
        <p className="text-sm">Tus intentos apareceran aqui</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-3 gap-2 px-4 py-2 text-xs uppercase tracking-wider text-white/70 font-medium">
        <span>Numero</span>
        <span className="text-center flex items-center justify-center gap-1">
          <Check className="w-6 h-6"/>
            Bien
        </span>
        <span className="text-center flex items-center justify-center gap-1">
          <Minus className="w-6 h-6"/>
          Regular
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        {[...guesses].reverse().map((guess, index) => (
          <div
            key={index}
            className={cn(
              "grid grid-cols-3 gap-2 px-4 py-3 rounded-lg transition-all duration-300",
              "bg-secondary/60 hover:bg-secondary",
            )}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <span className="font-mono text-lg font-bold tracking-[0.3em] text-foreground">
              {guess.number}
            </span>

            <span className="text-center">
              <span
                className={cn(
                  "inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold",
                  guess.bien > 0
                    ? "bg-green-500/20 text-green-500"
                    : "bg-secondary text-muted-foreground"
                )}
              >
                {guess.bien}
              </span>
            </span>

            <span className="text-center">
              <span
                className={cn(
                  "inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold",
                  guess.regular > 0
                    ? "bg-amber-500/40 text-amber-500"
                    : "bg-chart-5/20 text-chart-5"
                )}
              >
                {guess.regular}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}