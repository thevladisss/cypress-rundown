/// <reference types="cypress" />

declare namespace Cypress {
   export interface AfterRunDetails {
    browserName: string;
    browserPath: string;
    browserVersion: string;
    config: {
      specPattern: string;
      baseUrl: string;
      projectRoot: string;
      projectName: string;
      configFile: string;
      isTextTerminal: boolean;
      animationDistanceThreshold: number;
      arch: string;
      blockHosts: null;
      chromeWebSecurity: boolean;
      clientCertificates: any[];
      defaultCommandTimeout: number;
      downloadsFolder: string;
      env: Record<string, any>;
      execTimeout: number;
      experimentalCspAllowList: boolean;
      experimentalFetchPolyfill: boolean;
      experimentalInteractiveRunEvents: boolean;
      experimentalRunAllSpecs: boolean;
      experimentalMemoryManagement: boolean;
      experimentalModifyObstructiveThirdPartyCode: boolean;
      experimentalSkipDomainInjection: null;
      experimentalOriginDependencies: boolean;
      experimentalSourceRewriting: boolean;
      experimentalSingleTabRunMode: boolean;
      experimentalStudio: boolean;
      experimentalWebKitSupport: boolean;
      fileServerFolder: string;
      fixturesFolder: string;
      excludeSpecPattern: string;
      includeShadowDom: boolean;
      keystrokeDelay: number;
      modifyObstructiveCode: boolean;
      numTestsKeptInMemory: number;
      platform: string;
      pageLoadTimeout: number;
      port: number;
      projectId: null;
      redirectionLimit: number;
      reporter: string;
      reporterOptions: null;
      requestTimeout: number;
      resolvedNodePath: string;
      resolvedNodeVersion: string;
      responseTimeout: number;
      retries: { runMode: number; openMode: number };
      screenshotOnRunFailure: boolean;
      screenshotsFolder: string;
      slowTestThreshold: number;
      scrollBehavior: string;
      supportFile: string;
      taskTimeout: number;
      testIsolation: boolean;
      trashAssetsBeforeRuns: boolean;
      userAgent: null;
      video: boolean;
      videoCompression: boolean;
      videosFolder: string;
      viewportHeight: number;
      viewportWidth: number;
      waitForAnimations: boolean;
      watchForFileChanges: boolean;
      browsers: {
        channel: string;
        displayName: string;
        family: string;
        majorVersion: string;
        name: string;
        path: string;
        version: string;
      }[];
      cypressBinaryRoot: string;
      hosts: null;
      isInteractive: boolean;
      version: string;
      testingType: string;
      browser: null;
      cypressInternalEnv: string;
    };
    cypressVersion: string;
    endedTestsAt: string;
    osName: string;
    osVersion: string;
    runs: {
      error: null;
      reporter: string;
      reporterStats: {
        suites: number;
        tests: number;
        passes: number;
        pending: number;
        failures: number;
        start: string;
        end: string;
        duration: number;
      };
      screenshots: {
        height: number;
        name: null;
        path: string;
        takenAt: string;
        width: number;
      }[];
      spec: {
        absolute: string;
        fileExtension: string;
        fileName: string;
        name: string;
        relative: string;
      };
      stats: {
        duration: number;
        endedAt: string;
        failures: number;
        passes: number;
        pending: number;
        skipped: number;
        startedAt: string;
        suites: number;
        tests: number;
      };
      tests: {
        attempts: {
          state: string;
        }[];
        displayError: string;
        duration: number;
        state: string;
        title: string[];
      }[];
      video: null;
    }[];
    startedTestsAt: string;
    totalDuration: number;
    totalFailed: number;
    totalPassed: number;
    totalPending: number;
    totalSkipped: number;
    totalSuites: number;
    totalTests: number;
  }
}
