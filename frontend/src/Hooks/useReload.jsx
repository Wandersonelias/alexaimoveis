import { ReloadContext } from "@/context/ReloadContext"
import { useContext } from "react"

export function useReload() {

  const value = useContext(ReloadContext)

  return value
}