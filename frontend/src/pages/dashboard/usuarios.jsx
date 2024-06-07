import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import {
  ArrowDownIcon,
} from "@heroicons/react/24/solid";
import DataTable from "react-data-table-component";
import { useState } from "react";
import { Spinner } from "@material-tailwind/react";
import { useEffect } from "react";
import { headersUsuarios } from "@/utils/HeaderTables";
import api from "@/lib/api";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useReload } from "@/Hooks/useReload";

export function Usuarios() {
  const [usuarios, setUsuarios] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { reload } = useReload()
  useEffect(() => {
    api.get('/users').then((response) => {
      const data = response.data
      setUsuarios(data)
      setIsLoading(false)
    })
  }, [reload])

  return (
    <div className="mt-24">
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
        <div className="mt-6 ml-4">
          <Link to="/detalhes/usuario/novo" className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
            Criar novo usuário
          </Link>
        </div>
        <CardBody className="p-4">
          <DataTable
            noHeader
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
            data={usuarios}
            columns={headersUsuarios}
            sortIcon={<ArrowDownIcon size={10} />}
          />
        </CardBody>
      </Card>
    </div>
  );
}

export default Usuarios;
