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
import { Link } from "react-router-dom";
import { useReload } from "@/Hooks/useReload";
import { Input } from "@material-tailwind/react";
import { useMemo } from "react";
import { FilterComponent } from "@/utils/FilterComponent";

export function Agendamentos() {
  const [agendamentos, setAgendamentos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    api.get('/agendamentos').then((response) => {
      const data = response.data
      setAgendamentos(data)
      setIsLoading(false)
    })
  }, [])

  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = agendamentos.filter(
    item => item.cliente_nome && item.cliente_nome.toLowerCase().includes(filterText.toLowerCase()),
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
      <FilterComponent onFilter={e => setFilterText(e.target.value)} filter={'cliente'} onClear={handleClear} filterText={filterText} />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <div className="mt-24">
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
        <div className="mt-6 ml-4">
          <Link to="/detalhes/agendamento/novo" className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
            Criar novo agendamento
          </Link>
        </div>
        <CardBody className="p-4">
          <DataTable
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            pagination
            progressPending={isLoading}
            progressComponent={<Spinner />}
            paginationComponentOptions={
              { rowsPerPageText: 'Linhas por página:' }
            }
            noDataComponent={
              <div className="text-center p-4">
                <Typography variant="h6" color="gray">
                  Nenhum agendamento encontrado
                </Typography>
              </div>
            }
            data={filteredItems}
            columns={headersAgendamentos}
            sortIcon={<ArrowDownIcon size={10} />}
          />
        </CardBody>
      </Card>
    </div>
  );
}

export default Agendamentos;
