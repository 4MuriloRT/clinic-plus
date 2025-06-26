import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { auth } from "@/lib/auth";

import LoginForm from "./components/login-form";
import SignUpForm from "./components/sign-up-form";

const AuthenticationPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session?.user) {
    redirect("/dashboard");
  }
  return (
    <div className="flex h-screen w-screen">
      <div className="flex h-screen w-1/2 flex-col items-center justify-between bg-blue-100">
        <div className="m-20 pr-76">
          <Link href="/landing-page">
            <Image src="/logo-clinic-plus.png" alt="" width={200} height={40} />
          </Link>
        </div>
        <div className="mb-10 text-blue-950">
          <h2 className="mb-5 text-3xl font-bold">
            Transforme a Gestão da Sua Clínica
          </h2>
          <p className="mb-10 max-w-md text-xl">
            Otimize cada detalhe,{" "}
            <strong>desde o agendamento até o atendimento ao paciente</strong> ,
            com a nossa plataforma intuitiva!
          </p>
          <p className="max-w-md text-lg">
            Concentre-se no que realmente importa:{" "}
            <strong>a saúde dos seus pacientes.</strong>
          </p>
          <p className="max-w-md text-lg">Faça cadastro/login para vê o nosso plano.</p>
        </div>
        <div className="mb-10">
          <Image
            src="/doctor-login.png"
            alt="Médico usando tablet"
            width={500}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
      <div className="flex h-screen w-1/2 items-center justify-center">
        <Tabs defaultValue="login" className="w-[500px]">
          <TabsList className="grid w-full grid-cols-2 bg-blue-100">
            <TabsTrigger
              value="login"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              Cadastrar
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="register">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthenticationPage;
