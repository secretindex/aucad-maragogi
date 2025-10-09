import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react"

import FinalTextDocuments from "../utils/endTextObject"

export const documentsContext: FinalTextDocuments = {
  id: "id/n",
  residencia: "cr/n",
  estadoCivil: "cns/n",
  pis: false,
  registroProfissional: false,
  declaracaoSuperior: false,
  irpf: false,
  criminalFederal: false,
  criminalEstadual: false,
  negativaEleitoral: false,
  escolaridade: false,
  acumuloCargo: false,
  beneficioInss: false,
  ctps: false,
  cnis: false,
  posse: false,
  tituloEleitor: false,
  cnh: "cnh/nr",
  reservista: "res/nr",
  comprovanteEstado: false,
  depId: "dep/n",
}

export interface ActivesContextType {
  docs: FinalTextDocuments
  setDocs: Dispatch<SetStateAction<FinalTextDocuments>>
}

const ActivesContext = createContext<ActivesContextType | undefined>(undefined)

interface ContextProps {
  children: ReactNode
}

const ActivesContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [docs, setDocs] = useState<FinalTextDocuments>(documentsContext)

  return <ActivesContext.Provider value={{ docs, setDocs }}>{children}</ActivesContext.Provider>
}

export { ActivesContextProvider, ActivesContext }
