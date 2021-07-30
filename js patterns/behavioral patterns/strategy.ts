(function () {
  class Strategy {
    public execute(): void {
      console.log("execute default strategy");
    }
  }

  class ConcreteStrategy extends Strategy {
    public execute(): void {
      console.log("Execute concrete strategy (1)");
    }
  }

  class ConcreteStrategySecond extends Strategy {
    public execute(): void {
      console.log("Execute concrete strategy (2)");
    }
  }

  class Context {
    private _strategy = new Strategy();
    constructor(strategy: Strategy) {
      this._strategy = strategy;
    }

    executeStrategy() {
      this._strategy.execute();
    }

    changeStrategy(strategy: Strategy) {
      this._strategy = strategy;
    }
  }

  const strategy = new Strategy();
  const concreteStrategy = new ConcreteStrategy();
  const concreteSecondStrategy = new ConcreteStrategySecond();
  const context = new Context(strategy);
  context.executeStrategy();
  context.changeStrategy(concreteStrategy);
  context.executeStrategy();
  context.changeStrategy(concreteSecondStrategy);
  context.executeStrategy();
})();
