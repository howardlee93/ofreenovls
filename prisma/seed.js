
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const clearData = require('./clear.js');

const dummy = [
  {
    name: 'cat',
    email:'cat@gmail.com',
  },
  {
    name:'bob',
    email:'bob@yahoo.com',
    posts:{
      create:[
        {
          title:'only humans can blog!',
          content:'hi hi i am a man',
          
        }
      ]
    }
  }
]

const seed = async()=>{
  for (let d of dummy){
    const user = await prisma.user.create({
      data: d
    })
    console.log(`Created user with id: ${user.id}`)
  }
  const alec = await prisma.user.upsert({
    where: {
      email: 'alec@yahoo.com'
    },
    update:{},
    create: {
      name:'alec',
      email:'alec@yahoo.com',
      works:{
        create:[
          {
            title:'only humans can blog!',
            content:'hi hi i am a man',
          },
          {
            title:'but i am secretly a cat',
            content: 'shush dont tell',
            published: true
          }
        ]
      }
    }
  })
  console.log({ alec })
};


clearData(prisma) // clear prev data first before seeding
seed()
.then(async()=>{
  await prisma.$disconnect()
})
.catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})