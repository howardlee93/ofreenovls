// clear.js 

const clearData = async (prisma) => {
  const users = await prisma.user.findMany({})
  const posts = await prisma.post.findMany({})

  const deleteUser = async (user) => {
    return await prisma.user.delete({
      where: { id: user.id }
    })
  }
  const deletePost = async (post) => {
    return await prisma.post.delete({
      where: { id: post.id }
    })
  }

  const deletePosts = async () => {
    return Promise.all(posts.map((post) => deletePost(post)))
  }

  const deleteUsers = async () => {
    return Promise.all(users.map((user) => deleteUser(user)))
  }

  await deletePosts()
  await deleteUsers()
}

module.exports = clearData;