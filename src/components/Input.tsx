import { ComponentProps } from 'react'

export interface InputProps {}

type InputPrefixPros = ComponentProps<'div'>

const InputPrefix = ({ ...props }: InputPrefixPros) => {
  return <div {...props} />
}

type InputControlPros = ComponentProps<'input'>

const InputControl = ({ ...props }: InputControlPros) => {
  return (
    <input
      className="mx-1 flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  )
}

type InputRootProps = ComponentProps<'div'>

const InputRoot = (props: InputRootProps) => {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}

export const Input = {
  Root: InputRoot,
  Control: InputControl,
  Prefix: InputPrefix,
}
