"use client";

import {
  Building2,
  Calendar,
  Github,
  Linkedin,
  Mail,
  Phone,
  User,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="Doutor Agenda"
                width={136}
                height={28}
              />
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/new-subscription">
                <span className="hidden cursor-pointer font-medium text-blue-600 hover:underline md:inline">
                  Preços e Planos
                </span>
              </Link>

              <span
                className="hidden cursor-pointer font-medium text-blue-600 hover:underline md:inline"
                onClick={() =>
                  document
                    .getElementById("footer")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contato
              </span>
              <Link href="/authentication">
                <span className="hidden cursor-pointer font-medium text-blue-600 hover:underline md:inline">
                  Login
                </span>
              </Link>

              <Link href="/authentication">
                <Button className="bg-blue-500 hover:bg-blue-600">
                  Criar Conta
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="border-blue-200 text-blue-600"
              >
                SOFTWARE PARA CLÍNICAS E CENTROS MÉDICOS
              </Badge>
              <h1 className="text-4xl leading-tight font-bold text-gray-900 lg:text-5xl">
                Gestão completa e inteligente
              </h1>
              <p className="text-lg leading-relaxed text-gray-600">
                Mais eficiência, organização e agilidade: leve sua clínica para
                o futuro com o sistema líder em recursos.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-blue-500 px-8 text-white hover:bg-blue-600"
              >
                <Link href="/new-subscription">Ver Plano Essential</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <Image
                src="/medico-tablet.jpg"
                alt="Médico usando tablet"
                width={600}
                height={500}
                className="rounded-lg"
              />

              <Card className="absolute top-8 left-4 w-48 shadow-lg">
                <CardContent className="p-3">
                  <div className="mb-3 flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-600" />
                    <span className="text-sm font-semibold">Médicos</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="h-6 w-6 rounded-full bg-blue-500"></div>
                      <div className="h-2 flex-1 rounded bg-gray-200"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-6 w-6 rounded-full bg-green-500"></div>
                      <div className="h-2 flex-1 rounded bg-gray-200"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-6 w-6 rounded-full bg-orange-500"></div>
                      <div className="h-2 flex-1 rounded bg-gray-200"></div>
                      <div className="h-8 w-1 rounded bg-blue-400"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute bottom-10 left-15 w-50 shadow-lg">
                <CardContent className="p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="rounded-full border border-gray-500 px-2 py-1 text-xs text-gray-500">
                      2023
                    </span>
                    <span className="rounded-full border border-gray-500 px-2 py-1 text-xs text-gray-500">
                      2024
                    </span>
                    <span className="rounded-full border border-blue-500 bg-blue-200 px-2 py-1 text-xs text-blue-500">
                      2025
                    </span>
                  </div>
                  <div className="relative mb-2 h-20">
                    <div className="absolute inset-0 flex items-end justify-center">
                      <div className="text-sm font-semibold text-green-500">
                        +54%
                      </div>
                    </div>
                    <svg className="h-full w-full" viewBox="0 0 200 80">
                      <path
                        d="M 20 60 Q 60 40 100 45 T 180 30"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M 20 65 Q 60 50 100 55 T 180 40"
                        stroke="#10b981"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <div className="flex justify-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-11">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="space-y-2 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900">+75</div>
              <div className="text-sm text-gray-600">mil</div>
              <div className="text-sm text-gray-500">
                profissionais de saúde
              </div>
            </div>

            <div className="space-y-2 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900">+88</div>
              <div className="text-sm text-gray-600">milhões</div>
              <div className="text-sm text-gray-500">pacientes ativos</div>
            </div>

            <div className="space-y-2 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
                  <Calendar className="h-6 w-6 text-teal-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900">+64</div>
              <div className="text-sm text-gray-600">milhões</div>
              <div className="text-sm text-gray-500">
                agendamentos nos últimos 12 meses
              </div>
            </div>

            <div className="space-y-2 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                  <Building2 className="h-6 w-6 text-emerald-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900">+8</div>
              <div className="text-sm text-gray-600">mil</div>
              <div className="text-sm text-gray-500">unidades atendidas</div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="flex w-40 justify-center rounded-full bg-white py-1">
                <Image
                  src="/logo.svg"
                  alt="Doutor Agenda"
                  width={136}
                  height={28}
                />
              </div>

              <p className="text-sm text-gray-400">
                Sistema completo de gestão para clínicas e centros médicos.
                Modernize sua prática médica com nossa solução inteligente.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contato</h4>
              <div className="space-y-3">
                <a
                  href="mailto:murilo.dev46@gmail.com"
                  className="flex items-center space-x-3 text-gray-400 transition-colors hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span>murilo.dev46@gmail.com</span>
                </a>
                <a
                  href="tel:38998854375"
                  className="flex items-center space-x-3 text-gray-400 transition-colors hover:text-white"
                >
                  <Phone className="h-5 w-5" />
                  <span>+55 (38) 99885-4375</span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Conecte-se</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/4MuriloRT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 transition-colors hover:bg-gray-700"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/murilo-rodrigues-taborda-558043276/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 transition-colors hover:bg-gray-700"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:murilo.dev46@gmail.com"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 transition-colors hover:bg-gray-700"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="tel:38998854375"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 transition-colors hover:bg-gray-700"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
              <p className="text-sm text-gray-400">
                Siga-nos nas redes sociais para novidades e atualizações.
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-800 pt-8">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <p className="text-sm text-gray-400">
                © 2025 dr.agenda. Todos os direitos reservados.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="transition-colors hover:text-white">
                  Política de Privacidade
                </a>
                <a href="#" className="transition-colors hover:text-white">
                  Termos de Uso
                </a>
                <a href="#" className="transition-colors hover:text-white">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
