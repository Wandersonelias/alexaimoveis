import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
  Option,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/solid";
import DataTable from "react-data-table-component";
import { useState } from "react";
import { Spinner } from "@material-tailwind/react";
import { useEffect } from "react";
import api from "@/lib/api";
import { Input } from "@material-tailwind/react";
import Select from 'react-select'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { isNumber } from "@/utils/Utils";
const optionsType = [
  { label: 'Administrador', value: 'Administrador' },
  { label: 'Operador', value: 'Operador' },

];

export function UsuarioDetalhe() {
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const params = useParams()
  const id = params.id
  const [atualUsuario, setAtualUsuario] = useState({
    nome:"",
    email: "",
    password: "",
    repassword: "",
    category: ""
  })

  function handleOnchangeInput(e) {
    const { name, value } = e.target
    setAtualUsuario({ ...atualUsuario, [name]: value })
  }
  useEffect(() => {
    setIsLoading(true)
    api.get('/imoveis').then((response) => {
      const data = response.data
      setImoveis(data)
      setIsLoading(false)

    })
  }, [])

  useEffect(() => {
    if (id && isNumber(id)) {
      api.get(`/users/${id}`).then((response) => {
        const data = response.data
        data.password = null
        setAtualUsuario(data)
        console.log(data)
        // setAtualUsuario(data)
      })
    }
  }, [])
  async function cadastrarImovel(e) {
    e.preventDefault()
    try {
      if (atualUsuario.password !== atualUsuario.repassword) {
        alert('Senhas não conferem')
        return
      }
      if (id && isNumber(id)) {
        await api.put(`/users/${id}`, atualUsuario)
      } else {
        await api.post('/users', atualUsuario)
      }
      navigate('/dashboard/usuarios')
    } catch (error) {
      console.log(error)
      alert('Erro ao cadastrar agendamento')
    }


  }
  return (
    <div className="mt-24">
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">

        <CardBody className="p-4">
          <Typography variant="h1" className="text-[2rem] text-black">
            Usuário
          </Typography>

          <hr class="mb-5 border-black" />
          <div>
            <form onSubmit={cadastrarImovel}>
              <div className="grid my-8 grid-rows-1 grid-flow-col gap-4">
                <div >
                  <label for="nome" className="text-black">Nome</label>
                  <Input type="text" id="nome" name="nome" value={atualUsuario.nome} onChange={handleOnchangeInput} className="border border-black rounded-lg p-2" />
                </div>
                <div className="col-span-1">
                  <label for="email" className="text-black">Email</label>
                  <Input type="text" id="email" name="email" value={atualUsuario.email} onChange={handleOnchangeInput} className="w-full border border-black rounded-lg p-2" />
                </div>

              </div>
              <div className="grid my-8 grid-rows-1 grid-flow-col gap-4">
                <div >
                  <label for="password" className="text-black">Senha</label>
                  <Input type="password" id="password" name="password" value={atualUsuario.password} onChange={handleOnchangeInput} className="border border-black rounded-lg p-2" />
                </div>
                <div className="col-span-1">
                  <label for="repassword" className="text-black">Confirme a senha</label>
                  <Input type="password" id="repassword" name="repassword" value={atualUsuario.repassword} onChange={handleOnchangeInput} className="w-full border border-black rounded-lg p-2" />
                </div>

              </div>
    
              <div className="flex mb-8 justify-start">
                <div   className="col-span-1 w-[50%]">
                  <label for="Tipo" className="text-black">Tipo</label>
                  <Select
                    className="w-[100%]"
                    placeholder="Selecione"
                    value={{ label: atualUsuario.category, value: atualUsuario.category }}
                    onChange={(value) => setAtualUsuario({ ...atualUsuario, category: value.value })}
                    options={optionsType}
                  />

                </div>
  
              </div>


              <div className="flex gap-8 justify-end">
                <Button color="blue" type="submit" className="w-[20rem]">
                  Salvar
                </Button>
                <Button className="w-[20rem] bg-[#6c757d]">
                  Cancelar
                </Button>

              </div>
            </form>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default UsuarioDetalhe;
