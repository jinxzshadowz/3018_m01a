import { Router } from "express";
import { calculatePortfolioPerformance } from "./portfolioPerformance";

const router = Router();

router.get("/performance", (req, res) => {
  const initialInvestment = parseFloat(req.query.initialInvestment as string);
  const currentValue = parseFloat(req.query.currentValue as string);

  if (Number.isNaN(initialInvestment) || Number.isNaN(currentValue)) {
    return res.status(400).json({
      message:
        "Query parameters 'initialInvestment' and 'currentValue' must be valid numbers.",
    });
  }

  const result = calculatePortfolioPerformance(
    initialInvestment,
    currentValue
  );

  return res.status(200).json(result);
});

export default router;
