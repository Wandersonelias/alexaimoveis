import api from "@/lib/api";
import { setCookie } from "@/utils/Utils";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Avatar } from "@material-tailwind/react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export function SignIn() {

  const navigate = useNavigate()

  async function handleLogin(e) {
    try {
      e.preventDefault()
      const form = document.forms[0].elements
      const { email, password } = form
      const response = await api.post('/login', { email: email.value, password: password.value })

      const { token } = response.data
      setCookie('token', token)
      navigate('/dashboard/home')
    } catch (error) {
      console.log(error)
      if (error?.response?.data?.error) {

        return alert(error.response.data.error)
      }

      alert('Erro ao fazer login, tente novamente')
    }


  }
  return (
    <section className="m-8 flex justify-center gap-4">
      <div className=" border  border-blue-gray-300 p-20 mt-4 ">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">GERENCIADOR WEB ALEXA IMÓVEIS</Typography>
          <div className="flex justify-center">
            <UserCircleIcon color="blue-gray" className="w-36" />
          </div>

        </div>
        <form onSubmit={handleLogin} className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Email
            </Typography>
            <Input
              name="email"
              size="lg"
              placeholder="seuemail@gmail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Senha
            </Typography>
            <Input
              name="password"
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button type="submit" className="mt-6" fullWidth>
            ENTRAR
          </Button>


        </form>

      </div>


    </section>
  );
}

export default SignIn;
