import { createContext } from "react";
import { useState } from "react";


export const ReloadContext = createContext({});

export function ReloadContextProvider(props) {
  const [openModal, setOpenModal] = useState(false)
  const handleOpen = () => {
    setOpenModal(!openModal)
  }
  const [reload, setReload] = useState(false)


  return (
    <ReloadContext.Provider value={{ reload, setReload, handleOpen, openModal }} >
      {props.children}
    </ReloadContext.Provider>
  )
}