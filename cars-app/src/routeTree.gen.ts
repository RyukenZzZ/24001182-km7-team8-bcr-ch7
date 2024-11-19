/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const RegisterLazyImport = createFileRoute('/register')()
const ProfileLazyImport = createFileRoute('/profile')()
const LoginLazyImport = createFileRoute('/login')()
const CarsLazyImport = createFileRoute('/cars')()
const IndexLazyImport = createFileRoute('/')()
const TypesCreateLazyImport = createFileRoute('/types/create')()
const TypesIdLazyImport = createFileRoute('/types/$id')()
const ModelsCreateLazyImport = createFileRoute('/models/create')()
const ModelsIdLazyImport = createFileRoute('/models/$id')()
const ManufacturesCreateManufacturesLazyImport = createFileRoute(
  '/manufactures/createManufactures',
)()
const ManufacturesIdLazyImport = createFileRoute('/manufactures/$id')()
const CarsCreateLazyImport = createFileRoute('/cars/create')()
const CarsIdLazyImport = createFileRoute('/cars/$id')()
const AdminDashboardLazyImport = createFileRoute('/admin/dashboard')()
const TypesEditIdLazyImport = createFileRoute('/types/edit/$id')()
const ModelsEditIdLazyImport = createFileRoute('/models/edit/$id')()
const ManufacturesEditIdLazyImport = createFileRoute('/manufactures/edit/$id')()
const CarsEditIdLazyImport = createFileRoute('/cars/edit/$id')()

// Create/Update Routes

const RegisterLazyRoute = RegisterLazyImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/register.lazy').then((d) => d.Route))

const ProfileLazyRoute = ProfileLazyImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/profile.lazy').then((d) => d.Route))

const LoginLazyRoute = LoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const CarsLazyRoute = CarsLazyImport.update({
  id: '/cars',
  path: '/cars',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/cars.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const TypesCreateLazyRoute = TypesCreateLazyImport.update({
  id: '/types/create',
  path: '/types/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/types/create.lazy').then((d) => d.Route))

const TypesIdLazyRoute = TypesIdLazyImport.update({
  id: '/types/$id',
  path: '/types/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/types/$id.lazy').then((d) => d.Route))

const ModelsCreateLazyRoute = ModelsCreateLazyImport.update({
  id: '/models/create',
  path: '/models/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/models/create.lazy').then((d) => d.Route))

const ModelsIdLazyRoute = ModelsIdLazyImport.update({
  id: '/models/$id',
  path: '/models/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/models/$id.lazy').then((d) => d.Route))

const ManufacturesCreateManufacturesLazyRoute =
  ManufacturesCreateManufacturesLazyImport.update({
    id: '/manufactures/createManufactures',
    path: '/manufactures/createManufactures',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/manufactures/createManufactures.lazy').then(
      (d) => d.Route,
    ),
  )

const ManufacturesIdLazyRoute = ManufacturesIdLazyImport.update({
  id: '/manufactures/$id',
  path: '/manufactures/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/manufactures/$id.lazy').then((d) => d.Route),
)

const CarsCreateLazyRoute = CarsCreateLazyImport.update({
  id: '/create',
  path: '/create',
  getParentRoute: () => CarsLazyRoute,
} as any).lazy(() => import('./routes/cars/create.lazy').then((d) => d.Route))

const CarsIdLazyRoute = CarsIdLazyImport.update({
  id: '/$id',
  path: '/$id',
  getParentRoute: () => CarsLazyRoute,
} as any).lazy(() => import('./routes/cars/$id.lazy').then((d) => d.Route))

const AdminDashboardLazyRoute = AdminDashboardLazyImport.update({
  id: '/admin/dashboard',
  path: '/admin/dashboard',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/admin/dashboard.lazy').then((d) => d.Route),
)

const TypesEditIdLazyRoute = TypesEditIdLazyImport.update({
  id: '/types/edit/$id',
  path: '/types/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/types/edit/$id.lazy').then((d) => d.Route),
)

const ModelsEditIdLazyRoute = ModelsEditIdLazyImport.update({
  id: '/models/edit/$id',
  path: '/models/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/models/edit/$id.lazy').then((d) => d.Route),
)

const ManufacturesEditIdLazyRoute = ManufacturesEditIdLazyImport.update({
  id: '/manufactures/edit/$id',
  path: '/manufactures/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/manufactures/edit/$id.lazy').then((d) => d.Route),
)

const CarsEditIdLazyRoute = CarsEditIdLazyImport.update({
  id: '/edit/$id',
  path: '/edit/$id',
  getParentRoute: () => CarsLazyRoute,
} as any).lazy(() => import('./routes/cars/edit/$id.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/cars': {
      id: '/cars'
      path: '/cars'
      fullPath: '/cars'
      preLoaderRoute: typeof CarsLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileLazyImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/dashboard': {
      id: '/admin/dashboard'
      path: '/admin/dashboard'
      fullPath: '/admin/dashboard'
      preLoaderRoute: typeof AdminDashboardLazyImport
      parentRoute: typeof rootRoute
    }
    '/cars/$id': {
      id: '/cars/$id'
      path: '/$id'
      fullPath: '/cars/$id'
      preLoaderRoute: typeof CarsIdLazyImport
      parentRoute: typeof CarsLazyImport
    }
    '/cars/create': {
      id: '/cars/create'
      path: '/create'
      fullPath: '/cars/create'
      preLoaderRoute: typeof CarsCreateLazyImport
      parentRoute: typeof CarsLazyImport
    }
    '/manufactures/$id': {
      id: '/manufactures/$id'
      path: '/manufactures/$id'
      fullPath: '/manufactures/$id'
      preLoaderRoute: typeof ManufacturesIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/manufactures/createManufactures': {
      id: '/manufactures/createManufactures'
      path: '/manufactures/createManufactures'
      fullPath: '/manufactures/createManufactures'
      preLoaderRoute: typeof ManufacturesCreateManufacturesLazyImport
      parentRoute: typeof rootRoute
    }
    '/models/$id': {
      id: '/models/$id'
      path: '/models/$id'
      fullPath: '/models/$id'
      preLoaderRoute: typeof ModelsIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/models/create': {
      id: '/models/create'
      path: '/models/create'
      fullPath: '/models/create'
      preLoaderRoute: typeof ModelsCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/types/$id': {
      id: '/types/$id'
      path: '/types/$id'
      fullPath: '/types/$id'
      preLoaderRoute: typeof TypesIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/types/create': {
      id: '/types/create'
      path: '/types/create'
      fullPath: '/types/create'
      preLoaderRoute: typeof TypesCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/cars/edit/$id': {
      id: '/cars/edit/$id'
      path: '/edit/$id'
      fullPath: '/cars/edit/$id'
      preLoaderRoute: typeof CarsEditIdLazyImport
      parentRoute: typeof CarsLazyImport
    }
    '/manufactures/edit/$id': {
      id: '/manufactures/edit/$id'
      path: '/manufactures/edit/$id'
      fullPath: '/manufactures/edit/$id'
      preLoaderRoute: typeof ManufacturesEditIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/models/edit/$id': {
      id: '/models/edit/$id'
      path: '/models/edit/$id'
      fullPath: '/models/edit/$id'
      preLoaderRoute: typeof ModelsEditIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/types/edit/$id': {
      id: '/types/edit/$id'
      path: '/types/edit/$id'
      fullPath: '/types/edit/$id'
      preLoaderRoute: typeof TypesEditIdLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

interface CarsLazyRouteChildren {
  CarsIdLazyRoute: typeof CarsIdLazyRoute
  CarsCreateLazyRoute: typeof CarsCreateLazyRoute
  CarsEditIdLazyRoute: typeof CarsEditIdLazyRoute
}

const CarsLazyRouteChildren: CarsLazyRouteChildren = {
  CarsIdLazyRoute: CarsIdLazyRoute,
  CarsCreateLazyRoute: CarsCreateLazyRoute,
  CarsEditIdLazyRoute: CarsEditIdLazyRoute,
}

const CarsLazyRouteWithChildren = CarsLazyRoute._addFileChildren(
  CarsLazyRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/cars': typeof CarsLazyRouteWithChildren
  '/login': typeof LoginLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/register': typeof RegisterLazyRoute
  '/admin/dashboard': typeof AdminDashboardLazyRoute
  '/cars/$id': typeof CarsIdLazyRoute
  '/cars/create': typeof CarsCreateLazyRoute
  '/manufactures/$id': typeof ManufacturesIdLazyRoute
  '/manufactures/createManufactures': typeof ManufacturesCreateManufacturesLazyRoute
  '/models/$id': typeof ModelsIdLazyRoute
  '/models/create': typeof ModelsCreateLazyRoute
  '/types/$id': typeof TypesIdLazyRoute
  '/types/create': typeof TypesCreateLazyRoute
  '/cars/edit/$id': typeof CarsEditIdLazyRoute
  '/manufactures/edit/$id': typeof ManufacturesEditIdLazyRoute
  '/models/edit/$id': typeof ModelsEditIdLazyRoute
  '/types/edit/$id': typeof TypesEditIdLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/cars': typeof CarsLazyRouteWithChildren
  '/login': typeof LoginLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/register': typeof RegisterLazyRoute
  '/admin/dashboard': typeof AdminDashboardLazyRoute
  '/cars/$id': typeof CarsIdLazyRoute
  '/cars/create': typeof CarsCreateLazyRoute
  '/manufactures/$id': typeof ManufacturesIdLazyRoute
  '/manufactures/createManufactures': typeof ManufacturesCreateManufacturesLazyRoute
  '/models/$id': typeof ModelsIdLazyRoute
  '/models/create': typeof ModelsCreateLazyRoute
  '/types/$id': typeof TypesIdLazyRoute
  '/types/create': typeof TypesCreateLazyRoute
  '/cars/edit/$id': typeof CarsEditIdLazyRoute
  '/manufactures/edit/$id': typeof ManufacturesEditIdLazyRoute
  '/models/edit/$id': typeof ModelsEditIdLazyRoute
  '/types/edit/$id': typeof TypesEditIdLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/cars': typeof CarsLazyRouteWithChildren
  '/login': typeof LoginLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/register': typeof RegisterLazyRoute
  '/admin/dashboard': typeof AdminDashboardLazyRoute
  '/cars/$id': typeof CarsIdLazyRoute
  '/cars/create': typeof CarsCreateLazyRoute
  '/manufactures/$id': typeof ManufacturesIdLazyRoute
  '/manufactures/createManufactures': typeof ManufacturesCreateManufacturesLazyRoute
  '/models/$id': typeof ModelsIdLazyRoute
  '/models/create': typeof ModelsCreateLazyRoute
  '/types/$id': typeof TypesIdLazyRoute
  '/types/create': typeof TypesCreateLazyRoute
  '/cars/edit/$id': typeof CarsEditIdLazyRoute
  '/manufactures/edit/$id': typeof ManufacturesEditIdLazyRoute
  '/models/edit/$id': typeof ModelsEditIdLazyRoute
  '/types/edit/$id': typeof TypesEditIdLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/cars'
    | '/login'
    | '/profile'
    | '/register'
    | '/admin/dashboard'
    | '/cars/$id'
    | '/cars/create'
    | '/manufactures/$id'
    | '/manufactures/createManufactures'
    | '/models/$id'
    | '/models/create'
    | '/types/$id'
    | '/types/create'
    | '/cars/edit/$id'
    | '/manufactures/edit/$id'
    | '/models/edit/$id'
    | '/types/edit/$id'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/cars'
    | '/login'
    | '/profile'
    | '/register'
    | '/admin/dashboard'
    | '/cars/$id'
    | '/cars/create'
    | '/manufactures/$id'
    | '/manufactures/createManufactures'
    | '/models/$id'
    | '/models/create'
    | '/types/$id'
    | '/types/create'
    | '/cars/edit/$id'
    | '/manufactures/edit/$id'
    | '/models/edit/$id'
    | '/types/edit/$id'
  id:
    | '__root__'
    | '/'
    | '/cars'
    | '/login'
    | '/profile'
    | '/register'
    | '/admin/dashboard'
    | '/cars/$id'
    | '/cars/create'
    | '/manufactures/$id'
    | '/manufactures/createManufactures'
    | '/models/$id'
    | '/models/create'
    | '/types/$id'
    | '/types/create'
    | '/cars/edit/$id'
    | '/manufactures/edit/$id'
    | '/models/edit/$id'
    | '/types/edit/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  CarsLazyRoute: typeof CarsLazyRouteWithChildren
  LoginLazyRoute: typeof LoginLazyRoute
  ProfileLazyRoute: typeof ProfileLazyRoute
  RegisterLazyRoute: typeof RegisterLazyRoute
  AdminDashboardLazyRoute: typeof AdminDashboardLazyRoute
  ManufacturesIdLazyRoute: typeof ManufacturesIdLazyRoute
  ManufacturesCreateManufacturesLazyRoute: typeof ManufacturesCreateManufacturesLazyRoute
  ModelsIdLazyRoute: typeof ModelsIdLazyRoute
  ModelsCreateLazyRoute: typeof ModelsCreateLazyRoute
  TypesIdLazyRoute: typeof TypesIdLazyRoute
  TypesCreateLazyRoute: typeof TypesCreateLazyRoute
  ManufacturesEditIdLazyRoute: typeof ManufacturesEditIdLazyRoute
  ModelsEditIdLazyRoute: typeof ModelsEditIdLazyRoute
  TypesEditIdLazyRoute: typeof TypesEditIdLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  CarsLazyRoute: CarsLazyRouteWithChildren,
  LoginLazyRoute: LoginLazyRoute,
  ProfileLazyRoute: ProfileLazyRoute,
  RegisterLazyRoute: RegisterLazyRoute,
  AdminDashboardLazyRoute: AdminDashboardLazyRoute,
  ManufacturesIdLazyRoute: ManufacturesIdLazyRoute,
  ManufacturesCreateManufacturesLazyRoute:
    ManufacturesCreateManufacturesLazyRoute,
  ModelsIdLazyRoute: ModelsIdLazyRoute,
  ModelsCreateLazyRoute: ModelsCreateLazyRoute,
  TypesIdLazyRoute: TypesIdLazyRoute,
  TypesCreateLazyRoute: TypesCreateLazyRoute,
  ManufacturesEditIdLazyRoute: ManufacturesEditIdLazyRoute,
  ModelsEditIdLazyRoute: ModelsEditIdLazyRoute,
  TypesEditIdLazyRoute: TypesEditIdLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/cars",
        "/login",
        "/profile",
        "/register",
        "/admin/dashboard",
        "/manufactures/$id",
        "/manufactures/createManufactures",
        "/models/$id",
        "/models/create",
        "/types/$id",
        "/types/create",
        "/manufactures/edit/$id",
        "/models/edit/$id",
        "/types/edit/$id"
      ]
    },
    "/": {
      "filePath": "index.lazy.jsx"
    },
    "/cars": {
      "filePath": "cars.lazy.jsx",
      "children": [
        "/cars/$id",
        "/cars/create",
        "/cars/edit/$id"
      ]
    },
    "/login": {
      "filePath": "login.lazy.jsx"
    },
    "/profile": {
      "filePath": "profile.lazy.jsx"
    },
    "/register": {
      "filePath": "register.lazy.jsx"
    },
    "/admin/dashboard": {
      "filePath": "admin/dashboard.lazy.jsx"
    },
    "/cars/$id": {
      "filePath": "cars/$id.lazy.jsx",
      "parent": "/cars"
    },
    "/cars/create": {
      "filePath": "cars/create.lazy.jsx",
      "parent": "/cars"
    },
    "/manufactures/$id": {
      "filePath": "manufactures/$id.lazy.jsx"
    },
    "/manufactures/createManufactures": {
      "filePath": "manufactures/createManufactures.lazy.jsx"
    },
    "/models/$id": {
      "filePath": "models/$id.lazy.jsx"
    },
    "/models/create": {
      "filePath": "models/create.lazy.jsx"
    },
    "/types/$id": {
      "filePath": "types/$id.lazy.jsx"
    },
    "/types/create": {
      "filePath": "types/create.lazy.jsx"
    },
    "/cars/edit/$id": {
      "filePath": "cars/edit/$id.lazy.jsx",
      "parent": "/cars"
    },
    "/manufactures/edit/$id": {
      "filePath": "manufactures/edit/$id.lazy.jsx"
    },
    "/models/edit/$id": {
      "filePath": "models/edit/$id.lazy.jsx"
    },
    "/types/edit/$id": {
      "filePath": "types/edit/$id.lazy.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
