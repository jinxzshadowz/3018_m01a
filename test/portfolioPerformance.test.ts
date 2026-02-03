import { calculatePortfolioPerformance } from "../src/api/v1/routes/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
  test("excellent performance (60%)", () => {
    const result = calculatePortfolioPerformance(10000, 16000);
    expect(result.profitOrLoss).toBe(6000);
    expect(result.percentageChange).toBe(60);
    expect(result.performanceSummary).toBe(
      "Excellent performance! Your investments are doing great."
    );
  });

  test("solid gain (10%)", () => {
    const result = calculatePortfolioPerformance(10000, 11000);
    expect(result.profitOrLoss).toBe(1000);
    expect(result.percentageChange).toBe(10);
    expect(result.performanceSummary).toBe(
      "Solid gain. Keep monitoring your investments."
    );
  });

  test("no change", () => {
    const result = calculatePortfolioPerformance(10000, 10000);
    expect(result.profitOrLoss).toBe(0);
    expect(result.percentageChange).toBe(0);
    expect(result.performanceSummary).toBe(
      "No change. Your portfolio is holding steady."
    );
  });

  test("significant loss (-10.01%)", () => {
    const result = calculatePortfolioPerformance(10000, 8999.9);
    expect(result.performanceSummary).toBe(
      "Significant loss. Review your portfolio strategy."
    );
  });
});
