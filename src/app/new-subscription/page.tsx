import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import { SubscriptionPlan } from "../(protected)/subscription/_components/subscription-plan";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/authentication");
  }
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900">
      <main className="container mx-auto grid grid-cols-1 gap-12 px-4 py-8 lg:grid-cols-2 lg:py-16">
        <div className="flex flex-col justify-center">
          <Link href="/landing-page">
            <Image
              src="/logo-clinic-plus.png"
              alt="ClínicPlus Logo"
              width={150}
              height={40}
              className="mb-30"
            />
          </Link>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-blue-950 lg:text-4xl dark:text-white">
            Eleve a Gestão da Sua Clínica a um Novo Patamar
          </h1>

          <p className="mb-4 text-base text-blue-950 dark:text-gray-300">
            Chega de burocracia! Descomplique a administração e foque no que
            realmente importa:{" "}
            <strong> a saúde e o bem-estar dos seus pacientes.</strong>
          </p>
          <p className="mb-4 text-base text-blue-950 dark:text-gray-300">
            Transforme sua clínica em um centro de excelência. Com o Clinic
            Plus, o futuro da gestão está ao seu alcance, hoje.
          </p>
          <p className="mb-10 text-base text-blue-950 dark:text-gray-300">
            Dê adeus às planilhas e olá à eficiência. Otimize cada processo e
            veja sua clínica prosperar como nunca. Escolha o{" "}
            <strong> plano Essential</strong> e desbloqueie todas as ferramentas
            que otimizam seu tempo e melhoram o atendimento.
          </p>
        </div>
        {/* Coluna de Assinatura */}
        <div className="flex w-full items-start justify-center lg:items-center">
          <div className="w-full max-w-md pt-20">
            <SubscriptionPlan userEmail={session.user.email} />
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Ao assinar, você concorda com nossos{" "}
                <a
                  href="/terms"
                  className="text-teal-600 hover:underline dark:text-teal-400"
                >
                  Termos de Serviço
                </a>{" "}
                e nossa{" "}
                <a
                  href="/privacy"
                  className="text-teal-600 hover:underline dark:text-teal-400"
                >
                  Política de Privacidade
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
