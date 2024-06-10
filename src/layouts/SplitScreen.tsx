import { ComponentPropsWithoutRef } from "react"

type SplitNavProps = ComponentPropsWithoutRef<'section'>

export default function SplitScreen({className,children}:SplitNavProps) {
  return (
    <section className={className}>
       {children}
    </section>
  )
}

const Side = ({children , className}:SplitNavProps) => {

  return (
    <section className={className}>
        {children}
    </section>
  )
}


SplitScreen.left = Side
SplitScreen.right = Side
