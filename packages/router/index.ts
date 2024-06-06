export type {
  ActionFunction,
  ActionFunctionArgs,
  AgnosticDataIndexRouteObject,
  AgnosticDataNonIndexRouteObject,
  AgnosticDataRouteMatch,
  AgnosticDataRouteObject,
  AgnosticIndexRouteObject,
  AgnosticNonIndexRouteObject,
  AgnosticRouteMatch,
  AgnosticRouteObject,
  DataStrategyFunction as unstable_DataStrategyFunction,
  DataStrategyFunctionArgs as unstable_DataStrategyFunctionArgs,
  DataStrategyMatch as unstable_DataStrategyMatch,
  ErrorResponse,
  FormEncType,
  FormMethod,
  HandlerResult as unstable_HandlerResult,
  HTMLFormMethod,
  JsonFunction,
  LazyRouteFunction,
  LoaderFunction,
  LoaderFunctionArgs,
  ParamParseKey,
  Params,
  PatchRoutesOnMissFunction as unstable_PatchRoutesOnMissFunction,
  PathMatch,
  PathParam,
  PathPattern,
  RedirectFunction,
  ShouldRevalidateFunction,
  ShouldRevalidateFunctionArgs,
  TrackedPromise,
  UIMatch,
  V7_FormMethod,
} from "./utils";

export {
  AbortedDeferredError,
  defer,
  generatePath,
  getToPathname,
  isRouteErrorResponse,
  joinPaths,
  json,
  matchPath,
  matchRoutes,
  normalizePathname,
  redirect,
  redirectDocument,
  resolvePath,
  resolveTo,
  stripBasename,
} from "./utils";

export type {
  BrowserHistory,
  BrowserHistoryOptions,
  HashHistory,
  HashHistoryOptions,
  History,
  InitialEntry,
  Location,
  MemoryHistory,
  MemoryHistoryOptions,
  Path,
  To,
} from "./history";

export {
  Action,
  createBrowserHistory,
  createHashHistory,
  createMemoryHistory,
  createPath,
  parsePath,
} from "./history";

export * from "./router";

///////////////////////////////////////////////////////////////////////////////
// DANGER! PLEASE READ ME!
// We consider these exports an implementation detail and do not guarantee
// against any breaking changes, regardless of the semver release. Use with
// extreme caution and only if you understand the consequences. Godspeed.
///////////////////////////////////////////////////////////////////////////////

/** @internal */
export type { RouteManifest as UNSAFE_RouteManifest } from "./utils";
export {
  DeferredData as UNSAFE_DeferredData,
  ErrorResponseImpl as UNSAFE_ErrorResponseImpl,
  convertRoutesToDataRoutes as UNSAFE_convertRoutesToDataRoutes,
  convertRouteMatchToUiMatch as UNSAFE_convertRouteMatchToUiMatch,
  getResolveToMatches as UNSAFE_getResolveToMatches,
} from "./utils";

export {
  invariant as UNSAFE_invariant,
  warning as UNSAFE_warning,
} from "./history";
