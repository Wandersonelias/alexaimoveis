import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import { Home, Agendamentos, Imoveis, Usuarios } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import AgendamentosDetalhe from "./pages/dashboard/Detalhes/AgendamentoDetalhe";
import ImovelDetalhe from "./pages/dashboard/Detalhes/ImoveisDetalhe";
import UsuarioDetalhe from "./pages/dashboard/Detalhes/UsuariosDetalhe";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <ChartBarIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "agendamentos",
        path: "/agendamentos",
        element: <Agendamentos />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: "Imoveis",
        path: "/imoveis",
        element: <Imoveis />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Usuários",
        path: "/usuarios",
        element: <Usuarios />,
      }
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/login",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    title: "details pages",
    layout: "details",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "agendamento",
        path: "/agendamento/:id",
        element: <AgendamentosDetalhe />,
      },
      {
        icon: <ServerStackIcon {...icon} />,
        name: "agendamento",
        path: "/imovel/:id",
        element: <ImovelDetalhe />,
      },
      {
        icon: <ServerStackIcon {...icon} />,
        name: "agendamento",
        path: "/usuario/:id",
        element: <UsuarioDetalhe />,
      },
    ],
  },
];

export default routes;
