import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Victor Oliveira</h1>
      <section className="flex flex-col items-center">
        <p className="text-md p-1 m-2">
          Desenvolvedor Full Stack com foco na criação de soluções para cloud,
          aplicações web e aplicativos mobile.
        </p>
        <br />
        <h2 className="text-xl font-semibold mb-5">
          Principais Tecnologias Utilizadas
        </h2>
        <ul title="Tecnologias">
          <li>Node.js com Fastify e Nest.js (Backend)</li>
          <li>React/Next.js (Web)</li>
          <li>React Native (Mobile)</li>
          <li>AWS/Azure (Cloud)</li>
          <li>Typescript</li>
          <li>Mensageria</li>
          <li>Kubernetes</li>
          <li>Docker</li>
          <li>Microsserviços</li>
          <li>CI/CD</li>
        </ul>
        <br />
        <p className="text-md p-1 m-2">
          Tenho projetos pessoais desenvolvidos em Python, C# e Golang
        </p>
        <br />
        <p className="text-md p-1 m-2">
          No momento estou me especializando em Cloud Computing nos ambientes
          AWS/Azure e infraestrutura como código (IaC) com Terraform e AWS CDK.
        </p>
        <br />
      </section>

      <section className="flex flex-col items-center mb-3">
        <h2 className="text-xl font-semibold mb-2">Projetos</h2>
        <ul className="flex flex-col space-y-5">
          <li>
            <Link
              className="bg-purple-600"
              href="https://github.com/vitoladev/ticketbom"
              target="_blank"
            >
              Ticketbom (Typescript, Nest.js, Next.js)
            </Link>
          </li>
          <li>
            <Link
              className="bg-purple-600"
              href="https://github.com/vitoladev/urlshortener"
              target="_blank"
            >
              URLShortener (Golang, Gin framework)
            </Link>
          </li>
          <li>
            <Link
              className="bg-purple-600"
              href="https://github.com/vitoladev/typescript-graphql-server-boilerplate"
              target="_blank"
            >
              Typescript GraphQL Server Boilerplate
            </Link>
          </li>
          <li>
            <Link
              className="bg-purple-600"
              href="https://github.com/vitoladev/brazillian-graphql-scalars"
              target="_blank"
            >
              Brazillian GraphQL Scalars (Typescript)
            </Link>
          </li>
          <li>
            <Link
              className="bg-purple-600"
              href="https://github.com/vitoladev/TimeTracker"
              target="_blank"
            >
              TimeTracker (C#, ASP.NET Core)
            </Link>
          </li>
          <li>
            <Link
              className="bg-purple-600"
              href="https://github.com/vitoladev/HowLongFrontend"
              target="_blank"
            >
              HowLong (React, Typescript)
            </Link>
          </li>
        </ul>
      </section>

      <section className="flex flex-col items-center mb-3">
        <h2 className="text-xl font-semibold mb-2">Certificações</h2>
        <ul className="flex space-x-4">
          <li
            key="AWS Cloud Practitioner"
            className="border border-gray-300 p-4"
          >
            <Image
              src="/images/aws-cloud-practitioner.bmp"
              alt="AWS Cloud Practitioner"
              width={40}
              height={40}
              className="w-24 h-24"
            />
          </li>
        </ul>
      </section>
      <footer className="flex flex-col items-center bg-purple-600">
        <p>
          Github: <a href="https://github.com/vitoladev">@vitoladev</a>
        </p>
      </footer>
    </main>
  );
}
