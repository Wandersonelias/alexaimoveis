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
import { headersAgendamentos } from "@/utils/HeaderTables";
import api from "@/lib/api";
import { Input } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { isNumber } from "@/utils/Utils";
import Select from 'react-select'

const options = [
  { label: 'confirmado', value: 'confirmado' },
  { label: 'cancelado', value: 'cancelado' },
  { label: 'finalizado', value: 'finalizado' },
];
export function AgendamentosDetalhe() {
  const [isLoading, setIsLoading] = useState(true)
  const [imoveis, setImoveis] = useState([])
  const navigate = useNavigate()
  const params = useParams()
  const [imovelAtual, setImovelAtual] = useState({
    imovel: {
      codigo: '',
      endereco: '',
      bairro: '',
      cidade: ''
    },
    label: ''
  })
  const [agendamentoAtual, setAgendamentoAtual] = useState({
    cliente_nome: '',
    cliente_email: '',
    telefone: '',
    data_agendamento: '',
    hora_agendamento: '',
    status: '',
    endereco: '',
    bairro: '',
    cidade: '',
    codigo: ""
  })
  useEffect(() => {
    setIsLoading(true)
    api.get('/imoveis').then((response) => {
      const data = response.data
      setImoveis(data.map((item => ({
        imovel: item,
        label: item.codigo,
        value: item.id
      }))))
      setIsLoading(false)

    })
  }, [])


  function handleChangeInputs(e) {
    const { name, value } = e.target
    setAgendamentoAtual({
      ...agendamentoAtual,
      [name]: value
    })
  }
  async function cadastrarOuAtualizarImovel(e) {
    e.preventDefault()
    try {
      const data = {
        ...agendamentoAtual
      }
      data.imoveiId = imovelAtual.imovel.id

      if (id) {
        await api.put(`/agendamentos/${id}`, data)
      } else {
        await api.post('/agendamentos', data)
      }
      navigate('/dashboard/agendamentos')
    } catch (error) {
      console.log(error)
      alert('Erro ao cadastrar agendamento')
    }


  }
  const id = params.id

  useEffect(() => {
    setIsLoading(true)
    if (id && isNumber(id) && imoveis.length > 0) {
      api.get(`/agendamentos/${id}`).then((response) => {
        const data = response.data
        const {
          cliente_nome,
          cliente_email,
          imoveiId,
          data_agendamento,
          hora_agendamento,
          telefone,
          status,
        } = data
        const imovelAtualFind = imoveis.find((imovel) => imovel.imovel.id === imoveiId)

        setImovelAtual({
          imovel: imovelAtualFind.imovel,
          label: imovelAtualFind.imovel.codigo
        })
        setAgendamentoAtual({
          cliente_nome,
          cliente_email,
          data_agendamento: data_agendamento.split('T')[0],
          imoveiId,
          hora_agendamento,
          telefone,
          status
        })
      })
      setIsLoading(false)
    }
  }, [imoveis])
  return (
    <div className="mt-24">
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">

        <CardBody className="p-4">
          <Typography variant="h1" className="text-[2rem] text-black">
            Agendamentos
          </Typography>

          <hr class="mb-5 border-black" />
          <div>
            <form onSubmit={cadastrarOuAtualizarImovel}>
              <div className="grid my-8 grid-rows-1 grid-flow-col gap-4">
                <div >
                  <label for="cliente_nome" className="text-black">Cliente</label>
                  <Input type="text" id="cliente_nome" value={agendamentoAtual.cliente_nome} onChange={handleChangeInputs} name="cliente_nome" className="border border-black rounded-lg p-2" />
                </div>
                <div>
                  <label for="Email" className="text-black">Email</label>
                  <Input type="email" id="Email" name="cliente_email" value={agendamentoAtual.cliente_email} onChange={handleChangeInputs} className="border border-black rounded-lg p-2" />
                </div>
                <div>
                  <label for="Telefone" className="text-black">Telefone</label>
                  <Input type="text" id="Telefone" name="telefone" value={agendamentoAtual.telefone} onChange={handleChangeInputs} className=" border border-black rounded-lg p-2" />
                </div>
              </div>
              <div className="grid my-8 grid-rows-1 grid-flow-col gap-4 ">
                <div>
                  <label for="data_agendamento" className="text-black">Data agendada</label>
                  <Input type="date" id="data_agendamento" name="data_agendamento" value={agendamentoAtual.data_agendamento} onChange={handleChangeInputs} className=" border border-black rounded-lg p-2" />
                </div>
                <div>
                  <label for="hora_agendamento" className="text-black">Hora agendada</label>
                  <Input type="time" id="hora_agendamento" name="hora_agendamento" value={agendamentoAtual.hora_agendamento} onChange={handleChangeInputs} className=" border border-black rounded-lg p-2" />
                </div>
                <div className="col-span-3">
                  <label for="Status" className="text-black">Status</label>
                  <Select
                    value={{ label: agendamentoAtual.status, value: agendamentoAtual.status }}
                    onChange={(value) => setAgendamentoAtual({ ...agendamentoAtual, status: value.value })}
                    options={options}
                  />
                </div>
              </div>
              <div className="grid my-8 grid-rows-1 grid-flow-col gap-4">
                <div>
                  <label for="Código" className="text-black">Código</label>
                  <Select
                    value={imovelAtual}
                    noOptionsMessage="Nenhum imóvel encontrado"
                    onChange={(value) => setImovelAtual(value)}
                    options={imoveis}
                  />
                </div>
                <div className="col-span-6">
                  <label for="Endereço" className="text-black">Endereço</label>
                  <Input type="text" id="Endereço" name="name" value={imovelAtual?.imovel?.endereco} disabled className="w-full border border-black rounded-lg p-2" />
                </div>
              </div>
              <div className="grid my-8 grid-rows-1 grid-flow-col gap-10">
                <div>
                  <label for="Bairro" className="text-black">Bairro</label>
                  <Input disabled value={imovelAtual?.imovel.bairro} />
                </div>
                <div>
                  <label for="Cidade" className="text-black">Cidade</label>
                  <Input disabled value={imovelAtual?.imovel.cidade} />

                </div>
              </div>

              <div className="flex gap-8 justify-end">
                <Button color="blue" type="submit" className="w-[20rem]">
                  {id ? "Atualizar" : "Cadastrar"}
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

export default AgendamentosDetalhe;
