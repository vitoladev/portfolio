import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Victor Oliveira</h1>
      <section className="flex flex-col items-center p-10">
        <div className="max-w-3xl mx-auto">
          <p className="text-md text-center leading-relaxed">
            Tenho experiência profissional com o desenvolvimento de aplicações
            web e mobile, com o foco em criar novas funcionalidades e atualizar
            sistemas que já existem para se encaixarem em metodologias mais
            modernas.
          </p>
          <p className="text-md text-center leading-relaxed">
            No momento estou me especializando em DevOps, estudando temas como
            Cloud Computing, IaC e pipelines de CI/CD.
          </p>
        </div>

        <div className="mx-auto mt-8">
          <h2 className="text-2xl font-semibold mb-5 text-center">
            Tecnologias
          </h2>
          <ul className="flex flex-col mx-auto space-y-2" title="Tecnologias">
            <li>JavaScript/TypeScript</li>
            <li>Golang</li>
            <li>Python</li>
            <li>Node.js</li>
            <li>React/Next.js (Web)</li>
            <li>React Native (Mobile)</li>
            <li>AWS/Azure (Cloud)</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>RabbitMQ/SQS (Mensageria)</li>
            <li>Kubernetes</li>
            <li>Docker</li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col items-center mb-3">
        <h2 className="text-2xl font-semibold mb-3">Projetos pessoais</h2>
        <ul className="flex flex-col space-y-6">
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

      <section className="flex flex-col items-center mb-5">
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
          <li
            key="AWS Solutions Architect Associate"
            className="border border-gray-300 p-4"
          >
            <Image
              src="/images/aws-solutions-architect-associate.png"
              alt="AWS Solutions Architect Associate"
              width={40}
              height={40}
              className="w-24 h-24"
            />
          </li>
          <li
            key="AWS Developer Associate"
            className="border border-gray-300 p-4"
          >
            <Image
              src="/images/aws-developer-associate.png"
              alt="AWS Developer Associate"
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
