import { PropsWithChildren } from "react"
import { classnames, noOp } from "@/lib/helpers"

function RainbowButton({
  children,
  onClick,
  isPlain,
  className,
  ...props
}: PropsWithChildren<{
  onClick?: typeof noOp
  isPlain?: boolean
  className?: string
}>) {
  return (
    <button
      onClick={onClick}
      className={classnames(
        className,
        isPlain ? "bg-zinc-50" : "shadow-lg",
        "rounded-[12px] font-bold transition-transform duration-150 hover:scale-105 active:scale-95 px-4 py-2"
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default RainbowButton
