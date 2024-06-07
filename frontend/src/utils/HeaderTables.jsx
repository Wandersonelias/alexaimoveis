import { EllipsisVerticalIcon } from "@heroicons/react/24/solid"
import { MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react"
import { IconButton } from "@material-tailwind/react"
import { Menu } from "@material-tailwind/react"
import { Button } from "@material-tailwind/react"
import { Link } from "react-router-dom"
import api from "@/lib/api"
import { useReload } from "@/Hooks/useReload"

export const headersAgendamentosDash = [
  {
    name: 'Cliente',
    sortable: true,

    selector: row => row.cliente_nome
  },
  {
    name: 'Telefone',
    sortable: true,

    selector: row => row.telefone
  },
  {
    name: 'Código',
    sortable: true,

    selector: row => row.imovei.codigo
  },
  {
    name: 'Data',
    sortable: true,

    selector: row => row.data_agendamento,
    cell: row => {
      return (
        <Typography >
          {row.data_agendamento.split('T')[0].replaceAll('-', '/').split('/').reverse().join('/')}
        </Typography>
      )
    }
  },
  {
    name: 'Hora',
    sortable: true,

    selector: row => row.hora_agendamento
  },
  {
    name: 'Status',
    sortable: true,

    selector: row => row.status
  },
  {
    name: 'Endereço',
    sortable: true,

    selector: row => row.imovei.endereco
  },
  {
    name: 'Bairro',
    sortable: true,

    selector: row => row.imovei.bairro
  },
  {
    name: 'Cidade',
    sortable: true,

    selector: row => row.imovei.cidade
  },
  {
    name: 'Ações',

    cell: (row) => {
      return (

        <Link className="underline" to={`/detalhes/agendamento/${row.id}`}>
          Detalhar
        </Link>

      )
    }
  },
]
export const headersAgendamentos = [
  {
    name: 'Cliente',
    sortable: true,

    selector: row => row.cliente_nome
  },
  {
    name: 'Telefone',
    sortable: true,

    selector: row => row.telefone
  },
  {
    name: 'Código',
    sortable: true,

    selector: row => row.imovei.codigo
  },
  {
    name: 'Data',
    sortable: true,

    selector: row => row.data_agendamento,
    cell: row => {
      return (
        <Typography >
          {row.data_agendamento.split('T')[0].replaceAll('-', '/').split('/').reverse().join('/')}
        </Typography>
      )
    }
  },
  {
    name: 'Hora',
    sortable: true,

    selector: row => row.hora_agendamento
  },
  {
    name: 'Status',
    sortable: true,

    selector: row => row.status
  },
  {
    name: 'Endereço',
    sortable: true,

    selector: row => row.imovei.endereco
  },
  {
    name: 'Bairro',
    sortable: true,

    selector: row => row.imovei.bairro
  },
  {
    name: 'Cidade',
    sortable: true,

    selector: row => row.imovei.cidade
  },
  {
    name: 'Ações',
    allowOverflow: true,
    cell: (row) => {

      return (

        <Menu>
          <MenuHandler>
            <IconButton variant="text" color="blue-gray">
              <EllipsisVerticalIcon className="h-5 w-5 text-blue-gray-500" />
            </IconButton>
          </MenuHandler>
          <MenuList className="w-max border-0">
            <MenuItem className="flex items-center gap-3">
              <div>
                <Link to={`/detalhes/agendamento/${row.id}`}>
                  Detalhar
                </Link>

              </div>
            </MenuItem>
            <MenuItem className="flex items-center gap-3">
              <div>
                <Link to={`/detalhes/agendamento/${row.id}`}>
                  Editar
                </Link>

              </div>
            </MenuItem>


          </MenuList>
        </Menu>

      )
    }
  },
]
export const headersImoveis = [
  {
    name: 'ID',
    sortable: true,

    selector: row => row.id
  },
  {
    name: 'Código',
    sortable: true,

    selector: row => row.codigo
  },
  {
    name: 'Endereço',
    sortable: true,

    selector: row => row.endereco
  },
  {
    name: 'Bairro',
    sortable: true,

    selector: row => row.bairro
  },
  {
    name: 'Cidade',
    sortable: true,

    selector: row => row.cidade
  },
  {
    name: 'Descrição',
    sortable: true,

    selector: row => row.descricao
  },
  {
    name: 'Valor',
    sortable: true,

    selector: row => row.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  },
  {
    name: 'Status',
    sortable: true,

    selector: row => row.status
  },

  {
    name: 'Ações',
    allowOverflow: true,
    cell: (row) => {

      const { setReload, reload } = useReload()
      async function handleDelete() {
        const action = confirm('Deseja realmente excluir?')
        if (action) {
          await api.delete(`/imoveis/${row.id}`)
          setReload(!reload)
        }
      }

      return (

        <Menu>
          <MenuHandler>
            <IconButton variant="text" color="blue-gray">
              <EllipsisVerticalIcon className="h-5 w-5 text-blue-gray-500" />
            </IconButton>
          </MenuHandler>
          <MenuList className="w-max border-0">
            <MenuItem className="flex items-center gap-3">
              <div>
                <Link to={`/detalhes/imovel/${row.id}`}>
                  Detalhar
                </Link>
              </div>
            </MenuItem>
            <MenuItem className="flex items-center gap-3">
              <div>
                <Link>
                  Editar
                </Link>
              </div>
            </MenuItem>
            <MenuItem onClick={handleDelete} className="flex items-center gap-3">
              <div>
                Excluir
              </div>
            </MenuItem>

          </MenuList>
        </Menu>

      )
    }
  },
]


export const headersUsuarios = [
  {
    name: 'ID',
    sortable: true,
    selector: row => row.id
  },
  {
    name: 'Email',
    sortable: true,
    selector: row => row.email
  },
  {
    name: 'Categoria',
    sortable: true,
    selector: row => row.category
  },
  {
    name: 'Criado em',
    sortable: true,
    selector: row => row.createdAt,
    cell: row => {
      return (
        <Typography>
          {new Date(row.createdAt).toLocaleDateString('pt-BR')}
        </Typography>
      )
    },

  },
  {
    name: 'Ações',
    maxWidth: '180px',
    allowOverflow: true,
    cell: (row) => {
      const { setReload, reload } = useReload()
      async function handleDelete() {
        const action = confirm('Deseja realmente excluir?')
        if (action) {
          await api.delete(`/users/${row.id}`)
          setReload(!reload)
        }
      }
      return (

        <Menu>
          <MenuHandler>
            <IconButton variant="text" color="blue-gray">
              <EllipsisVerticalIcon className="h-5 w-5 text-blue-gray-500" />
            </IconButton>
          </MenuHandler>
          <MenuList className="w-max border-0">
            <MenuItem className="flex items-center gap-3">
              <div>
                <Link>
                  Detalhar
                </Link>

              </div>
            </MenuItem>
            <MenuItem className="flex items-center gap-3">
              <div>
                <Link>
                  Editar
                </Link>

              </div>
            </MenuItem>
            <MenuItem onClick={handleDelete} className="flex items-center gap-3">
              <div>
                Excluir
              </div>
            </MenuItem>

          </MenuList>
        </Menu>

      )
    }
  },
]