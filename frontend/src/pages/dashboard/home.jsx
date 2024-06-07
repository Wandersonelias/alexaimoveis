import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import {
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";
import { ArrowDownIcon, CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import api from "@/lib/api";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { headersAgendamentosDash } from "@/utils/HeaderTables";
import DataTable from "react-data-table-component";
import { Spinner } from "@material-tailwind/react";

export function Home() {
  const [agendamentos, setAgendamentos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    api.get('/agendamentos').then((response) => {
      const data = response.data
      setAgendamentos(data)
      setIsLoading(false)
    })
  }, [])


  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        <Card className="p-8 bg-[#0d6efd]">

          <div className="text-center">
            <Typography className="text-white" variant="h1">
              16
            </Typography>
          </div>
          <hr class="mb-5 border-white" />
          <div className="text-center">
            <Typography variant="span" className="uppercase text-white">
              Agendamentos confirmados
            </Typography>
          </div>
        </Card>
        <Card className="p-8 bg-[#198754]">

          <div className="text-center">
            <Typography variant="h1" className="text-white ">
              25
            </Typography>
          </div>
          <hr class="mb-5 border-white" />
          <div className="text-center">
            <Typography variant="span" className="uppercase text-white">
              Agendamentos finalizados
            </Typography>
          </div>
        </Card>
        <Card className="p-8 bg-[#dc3545]">

          <div className="text-center">
            <Typography variant="h1" className="text-white">
              16
            </Typography>
          </div>
          <hr class="mb-5 border-white" />
          <div className="text-center">
            <Typography variant="span" className="uppercase text-white">
              Agendamentos cancelados
            </Typography>
          </div>
        </Card>
      </div>
      <div>
        <Typography variant="h1" className="text-[2rem]">
          Agendamentos recentes
        </Typography>

        <hr class="mb-5 border-black" />
      </div>
      <Card>
        <CardBody>
          <div>
            <DataTable
              noHeader
              pagination
              progressPending={isLoading}
              paginationComponentOptions={
                { rowsPerPageText: 'Linhas por página:' }
              }
              progressComponent={<Spinner />}
              noDataComponent={
                <div className="text-center p-4">
                  <Typography variant="h6" color="gray">
                    Nenhum agendamento encontrado
                  </Typography>
                </div>
              }
              data={agendamentos}
              columns={headersAgendamentosDash}
              sortIcon={<ArrowDownIcon size={10} />}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Home;
