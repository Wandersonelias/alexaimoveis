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
  { label: 'Casa', value: 'Casa' },
  { label: 'Apartamento', value: 'Apartamento' },
  { label: 'Kitnet', value: 'Kitnet' },
];
const optionsStatus = [
  { label: 'Disponível', value: 'Disponível' },
  { label: 'Alugado', value: 'Alugado' },
  { label: 'Indisponível', value: 'Indisponível' },
];
export function ImovelDetalhe() {
  const [isLoading, setIsLoading] = useState(true)
  const [imoveis, setImoveis] = useState([])
  const navigate = useNavigate()
  const params = useParams()
  const id = params.id
  const [atualImovel, setAtualImovel] = useState({
    codigo: "",
    endereco: "",
    descricao: "",
    bairro: "",
    cidade: "",
    valor: "",
    status: "",
    tipo: ""
  })

  function handleOnchangeInput(e) {
    const { name, value } = e.target
    setAtualImovel({ ...atualImovel, [name]: value })
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
      api.get(`/imoveis/${id}`).then((response) => {
        const data = response.data
        setAtualImovel(data)
        console.log(data)
        // setAtualImovel(data)
      })
    }
  }, [])
  async function cadastrarImovel(e) {
    e.preventDefault()
    try {

      if (id && isNumber(id)) {
        await api.put(`/imovel/${id}`, atualImovel)
      } else {
        await api.post('/imoveis', atualImovel)
      }
      navigate('/dashboard/imoveis')
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
            Imovel
          </Typography>

          <hr class="mb-5 border-black" />
          <div>
            <form onSubmit={cadastrarImovel}>
              <div className="grid my-8 grid-rows-1 grid-flow-col gap-4">
                <div >
                  <label for="codigo" className="text-black">Codigo</label>
                  <Input type="text" id="codigo" name="codigo" value={atualImovel.codigo} onChange={handleOnchangeInput} className="border border-black rounded-lg p-2" />
                </div>
                <div className="col-span-6">
                  <label for="endereco" className="text-black">Endereço</label>
                  <Input type="text" id="endereco" name="endereco" value={atualImovel.endereco} onChange={handleOnchangeInput} className="w-full border border-black rounded-lg p-2" />
                </div>

              </div>
              <div className="grid my-8 grid-rows-1 gap-4">
                <label for="descricao" className="text-black">Descrição</label>
                <Input type="textarea" id="descricao" name="descricao" value={atualImovel.descricao}  onChange={handleOnchangeInput}  className="w-full h-16 border border-black rounded-lg " />
              </div>
              <div className="grid my-8 grid-rows-1 grid-flow-col gap-10">
                <div>
                  <label for="Bairro" className="text-black">Bairro</label>
                  <Input value={atualImovel.bairro}  onChange={handleOnchangeInput} name="bairro"/>
                </div>
                <div>
                  <label for="Cidade" className="text-black">Cidade</label>
                  <Input value={atualImovel.cidade} onChange={handleOnchangeInput} name="cidade" />

                </div>
              </div>
              <div className="grid my-8 grid-rows-1 grid-flow-col gap-4">

                <div>
                  <label for="valor" className="text-black">Valor</label>
                  <Input type="number" name="valor" onChange={handleOnchangeInput} value={atualImovel.valor} />

                </div>
                <div>
                  <label for="Tipo" className="text-black">Tipo</label>
                  <Select
                    placeholder="Selecione"
                    value={{ label: atualImovel.tipo, value: atualImovel.tipo }}
                    onChange={(value) => setAtualImovel({ ...atualImovel, tipo: value.value })}
                    options={optionsType}
                  />

                </div>
                <div>
                  <label for="Cidade" className="text-black">Status</label>
                  <Select
                    placeholder="Selecione"
                    value={{ label: atualImovel.status, option: atualImovel.status }}
                    onChange={(value) => setAtualImovel({ ...atualImovel, status: value.value })}
                    options={optionsStatus}
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

export default ImovelDetalhe;
