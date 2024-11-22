import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seed() {
  await prisma.driver.createMany({
    data: [
      {
        name: "Homer Simpson",
        description:
          "Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios).",
        car: "Plymouth Valiant 1973 rosa e enferrujado",
        rating: 2,
        ratingDescription:
          "Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts.",
        ratePerKm: 2.5,
        minimumKm: 1,
      },
      {
        name: "Dominic Toretto",
        description:
          "Ei, aqui é o Dom. Pode entrar, vou te levar com segurança e rapidez ao seu destino. Só não mexa no rádio, a playlist é sagrada.",
        car: "Dodge Charger R/T 1970 modificado",
        rating: 4,
        ratingDescription:
          "Que viagem incrível! O carro é um show à parte e o motorista, apesar de ter uma cara de poucos amigos, foi super gente boa. Recomendo!",
        ratePerKm: 5.0,
        minimumKm: 5,
      },
      {
        name: "James Bond",
        description:
          "Boa noite, sou James Bond. À seu dispor para um passeio suave e discreto. Aperte o cinto e aproveite a viagem.",
        car: "Aston Martin DB5 clássico",
        rating: 5,
        ratingDescription:
          "Serviço impecável! O motorista é a própria definição de classe e o carro é simplesmente magnífico. Uma experiência digna de um agente secreto.",
        ratePerKm: 10.0,
        minimumKm: 10,
      },
    ],
  });
  console.log('Database seeded');
  await prisma.$disconnect();
}


seed().catch(e => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});