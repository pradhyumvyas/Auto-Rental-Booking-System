import { PrismaClient }from '@prisma/client'

const prisma = new PrismaClient({
   log:["query"],
})

async function main() {

   // Seed vehicle_owner
   

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

export default prisma