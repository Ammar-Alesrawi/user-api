const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");

exports.createUser = async ({ name, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
};

exports.getAllUsers = async () => {
  return prisma.user.findMany();
};

exports.deleteUserById = async (id) => {
  return prisma.user.delete({ where: { id: parseInt(id) } });
};

exports.updateUserById = async (id, data) => {
  return prisma.user.update({
    where: { id: parseInt(id) },
    data,
  });
};
