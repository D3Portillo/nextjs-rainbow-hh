import type { PropsWithChildren } from "react"
import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi"
import { classnames } from "@/lib/helpers"

function ExternalLink({
  href = "",
  children,
  className,
  isTargetSelf,
  isPrimitive,
  ...props
}: PropsWithChildren<{
  href?: string
  className?: string
  isTargetSelf?: boolean
  isPrimitive?: boolean
}>) {
  return (
    <Link href={href}>
      <a
        rel="noopener noreferrer"
        className={classnames(
          isPrimitive ||
            "focus:ring-2 ring-slate-100 text-sm group inline-flex space-x-1 items-center hover:bg-zinc-100 active:scale-105 py-1 px-2 rounded-lg",
          className
        )}
        target={isTargetSelf ? "_self" : "_blank"}
        {...props}
      >
        <span>{children}</span>
        {isPrimitive || <FiArrowUpRight className="group-hover:scale-110" />}
      </a>
    </Link>
  )
}

export default ExternalLink
