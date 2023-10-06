const express = require("express");
const { prisma } = require("../config/prisma");
const teamRoutes = express.Router();

teamRoutes.get("/", async (req, res) => {
  const teams = await prisma.team.findMany();
  res.status(200).json(teams);
});

module.exports = { teamRoutes };
