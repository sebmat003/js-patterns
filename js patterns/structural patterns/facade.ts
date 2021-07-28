(function () {
  class Boot {
    public init() {
      //...
      console.log("init boot");
    }

    public biosOptionsChecker() {
      //...
      console.log("bios options check");
    }
  }

  class HardwareChecker {
    public checkRAM() {
      //...
      console.log("check RAM");
    }

    public checkHarddrive() {
      //...
      console.log("check Hard drive");
    }
  }

  class SystemInitializer {
    public systemInit() {
      //...
      console.log("system init loading");
    }

    public loadComponents() {
      //...
      console.log("load components");
    }
  }

  class SystemServices {
    public runInitialOptionalServices() {
      //...
      console.log("run initial system services");
    }

    public runDefaultServices() {
      //...
      console.log("run default system services");
    }
  }

  class RunOperatingSystemFacade {
    private boot: Boot;
    private hwChecker: HardwareChecker;
    private systemInit: SystemInitializer;
    private systemServices: SystemServices;
    constructor(
      boot: Boot,
      hwChecker: HardwareChecker,
      systemInit: SystemInitializer,
      systemServices: SystemServices
    ) {
      this.boot = boot;
      this.hwChecker = hwChecker;
      this.systemInit = systemInit;
      this.systemServices = systemServices;
    }

    loadingSystem() {
      this.boot.init();
      this.hwChecker.checkHarddrive();
      this.hwChecker.checkRAM();
      this.boot.biosOptionsChecker();
    }

    initializeSystem() {
      this.systemInit.loadComponents();
      this.systemInit.systemInit();
    }

    runExplorer() {
      this.systemServices.runDefaultServices();
      this.systemServices.runInitialOptionalServices();
    }

    run() {
      this.loadingSystem();
      this.initializeSystem();
      this.runExplorer();
    }
  }

  const boot = new Boot();
  const hwChecker = new HardwareChecker();
  const systemInit = new SystemInitializer();
  const systemServices = new SystemServices();
  const systemFacade = new RunOperatingSystemFacade(
    boot,
    hwChecker,
    systemInit,
    systemServices
  );
  systemFacade.run();
})();
