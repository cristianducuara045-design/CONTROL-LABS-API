import { Router } from "express";
import ambienteRoutes from "./ambientes.routes.js";
import equipoRoutes from "./equipos.routes.js";
import userRoutes from "./users.routes.js";
import loanRoutes from "./loan.routes.js";
import incidentRoutes from "./incident.routes.js";
import dashboardRoutes from "./dashboard.routes.js";

const router = Router();

router.use("/ambientes", ambienteRoutes);
router.use("/equipos", equipoRoutes);
router.use("/users", userRoutes);
router.use("/loans", loanRoutes);
router.use("/incidents", incidentRoutes);
router.use("/dashboard", dashboardRoutes);

export default router;