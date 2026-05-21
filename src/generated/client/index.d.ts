
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model KategoriPagu
 * 
 */
export type KategoriPagu = $Result.DefaultSelection<Prisma.$KategoriPaguPayload>
/**
 * Model PeriodeAnggaran
 * 
 */
export type PeriodeAnggaran = $Result.DefaultSelection<Prisma.$PeriodeAnggaranPayload>
/**
 * Model Transaksi
 * 
 */
export type Transaksi = $Result.DefaultSelection<Prisma.$TransaksiPayload>
/**
 * Model AnggaranKategoriPeriode
 * 
 */
export type AnggaranKategoriPeriode = $Result.DefaultSelection<Prisma.$AnggaranKategoriPeriodePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more KategoriPagus
 * const kategoriPagus = await prisma.kategoriPagu.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more KategoriPagus
   * const kategoriPagus = await prisma.kategoriPagu.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.kategoriPagu`: Exposes CRUD operations for the **KategoriPagu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KategoriPagus
    * const kategoriPagus = await prisma.kategoriPagu.findMany()
    * ```
    */
  get kategoriPagu(): Prisma.KategoriPaguDelegate<ExtArgs>;

  /**
   * `prisma.periodeAnggaran`: Exposes CRUD operations for the **PeriodeAnggaran** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PeriodeAnggarans
    * const periodeAnggarans = await prisma.periodeAnggaran.findMany()
    * ```
    */
  get periodeAnggaran(): Prisma.PeriodeAnggaranDelegate<ExtArgs>;

  /**
   * `prisma.transaksi`: Exposes CRUD operations for the **Transaksi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaksis
    * const transaksis = await prisma.transaksi.findMany()
    * ```
    */
  get transaksi(): Prisma.TransaksiDelegate<ExtArgs>;

  /**
   * `prisma.anggaranKategoriPeriode`: Exposes CRUD operations for the **AnggaranKategoriPeriode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnggaranKategoriPeriodes
    * const anggaranKategoriPeriodes = await prisma.anggaranKategoriPeriode.findMany()
    * ```
    */
  get anggaranKategoriPeriode(): Prisma.AnggaranKategoriPeriodeDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    KategoriPagu: 'KategoriPagu',
    PeriodeAnggaran: 'PeriodeAnggaran',
    Transaksi: 'Transaksi',
    AnggaranKategoriPeriode: 'AnggaranKategoriPeriode'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "kategoriPagu" | "periodeAnggaran" | "transaksi" | "anggaranKategoriPeriode"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      KategoriPagu: {
        payload: Prisma.$KategoriPaguPayload<ExtArgs>
        fields: Prisma.KategoriPaguFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KategoriPaguFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPaguPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KategoriPaguFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPaguPayload>
          }
          findFirst: {
            args: Prisma.KategoriPaguFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPaguPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KategoriPaguFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPaguPayload>
          }
          findMany: {
            args: Prisma.KategoriPaguFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPaguPayload>[]
          }
          create: {
            args: Prisma.KategoriPaguCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPaguPayload>
          }
          createMany: {
            args: Prisma.KategoriPaguCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KategoriPaguCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPaguPayload>[]
          }
          delete: {
            args: Prisma.KategoriPaguDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPaguPayload>
          }
          update: {
            args: Prisma.KategoriPaguUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPaguPayload>
          }
          deleteMany: {
            args: Prisma.KategoriPaguDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KategoriPaguUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KategoriPaguUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPaguPayload>
          }
          aggregate: {
            args: Prisma.KategoriPaguAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKategoriPagu>
          }
          groupBy: {
            args: Prisma.KategoriPaguGroupByArgs<ExtArgs>
            result: $Utils.Optional<KategoriPaguGroupByOutputType>[]
          }
          count: {
            args: Prisma.KategoriPaguCountArgs<ExtArgs>
            result: $Utils.Optional<KategoriPaguCountAggregateOutputType> | number
          }
        }
      }
      PeriodeAnggaran: {
        payload: Prisma.$PeriodeAnggaranPayload<ExtArgs>
        fields: Prisma.PeriodeAnggaranFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeriodeAnggaranFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodeAnggaranPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeriodeAnggaranFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodeAnggaranPayload>
          }
          findFirst: {
            args: Prisma.PeriodeAnggaranFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodeAnggaranPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeriodeAnggaranFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodeAnggaranPayload>
          }
          findMany: {
            args: Prisma.PeriodeAnggaranFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodeAnggaranPayload>[]
          }
          create: {
            args: Prisma.PeriodeAnggaranCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodeAnggaranPayload>
          }
          createMany: {
            args: Prisma.PeriodeAnggaranCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeriodeAnggaranCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodeAnggaranPayload>[]
          }
          delete: {
            args: Prisma.PeriodeAnggaranDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodeAnggaranPayload>
          }
          update: {
            args: Prisma.PeriodeAnggaranUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodeAnggaranPayload>
          }
          deleteMany: {
            args: Prisma.PeriodeAnggaranDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeriodeAnggaranUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PeriodeAnggaranUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodeAnggaranPayload>
          }
          aggregate: {
            args: Prisma.PeriodeAnggaranAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeriodeAnggaran>
          }
          groupBy: {
            args: Prisma.PeriodeAnggaranGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeriodeAnggaranGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeriodeAnggaranCountArgs<ExtArgs>
            result: $Utils.Optional<PeriodeAnggaranCountAggregateOutputType> | number
          }
        }
      }
      Transaksi: {
        payload: Prisma.$TransaksiPayload<ExtArgs>
        fields: Prisma.TransaksiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransaksiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransaksiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          findFirst: {
            args: Prisma.TransaksiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransaksiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          findMany: {
            args: Prisma.TransaksiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>[]
          }
          create: {
            args: Prisma.TransaksiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          createMany: {
            args: Prisma.TransaksiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransaksiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>[]
          }
          delete: {
            args: Prisma.TransaksiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          update: {
            args: Prisma.TransaksiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          deleteMany: {
            args: Prisma.TransaksiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransaksiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransaksiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          aggregate: {
            args: Prisma.TransaksiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaksi>
          }
          groupBy: {
            args: Prisma.TransaksiGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransaksiGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransaksiCountArgs<ExtArgs>
            result: $Utils.Optional<TransaksiCountAggregateOutputType> | number
          }
        }
      }
      AnggaranKategoriPeriode: {
        payload: Prisma.$AnggaranKategoriPeriodePayload<ExtArgs>
        fields: Prisma.AnggaranKategoriPeriodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnggaranKategoriPeriodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggaranKategoriPeriodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnggaranKategoriPeriodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggaranKategoriPeriodePayload>
          }
          findFirst: {
            args: Prisma.AnggaranKategoriPeriodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggaranKategoriPeriodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnggaranKategoriPeriodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggaranKategoriPeriodePayload>
          }
          findMany: {
            args: Prisma.AnggaranKategoriPeriodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggaranKategoriPeriodePayload>[]
          }
          create: {
            args: Prisma.AnggaranKategoriPeriodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggaranKategoriPeriodePayload>
          }
          createMany: {
            args: Prisma.AnggaranKategoriPeriodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnggaranKategoriPeriodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggaranKategoriPeriodePayload>[]
          }
          delete: {
            args: Prisma.AnggaranKategoriPeriodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggaranKategoriPeriodePayload>
          }
          update: {
            args: Prisma.AnggaranKategoriPeriodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggaranKategoriPeriodePayload>
          }
          deleteMany: {
            args: Prisma.AnggaranKategoriPeriodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnggaranKategoriPeriodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnggaranKategoriPeriodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggaranKategoriPeriodePayload>
          }
          aggregate: {
            args: Prisma.AnggaranKategoriPeriodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnggaranKategoriPeriode>
          }
          groupBy: {
            args: Prisma.AnggaranKategoriPeriodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnggaranKategoriPeriodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnggaranKategoriPeriodeCountArgs<ExtArgs>
            result: $Utils.Optional<AnggaranKategoriPeriodeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type KategoriPaguCountOutputType
   */

  export type KategoriPaguCountOutputType = {
    transaksi: number
    anggaranKategoriPeriode: number
  }

  export type KategoriPaguCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | KategoriPaguCountOutputTypeCountTransaksiArgs
    anggaranKategoriPeriode?: boolean | KategoriPaguCountOutputTypeCountAnggaranKategoriPeriodeArgs
  }

  // Custom InputTypes
  /**
   * KategoriPaguCountOutputType without action
   */
  export type KategoriPaguCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriPaguCountOutputType
     */
    select?: KategoriPaguCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KategoriPaguCountOutputType without action
   */
  export type KategoriPaguCountOutputTypeCountTransaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaksiWhereInput
  }

  /**
   * KategoriPaguCountOutputType without action
   */
  export type KategoriPaguCountOutputTypeCountAnggaranKategoriPeriodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnggaranKategoriPeriodeWhereInput
  }


  /**
   * Count Type PeriodeAnggaranCountOutputType
   */

  export type PeriodeAnggaranCountOutputType = {
    transaksi: number
    anggaranKategoriPeriode: number
  }

  export type PeriodeAnggaranCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | PeriodeAnggaranCountOutputTypeCountTransaksiArgs
    anggaranKategoriPeriode?: boolean | PeriodeAnggaranCountOutputTypeCountAnggaranKategoriPeriodeArgs
  }

  // Custom InputTypes
  /**
   * PeriodeAnggaranCountOutputType without action
   */
  export type PeriodeAnggaranCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeAnggaranCountOutputType
     */
    select?: PeriodeAnggaranCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeriodeAnggaranCountOutputType without action
   */
  export type PeriodeAnggaranCountOutputTypeCountTransaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaksiWhereInput
  }

  /**
   * PeriodeAnggaranCountOutputType without action
   */
  export type PeriodeAnggaranCountOutputTypeCountAnggaranKategoriPeriodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnggaranKategoriPeriodeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model KategoriPagu
   */

  export type AggregateKategoriPagu = {
    _count: KategoriPaguCountAggregateOutputType | null
    _avg: KategoriPaguAvgAggregateOutputType | null
    _sum: KategoriPaguSumAggregateOutputType | null
    _min: KategoriPaguMinAggregateOutputType | null
    _max: KategoriPaguMaxAggregateOutputType | null
  }

  export type KategoriPaguAvgAggregateOutputType = {
    anggaranDasar: Decimal | null
    urutan: number | null
  }

  export type KategoriPaguSumAggregateOutputType = {
    anggaranDasar: Decimal | null
    urutan: number | null
  }

  export type KategoriPaguMinAggregateOutputType = {
    id: string | null
    nama: string | null
    anggaranDasar: Decimal | null
    warna: string | null
    ikon: string | null
    urutan: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KategoriPaguMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    anggaranDasar: Decimal | null
    warna: string | null
    ikon: string | null
    urutan: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KategoriPaguCountAggregateOutputType = {
    id: number
    nama: number
    anggaranDasar: number
    warna: number
    ikon: number
    urutan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KategoriPaguAvgAggregateInputType = {
    anggaranDasar?: true
    urutan?: true
  }

  export type KategoriPaguSumAggregateInputType = {
    anggaranDasar?: true
    urutan?: true
  }

  export type KategoriPaguMinAggregateInputType = {
    id?: true
    nama?: true
    anggaranDasar?: true
    warna?: true
    ikon?: true
    urutan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KategoriPaguMaxAggregateInputType = {
    id?: true
    nama?: true
    anggaranDasar?: true
    warna?: true
    ikon?: true
    urutan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KategoriPaguCountAggregateInputType = {
    id?: true
    nama?: true
    anggaranDasar?: true
    warna?: true
    ikon?: true
    urutan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KategoriPaguAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KategoriPagu to aggregate.
     */
    where?: KategoriPaguWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KategoriPagus to fetch.
     */
    orderBy?: KategoriPaguOrderByWithRelationInput | KategoriPaguOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KategoriPaguWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KategoriPagus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KategoriPagus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KategoriPagus
    **/
    _count?: true | KategoriPaguCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KategoriPaguAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KategoriPaguSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KategoriPaguMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KategoriPaguMaxAggregateInputType
  }

  export type GetKategoriPaguAggregateType<T extends KategoriPaguAggregateArgs> = {
        [P in keyof T & keyof AggregateKategoriPagu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKategoriPagu[P]>
      : GetScalarType<T[P], AggregateKategoriPagu[P]>
  }




  export type KategoriPaguGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KategoriPaguWhereInput
    orderBy?: KategoriPaguOrderByWithAggregationInput | KategoriPaguOrderByWithAggregationInput[]
    by: KategoriPaguScalarFieldEnum[] | KategoriPaguScalarFieldEnum
    having?: KategoriPaguScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KategoriPaguCountAggregateInputType | true
    _avg?: KategoriPaguAvgAggregateInputType
    _sum?: KategoriPaguSumAggregateInputType
    _min?: KategoriPaguMinAggregateInputType
    _max?: KategoriPaguMaxAggregateInputType
  }

  export type KategoriPaguGroupByOutputType = {
    id: string
    nama: string
    anggaranDasar: Decimal
    warna: string | null
    ikon: string | null
    urutan: number
    createdAt: Date
    updatedAt: Date
    _count: KategoriPaguCountAggregateOutputType | null
    _avg: KategoriPaguAvgAggregateOutputType | null
    _sum: KategoriPaguSumAggregateOutputType | null
    _min: KategoriPaguMinAggregateOutputType | null
    _max: KategoriPaguMaxAggregateOutputType | null
  }

  type GetKategoriPaguGroupByPayload<T extends KategoriPaguGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KategoriPaguGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KategoriPaguGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KategoriPaguGroupByOutputType[P]>
            : GetScalarType<T[P], KategoriPaguGroupByOutputType[P]>
        }
      >
    >


  export type KategoriPaguSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    anggaranDasar?: boolean
    warna?: boolean
    ikon?: boolean
    urutan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transaksi?: boolean | KategoriPagu$transaksiArgs<ExtArgs>
    anggaranKategoriPeriode?: boolean | KategoriPagu$anggaranKategoriPeriodeArgs<ExtArgs>
    _count?: boolean | KategoriPaguCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kategoriPagu"]>

  export type KategoriPaguSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    anggaranDasar?: boolean
    warna?: boolean
    ikon?: boolean
    urutan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["kategoriPagu"]>

  export type KategoriPaguSelectScalar = {
    id?: boolean
    nama?: boolean
    anggaranDasar?: boolean
    warna?: boolean
    ikon?: boolean
    urutan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KategoriPaguInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | KategoriPagu$transaksiArgs<ExtArgs>
    anggaranKategoriPeriode?: boolean | KategoriPagu$anggaranKategoriPeriodeArgs<ExtArgs>
    _count?: boolean | KategoriPaguCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KategoriPaguIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KategoriPaguPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KategoriPagu"
    objects: {
      transaksi: Prisma.$TransaksiPayload<ExtArgs>[]
      anggaranKategoriPeriode: Prisma.$AnggaranKategoriPeriodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      anggaranDasar: Prisma.Decimal
      warna: string | null
      ikon: string | null
      urutan: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["kategoriPagu"]>
    composites: {}
  }

  type KategoriPaguGetPayload<S extends boolean | null | undefined | KategoriPaguDefaultArgs> = $Result.GetResult<Prisma.$KategoriPaguPayload, S>

  type KategoriPaguCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KategoriPaguFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: KategoriPaguCountAggregateInputType | true
    }

  export interface KategoriPaguDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KategoriPagu'], meta: { name: 'KategoriPagu' } }
    /**
     * Find zero or one KategoriPagu that matches the filter.
     * @param {KategoriPaguFindUniqueArgs} args - Arguments to find a KategoriPagu
     * @example
     * // Get one KategoriPagu
     * const kategoriPagu = await prisma.kategoriPagu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KategoriPaguFindUniqueArgs>(args: SelectSubset<T, KategoriPaguFindUniqueArgs<ExtArgs>>): Prisma__KategoriPaguClient<$Result.GetResult<Prisma.$KategoriPaguPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one KategoriPagu that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {KategoriPaguFindUniqueOrThrowArgs} args - Arguments to find a KategoriPagu
     * @example
     * // Get one KategoriPagu
     * const kategoriPagu = await prisma.kategoriPagu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KategoriPaguFindUniqueOrThrowArgs>(args: SelectSubset<T, KategoriPaguFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KategoriPaguClient<$Result.GetResult<Prisma.$KategoriPaguPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first KategoriPagu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriPaguFindFirstArgs} args - Arguments to find a KategoriPagu
     * @example
     * // Get one KategoriPagu
     * const kategoriPagu = await prisma.kategoriPagu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KategoriPaguFindFirstArgs>(args?: SelectSubset<T, KategoriPaguFindFirstArgs<ExtArgs>>): Prisma__KategoriPaguClient<$Result.GetResult<Prisma.$KategoriPaguPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first KategoriPagu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriPaguFindFirstOrThrowArgs} args - Arguments to find a KategoriPagu
     * @example
     * // Get one KategoriPagu
     * const kategoriPagu = await prisma.kategoriPagu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KategoriPaguFindFirstOrThrowArgs>(args?: SelectSubset<T, KategoriPaguFindFirstOrThrowArgs<ExtArgs>>): Prisma__KategoriPaguClient<$Result.GetResult<Prisma.$KategoriPaguPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more KategoriPagus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriPaguFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KategoriPagus
     * const kategoriPagus = await prisma.kategoriPagu.findMany()
     * 
     * // Get first 10 KategoriPagus
     * const kategoriPagus = await prisma.kategoriPagu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kategoriPaguWithIdOnly = await prisma.kategoriPagu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KategoriPaguFindManyArgs>(args?: SelectSubset<T, KategoriPaguFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPaguPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a KategoriPagu.
     * @param {KategoriPaguCreateArgs} args - Arguments to create a KategoriPagu.
     * @example
     * // Create one KategoriPagu
     * const KategoriPagu = await prisma.kategoriPagu.create({
     *   data: {
     *     // ... data to create a KategoriPagu
     *   }
     * })
     * 
     */
    create<T extends KategoriPaguCreateArgs>(args: SelectSubset<T, KategoriPaguCreateArgs<ExtArgs>>): Prisma__KategoriPaguClient<$Result.GetResult<Prisma.$KategoriPaguPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many KategoriPagus.
     * @param {KategoriPaguCreateManyArgs} args - Arguments to create many KategoriPagus.
     * @example
     * // Create many KategoriPagus
     * const kategoriPagu = await prisma.kategoriPagu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KategoriPaguCreateManyArgs>(args?: SelectSubset<T, KategoriPaguCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KategoriPagus and returns the data saved in the database.
     * @param {KategoriPaguCreateManyAndReturnArgs} args - Arguments to create many KategoriPagus.
     * @example
     * // Create many KategoriPagus
     * const kategoriPagu = await prisma.kategoriPagu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KategoriPagus and only return the `id`
     * const kategoriPaguWithIdOnly = await prisma.kategoriPagu.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KategoriPaguCreateManyAndReturnArgs>(args?: SelectSubset<T, KategoriPaguCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPaguPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a KategoriPagu.
     * @param {KategoriPaguDeleteArgs} args - Arguments to delete one KategoriPagu.
     * @example
     * // Delete one KategoriPagu
     * const KategoriPagu = await prisma.kategoriPagu.delete({
     *   where: {
     *     // ... filter to delete one KategoriPagu
     *   }
     * })
     * 
     */
    delete<T extends KategoriPaguDeleteArgs>(args: SelectSubset<T, KategoriPaguDeleteArgs<ExtArgs>>): Prisma__KategoriPaguClient<$Result.GetResult<Prisma.$KategoriPaguPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one KategoriPagu.
     * @param {KategoriPaguUpdateArgs} args - Arguments to update one KategoriPagu.
     * @example
     * // Update one KategoriPagu
     * const kategoriPagu = await prisma.kategoriPagu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KategoriPaguUpdateArgs>(args: SelectSubset<T, KategoriPaguUpdateArgs<ExtArgs>>): Prisma__KategoriPaguClient<$Result.GetResult<Prisma.$KategoriPaguPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more KategoriPagus.
     * @param {KategoriPaguDeleteManyArgs} args - Arguments to filter KategoriPagus to delete.
     * @example
     * // Delete a few KategoriPagus
     * const { count } = await prisma.kategoriPagu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KategoriPaguDeleteManyArgs>(args?: SelectSubset<T, KategoriPaguDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KategoriPagus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriPaguUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KategoriPagus
     * const kategoriPagu = await prisma.kategoriPagu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KategoriPaguUpdateManyArgs>(args: SelectSubset<T, KategoriPaguUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one KategoriPagu.
     * @param {KategoriPaguUpsertArgs} args - Arguments to update or create a KategoriPagu.
     * @example
     * // Update or create a KategoriPagu
     * const kategoriPagu = await prisma.kategoriPagu.upsert({
     *   create: {
     *     // ... data to create a KategoriPagu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KategoriPagu we want to update
     *   }
     * })
     */
    upsert<T extends KategoriPaguUpsertArgs>(args: SelectSubset<T, KategoriPaguUpsertArgs<ExtArgs>>): Prisma__KategoriPaguClient<$Result.GetResult<Prisma.$KategoriPaguPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of KategoriPagus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriPaguCountArgs} args - Arguments to filter KategoriPagus to count.
     * @example
     * // Count the number of KategoriPagus
     * const count = await prisma.kategoriPagu.count({
     *   where: {
     *     // ... the filter for the KategoriPagus we want to count
     *   }
     * })
    **/
    count<T extends KategoriPaguCountArgs>(
      args?: Subset<T, KategoriPaguCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KategoriPaguCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KategoriPagu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriPaguAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KategoriPaguAggregateArgs>(args: Subset<T, KategoriPaguAggregateArgs>): Prisma.PrismaPromise<GetKategoriPaguAggregateType<T>>

    /**
     * Group by KategoriPagu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriPaguGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KategoriPaguGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KategoriPaguGroupByArgs['orderBy'] }
        : { orderBy?: KategoriPaguGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KategoriPaguGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKategoriPaguGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KategoriPagu model
   */
  readonly fields: KategoriPaguFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KategoriPagu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KategoriPaguClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaksi<T extends KategoriPagu$transaksiArgs<ExtArgs> = {}>(args?: Subset<T, KategoriPagu$transaksiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findMany"> | Null>
    anggaranKategoriPeriode<T extends KategoriPagu$anggaranKategoriPeriodeArgs<ExtArgs> = {}>(args?: Subset<T, KategoriPagu$anggaranKategoriPeriodeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnggaranKategoriPeriodePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KategoriPagu model
   */ 
  interface KategoriPaguFieldRefs {
    readonly id: FieldRef<"KategoriPagu", 'String'>
    readonly nama: FieldRef<"KategoriPagu", 'String'>
    readonly anggaranDasar: FieldRef<"KategoriPagu", 'Decimal'>
    readonly warna: FieldRef<"KategoriPagu", 'String'>
    readonly ikon: FieldRef<"KategoriPagu", 'String'>
    readonly urutan: FieldRef<"KategoriPagu", 'Int'>
    readonly createdAt: FieldRef<"KategoriPagu", 'DateTime'>
    readonly updatedAt: FieldRef<"KategoriPagu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KategoriPagu findUnique
   */
  export type KategoriPaguFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriPagu
     */
    select?: KategoriPaguSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriPaguInclude<ExtArgs> | null
    /**
     * Filter, which KategoriPagu to fetch.
     */
    where: KategoriPaguWhereUniqueInput
  }

  /**
   * KategoriPagu findUniqueOrThrow
   */
  export type KategoriPaguFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriPagu
     */
    select?: KategoriPaguSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriPaguInclude<ExtArgs> | null
    /**
     * Filter, which KategoriPagu to fetch.
     */
    where: KategoriPaguWhereUniqueInput
  }

  /**
   * KategoriPagu findFirst
   */
  export type KategoriPaguFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriPagu
     */
    select?: KategoriPaguSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriPaguInclude<ExtArgs> | null
    /**
     * Filter, which KategoriPagu to fetch.
     */
    where?: KategoriPaguWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KategoriPagus to fetch.
     */
    orderBy?: KategoriPaguOrderByWithRelationInput | KategoriPaguOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KategoriPagus.
     */
    cursor?: KategoriPaguWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KategoriPagus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KategoriPagus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KategoriPagus.
     */
    distinct?: KategoriPaguScalarFieldEnum | KategoriPaguScalarFieldEnum[]
  }

  /**
   * KategoriPagu findFirstOrThrow
   */
  export type KategoriPaguFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriPagu
     */
    select?: KategoriPaguSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriPaguInclude<ExtArgs> | null
    /**
     * Filter, which KategoriPagu to fetch.
     */
    where?: KategoriPaguWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KategoriPagus to fetch.
     */
    orderBy?: KategoriPaguOrderByWithRelationInput | KategoriPaguOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KategoriPagus.
     */
    cursor?: KategoriPaguWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KategoriPagus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KategoriPagus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KategoriPagus.
     */
    distinct?: KategoriPaguScalarFieldEnum | KategoriPaguScalarFieldEnum[]
  }

  /**
   * KategoriPagu findMany
   */
  export type KategoriPaguFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriPagu
     */
    select?: KategoriPaguSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriPaguInclude<ExtArgs> | null
    /**
     * Filter, which KategoriPagus to fetch.
     */
    where?: KategoriPaguWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KategoriPagus to fetch.
     */
    orderBy?: KategoriPaguOrderByWithRelationInput | KategoriPaguOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KategoriPagus.
     */
    cursor?: KategoriPaguWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KategoriPagus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KategoriPagus.
     */
    skip?: number
    distinct?: KategoriPaguScalarFieldEnum | KategoriPaguScalarFieldEnum[]
  }

  /**
   * KategoriPagu create
   */
  export type KategoriPaguCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriPagu
     */
    select?: KategoriPaguSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriPaguInclude<ExtArgs> | null
    /**
     * The data needed to create a KategoriPagu.
     */
    data: XOR<KategoriPaguCreateInput, KategoriPaguUncheckedCreateInput>
  }

  /**
   * KategoriPagu createMany
   */
  export type KategoriPaguCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KategoriPagus.
     */
    data: KategoriPaguCreateManyInput | KategoriPaguCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KategoriPagu createManyAndReturn
   */
  export type KategoriPaguCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriPagu
     */
    select?: KategoriPaguSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many KategoriPagus.
     */
    data: KategoriPaguCreateManyInput | KategoriPaguCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KategoriPagu update
   */
  export type KategoriPaguUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriPagu
     */
    select?: KategoriPaguSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriPaguInclude<ExtArgs> | null
    /**
     * The data needed to update a KategoriPagu.
     */
    data: XOR<KategoriPaguUpdateInput, KategoriPaguUncheckedUpdateInput>
    /**
     * Choose, which KategoriPagu to update.
     */
    where: KategoriPaguWhereUniqueInput
  }

  /**
   * KategoriPagu updateMany
   */
  export type KategoriPaguUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KategoriPagus.
     */
    data: XOR<KategoriPaguUpdateManyMutationInput, KategoriPaguUncheckedUpdateManyInput>
    /**
     * Filter which KategoriPagus to update
     */
    where?: KategoriPaguWhereInput
  }

  /**
   * KategoriPagu upsert
   */
  export type KategoriPaguUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriPagu
     */
    select?: KategoriPaguSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriPaguInclude<ExtArgs> | null
    /**
     * The filter to search for the KategoriPagu to update in case it exists.
     */
    where: KategoriPaguWhereUniqueInput
    /**
     * In case the KategoriPagu found by the `where` argument doesn't exist, create a new KategoriPagu with this data.
     */
    create: XOR<KategoriPaguCreateInput, KategoriPaguUncheckedCreateInput>
    /**
     * In case the KategoriPagu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KategoriPaguUpdateInput, KategoriPaguUncheckedUpdateInput>
  }

  /**
   * KategoriPagu delete
   */
  export type KategoriPaguDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriPagu
     */
    select?: KategoriPaguSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriPaguInclude<ExtArgs> | null
    /**
     * Filter which KategoriPagu to delete.
     */
    where: KategoriPaguWhereUniqueInput
  }

  /**
   * KategoriPagu deleteMany
   */
  export type KategoriPaguDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KategoriPagus to delete
     */
    where?: KategoriPaguWhereInput
  }

  /**
   * KategoriPagu.transaksi
   */
  export type KategoriPagu$transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    where?: TransaksiWhereInput
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    cursor?: TransaksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * KategoriPagu.anggaranKategoriPeriode
   */
  export type KategoriPagu$anggaranKategoriPeriodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggaranKategoriPeriode
     */
    select?: AnggaranKategoriPeriodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggaranKategoriPeriodeInclude<ExtArgs> | null
    where?: AnggaranKategoriPeriodeWhereInput
    orderBy?: AnggaranKategoriPeriodeOrderByWithRelationInput | AnggaranKategoriPeriodeOrderByWithRelationInput[]
    cursor?: AnggaranKategoriPeriodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnggaranKategoriPeriodeScalarFieldEnum | AnggaranKategoriPeriodeScalarFieldEnum[]
  }

  /**
   * KategoriPagu without action
   */
  export type KategoriPaguDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriPagu
     */
    select?: KategoriPaguSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriPaguInclude<ExtArgs> | null
  }


  /**
   * Model PeriodeAnggaran
   */

  export type AggregatePeriodeAnggaran = {
    _count: PeriodeAnggaranCountAggregateOutputType | null
    _min: PeriodeAnggaranMinAggregateOutputType | null
    _max: PeriodeAnggaranMaxAggregateOutputType | null
  }

  export type PeriodeAnggaranMinAggregateOutputType = {
    id: string | null
    nama: string | null
    tanggalMulai: Date | null
    tanggalAkhir: Date | null
    isActive: boolean | null
    templateType: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PeriodeAnggaranMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    tanggalMulai: Date | null
    tanggalAkhir: Date | null
    isActive: boolean | null
    templateType: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PeriodeAnggaranCountAggregateOutputType = {
    id: number
    nama: number
    tanggalMulai: number
    tanggalAkhir: number
    isActive: number
    templateType: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PeriodeAnggaranMinAggregateInputType = {
    id?: true
    nama?: true
    tanggalMulai?: true
    tanggalAkhir?: true
    isActive?: true
    templateType?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PeriodeAnggaranMaxAggregateInputType = {
    id?: true
    nama?: true
    tanggalMulai?: true
    tanggalAkhir?: true
    isActive?: true
    templateType?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PeriodeAnggaranCountAggregateInputType = {
    id?: true
    nama?: true
    tanggalMulai?: true
    tanggalAkhir?: true
    isActive?: true
    templateType?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PeriodeAnggaranAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeriodeAnggaran to aggregate.
     */
    where?: PeriodeAnggaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeriodeAnggarans to fetch.
     */
    orderBy?: PeriodeAnggaranOrderByWithRelationInput | PeriodeAnggaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeriodeAnggaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeriodeAnggarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeriodeAnggarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PeriodeAnggarans
    **/
    _count?: true | PeriodeAnggaranCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeriodeAnggaranMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeriodeAnggaranMaxAggregateInputType
  }

  export type GetPeriodeAnggaranAggregateType<T extends PeriodeAnggaranAggregateArgs> = {
        [P in keyof T & keyof AggregatePeriodeAnggaran]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeriodeAnggaran[P]>
      : GetScalarType<T[P], AggregatePeriodeAnggaran[P]>
  }




  export type PeriodeAnggaranGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeriodeAnggaranWhereInput
    orderBy?: PeriodeAnggaranOrderByWithAggregationInput | PeriodeAnggaranOrderByWithAggregationInput[]
    by: PeriodeAnggaranScalarFieldEnum[] | PeriodeAnggaranScalarFieldEnum
    having?: PeriodeAnggaranScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeriodeAnggaranCountAggregateInputType | true
    _min?: PeriodeAnggaranMinAggregateInputType
    _max?: PeriodeAnggaranMaxAggregateInputType
  }

  export type PeriodeAnggaranGroupByOutputType = {
    id: string
    nama: string | null
    tanggalMulai: Date
    tanggalAkhir: Date
    isActive: boolean
    templateType: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: PeriodeAnggaranCountAggregateOutputType | null
    _min: PeriodeAnggaranMinAggregateOutputType | null
    _max: PeriodeAnggaranMaxAggregateOutputType | null
  }

  type GetPeriodeAnggaranGroupByPayload<T extends PeriodeAnggaranGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeriodeAnggaranGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeriodeAnggaranGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeriodeAnggaranGroupByOutputType[P]>
            : GetScalarType<T[P], PeriodeAnggaranGroupByOutputType[P]>
        }
      >
    >


  export type PeriodeAnggaranSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    tanggalMulai?: boolean
    tanggalAkhir?: boolean
    isActive?: boolean
    templateType?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transaksi?: boolean | PeriodeAnggaran$transaksiArgs<ExtArgs>
    anggaranKategoriPeriode?: boolean | PeriodeAnggaran$anggaranKategoriPeriodeArgs<ExtArgs>
    _count?: boolean | PeriodeAnggaranCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["periodeAnggaran"]>

  export type PeriodeAnggaranSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    tanggalMulai?: boolean
    tanggalAkhir?: boolean
    isActive?: boolean
    templateType?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["periodeAnggaran"]>

  export type PeriodeAnggaranSelectScalar = {
    id?: boolean
    nama?: boolean
    tanggalMulai?: boolean
    tanggalAkhir?: boolean
    isActive?: boolean
    templateType?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PeriodeAnggaranInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | PeriodeAnggaran$transaksiArgs<ExtArgs>
    anggaranKategoriPeriode?: boolean | PeriodeAnggaran$anggaranKategoriPeriodeArgs<ExtArgs>
    _count?: boolean | PeriodeAnggaranCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PeriodeAnggaranIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PeriodeAnggaranPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PeriodeAnggaran"
    objects: {
      transaksi: Prisma.$TransaksiPayload<ExtArgs>[]
      anggaranKategoriPeriode: Prisma.$AnggaranKategoriPeriodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string | null
      tanggalMulai: Date
      tanggalAkhir: Date
      isActive: boolean
      templateType: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["periodeAnggaran"]>
    composites: {}
  }

  type PeriodeAnggaranGetPayload<S extends boolean | null | undefined | PeriodeAnggaranDefaultArgs> = $Result.GetResult<Prisma.$PeriodeAnggaranPayload, S>

  type PeriodeAnggaranCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PeriodeAnggaranFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PeriodeAnggaranCountAggregateInputType | true
    }

  export interface PeriodeAnggaranDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PeriodeAnggaran'], meta: { name: 'PeriodeAnggaran' } }
    /**
     * Find zero or one PeriodeAnggaran that matches the filter.
     * @param {PeriodeAnggaranFindUniqueArgs} args - Arguments to find a PeriodeAnggaran
     * @example
     * // Get one PeriodeAnggaran
     * const periodeAnggaran = await prisma.periodeAnggaran.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeriodeAnggaranFindUniqueArgs>(args: SelectSubset<T, PeriodeAnggaranFindUniqueArgs<ExtArgs>>): Prisma__PeriodeAnggaranClient<$Result.GetResult<Prisma.$PeriodeAnggaranPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PeriodeAnggaran that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PeriodeAnggaranFindUniqueOrThrowArgs} args - Arguments to find a PeriodeAnggaran
     * @example
     * // Get one PeriodeAnggaran
     * const periodeAnggaran = await prisma.periodeAnggaran.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeriodeAnggaranFindUniqueOrThrowArgs>(args: SelectSubset<T, PeriodeAnggaranFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeriodeAnggaranClient<$Result.GetResult<Prisma.$PeriodeAnggaranPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PeriodeAnggaran that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodeAnggaranFindFirstArgs} args - Arguments to find a PeriodeAnggaran
     * @example
     * // Get one PeriodeAnggaran
     * const periodeAnggaran = await prisma.periodeAnggaran.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeriodeAnggaranFindFirstArgs>(args?: SelectSubset<T, PeriodeAnggaranFindFirstArgs<ExtArgs>>): Prisma__PeriodeAnggaranClient<$Result.GetResult<Prisma.$PeriodeAnggaranPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PeriodeAnggaran that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodeAnggaranFindFirstOrThrowArgs} args - Arguments to find a PeriodeAnggaran
     * @example
     * // Get one PeriodeAnggaran
     * const periodeAnggaran = await prisma.periodeAnggaran.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeriodeAnggaranFindFirstOrThrowArgs>(args?: SelectSubset<T, PeriodeAnggaranFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeriodeAnggaranClient<$Result.GetResult<Prisma.$PeriodeAnggaranPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PeriodeAnggarans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodeAnggaranFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PeriodeAnggarans
     * const periodeAnggarans = await prisma.periodeAnggaran.findMany()
     * 
     * // Get first 10 PeriodeAnggarans
     * const periodeAnggarans = await prisma.periodeAnggaran.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const periodeAnggaranWithIdOnly = await prisma.periodeAnggaran.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PeriodeAnggaranFindManyArgs>(args?: SelectSubset<T, PeriodeAnggaranFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeriodeAnggaranPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PeriodeAnggaran.
     * @param {PeriodeAnggaranCreateArgs} args - Arguments to create a PeriodeAnggaran.
     * @example
     * // Create one PeriodeAnggaran
     * const PeriodeAnggaran = await prisma.periodeAnggaran.create({
     *   data: {
     *     // ... data to create a PeriodeAnggaran
     *   }
     * })
     * 
     */
    create<T extends PeriodeAnggaranCreateArgs>(args: SelectSubset<T, PeriodeAnggaranCreateArgs<ExtArgs>>): Prisma__PeriodeAnggaranClient<$Result.GetResult<Prisma.$PeriodeAnggaranPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PeriodeAnggarans.
     * @param {PeriodeAnggaranCreateManyArgs} args - Arguments to create many PeriodeAnggarans.
     * @example
     * // Create many PeriodeAnggarans
     * const periodeAnggaran = await prisma.periodeAnggaran.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeriodeAnggaranCreateManyArgs>(args?: SelectSubset<T, PeriodeAnggaranCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PeriodeAnggarans and returns the data saved in the database.
     * @param {PeriodeAnggaranCreateManyAndReturnArgs} args - Arguments to create many PeriodeAnggarans.
     * @example
     * // Create many PeriodeAnggarans
     * const periodeAnggaran = await prisma.periodeAnggaran.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PeriodeAnggarans and only return the `id`
     * const periodeAnggaranWithIdOnly = await prisma.periodeAnggaran.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeriodeAnggaranCreateManyAndReturnArgs>(args?: SelectSubset<T, PeriodeAnggaranCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeriodeAnggaranPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PeriodeAnggaran.
     * @param {PeriodeAnggaranDeleteArgs} args - Arguments to delete one PeriodeAnggaran.
     * @example
     * // Delete one PeriodeAnggaran
     * const PeriodeAnggaran = await prisma.periodeAnggaran.delete({
     *   where: {
     *     // ... filter to delete one PeriodeAnggaran
     *   }
     * })
     * 
     */
    delete<T extends PeriodeAnggaranDeleteArgs>(args: SelectSubset<T, PeriodeAnggaranDeleteArgs<ExtArgs>>): Prisma__PeriodeAnggaranClient<$Result.GetResult<Prisma.$PeriodeAnggaranPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PeriodeAnggaran.
     * @param {PeriodeAnggaranUpdateArgs} args - Arguments to update one PeriodeAnggaran.
     * @example
     * // Update one PeriodeAnggaran
     * const periodeAnggaran = await prisma.periodeAnggaran.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeriodeAnggaranUpdateArgs>(args: SelectSubset<T, PeriodeAnggaranUpdateArgs<ExtArgs>>): Prisma__PeriodeAnggaranClient<$Result.GetResult<Prisma.$PeriodeAnggaranPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PeriodeAnggarans.
     * @param {PeriodeAnggaranDeleteManyArgs} args - Arguments to filter PeriodeAnggarans to delete.
     * @example
     * // Delete a few PeriodeAnggarans
     * const { count } = await prisma.periodeAnggaran.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeriodeAnggaranDeleteManyArgs>(args?: SelectSubset<T, PeriodeAnggaranDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PeriodeAnggarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodeAnggaranUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PeriodeAnggarans
     * const periodeAnggaran = await prisma.periodeAnggaran.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeriodeAnggaranUpdateManyArgs>(args: SelectSubset<T, PeriodeAnggaranUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PeriodeAnggaran.
     * @param {PeriodeAnggaranUpsertArgs} args - Arguments to update or create a PeriodeAnggaran.
     * @example
     * // Update or create a PeriodeAnggaran
     * const periodeAnggaran = await prisma.periodeAnggaran.upsert({
     *   create: {
     *     // ... data to create a PeriodeAnggaran
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PeriodeAnggaran we want to update
     *   }
     * })
     */
    upsert<T extends PeriodeAnggaranUpsertArgs>(args: SelectSubset<T, PeriodeAnggaranUpsertArgs<ExtArgs>>): Prisma__PeriodeAnggaranClient<$Result.GetResult<Prisma.$PeriodeAnggaranPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PeriodeAnggarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodeAnggaranCountArgs} args - Arguments to filter PeriodeAnggarans to count.
     * @example
     * // Count the number of PeriodeAnggarans
     * const count = await prisma.periodeAnggaran.count({
     *   where: {
     *     // ... the filter for the PeriodeAnggarans we want to count
     *   }
     * })
    **/
    count<T extends PeriodeAnggaranCountArgs>(
      args?: Subset<T, PeriodeAnggaranCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeriodeAnggaranCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PeriodeAnggaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodeAnggaranAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PeriodeAnggaranAggregateArgs>(args: Subset<T, PeriodeAnggaranAggregateArgs>): Prisma.PrismaPromise<GetPeriodeAnggaranAggregateType<T>>

    /**
     * Group by PeriodeAnggaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodeAnggaranGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PeriodeAnggaranGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeriodeAnggaranGroupByArgs['orderBy'] }
        : { orderBy?: PeriodeAnggaranGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PeriodeAnggaranGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeriodeAnggaranGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PeriodeAnggaran model
   */
  readonly fields: PeriodeAnggaranFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PeriodeAnggaran.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeriodeAnggaranClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaksi<T extends PeriodeAnggaran$transaksiArgs<ExtArgs> = {}>(args?: Subset<T, PeriodeAnggaran$transaksiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findMany"> | Null>
    anggaranKategoriPeriode<T extends PeriodeAnggaran$anggaranKategoriPeriodeArgs<ExtArgs> = {}>(args?: Subset<T, PeriodeAnggaran$anggaranKategoriPeriodeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnggaranKategoriPeriodePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PeriodeAnggaran model
   */ 
  interface PeriodeAnggaranFieldRefs {
    readonly id: FieldRef<"PeriodeAnggaran", 'String'>
    readonly nama: FieldRef<"PeriodeAnggaran", 'String'>
    readonly tanggalMulai: FieldRef<"PeriodeAnggaran", 'DateTime'>
    readonly tanggalAkhir: FieldRef<"PeriodeAnggaran", 'DateTime'>
    readonly isActive: FieldRef<"PeriodeAnggaran", 'Boolean'>
    readonly templateType: FieldRef<"PeriodeAnggaran", 'String'>
    readonly notes: FieldRef<"PeriodeAnggaran", 'String'>
    readonly createdAt: FieldRef<"PeriodeAnggaran", 'DateTime'>
    readonly updatedAt: FieldRef<"PeriodeAnggaran", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PeriodeAnggaran findUnique
   */
  export type PeriodeAnggaranFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeAnggaran
     */
    select?: PeriodeAnggaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeAnggaranInclude<ExtArgs> | null
    /**
     * Filter, which PeriodeAnggaran to fetch.
     */
    where: PeriodeAnggaranWhereUniqueInput
  }

  /**
   * PeriodeAnggaran findUniqueOrThrow
   */
  export type PeriodeAnggaranFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeAnggaran
     */
    select?: PeriodeAnggaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeAnggaranInclude<ExtArgs> | null
    /**
     * Filter, which PeriodeAnggaran to fetch.
     */
    where: PeriodeAnggaranWhereUniqueInput
  }

  /**
   * PeriodeAnggaran findFirst
   */
  export type PeriodeAnggaranFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeAnggaran
     */
    select?: PeriodeAnggaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeAnggaranInclude<ExtArgs> | null
    /**
     * Filter, which PeriodeAnggaran to fetch.
     */
    where?: PeriodeAnggaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeriodeAnggarans to fetch.
     */
    orderBy?: PeriodeAnggaranOrderByWithRelationInput | PeriodeAnggaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeriodeAnggarans.
     */
    cursor?: PeriodeAnggaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeriodeAnggarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeriodeAnggarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeriodeAnggarans.
     */
    distinct?: PeriodeAnggaranScalarFieldEnum | PeriodeAnggaranScalarFieldEnum[]
  }

  /**
   * PeriodeAnggaran findFirstOrThrow
   */
  export type PeriodeAnggaranFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeAnggaran
     */
    select?: PeriodeAnggaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeAnggaranInclude<ExtArgs> | null
    /**
     * Filter, which PeriodeAnggaran to fetch.
     */
    where?: PeriodeAnggaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeriodeAnggarans to fetch.
     */
    orderBy?: PeriodeAnggaranOrderByWithRelationInput | PeriodeAnggaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeriodeAnggarans.
     */
    cursor?: PeriodeAnggaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeriodeAnggarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeriodeAnggarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeriodeAnggarans.
     */
    distinct?: PeriodeAnggaranScalarFieldEnum | PeriodeAnggaranScalarFieldEnum[]
  }

  /**
   * PeriodeAnggaran findMany
   */
  export type PeriodeAnggaranFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeAnggaran
     */
    select?: PeriodeAnggaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeAnggaranInclude<ExtArgs> | null
    /**
     * Filter, which PeriodeAnggarans to fetch.
     */
    where?: PeriodeAnggaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeriodeAnggarans to fetch.
     */
    orderBy?: PeriodeAnggaranOrderByWithRelationInput | PeriodeAnggaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PeriodeAnggarans.
     */
    cursor?: PeriodeAnggaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeriodeAnggarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeriodeAnggarans.
     */
    skip?: number
    distinct?: PeriodeAnggaranScalarFieldEnum | PeriodeAnggaranScalarFieldEnum[]
  }

  /**
   * PeriodeAnggaran create
   */
  export type PeriodeAnggaranCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeAnggaran
     */
    select?: PeriodeAnggaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeAnggaranInclude<ExtArgs> | null
    /**
     * The data needed to create a PeriodeAnggaran.
     */
    data: XOR<PeriodeAnggaranCreateInput, PeriodeAnggaranUncheckedCreateInput>
  }

  /**
   * PeriodeAnggaran createMany
   */
  export type PeriodeAnggaranCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PeriodeAnggarans.
     */
    data: PeriodeAnggaranCreateManyInput | PeriodeAnggaranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PeriodeAnggaran createManyAndReturn
   */
  export type PeriodeAnggaranCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeAnggaran
     */
    select?: PeriodeAnggaranSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PeriodeAnggarans.
     */
    data: PeriodeAnggaranCreateManyInput | PeriodeAnggaranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PeriodeAnggaran update
   */
  export type PeriodeAnggaranUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeAnggaran
     */
    select?: PeriodeAnggaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeAnggaranInclude<ExtArgs> | null
    /**
     * The data needed to update a PeriodeAnggaran.
     */
    data: XOR<PeriodeAnggaranUpdateInput, PeriodeAnggaranUncheckedUpdateInput>
    /**
     * Choose, which PeriodeAnggaran to update.
     */
    where: PeriodeAnggaranWhereUniqueInput
  }

  /**
   * PeriodeAnggaran updateMany
   */
  export type PeriodeAnggaranUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PeriodeAnggarans.
     */
    data: XOR<PeriodeAnggaranUpdateManyMutationInput, PeriodeAnggaranUncheckedUpdateManyInput>
    /**
     * Filter which PeriodeAnggarans to update
     */
    where?: PeriodeAnggaranWhereInput
  }

  /**
   * PeriodeAnggaran upsert
   */
  export type PeriodeAnggaranUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeAnggaran
     */
    select?: PeriodeAnggaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeAnggaranInclude<ExtArgs> | null
    /**
     * The filter to search for the PeriodeAnggaran to update in case it exists.
     */
    where: PeriodeAnggaranWhereUniqueInput
    /**
     * In case the PeriodeAnggaran found by the `where` argument doesn't exist, create a new PeriodeAnggaran with this data.
     */
    create: XOR<PeriodeAnggaranCreateInput, PeriodeAnggaranUncheckedCreateInput>
    /**
     * In case the PeriodeAnggaran was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeriodeAnggaranUpdateInput, PeriodeAnggaranUncheckedUpdateInput>
  }

  /**
   * PeriodeAnggaran delete
   */
  export type PeriodeAnggaranDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeAnggaran
     */
    select?: PeriodeAnggaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeAnggaranInclude<ExtArgs> | null
    /**
     * Filter which PeriodeAnggaran to delete.
     */
    where: PeriodeAnggaranWhereUniqueInput
  }

  /**
   * PeriodeAnggaran deleteMany
   */
  export type PeriodeAnggaranDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeriodeAnggarans to delete
     */
    where?: PeriodeAnggaranWhereInput
  }

  /**
   * PeriodeAnggaran.transaksi
   */
  export type PeriodeAnggaran$transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    where?: TransaksiWhereInput
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    cursor?: TransaksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * PeriodeAnggaran.anggaranKategoriPeriode
   */
  export type PeriodeAnggaran$anggaranKategoriPeriodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggaranKategoriPeriode
     */
    select?: AnggaranKategoriPeriodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggaranKategoriPeriodeInclude<ExtArgs> | null
    where?: AnggaranKategoriPeriodeWhereInput
    orderBy?: AnggaranKategoriPeriodeOrderByWithRelationInput | AnggaranKategoriPeriodeOrderByWithRelationInput[]
    cursor?: AnggaranKategoriPeriodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnggaranKategoriPeriodeScalarFieldEnum | AnggaranKategoriPeriodeScalarFieldEnum[]
  }

  /**
   * PeriodeAnggaran without action
   */
  export type PeriodeAnggaranDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeAnggaran
     */
    select?: PeriodeAnggaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeAnggaranInclude<ExtArgs> | null
  }


  /**
   * Model Transaksi
   */

  export type AggregateTransaksi = {
    _count: TransaksiCountAggregateOutputType | null
    _avg: TransaksiAvgAggregateOutputType | null
    _sum: TransaksiSumAggregateOutputType | null
    _min: TransaksiMinAggregateOutputType | null
    _max: TransaksiMaxAggregateOutputType | null
  }

  export type TransaksiAvgAggregateOutputType = {
    jumlah: Decimal | null
  }

  export type TransaksiSumAggregateOutputType = {
    jumlah: Decimal | null
  }

  export type TransaksiMinAggregateOutputType = {
    id: string | null
    tanggal: Date | null
    deskripsi: string | null
    jumlah: Decimal | null
    kategoriId: string | null
    periodeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransaksiMaxAggregateOutputType = {
    id: string | null
    tanggal: Date | null
    deskripsi: string | null
    jumlah: Decimal | null
    kategoriId: string | null
    periodeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransaksiCountAggregateOutputType = {
    id: number
    tanggal: number
    deskripsi: number
    jumlah: number
    kategoriId: number
    periodeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransaksiAvgAggregateInputType = {
    jumlah?: true
  }

  export type TransaksiSumAggregateInputType = {
    jumlah?: true
  }

  export type TransaksiMinAggregateInputType = {
    id?: true
    tanggal?: true
    deskripsi?: true
    jumlah?: true
    kategoriId?: true
    periodeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransaksiMaxAggregateInputType = {
    id?: true
    tanggal?: true
    deskripsi?: true
    jumlah?: true
    kategoriId?: true
    periodeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransaksiCountAggregateInputType = {
    id?: true
    tanggal?: true
    deskripsi?: true
    jumlah?: true
    kategoriId?: true
    periodeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransaksiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaksi to aggregate.
     */
    where?: TransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaksis to fetch.
     */
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transaksis
    **/
    _count?: true | TransaksiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransaksiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransaksiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransaksiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransaksiMaxAggregateInputType
  }

  export type GetTransaksiAggregateType<T extends TransaksiAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaksi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaksi[P]>
      : GetScalarType<T[P], AggregateTransaksi[P]>
  }




  export type TransaksiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaksiWhereInput
    orderBy?: TransaksiOrderByWithAggregationInput | TransaksiOrderByWithAggregationInput[]
    by: TransaksiScalarFieldEnum[] | TransaksiScalarFieldEnum
    having?: TransaksiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransaksiCountAggregateInputType | true
    _avg?: TransaksiAvgAggregateInputType
    _sum?: TransaksiSumAggregateInputType
    _min?: TransaksiMinAggregateInputType
    _max?: TransaksiMaxAggregateInputType
  }

  export type TransaksiGroupByOutputType = {
    id: string
    tanggal: Date
    deskripsi: string
    jumlah: Decimal
    kategoriId: string
    periodeId: string
    createdAt: Date
    updatedAt: Date
    _count: TransaksiCountAggregateOutputType | null
    _avg: TransaksiAvgAggregateOutputType | null
    _sum: TransaksiSumAggregateOutputType | null
    _min: TransaksiMinAggregateOutputType | null
    _max: TransaksiMaxAggregateOutputType | null
  }

  type GetTransaksiGroupByPayload<T extends TransaksiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransaksiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransaksiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransaksiGroupByOutputType[P]>
            : GetScalarType<T[P], TransaksiGroupByOutputType[P]>
        }
      >
    >


  export type TransaksiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    deskripsi?: boolean
    jumlah?: boolean
    kategoriId?: boolean
    periodeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kategori?: boolean | KategoriPaguDefaultArgs<ExtArgs>
    periode?: boolean | PeriodeAnggaranDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaksi"]>

  export type TransaksiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    deskripsi?: boolean
    jumlah?: boolean
    kategoriId?: boolean
    periodeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kategori?: boolean | KategoriPaguDefaultArgs<ExtArgs>
    periode?: boolean | PeriodeAnggaranDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaksi"]>

  export type TransaksiSelectScalar = {
    id?: boolean
    tanggal?: boolean
    deskripsi?: boolean
    jumlah?: boolean
    kategoriId?: boolean
    periodeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransaksiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | KategoriPaguDefaultArgs<ExtArgs>
    periode?: boolean | PeriodeAnggaranDefaultArgs<ExtArgs>
  }
  export type TransaksiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | KategoriPaguDefaultArgs<ExtArgs>
    periode?: boolean | PeriodeAnggaranDefaultArgs<ExtArgs>
  }

  export type $TransaksiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaksi"
    objects: {
      kategori: Prisma.$KategoriPaguPayload<ExtArgs>
      periode: Prisma.$PeriodeAnggaranPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tanggal: Date
      deskripsi: string
      jumlah: Prisma.Decimal
      kategoriId: string
      periodeId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaksi"]>
    composites: {}
  }

  type TransaksiGetPayload<S extends boolean | null | undefined | TransaksiDefaultArgs> = $Result.GetResult<Prisma.$TransaksiPayload, S>

  type TransaksiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransaksiFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransaksiCountAggregateInputType | true
    }

  export interface TransaksiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaksi'], meta: { name: 'Transaksi' } }
    /**
     * Find zero or one Transaksi that matches the filter.
     * @param {TransaksiFindUniqueArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransaksiFindUniqueArgs>(args: SelectSubset<T, TransaksiFindUniqueArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transaksi that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransaksiFindUniqueOrThrowArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransaksiFindUniqueOrThrowArgs>(args: SelectSubset<T, TransaksiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transaksi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiFindFirstArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransaksiFindFirstArgs>(args?: SelectSubset<T, TransaksiFindFirstArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transaksi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiFindFirstOrThrowArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransaksiFindFirstOrThrowArgs>(args?: SelectSubset<T, TransaksiFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transaksis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaksis
     * const transaksis = await prisma.transaksi.findMany()
     * 
     * // Get first 10 Transaksis
     * const transaksis = await prisma.transaksi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transaksiWithIdOnly = await prisma.transaksi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransaksiFindManyArgs>(args?: SelectSubset<T, TransaksiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transaksi.
     * @param {TransaksiCreateArgs} args - Arguments to create a Transaksi.
     * @example
     * // Create one Transaksi
     * const Transaksi = await prisma.transaksi.create({
     *   data: {
     *     // ... data to create a Transaksi
     *   }
     * })
     * 
     */
    create<T extends TransaksiCreateArgs>(args: SelectSubset<T, TransaksiCreateArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transaksis.
     * @param {TransaksiCreateManyArgs} args - Arguments to create many Transaksis.
     * @example
     * // Create many Transaksis
     * const transaksi = await prisma.transaksi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransaksiCreateManyArgs>(args?: SelectSubset<T, TransaksiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transaksis and returns the data saved in the database.
     * @param {TransaksiCreateManyAndReturnArgs} args - Arguments to create many Transaksis.
     * @example
     * // Create many Transaksis
     * const transaksi = await prisma.transaksi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transaksis and only return the `id`
     * const transaksiWithIdOnly = await prisma.transaksi.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransaksiCreateManyAndReturnArgs>(args?: SelectSubset<T, TransaksiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Transaksi.
     * @param {TransaksiDeleteArgs} args - Arguments to delete one Transaksi.
     * @example
     * // Delete one Transaksi
     * const Transaksi = await prisma.transaksi.delete({
     *   where: {
     *     // ... filter to delete one Transaksi
     *   }
     * })
     * 
     */
    delete<T extends TransaksiDeleteArgs>(args: SelectSubset<T, TransaksiDeleteArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transaksi.
     * @param {TransaksiUpdateArgs} args - Arguments to update one Transaksi.
     * @example
     * // Update one Transaksi
     * const transaksi = await prisma.transaksi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransaksiUpdateArgs>(args: SelectSubset<T, TransaksiUpdateArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transaksis.
     * @param {TransaksiDeleteManyArgs} args - Arguments to filter Transaksis to delete.
     * @example
     * // Delete a few Transaksis
     * const { count } = await prisma.transaksi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransaksiDeleteManyArgs>(args?: SelectSubset<T, TransaksiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaksis
     * const transaksi = await prisma.transaksi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransaksiUpdateManyArgs>(args: SelectSubset<T, TransaksiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaksi.
     * @param {TransaksiUpsertArgs} args - Arguments to update or create a Transaksi.
     * @example
     * // Update or create a Transaksi
     * const transaksi = await prisma.transaksi.upsert({
     *   create: {
     *     // ... data to create a Transaksi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaksi we want to update
     *   }
     * })
     */
    upsert<T extends TransaksiUpsertArgs>(args: SelectSubset<T, TransaksiUpsertArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiCountArgs} args - Arguments to filter Transaksis to count.
     * @example
     * // Count the number of Transaksis
     * const count = await prisma.transaksi.count({
     *   where: {
     *     // ... the filter for the Transaksis we want to count
     *   }
     * })
    **/
    count<T extends TransaksiCountArgs>(
      args?: Subset<T, TransaksiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransaksiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransaksiAggregateArgs>(args: Subset<T, TransaksiAggregateArgs>): Prisma.PrismaPromise<GetTransaksiAggregateType<T>>

    /**
     * Group by Transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransaksiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransaksiGroupByArgs['orderBy'] }
        : { orderBy?: TransaksiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransaksiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaksiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaksi model
   */
  readonly fields: TransaksiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaksi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransaksiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kategori<T extends KategoriPaguDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KategoriPaguDefaultArgs<ExtArgs>>): Prisma__KategoriPaguClient<$Result.GetResult<Prisma.$KategoriPaguPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    periode<T extends PeriodeAnggaranDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeriodeAnggaranDefaultArgs<ExtArgs>>): Prisma__PeriodeAnggaranClient<$Result.GetResult<Prisma.$PeriodeAnggaranPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaksi model
   */ 
  interface TransaksiFieldRefs {
    readonly id: FieldRef<"Transaksi", 'String'>
    readonly tanggal: FieldRef<"Transaksi", 'DateTime'>
    readonly deskripsi: FieldRef<"Transaksi", 'String'>
    readonly jumlah: FieldRef<"Transaksi", 'Decimal'>
    readonly kategoriId: FieldRef<"Transaksi", 'String'>
    readonly periodeId: FieldRef<"Transaksi", 'String'>
    readonly createdAt: FieldRef<"Transaksi", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaksi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaksi findUnique
   */
  export type TransaksiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksi to fetch.
     */
    where: TransaksiWhereUniqueInput
  }

  /**
   * Transaksi findUniqueOrThrow
   */
  export type TransaksiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksi to fetch.
     */
    where: TransaksiWhereUniqueInput
  }

  /**
   * Transaksi findFirst
   */
  export type TransaksiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksi to fetch.
     */
    where?: TransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaksis to fetch.
     */
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transaksis.
     */
    cursor?: TransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transaksis.
     */
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * Transaksi findFirstOrThrow
   */
  export type TransaksiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksi to fetch.
     */
    where?: TransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaksis to fetch.
     */
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transaksis.
     */
    cursor?: TransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transaksis.
     */
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * Transaksi findMany
   */
  export type TransaksiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksis to fetch.
     */
    where?: TransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaksis to fetch.
     */
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transaksis.
     */
    cursor?: TransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaksis.
     */
    skip?: number
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * Transaksi create
   */
  export type TransaksiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaksi.
     */
    data: XOR<TransaksiCreateInput, TransaksiUncheckedCreateInput>
  }

  /**
   * Transaksi createMany
   */
  export type TransaksiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transaksis.
     */
    data: TransaksiCreateManyInput | TransaksiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaksi createManyAndReturn
   */
  export type TransaksiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Transaksis.
     */
    data: TransaksiCreateManyInput | TransaksiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaksi update
   */
  export type TransaksiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaksi.
     */
    data: XOR<TransaksiUpdateInput, TransaksiUncheckedUpdateInput>
    /**
     * Choose, which Transaksi to update.
     */
    where: TransaksiWhereUniqueInput
  }

  /**
   * Transaksi updateMany
   */
  export type TransaksiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transaksis.
     */
    data: XOR<TransaksiUpdateManyMutationInput, TransaksiUncheckedUpdateManyInput>
    /**
     * Filter which Transaksis to update
     */
    where?: TransaksiWhereInput
  }

  /**
   * Transaksi upsert
   */
  export type TransaksiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaksi to update in case it exists.
     */
    where: TransaksiWhereUniqueInput
    /**
     * In case the Transaksi found by the `where` argument doesn't exist, create a new Transaksi with this data.
     */
    create: XOR<TransaksiCreateInput, TransaksiUncheckedCreateInput>
    /**
     * In case the Transaksi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransaksiUpdateInput, TransaksiUncheckedUpdateInput>
  }

  /**
   * Transaksi delete
   */
  export type TransaksiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter which Transaksi to delete.
     */
    where: TransaksiWhereUniqueInput
  }

  /**
   * Transaksi deleteMany
   */
  export type TransaksiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaksis to delete
     */
    where?: TransaksiWhereInput
  }

  /**
   * Transaksi without action
   */
  export type TransaksiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
  }


  /**
   * Model AnggaranKategoriPeriode
   */

  export type AggregateAnggaranKategoriPeriode = {
    _count: AnggaranKategoriPeriodeCountAggregateOutputType | null
    _avg: AnggaranKategoriPeriodeAvgAggregateOutputType | null
    _sum: AnggaranKategoriPeriodeSumAggregateOutputType | null
    _min: AnggaranKategoriPeriodeMinAggregateOutputType | null
    _max: AnggaranKategoriPeriodeMaxAggregateOutputType | null
  }

  export type AnggaranKategoriPeriodeAvgAggregateOutputType = {
    anggaran: Decimal | null
  }

  export type AnggaranKategoriPeriodeSumAggregateOutputType = {
    anggaran: Decimal | null
  }

  export type AnggaranKategoriPeriodeMinAggregateOutputType = {
    id: string | null
    kategoriId: string | null
    periodeId: string | null
    anggaran: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnggaranKategoriPeriodeMaxAggregateOutputType = {
    id: string | null
    kategoriId: string | null
    periodeId: string | null
    anggaran: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnggaranKategoriPeriodeCountAggregateOutputType = {
    id: number
    kategoriId: number
    periodeId: number
    anggaran: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnggaranKategoriPeriodeAvgAggregateInputType = {
    anggaran?: true
  }

  export type AnggaranKategoriPeriodeSumAggregateInputType = {
    anggaran?: true
  }

  export type AnggaranKategoriPeriodeMinAggregateInputType = {
    id?: true
    kategoriId?: true
    periodeId?: true
    anggaran?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnggaranKategoriPeriodeMaxAggregateInputType = {
    id?: true
    kategoriId?: true
    periodeId?: true
    anggaran?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnggaranKategoriPeriodeCountAggregateInputType = {
    id?: true
    kategoriId?: true
    periodeId?: true
    anggaran?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnggaranKategoriPeriodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnggaranKategoriPeriode to aggregate.
     */
    where?: AnggaranKategoriPeriodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnggaranKategoriPeriodes to fetch.
     */
    orderBy?: AnggaranKategoriPeriodeOrderByWithRelationInput | AnggaranKategoriPeriodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnggaranKategoriPeriodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnggaranKategoriPeriodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnggaranKategoriPeriodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnggaranKategoriPeriodes
    **/
    _count?: true | AnggaranKategoriPeriodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnggaranKategoriPeriodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnggaranKategoriPeriodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnggaranKategoriPeriodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnggaranKategoriPeriodeMaxAggregateInputType
  }

  export type GetAnggaranKategoriPeriodeAggregateType<T extends AnggaranKategoriPeriodeAggregateArgs> = {
        [P in keyof T & keyof AggregateAnggaranKategoriPeriode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnggaranKategoriPeriode[P]>
      : GetScalarType<T[P], AggregateAnggaranKategoriPeriode[P]>
  }




  export type AnggaranKategoriPeriodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnggaranKategoriPeriodeWhereInput
    orderBy?: AnggaranKategoriPeriodeOrderByWithAggregationInput | AnggaranKategoriPeriodeOrderByWithAggregationInput[]
    by: AnggaranKategoriPeriodeScalarFieldEnum[] | AnggaranKategoriPeriodeScalarFieldEnum
    having?: AnggaranKategoriPeriodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnggaranKategoriPeriodeCountAggregateInputType | true
    _avg?: AnggaranKategoriPeriodeAvgAggregateInputType
    _sum?: AnggaranKategoriPeriodeSumAggregateInputType
    _min?: AnggaranKategoriPeriodeMinAggregateInputType
    _max?: AnggaranKategoriPeriodeMaxAggregateInputType
  }

  export type AnggaranKategoriPeriodeGroupByOutputType = {
    id: string
    kategoriId: string
    periodeId: string
    anggaran: Decimal
    createdAt: Date
    updatedAt: Date
    _count: AnggaranKategoriPeriodeCountAggregateOutputType | null
    _avg: AnggaranKategoriPeriodeAvgAggregateOutputType | null
    _sum: AnggaranKategoriPeriodeSumAggregateOutputType | null
    _min: AnggaranKategoriPeriodeMinAggregateOutputType | null
    _max: AnggaranKategoriPeriodeMaxAggregateOutputType | null
  }

  type GetAnggaranKategoriPeriodeGroupByPayload<T extends AnggaranKategoriPeriodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnggaranKategoriPeriodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnggaranKategoriPeriodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnggaranKategoriPeriodeGroupByOutputType[P]>
            : GetScalarType<T[P], AnggaranKategoriPeriodeGroupByOutputType[P]>
        }
      >
    >


  export type AnggaranKategoriPeriodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kategoriId?: boolean
    periodeId?: boolean
    anggaran?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kategori?: boolean | KategoriPaguDefaultArgs<ExtArgs>
    periode?: boolean | PeriodeAnggaranDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anggaranKategoriPeriode"]>

  export type AnggaranKategoriPeriodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kategoriId?: boolean
    periodeId?: boolean
    anggaran?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kategori?: boolean | KategoriPaguDefaultArgs<ExtArgs>
    periode?: boolean | PeriodeAnggaranDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anggaranKategoriPeriode"]>

  export type AnggaranKategoriPeriodeSelectScalar = {
    id?: boolean
    kategoriId?: boolean
    periodeId?: boolean
    anggaran?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnggaranKategoriPeriodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | KategoriPaguDefaultArgs<ExtArgs>
    periode?: boolean | PeriodeAnggaranDefaultArgs<ExtArgs>
  }
  export type AnggaranKategoriPeriodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | KategoriPaguDefaultArgs<ExtArgs>
    periode?: boolean | PeriodeAnggaranDefaultArgs<ExtArgs>
  }

  export type $AnggaranKategoriPeriodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnggaranKategoriPeriode"
    objects: {
      kategori: Prisma.$KategoriPaguPayload<ExtArgs>
      periode: Prisma.$PeriodeAnggaranPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      kategoriId: string
      periodeId: string
      anggaran: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["anggaranKategoriPeriode"]>
    composites: {}
  }

  type AnggaranKategoriPeriodeGetPayload<S extends boolean | null | undefined | AnggaranKategoriPeriodeDefaultArgs> = $Result.GetResult<Prisma.$AnggaranKategoriPeriodePayload, S>

  type AnggaranKategoriPeriodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnggaranKategoriPeriodeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnggaranKategoriPeriodeCountAggregateInputType | true
    }

  export interface AnggaranKategoriPeriodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnggaranKategoriPeriode'], meta: { name: 'AnggaranKategoriPeriode' } }
    /**
     * Find zero or one AnggaranKategoriPeriode that matches the filter.
     * @param {AnggaranKategoriPeriodeFindUniqueArgs} args - Arguments to find a AnggaranKategoriPeriode
     * @example
     * // Get one AnggaranKategoriPeriode
     * const anggaranKategoriPeriode = await prisma.anggaranKategoriPeriode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnggaranKategoriPeriodeFindUniqueArgs>(args: SelectSubset<T, AnggaranKategoriPeriodeFindUniqueArgs<ExtArgs>>): Prisma__AnggaranKategoriPeriodeClient<$Result.GetResult<Prisma.$AnggaranKategoriPeriodePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AnggaranKategoriPeriode that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AnggaranKategoriPeriodeFindUniqueOrThrowArgs} args - Arguments to find a AnggaranKategoriPeriode
     * @example
     * // Get one AnggaranKategoriPeriode
     * const anggaranKategoriPeriode = await prisma.anggaranKategoriPeriode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnggaranKategoriPeriodeFindUniqueOrThrowArgs>(args: SelectSubset<T, AnggaranKategoriPeriodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnggaranKategoriPeriodeClient<$Result.GetResult<Prisma.$AnggaranKategoriPeriodePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AnggaranKategoriPeriode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnggaranKategoriPeriodeFindFirstArgs} args - Arguments to find a AnggaranKategoriPeriode
     * @example
     * // Get one AnggaranKategoriPeriode
     * const anggaranKategoriPeriode = await prisma.anggaranKategoriPeriode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnggaranKategoriPeriodeFindFirstArgs>(args?: SelectSubset<T, AnggaranKategoriPeriodeFindFirstArgs<ExtArgs>>): Prisma__AnggaranKategoriPeriodeClient<$Result.GetResult<Prisma.$AnggaranKategoriPeriodePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AnggaranKategoriPeriode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnggaranKategoriPeriodeFindFirstOrThrowArgs} args - Arguments to find a AnggaranKategoriPeriode
     * @example
     * // Get one AnggaranKategoriPeriode
     * const anggaranKategoriPeriode = await prisma.anggaranKategoriPeriode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnggaranKategoriPeriodeFindFirstOrThrowArgs>(args?: SelectSubset<T, AnggaranKategoriPeriodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnggaranKategoriPeriodeClient<$Result.GetResult<Prisma.$AnggaranKategoriPeriodePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AnggaranKategoriPeriodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnggaranKategoriPeriodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnggaranKategoriPeriodes
     * const anggaranKategoriPeriodes = await prisma.anggaranKategoriPeriode.findMany()
     * 
     * // Get first 10 AnggaranKategoriPeriodes
     * const anggaranKategoriPeriodes = await prisma.anggaranKategoriPeriode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const anggaranKategoriPeriodeWithIdOnly = await prisma.anggaranKategoriPeriode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnggaranKategoriPeriodeFindManyArgs>(args?: SelectSubset<T, AnggaranKategoriPeriodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnggaranKategoriPeriodePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AnggaranKategoriPeriode.
     * @param {AnggaranKategoriPeriodeCreateArgs} args - Arguments to create a AnggaranKategoriPeriode.
     * @example
     * // Create one AnggaranKategoriPeriode
     * const AnggaranKategoriPeriode = await prisma.anggaranKategoriPeriode.create({
     *   data: {
     *     // ... data to create a AnggaranKategoriPeriode
     *   }
     * })
     * 
     */
    create<T extends AnggaranKategoriPeriodeCreateArgs>(args: SelectSubset<T, AnggaranKategoriPeriodeCreateArgs<ExtArgs>>): Prisma__AnggaranKategoriPeriodeClient<$Result.GetResult<Prisma.$AnggaranKategoriPeriodePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AnggaranKategoriPeriodes.
     * @param {AnggaranKategoriPeriodeCreateManyArgs} args - Arguments to create many AnggaranKategoriPeriodes.
     * @example
     * // Create many AnggaranKategoriPeriodes
     * const anggaranKategoriPeriode = await prisma.anggaranKategoriPeriode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnggaranKategoriPeriodeCreateManyArgs>(args?: SelectSubset<T, AnggaranKategoriPeriodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnggaranKategoriPeriodes and returns the data saved in the database.
     * @param {AnggaranKategoriPeriodeCreateManyAndReturnArgs} args - Arguments to create many AnggaranKategoriPeriodes.
     * @example
     * // Create many AnggaranKategoriPeriodes
     * const anggaranKategoriPeriode = await prisma.anggaranKategoriPeriode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnggaranKategoriPeriodes and only return the `id`
     * const anggaranKategoriPeriodeWithIdOnly = await prisma.anggaranKategoriPeriode.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnggaranKategoriPeriodeCreateManyAndReturnArgs>(args?: SelectSubset<T, AnggaranKategoriPeriodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnggaranKategoriPeriodePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AnggaranKategoriPeriode.
     * @param {AnggaranKategoriPeriodeDeleteArgs} args - Arguments to delete one AnggaranKategoriPeriode.
     * @example
     * // Delete one AnggaranKategoriPeriode
     * const AnggaranKategoriPeriode = await prisma.anggaranKategoriPeriode.delete({
     *   where: {
     *     // ... filter to delete one AnggaranKategoriPeriode
     *   }
     * })
     * 
     */
    delete<T extends AnggaranKategoriPeriodeDeleteArgs>(args: SelectSubset<T, AnggaranKategoriPeriodeDeleteArgs<ExtArgs>>): Prisma__AnggaranKategoriPeriodeClient<$Result.GetResult<Prisma.$AnggaranKategoriPeriodePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AnggaranKategoriPeriode.
     * @param {AnggaranKategoriPeriodeUpdateArgs} args - Arguments to update one AnggaranKategoriPeriode.
     * @example
     * // Update one AnggaranKategoriPeriode
     * const anggaranKategoriPeriode = await prisma.anggaranKategoriPeriode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnggaranKategoriPeriodeUpdateArgs>(args: SelectSubset<T, AnggaranKategoriPeriodeUpdateArgs<ExtArgs>>): Prisma__AnggaranKategoriPeriodeClient<$Result.GetResult<Prisma.$AnggaranKategoriPeriodePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AnggaranKategoriPeriodes.
     * @param {AnggaranKategoriPeriodeDeleteManyArgs} args - Arguments to filter AnggaranKategoriPeriodes to delete.
     * @example
     * // Delete a few AnggaranKategoriPeriodes
     * const { count } = await prisma.anggaranKategoriPeriode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnggaranKategoriPeriodeDeleteManyArgs>(args?: SelectSubset<T, AnggaranKategoriPeriodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnggaranKategoriPeriodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnggaranKategoriPeriodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnggaranKategoriPeriodes
     * const anggaranKategoriPeriode = await prisma.anggaranKategoriPeriode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnggaranKategoriPeriodeUpdateManyArgs>(args: SelectSubset<T, AnggaranKategoriPeriodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AnggaranKategoriPeriode.
     * @param {AnggaranKategoriPeriodeUpsertArgs} args - Arguments to update or create a AnggaranKategoriPeriode.
     * @example
     * // Update or create a AnggaranKategoriPeriode
     * const anggaranKategoriPeriode = await prisma.anggaranKategoriPeriode.upsert({
     *   create: {
     *     // ... data to create a AnggaranKategoriPeriode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnggaranKategoriPeriode we want to update
     *   }
     * })
     */
    upsert<T extends AnggaranKategoriPeriodeUpsertArgs>(args: SelectSubset<T, AnggaranKategoriPeriodeUpsertArgs<ExtArgs>>): Prisma__AnggaranKategoriPeriodeClient<$Result.GetResult<Prisma.$AnggaranKategoriPeriodePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AnggaranKategoriPeriodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnggaranKategoriPeriodeCountArgs} args - Arguments to filter AnggaranKategoriPeriodes to count.
     * @example
     * // Count the number of AnggaranKategoriPeriodes
     * const count = await prisma.anggaranKategoriPeriode.count({
     *   where: {
     *     // ... the filter for the AnggaranKategoriPeriodes we want to count
     *   }
     * })
    **/
    count<T extends AnggaranKategoriPeriodeCountArgs>(
      args?: Subset<T, AnggaranKategoriPeriodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnggaranKategoriPeriodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnggaranKategoriPeriode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnggaranKategoriPeriodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnggaranKategoriPeriodeAggregateArgs>(args: Subset<T, AnggaranKategoriPeriodeAggregateArgs>): Prisma.PrismaPromise<GetAnggaranKategoriPeriodeAggregateType<T>>

    /**
     * Group by AnggaranKategoriPeriode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnggaranKategoriPeriodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnggaranKategoriPeriodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnggaranKategoriPeriodeGroupByArgs['orderBy'] }
        : { orderBy?: AnggaranKategoriPeriodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnggaranKategoriPeriodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnggaranKategoriPeriodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnggaranKategoriPeriode model
   */
  readonly fields: AnggaranKategoriPeriodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnggaranKategoriPeriode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnggaranKategoriPeriodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kategori<T extends KategoriPaguDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KategoriPaguDefaultArgs<ExtArgs>>): Prisma__KategoriPaguClient<$Result.GetResult<Prisma.$KategoriPaguPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    periode<T extends PeriodeAnggaranDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeriodeAnggaranDefaultArgs<ExtArgs>>): Prisma__PeriodeAnggaranClient<$Result.GetResult<Prisma.$PeriodeAnggaranPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnggaranKategoriPeriode model
   */ 
  interface AnggaranKategoriPeriodeFieldRefs {
    readonly id: FieldRef<"AnggaranKategoriPeriode", 'String'>
    readonly kategoriId: FieldRef<"AnggaranKategoriPeriode", 'String'>
    readonly periodeId: FieldRef<"AnggaranKategoriPeriode", 'String'>
    readonly anggaran: FieldRef<"AnggaranKategoriPeriode", 'Decimal'>
    readonly createdAt: FieldRef<"AnggaranKategoriPeriode", 'DateTime'>
    readonly updatedAt: FieldRef<"AnggaranKategoriPeriode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnggaranKategoriPeriode findUnique
   */
  export type AnggaranKategoriPeriodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggaranKategoriPeriode
     */
    select?: AnggaranKategoriPeriodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggaranKategoriPeriodeInclude<ExtArgs> | null
    /**
     * Filter, which AnggaranKategoriPeriode to fetch.
     */
    where: AnggaranKategoriPeriodeWhereUniqueInput
  }

  /**
   * AnggaranKategoriPeriode findUniqueOrThrow
   */
  export type AnggaranKategoriPeriodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggaranKategoriPeriode
     */
    select?: AnggaranKategoriPeriodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggaranKategoriPeriodeInclude<ExtArgs> | null
    /**
     * Filter, which AnggaranKategoriPeriode to fetch.
     */
    where: AnggaranKategoriPeriodeWhereUniqueInput
  }

  /**
   * AnggaranKategoriPeriode findFirst
   */
  export type AnggaranKategoriPeriodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggaranKategoriPeriode
     */
    select?: AnggaranKategoriPeriodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggaranKategoriPeriodeInclude<ExtArgs> | null
    /**
     * Filter, which AnggaranKategoriPeriode to fetch.
     */
    where?: AnggaranKategoriPeriodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnggaranKategoriPeriodes to fetch.
     */
    orderBy?: AnggaranKategoriPeriodeOrderByWithRelationInput | AnggaranKategoriPeriodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnggaranKategoriPeriodes.
     */
    cursor?: AnggaranKategoriPeriodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnggaranKategoriPeriodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnggaranKategoriPeriodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnggaranKategoriPeriodes.
     */
    distinct?: AnggaranKategoriPeriodeScalarFieldEnum | AnggaranKategoriPeriodeScalarFieldEnum[]
  }

  /**
   * AnggaranKategoriPeriode findFirstOrThrow
   */
  export type AnggaranKategoriPeriodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggaranKategoriPeriode
     */
    select?: AnggaranKategoriPeriodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggaranKategoriPeriodeInclude<ExtArgs> | null
    /**
     * Filter, which AnggaranKategoriPeriode to fetch.
     */
    where?: AnggaranKategoriPeriodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnggaranKategoriPeriodes to fetch.
     */
    orderBy?: AnggaranKategoriPeriodeOrderByWithRelationInput | AnggaranKategoriPeriodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnggaranKategoriPeriodes.
     */
    cursor?: AnggaranKategoriPeriodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnggaranKategoriPeriodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnggaranKategoriPeriodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnggaranKategoriPeriodes.
     */
    distinct?: AnggaranKategoriPeriodeScalarFieldEnum | AnggaranKategoriPeriodeScalarFieldEnum[]
  }

  /**
   * AnggaranKategoriPeriode findMany
   */
  export type AnggaranKategoriPeriodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggaranKategoriPeriode
     */
    select?: AnggaranKategoriPeriodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggaranKategoriPeriodeInclude<ExtArgs> | null
    /**
     * Filter, which AnggaranKategoriPeriodes to fetch.
     */
    where?: AnggaranKategoriPeriodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnggaranKategoriPeriodes to fetch.
     */
    orderBy?: AnggaranKategoriPeriodeOrderByWithRelationInput | AnggaranKategoriPeriodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnggaranKategoriPeriodes.
     */
    cursor?: AnggaranKategoriPeriodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnggaranKategoriPeriodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnggaranKategoriPeriodes.
     */
    skip?: number
    distinct?: AnggaranKategoriPeriodeScalarFieldEnum | AnggaranKategoriPeriodeScalarFieldEnum[]
  }

  /**
   * AnggaranKategoriPeriode create
   */
  export type AnggaranKategoriPeriodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggaranKategoriPeriode
     */
    select?: AnggaranKategoriPeriodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggaranKategoriPeriodeInclude<ExtArgs> | null
    /**
     * The data needed to create a AnggaranKategoriPeriode.
     */
    data: XOR<AnggaranKategoriPeriodeCreateInput, AnggaranKategoriPeriodeUncheckedCreateInput>
  }

  /**
   * AnggaranKategoriPeriode createMany
   */
  export type AnggaranKategoriPeriodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnggaranKategoriPeriodes.
     */
    data: AnggaranKategoriPeriodeCreateManyInput | AnggaranKategoriPeriodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnggaranKategoriPeriode createManyAndReturn
   */
  export type AnggaranKategoriPeriodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggaranKategoriPeriode
     */
    select?: AnggaranKategoriPeriodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AnggaranKategoriPeriodes.
     */
    data: AnggaranKategoriPeriodeCreateManyInput | AnggaranKategoriPeriodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggaranKategoriPeriodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnggaranKategoriPeriode update
   */
  export type AnggaranKategoriPeriodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggaranKategoriPeriode
     */
    select?: AnggaranKategoriPeriodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggaranKategoriPeriodeInclude<ExtArgs> | null
    /**
     * The data needed to update a AnggaranKategoriPeriode.
     */
    data: XOR<AnggaranKategoriPeriodeUpdateInput, AnggaranKategoriPeriodeUncheckedUpdateInput>
    /**
     * Choose, which AnggaranKategoriPeriode to update.
     */
    where: AnggaranKategoriPeriodeWhereUniqueInput
  }

  /**
   * AnggaranKategoriPeriode updateMany
   */
  export type AnggaranKategoriPeriodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnggaranKategoriPeriodes.
     */
    data: XOR<AnggaranKategoriPeriodeUpdateManyMutationInput, AnggaranKategoriPeriodeUncheckedUpdateManyInput>
    /**
     * Filter which AnggaranKategoriPeriodes to update
     */
    where?: AnggaranKategoriPeriodeWhereInput
  }

  /**
   * AnggaranKategoriPeriode upsert
   */
  export type AnggaranKategoriPeriodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggaranKategoriPeriode
     */
    select?: AnggaranKategoriPeriodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggaranKategoriPeriodeInclude<ExtArgs> | null
    /**
     * The filter to search for the AnggaranKategoriPeriode to update in case it exists.
     */
    where: AnggaranKategoriPeriodeWhereUniqueInput
    /**
     * In case the AnggaranKategoriPeriode found by the `where` argument doesn't exist, create a new AnggaranKategoriPeriode with this data.
     */
    create: XOR<AnggaranKategoriPeriodeCreateInput, AnggaranKategoriPeriodeUncheckedCreateInput>
    /**
     * In case the AnggaranKategoriPeriode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnggaranKategoriPeriodeUpdateInput, AnggaranKategoriPeriodeUncheckedUpdateInput>
  }

  /**
   * AnggaranKategoriPeriode delete
   */
  export type AnggaranKategoriPeriodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggaranKategoriPeriode
     */
    select?: AnggaranKategoriPeriodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggaranKategoriPeriodeInclude<ExtArgs> | null
    /**
     * Filter which AnggaranKategoriPeriode to delete.
     */
    where: AnggaranKategoriPeriodeWhereUniqueInput
  }

  /**
   * AnggaranKategoriPeriode deleteMany
   */
  export type AnggaranKategoriPeriodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnggaranKategoriPeriodes to delete
     */
    where?: AnggaranKategoriPeriodeWhereInput
  }

  /**
   * AnggaranKategoriPeriode without action
   */
  export type AnggaranKategoriPeriodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggaranKategoriPeriode
     */
    select?: AnggaranKategoriPeriodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggaranKategoriPeriodeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const KategoriPaguScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    anggaranDasar: 'anggaranDasar',
    warna: 'warna',
    ikon: 'ikon',
    urutan: 'urutan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KategoriPaguScalarFieldEnum = (typeof KategoriPaguScalarFieldEnum)[keyof typeof KategoriPaguScalarFieldEnum]


  export const PeriodeAnggaranScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    tanggalMulai: 'tanggalMulai',
    tanggalAkhir: 'tanggalAkhir',
    isActive: 'isActive',
    templateType: 'templateType',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PeriodeAnggaranScalarFieldEnum = (typeof PeriodeAnggaranScalarFieldEnum)[keyof typeof PeriodeAnggaranScalarFieldEnum]


  export const TransaksiScalarFieldEnum: {
    id: 'id',
    tanggal: 'tanggal',
    deskripsi: 'deskripsi',
    jumlah: 'jumlah',
    kategoriId: 'kategoriId',
    periodeId: 'periodeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransaksiScalarFieldEnum = (typeof TransaksiScalarFieldEnum)[keyof typeof TransaksiScalarFieldEnum]


  export const AnggaranKategoriPeriodeScalarFieldEnum: {
    id: 'id',
    kategoriId: 'kategoriId',
    periodeId: 'periodeId',
    anggaran: 'anggaran',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnggaranKategoriPeriodeScalarFieldEnum = (typeof AnggaranKategoriPeriodeScalarFieldEnum)[keyof typeof AnggaranKategoriPeriodeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type KategoriPaguWhereInput = {
    AND?: KategoriPaguWhereInput | KategoriPaguWhereInput[]
    OR?: KategoriPaguWhereInput[]
    NOT?: KategoriPaguWhereInput | KategoriPaguWhereInput[]
    id?: StringFilter<"KategoriPagu"> | string
    nama?: StringFilter<"KategoriPagu"> | string
    anggaranDasar?: DecimalFilter<"KategoriPagu"> | Decimal | DecimalJsLike | number | string
    warna?: StringNullableFilter<"KategoriPagu"> | string | null
    ikon?: StringNullableFilter<"KategoriPagu"> | string | null
    urutan?: IntFilter<"KategoriPagu"> | number
    createdAt?: DateTimeFilter<"KategoriPagu"> | Date | string
    updatedAt?: DateTimeFilter<"KategoriPagu"> | Date | string
    transaksi?: TransaksiListRelationFilter
    anggaranKategoriPeriode?: AnggaranKategoriPeriodeListRelationFilter
  }

  export type KategoriPaguOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    anggaranDasar?: SortOrder
    warna?: SortOrderInput | SortOrder
    ikon?: SortOrderInput | SortOrder
    urutan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transaksi?: TransaksiOrderByRelationAggregateInput
    anggaranKategoriPeriode?: AnggaranKategoriPeriodeOrderByRelationAggregateInput
  }

  export type KategoriPaguWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KategoriPaguWhereInput | KategoriPaguWhereInput[]
    OR?: KategoriPaguWhereInput[]
    NOT?: KategoriPaguWhereInput | KategoriPaguWhereInput[]
    nama?: StringFilter<"KategoriPagu"> | string
    anggaranDasar?: DecimalFilter<"KategoriPagu"> | Decimal | DecimalJsLike | number | string
    warna?: StringNullableFilter<"KategoriPagu"> | string | null
    ikon?: StringNullableFilter<"KategoriPagu"> | string | null
    urutan?: IntFilter<"KategoriPagu"> | number
    createdAt?: DateTimeFilter<"KategoriPagu"> | Date | string
    updatedAt?: DateTimeFilter<"KategoriPagu"> | Date | string
    transaksi?: TransaksiListRelationFilter
    anggaranKategoriPeriode?: AnggaranKategoriPeriodeListRelationFilter
  }, "id">

  export type KategoriPaguOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    anggaranDasar?: SortOrder
    warna?: SortOrderInput | SortOrder
    ikon?: SortOrderInput | SortOrder
    urutan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KategoriPaguCountOrderByAggregateInput
    _avg?: KategoriPaguAvgOrderByAggregateInput
    _max?: KategoriPaguMaxOrderByAggregateInput
    _min?: KategoriPaguMinOrderByAggregateInput
    _sum?: KategoriPaguSumOrderByAggregateInput
  }

  export type KategoriPaguScalarWhereWithAggregatesInput = {
    AND?: KategoriPaguScalarWhereWithAggregatesInput | KategoriPaguScalarWhereWithAggregatesInput[]
    OR?: KategoriPaguScalarWhereWithAggregatesInput[]
    NOT?: KategoriPaguScalarWhereWithAggregatesInput | KategoriPaguScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KategoriPagu"> | string
    nama?: StringWithAggregatesFilter<"KategoriPagu"> | string
    anggaranDasar?: DecimalWithAggregatesFilter<"KategoriPagu"> | Decimal | DecimalJsLike | number | string
    warna?: StringNullableWithAggregatesFilter<"KategoriPagu"> | string | null
    ikon?: StringNullableWithAggregatesFilter<"KategoriPagu"> | string | null
    urutan?: IntWithAggregatesFilter<"KategoriPagu"> | number
    createdAt?: DateTimeWithAggregatesFilter<"KategoriPagu"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"KategoriPagu"> | Date | string
  }

  export type PeriodeAnggaranWhereInput = {
    AND?: PeriodeAnggaranWhereInput | PeriodeAnggaranWhereInput[]
    OR?: PeriodeAnggaranWhereInput[]
    NOT?: PeriodeAnggaranWhereInput | PeriodeAnggaranWhereInput[]
    id?: StringFilter<"PeriodeAnggaran"> | string
    nama?: StringNullableFilter<"PeriodeAnggaran"> | string | null
    tanggalMulai?: DateTimeFilter<"PeriodeAnggaran"> | Date | string
    tanggalAkhir?: DateTimeFilter<"PeriodeAnggaran"> | Date | string
    isActive?: BoolFilter<"PeriodeAnggaran"> | boolean
    templateType?: StringNullableFilter<"PeriodeAnggaran"> | string | null
    notes?: StringNullableFilter<"PeriodeAnggaran"> | string | null
    createdAt?: DateTimeFilter<"PeriodeAnggaran"> | Date | string
    updatedAt?: DateTimeFilter<"PeriodeAnggaran"> | Date | string
    transaksi?: TransaksiListRelationFilter
    anggaranKategoriPeriode?: AnggaranKategoriPeriodeListRelationFilter
  }

  export type PeriodeAnggaranOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrderInput | SortOrder
    tanggalMulai?: SortOrder
    tanggalAkhir?: SortOrder
    isActive?: SortOrder
    templateType?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transaksi?: TransaksiOrderByRelationAggregateInput
    anggaranKategoriPeriode?: AnggaranKategoriPeriodeOrderByRelationAggregateInput
  }

  export type PeriodeAnggaranWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tanggalMulai_tanggalAkhir?: PeriodeAnggaranTanggalMulaiTanggalAkhirCompoundUniqueInput
    AND?: PeriodeAnggaranWhereInput | PeriodeAnggaranWhereInput[]
    OR?: PeriodeAnggaranWhereInput[]
    NOT?: PeriodeAnggaranWhereInput | PeriodeAnggaranWhereInput[]
    nama?: StringNullableFilter<"PeriodeAnggaran"> | string | null
    tanggalMulai?: DateTimeFilter<"PeriodeAnggaran"> | Date | string
    tanggalAkhir?: DateTimeFilter<"PeriodeAnggaran"> | Date | string
    isActive?: BoolFilter<"PeriodeAnggaran"> | boolean
    templateType?: StringNullableFilter<"PeriodeAnggaran"> | string | null
    notes?: StringNullableFilter<"PeriodeAnggaran"> | string | null
    createdAt?: DateTimeFilter<"PeriodeAnggaran"> | Date | string
    updatedAt?: DateTimeFilter<"PeriodeAnggaran"> | Date | string
    transaksi?: TransaksiListRelationFilter
    anggaranKategoriPeriode?: AnggaranKategoriPeriodeListRelationFilter
  }, "id" | "tanggalMulai_tanggalAkhir">

  export type PeriodeAnggaranOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrderInput | SortOrder
    tanggalMulai?: SortOrder
    tanggalAkhir?: SortOrder
    isActive?: SortOrder
    templateType?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PeriodeAnggaranCountOrderByAggregateInput
    _max?: PeriodeAnggaranMaxOrderByAggregateInput
    _min?: PeriodeAnggaranMinOrderByAggregateInput
  }

  export type PeriodeAnggaranScalarWhereWithAggregatesInput = {
    AND?: PeriodeAnggaranScalarWhereWithAggregatesInput | PeriodeAnggaranScalarWhereWithAggregatesInput[]
    OR?: PeriodeAnggaranScalarWhereWithAggregatesInput[]
    NOT?: PeriodeAnggaranScalarWhereWithAggregatesInput | PeriodeAnggaranScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PeriodeAnggaran"> | string
    nama?: StringNullableWithAggregatesFilter<"PeriodeAnggaran"> | string | null
    tanggalMulai?: DateTimeWithAggregatesFilter<"PeriodeAnggaran"> | Date | string
    tanggalAkhir?: DateTimeWithAggregatesFilter<"PeriodeAnggaran"> | Date | string
    isActive?: BoolWithAggregatesFilter<"PeriodeAnggaran"> | boolean
    templateType?: StringNullableWithAggregatesFilter<"PeriodeAnggaran"> | string | null
    notes?: StringNullableWithAggregatesFilter<"PeriodeAnggaran"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PeriodeAnggaran"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PeriodeAnggaran"> | Date | string
  }

  export type TransaksiWhereInput = {
    AND?: TransaksiWhereInput | TransaksiWhereInput[]
    OR?: TransaksiWhereInput[]
    NOT?: TransaksiWhereInput | TransaksiWhereInput[]
    id?: StringFilter<"Transaksi"> | string
    tanggal?: DateTimeFilter<"Transaksi"> | Date | string
    deskripsi?: StringFilter<"Transaksi"> | string
    jumlah?: DecimalFilter<"Transaksi"> | Decimal | DecimalJsLike | number | string
    kategoriId?: StringFilter<"Transaksi"> | string
    periodeId?: StringFilter<"Transaksi"> | string
    createdAt?: DateTimeFilter<"Transaksi"> | Date | string
    updatedAt?: DateTimeFilter<"Transaksi"> | Date | string
    kategori?: XOR<KategoriPaguRelationFilter, KategoriPaguWhereInput>
    periode?: XOR<PeriodeAnggaranRelationFilter, PeriodeAnggaranWhereInput>
  }

  export type TransaksiOrderByWithRelationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    deskripsi?: SortOrder
    jumlah?: SortOrder
    kategoriId?: SortOrder
    periodeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kategori?: KategoriPaguOrderByWithRelationInput
    periode?: PeriodeAnggaranOrderByWithRelationInput
  }

  export type TransaksiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransaksiWhereInput | TransaksiWhereInput[]
    OR?: TransaksiWhereInput[]
    NOT?: TransaksiWhereInput | TransaksiWhereInput[]
    tanggal?: DateTimeFilter<"Transaksi"> | Date | string
    deskripsi?: StringFilter<"Transaksi"> | string
    jumlah?: DecimalFilter<"Transaksi"> | Decimal | DecimalJsLike | number | string
    kategoriId?: StringFilter<"Transaksi"> | string
    periodeId?: StringFilter<"Transaksi"> | string
    createdAt?: DateTimeFilter<"Transaksi"> | Date | string
    updatedAt?: DateTimeFilter<"Transaksi"> | Date | string
    kategori?: XOR<KategoriPaguRelationFilter, KategoriPaguWhereInput>
    periode?: XOR<PeriodeAnggaranRelationFilter, PeriodeAnggaranWhereInput>
  }, "id">

  export type TransaksiOrderByWithAggregationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    deskripsi?: SortOrder
    jumlah?: SortOrder
    kategoriId?: SortOrder
    periodeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransaksiCountOrderByAggregateInput
    _avg?: TransaksiAvgOrderByAggregateInput
    _max?: TransaksiMaxOrderByAggregateInput
    _min?: TransaksiMinOrderByAggregateInput
    _sum?: TransaksiSumOrderByAggregateInput
  }

  export type TransaksiScalarWhereWithAggregatesInput = {
    AND?: TransaksiScalarWhereWithAggregatesInput | TransaksiScalarWhereWithAggregatesInput[]
    OR?: TransaksiScalarWhereWithAggregatesInput[]
    NOT?: TransaksiScalarWhereWithAggregatesInput | TransaksiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaksi"> | string
    tanggal?: DateTimeWithAggregatesFilter<"Transaksi"> | Date | string
    deskripsi?: StringWithAggregatesFilter<"Transaksi"> | string
    jumlah?: DecimalWithAggregatesFilter<"Transaksi"> | Decimal | DecimalJsLike | number | string
    kategoriId?: StringWithAggregatesFilter<"Transaksi"> | string
    periodeId?: StringWithAggregatesFilter<"Transaksi"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Transaksi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaksi"> | Date | string
  }

  export type AnggaranKategoriPeriodeWhereInput = {
    AND?: AnggaranKategoriPeriodeWhereInput | AnggaranKategoriPeriodeWhereInput[]
    OR?: AnggaranKategoriPeriodeWhereInput[]
    NOT?: AnggaranKategoriPeriodeWhereInput | AnggaranKategoriPeriodeWhereInput[]
    id?: StringFilter<"AnggaranKategoriPeriode"> | string
    kategoriId?: StringFilter<"AnggaranKategoriPeriode"> | string
    periodeId?: StringFilter<"AnggaranKategoriPeriode"> | string
    anggaran?: DecimalFilter<"AnggaranKategoriPeriode"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"AnggaranKategoriPeriode"> | Date | string
    updatedAt?: DateTimeFilter<"AnggaranKategoriPeriode"> | Date | string
    kategori?: XOR<KategoriPaguRelationFilter, KategoriPaguWhereInput>
    periode?: XOR<PeriodeAnggaranRelationFilter, PeriodeAnggaranWhereInput>
  }

  export type AnggaranKategoriPeriodeOrderByWithRelationInput = {
    id?: SortOrder
    kategoriId?: SortOrder
    periodeId?: SortOrder
    anggaran?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kategori?: KategoriPaguOrderByWithRelationInput
    periode?: PeriodeAnggaranOrderByWithRelationInput
  }

  export type AnggaranKategoriPeriodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    kategoriId_periodeId?: AnggaranKategoriPeriodeKategoriIdPeriodeIdCompoundUniqueInput
    AND?: AnggaranKategoriPeriodeWhereInput | AnggaranKategoriPeriodeWhereInput[]
    OR?: AnggaranKategoriPeriodeWhereInput[]
    NOT?: AnggaranKategoriPeriodeWhereInput | AnggaranKategoriPeriodeWhereInput[]
    kategoriId?: StringFilter<"AnggaranKategoriPeriode"> | string
    periodeId?: StringFilter<"AnggaranKategoriPeriode"> | string
    anggaran?: DecimalFilter<"AnggaranKategoriPeriode"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"AnggaranKategoriPeriode"> | Date | string
    updatedAt?: DateTimeFilter<"AnggaranKategoriPeriode"> | Date | string
    kategori?: XOR<KategoriPaguRelationFilter, KategoriPaguWhereInput>
    periode?: XOR<PeriodeAnggaranRelationFilter, PeriodeAnggaranWhereInput>
  }, "id" | "kategoriId_periodeId">

  export type AnggaranKategoriPeriodeOrderByWithAggregationInput = {
    id?: SortOrder
    kategoriId?: SortOrder
    periodeId?: SortOrder
    anggaran?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnggaranKategoriPeriodeCountOrderByAggregateInput
    _avg?: AnggaranKategoriPeriodeAvgOrderByAggregateInput
    _max?: AnggaranKategoriPeriodeMaxOrderByAggregateInput
    _min?: AnggaranKategoriPeriodeMinOrderByAggregateInput
    _sum?: AnggaranKategoriPeriodeSumOrderByAggregateInput
  }

  export type AnggaranKategoriPeriodeScalarWhereWithAggregatesInput = {
    AND?: AnggaranKategoriPeriodeScalarWhereWithAggregatesInput | AnggaranKategoriPeriodeScalarWhereWithAggregatesInput[]
    OR?: AnggaranKategoriPeriodeScalarWhereWithAggregatesInput[]
    NOT?: AnggaranKategoriPeriodeScalarWhereWithAggregatesInput | AnggaranKategoriPeriodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnggaranKategoriPeriode"> | string
    kategoriId?: StringWithAggregatesFilter<"AnggaranKategoriPeriode"> | string
    periodeId?: StringWithAggregatesFilter<"AnggaranKategoriPeriode"> | string
    anggaran?: DecimalWithAggregatesFilter<"AnggaranKategoriPeriode"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"AnggaranKategoriPeriode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AnggaranKategoriPeriode"> | Date | string
  }

  export type KategoriPaguCreateInput = {
    id?: string
    nama: string
    anggaranDasar?: Decimal | DecimalJsLike | number | string
    warna?: string | null
    ikon?: string | null
    urutan?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    transaksi?: TransaksiCreateNestedManyWithoutKategoriInput
    anggaranKategoriPeriode?: AnggaranKategoriPeriodeCreateNestedManyWithoutKategoriInput
  }

  export type KategoriPaguUncheckedCreateInput = {
    id?: string
    nama: string
    anggaranDasar?: Decimal | DecimalJsLike | number | string
    warna?: string | null
    ikon?: string | null
    urutan?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    transaksi?: TransaksiUncheckedCreateNestedManyWithoutKategoriInput
    anggaranKategoriPeriode?: AnggaranKategoriPeriodeUncheckedCreateNestedManyWithoutKategoriInput
  }

  export type KategoriPaguUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    anggaranDasar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    warna?: NullableStringFieldUpdateOperationsInput | string | null
    ikon?: NullableStringFieldUpdateOperationsInput | string | null
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaksi?: TransaksiUpdateManyWithoutKategoriNestedInput
    anggaranKategoriPeriode?: AnggaranKategoriPeriodeUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriPaguUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    anggaranDasar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    warna?: NullableStringFieldUpdateOperationsInput | string | null
    ikon?: NullableStringFieldUpdateOperationsInput | string | null
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaksi?: TransaksiUncheckedUpdateManyWithoutKategoriNestedInput
    anggaranKategoriPeriode?: AnggaranKategoriPeriodeUncheckedUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriPaguCreateManyInput = {
    id?: string
    nama: string
    anggaranDasar?: Decimal | DecimalJsLike | number | string
    warna?: string | null
    ikon?: string | null
    urutan?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KategoriPaguUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    anggaranDasar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    warna?: NullableStringFieldUpdateOperationsInput | string | null
    ikon?: NullableStringFieldUpdateOperationsInput | string | null
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KategoriPaguUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    anggaranDasar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    warna?: NullableStringFieldUpdateOperationsInput | string | null
    ikon?: NullableStringFieldUpdateOperationsInput | string | null
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeriodeAnggaranCreateInput = {
    id?: string
    nama?: string | null
    tanggalMulai: Date | string
    tanggalAkhir: Date | string
    isActive?: boolean
    templateType?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transaksi?: TransaksiCreateNestedManyWithoutPeriodeInput
    anggaranKategoriPeriode?: AnggaranKategoriPeriodeCreateNestedManyWithoutPeriodeInput
  }

  export type PeriodeAnggaranUncheckedCreateInput = {
    id?: string
    nama?: string | null
    tanggalMulai: Date | string
    tanggalAkhir: Date | string
    isActive?: boolean
    templateType?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transaksi?: TransaksiUncheckedCreateNestedManyWithoutPeriodeInput
    anggaranKategoriPeriode?: AnggaranKategoriPeriodeUncheckedCreateNestedManyWithoutPeriodeInput
  }

  export type PeriodeAnggaranUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalAkhir?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    templateType?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaksi?: TransaksiUpdateManyWithoutPeriodeNestedInput
    anggaranKategoriPeriode?: AnggaranKategoriPeriodeUpdateManyWithoutPeriodeNestedInput
  }

  export type PeriodeAnggaranUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalAkhir?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    templateType?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaksi?: TransaksiUncheckedUpdateManyWithoutPeriodeNestedInput
    anggaranKategoriPeriode?: AnggaranKategoriPeriodeUncheckedUpdateManyWithoutPeriodeNestedInput
  }

  export type PeriodeAnggaranCreateManyInput = {
    id?: string
    nama?: string | null
    tanggalMulai: Date | string
    tanggalAkhir: Date | string
    isActive?: boolean
    templateType?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeriodeAnggaranUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalAkhir?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    templateType?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeriodeAnggaranUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalAkhir?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    templateType?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiCreateInput = {
    id?: string
    tanggal: Date | string
    deskripsi: string
    jumlah: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    kategori: KategoriPaguCreateNestedOneWithoutTransaksiInput
    periode: PeriodeAnggaranCreateNestedOneWithoutTransaksiInput
  }

  export type TransaksiUncheckedCreateInput = {
    id?: string
    tanggal: Date | string
    deskripsi: string
    jumlah: Decimal | DecimalJsLike | number | string
    kategoriId: string
    periodeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransaksiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jumlah?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategori?: KategoriPaguUpdateOneRequiredWithoutTransaksiNestedInput
    periode?: PeriodeAnggaranUpdateOneRequiredWithoutTransaksiNestedInput
  }

  export type TransaksiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jumlah?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    kategoriId?: StringFieldUpdateOperationsInput | string
    periodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiCreateManyInput = {
    id?: string
    tanggal: Date | string
    deskripsi: string
    jumlah: Decimal | DecimalJsLike | number | string
    kategoriId: string
    periodeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransaksiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jumlah?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jumlah?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    kategoriId?: StringFieldUpdateOperationsInput | string
    periodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnggaranKategoriPeriodeCreateInput = {
    id?: string
    anggaran: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    kategori: KategoriPaguCreateNestedOneWithoutAnggaranKategoriPeriodeInput
    periode: PeriodeAnggaranCreateNestedOneWithoutAnggaranKategoriPeriodeInput
  }

  export type AnggaranKategoriPeriodeUncheckedCreateInput = {
    id?: string
    kategoriId: string
    periodeId: string
    anggaran: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnggaranKategoriPeriodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    anggaran?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategori?: KategoriPaguUpdateOneRequiredWithoutAnggaranKategoriPeriodeNestedInput
    periode?: PeriodeAnggaranUpdateOneRequiredWithoutAnggaranKategoriPeriodeNestedInput
  }

  export type AnggaranKategoriPeriodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kategoriId?: StringFieldUpdateOperationsInput | string
    periodeId?: StringFieldUpdateOperationsInput | string
    anggaran?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnggaranKategoriPeriodeCreateManyInput = {
    id?: string
    kategoriId: string
    periodeId: string
    anggaran: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnggaranKategoriPeriodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    anggaran?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnggaranKategoriPeriodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    kategoriId?: StringFieldUpdateOperationsInput | string
    periodeId?: StringFieldUpdateOperationsInput | string
    anggaran?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TransaksiListRelationFilter = {
    every?: TransaksiWhereInput
    some?: TransaksiWhereInput
    none?: TransaksiWhereInput
  }

  export type AnggaranKategoriPeriodeListRelationFilter = {
    every?: AnggaranKategoriPeriodeWhereInput
    some?: AnggaranKategoriPeriodeWhereInput
    none?: AnggaranKategoriPeriodeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransaksiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnggaranKategoriPeriodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KategoriPaguCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    anggaranDasar?: SortOrder
    warna?: SortOrder
    ikon?: SortOrder
    urutan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KategoriPaguAvgOrderByAggregateInput = {
    anggaranDasar?: SortOrder
    urutan?: SortOrder
  }

  export type KategoriPaguMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    anggaranDasar?: SortOrder
    warna?: SortOrder
    ikon?: SortOrder
    urutan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KategoriPaguMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    anggaranDasar?: SortOrder
    warna?: SortOrder
    ikon?: SortOrder
    urutan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KategoriPaguSumOrderByAggregateInput = {
    anggaranDasar?: SortOrder
    urutan?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PeriodeAnggaranTanggalMulaiTanggalAkhirCompoundUniqueInput = {
    tanggalMulai: Date | string
    tanggalAkhir: Date | string
  }

  export type PeriodeAnggaranCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    tanggalMulai?: SortOrder
    tanggalAkhir?: SortOrder
    isActive?: SortOrder
    templateType?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeriodeAnggaranMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    tanggalMulai?: SortOrder
    tanggalAkhir?: SortOrder
    isActive?: SortOrder
    templateType?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeriodeAnggaranMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    tanggalMulai?: SortOrder
    tanggalAkhir?: SortOrder
    isActive?: SortOrder
    templateType?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type KategoriPaguRelationFilter = {
    is?: KategoriPaguWhereInput
    isNot?: KategoriPaguWhereInput
  }

  export type PeriodeAnggaranRelationFilter = {
    is?: PeriodeAnggaranWhereInput
    isNot?: PeriodeAnggaranWhereInput
  }

  export type TransaksiCountOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    deskripsi?: SortOrder
    jumlah?: SortOrder
    kategoriId?: SortOrder
    periodeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransaksiAvgOrderByAggregateInput = {
    jumlah?: SortOrder
  }

  export type TransaksiMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    deskripsi?: SortOrder
    jumlah?: SortOrder
    kategoriId?: SortOrder
    periodeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransaksiMinOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    deskripsi?: SortOrder
    jumlah?: SortOrder
    kategoriId?: SortOrder
    periodeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransaksiSumOrderByAggregateInput = {
    jumlah?: SortOrder
  }

  export type AnggaranKategoriPeriodeKategoriIdPeriodeIdCompoundUniqueInput = {
    kategoriId: string
    periodeId: string
  }

  export type AnggaranKategoriPeriodeCountOrderByAggregateInput = {
    id?: SortOrder
    kategoriId?: SortOrder
    periodeId?: SortOrder
    anggaran?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnggaranKategoriPeriodeAvgOrderByAggregateInput = {
    anggaran?: SortOrder
  }

  export type AnggaranKategoriPeriodeMaxOrderByAggregateInput = {
    id?: SortOrder
    kategoriId?: SortOrder
    periodeId?: SortOrder
    anggaran?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnggaranKategoriPeriodeMinOrderByAggregateInput = {
    id?: SortOrder
    kategoriId?: SortOrder
    periodeId?: SortOrder
    anggaran?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnggaranKategoriPeriodeSumOrderByAggregateInput = {
    anggaran?: SortOrder
  }

  export type TransaksiCreateNestedManyWithoutKategoriInput = {
    create?: XOR<TransaksiCreateWithoutKategoriInput, TransaksiUncheckedCreateWithoutKategoriInput> | TransaksiCreateWithoutKategoriInput[] | TransaksiUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutKategoriInput | TransaksiCreateOrConnectWithoutKategoriInput[]
    createMany?: TransaksiCreateManyKategoriInputEnvelope
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
  }

  export type AnggaranKategoriPeriodeCreateNestedManyWithoutKategoriInput = {
    create?: XOR<AnggaranKategoriPeriodeCreateWithoutKategoriInput, AnggaranKategoriPeriodeUncheckedCreateWithoutKategoriInput> | AnggaranKategoriPeriodeCreateWithoutKategoriInput[] | AnggaranKategoriPeriodeUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: AnggaranKategoriPeriodeCreateOrConnectWithoutKategoriInput | AnggaranKategoriPeriodeCreateOrConnectWithoutKategoriInput[]
    createMany?: AnggaranKategoriPeriodeCreateManyKategoriInputEnvelope
    connect?: AnggaranKategoriPeriodeWhereUniqueInput | AnggaranKategoriPeriodeWhereUniqueInput[]
  }

  export type TransaksiUncheckedCreateNestedManyWithoutKategoriInput = {
    create?: XOR<TransaksiCreateWithoutKategoriInput, TransaksiUncheckedCreateWithoutKategoriInput> | TransaksiCreateWithoutKategoriInput[] | TransaksiUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutKategoriInput | TransaksiCreateOrConnectWithoutKategoriInput[]
    createMany?: TransaksiCreateManyKategoriInputEnvelope
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
  }

  export type AnggaranKategoriPeriodeUncheckedCreateNestedManyWithoutKategoriInput = {
    create?: XOR<AnggaranKategoriPeriodeCreateWithoutKategoriInput, AnggaranKategoriPeriodeUncheckedCreateWithoutKategoriInput> | AnggaranKategoriPeriodeCreateWithoutKategoriInput[] | AnggaranKategoriPeriodeUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: AnggaranKategoriPeriodeCreateOrConnectWithoutKategoriInput | AnggaranKategoriPeriodeCreateOrConnectWithoutKategoriInput[]
    createMany?: AnggaranKategoriPeriodeCreateManyKategoriInputEnvelope
    connect?: AnggaranKategoriPeriodeWhereUniqueInput | AnggaranKategoriPeriodeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TransaksiUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<TransaksiCreateWithoutKategoriInput, TransaksiUncheckedCreateWithoutKategoriInput> | TransaksiCreateWithoutKategoriInput[] | TransaksiUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutKategoriInput | TransaksiCreateOrConnectWithoutKategoriInput[]
    upsert?: TransaksiUpsertWithWhereUniqueWithoutKategoriInput | TransaksiUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: TransaksiCreateManyKategoriInputEnvelope
    set?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    disconnect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    delete?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    update?: TransaksiUpdateWithWhereUniqueWithoutKategoriInput | TransaksiUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: TransaksiUpdateManyWithWhereWithoutKategoriInput | TransaksiUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: TransaksiScalarWhereInput | TransaksiScalarWhereInput[]
  }

  export type AnggaranKategoriPeriodeUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<AnggaranKategoriPeriodeCreateWithoutKategoriInput, AnggaranKategoriPeriodeUncheckedCreateWithoutKategoriInput> | AnggaranKategoriPeriodeCreateWithoutKategoriInput[] | AnggaranKategoriPeriodeUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: AnggaranKategoriPeriodeCreateOrConnectWithoutKategoriInput | AnggaranKategoriPeriodeCreateOrConnectWithoutKategoriInput[]
    upsert?: AnggaranKategoriPeriodeUpsertWithWhereUniqueWithoutKategoriInput | AnggaranKategoriPeriodeUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: AnggaranKategoriPeriodeCreateManyKategoriInputEnvelope
    set?: AnggaranKategoriPeriodeWhereUniqueInput | AnggaranKategoriPeriodeWhereUniqueInput[]
    disconnect?: AnggaranKategoriPeriodeWhereUniqueInput | AnggaranKategoriPeriodeWhereUniqueInput[]
    delete?: AnggaranKategoriPeriodeWhereUniqueInput | AnggaranKategoriPeriodeWhereUniqueInput[]
    connect?: AnggaranKategoriPeriodeWhereUniqueInput | AnggaranKategoriPeriodeWhereUniqueInput[]
    update?: AnggaranKategoriPeriodeUpdateWithWhereUniqueWithoutKategoriInput | AnggaranKategoriPeriodeUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: AnggaranKategoriPeriodeUpdateManyWithWhereWithoutKategoriInput | AnggaranKategoriPeriodeUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: AnggaranKategoriPeriodeScalarWhereInput | AnggaranKategoriPeriodeScalarWhereInput[]
  }

  export type TransaksiUncheckedUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<TransaksiCreateWithoutKategoriInput, TransaksiUncheckedCreateWithoutKategoriInput> | TransaksiCreateWithoutKategoriInput[] | TransaksiUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutKategoriInput | TransaksiCreateOrConnectWithoutKategoriInput[]
    upsert?: TransaksiUpsertWithWhereUniqueWithoutKategoriInput | TransaksiUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: TransaksiCreateManyKategoriInputEnvelope
    set?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    disconnect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    delete?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    update?: TransaksiUpdateWithWhereUniqueWithoutKategoriInput | TransaksiUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: TransaksiUpdateManyWithWhereWithoutKategoriInput | TransaksiUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: TransaksiScalarWhereInput | TransaksiScalarWhereInput[]
  }

  export type AnggaranKategoriPeriodeUncheckedUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<AnggaranKategoriPeriodeCreateWithoutKategoriInput, AnggaranKategoriPeriodeUncheckedCreateWithoutKategoriInput> | AnggaranKategoriPeriodeCreateWithoutKategoriInput[] | AnggaranKategoriPeriodeUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: AnggaranKategoriPeriodeCreateOrConnectWithoutKategoriInput | AnggaranKategoriPeriodeCreateOrConnectWithoutKategoriInput[]
    upsert?: AnggaranKategoriPeriodeUpsertWithWhereUniqueWithoutKategoriInput | AnggaranKategoriPeriodeUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: AnggaranKategoriPeriodeCreateManyKategoriInputEnvelope
    set?: AnggaranKategoriPeriodeWhereUniqueInput | AnggaranKategoriPeriodeWhereUniqueInput[]
    disconnect?: AnggaranKategoriPeriodeWhereUniqueInput | AnggaranKategoriPeriodeWhereUniqueInput[]
    delete?: AnggaranKategoriPeriodeWhereUniqueInput | AnggaranKategoriPeriodeWhereUniqueInput[]
    connect?: AnggaranKategoriPeriodeWhereUniqueInput | AnggaranKategoriPeriodeWhereUniqueInput[]
    update?: AnggaranKategoriPeriodeUpdateWithWhereUniqueWithoutKategoriInput | AnggaranKategoriPeriodeUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: AnggaranKategoriPeriodeUpdateManyWithWhereWithoutKategoriInput | AnggaranKategoriPeriodeUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: AnggaranKategoriPeriodeScalarWhereInput | AnggaranKategoriPeriodeScalarWhereInput[]
  }

  export type TransaksiCreateNestedManyWithoutPeriodeInput = {
    create?: XOR<TransaksiCreateWithoutPeriodeInput, TransaksiUncheckedCreateWithoutPeriodeInput> | TransaksiCreateWithoutPeriodeInput[] | TransaksiUncheckedCreateWithoutPeriodeInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutPeriodeInput | TransaksiCreateOrConnectWithoutPeriodeInput[]
    createMany?: TransaksiCreateManyPeriodeInputEnvelope
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
  }

  export type AnggaranKategoriPeriodeCreateNestedManyWithoutPeriodeInput = {
    create?: XOR<AnggaranKategoriPeriodeCreateWithoutPeriodeInput, AnggaranKategoriPeriodeUncheckedCreateWithoutPeriodeInput> | AnggaranKategoriPeriodeCreateWithoutPeriodeInput[] | AnggaranKategoriPeriodeUncheckedCreateWithoutPeriodeInput[]
    connectOrCreate?: AnggaranKategoriPeriodeCreateOrConnectWithoutPeriodeInput | AnggaranKategoriPeriodeCreateOrConnectWithoutPeriodeInput[]
    createMany?: AnggaranKategoriPeriodeCreateManyPeriodeInputEnvelope
    connect?: AnggaranKategoriPeriodeWhereUniqueInput | AnggaranKategoriPeriodeWhereUniqueInput[]
  }

  export type TransaksiUncheckedCreateNestedManyWithoutPeriodeInput = {
    create?: XOR<TransaksiCreateWithoutPeriodeInput, TransaksiUncheckedCreateWithoutPeriodeInput> | TransaksiCreateWithoutPeriodeInput[] | TransaksiUncheckedCreateWithoutPeriodeInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutPeriodeInput | TransaksiCreateOrConnectWithoutPeriodeInput[]
    createMany?: TransaksiCreateManyPeriodeInputEnvelope
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
  }

  export type AnggaranKategoriPeriodeUncheckedCreateNestedManyWithoutPeriodeInput = {
    create?: XOR<AnggaranKategoriPeriodeCreateWithoutPeriodeInput, AnggaranKategoriPeriodeUncheckedCreateWithoutPeriodeInput> | AnggaranKategoriPeriodeCreateWithoutPeriodeInput[] | AnggaranKategoriPeriodeUncheckedCreateWithoutPeriodeInput[]
    connectOrCreate?: AnggaranKategoriPeriodeCreateOrConnectWithoutPeriodeInput | AnggaranKategoriPeriodeCreateOrConnectWithoutPeriodeInput[]
    createMany?: AnggaranKategoriPeriodeCreateManyPeriodeInputEnvelope
    connect?: AnggaranKategoriPeriodeWhereUniqueInput | AnggaranKategoriPeriodeWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TransaksiUpdateManyWithoutPeriodeNestedInput = {
    create?: XOR<TransaksiCreateWithoutPeriodeInput, TransaksiUncheckedCreateWithoutPeriodeInput> | TransaksiCreateWithoutPeriodeInput[] | TransaksiUncheckedCreateWithoutPeriodeInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutPeriodeInput | TransaksiCreateOrConnectWithoutPeriodeInput[]
    upsert?: TransaksiUpsertWithWhereUniqueWithoutPeriodeInput | TransaksiUpsertWithWhereUniqueWithoutPeriodeInput[]
    createMany?: TransaksiCreateManyPeriodeInputEnvelope
    set?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    disconnect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    delete?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    update?: TransaksiUpdateWithWhereUniqueWithoutPeriodeInput | TransaksiUpdateWithWhereUniqueWithoutPeriodeInput[]
    updateMany?: TransaksiUpdateManyWithWhereWithoutPeriodeInput | TransaksiUpdateManyWithWhereWithoutPeriodeInput[]
    deleteMany?: TransaksiScalarWhereInput | TransaksiScalarWhereInput[]
  }

  export type AnggaranKategoriPeriodeUpdateManyWithoutPeriodeNestedInput = {
    create?: XOR<AnggaranKategoriPeriodeCreateWithoutPeriodeInput, AnggaranKategoriPeriodeUncheckedCreateWithoutPeriodeInput> | AnggaranKategoriPeriodeCreateWithoutPeriodeInput[] | AnggaranKategoriPeriodeUncheckedCreateWithoutPeriodeInput[]
    connectOrCreate?: AnggaranKategoriPeriodeCreateOrConnectWithoutPeriodeInput | AnggaranKategoriPeriodeCreateOrConnectWithoutPeriodeInput[]
    upsert?: AnggaranKategoriPeriodeUpsertWithWhereUniqueWithoutPeriodeInput | AnggaranKategoriPeriodeUpsertWithWhereUniqueWithoutPeriodeInput[]
    createMany?: AnggaranKategoriPeriodeCreateManyPeriodeInputEnvelope
    set?: AnggaranKategoriPeriodeWhereUniqueInput | AnggaranKategoriPeriodeWhereUniqueInput[]
    disconnect?: AnggaranKategoriPeriodeWhereUniqueInput | AnggaranKategoriPeriodeWhereUniqueInput[]
    delete?: AnggaranKategoriPeriodeWhereUniqueInput | AnggaranKategoriPeriodeWhereUniqueInput[]
    connect?: AnggaranKategoriPeriodeWhereUniqueInput | AnggaranKategoriPeriodeWhereUniqueInput[]
    update?: AnggaranKategoriPeriodeUpdateWithWhereUniqueWithoutPeriodeInput | AnggaranKategoriPeriodeUpdateWithWhereUniqueWithoutPeriodeInput[]
    updateMany?: AnggaranKategoriPeriodeUpdateManyWithWhereWithoutPeriodeInput | AnggaranKategoriPeriodeUpdateManyWithWhereWithoutPeriodeInput[]
    deleteMany?: AnggaranKategoriPeriodeScalarWhereInput | AnggaranKategoriPeriodeScalarWhereInput[]
  }

  export type TransaksiUncheckedUpdateManyWithoutPeriodeNestedInput = {
    create?: XOR<TransaksiCreateWithoutPeriodeInput, TransaksiUncheckedCreateWithoutPeriodeInput> | TransaksiCreateWithoutPeriodeInput[] | TransaksiUncheckedCreateWithoutPeriodeInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutPeriodeInput | TransaksiCreateOrConnectWithoutPeriodeInput[]
    upsert?: TransaksiUpsertWithWhereUniqueWithoutPeriodeInput | TransaksiUpsertWithWhereUniqueWithoutPeriodeInput[]
    createMany?: TransaksiCreateManyPeriodeInputEnvelope
    set?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    disconnect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    delete?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    update?: TransaksiUpdateWithWhereUniqueWithoutPeriodeInput | TransaksiUpdateWithWhereUniqueWithoutPeriodeInput[]
    updateMany?: TransaksiUpdateManyWithWhereWithoutPeriodeInput | TransaksiUpdateManyWithWhereWithoutPeriodeInput[]
    deleteMany?: TransaksiScalarWhereInput | TransaksiScalarWhereInput[]
  }

  export type AnggaranKategoriPeriodeUncheckedUpdateManyWithoutPeriodeNestedInput = {
    create?: XOR<AnggaranKategoriPeriodeCreateWithoutPeriodeInput, AnggaranKategoriPeriodeUncheckedCreateWithoutPeriodeInput> | AnggaranKategoriPeriodeCreateWithoutPeriodeInput[] | AnggaranKategoriPeriodeUncheckedCreateWithoutPeriodeInput[]
    connectOrCreate?: AnggaranKategoriPeriodeCreateOrConnectWithoutPeriodeInput | AnggaranKategoriPeriodeCreateOrConnectWithoutPeriodeInput[]
    upsert?: AnggaranKategoriPeriodeUpsertWithWhereUniqueWithoutPeriodeInput | AnggaranKategoriPeriodeUpsertWithWhereUniqueWithoutPeriodeInput[]
    createMany?: AnggaranKategoriPeriodeCreateManyPeriodeInputEnvelope
    set?: AnggaranKategoriPeriodeWhereUniqueInput | AnggaranKategoriPeriodeWhereUniqueInput[]
    disconnect?: AnggaranKategoriPeriodeWhereUniqueInput | AnggaranKategoriPeriodeWhereUniqueInput[]
    delete?: AnggaranKategoriPeriodeWhereUniqueInput | AnggaranKategoriPeriodeWhereUniqueInput[]
    connect?: AnggaranKategoriPeriodeWhereUniqueInput | AnggaranKategoriPeriodeWhereUniqueInput[]
    update?: AnggaranKategoriPeriodeUpdateWithWhereUniqueWithoutPeriodeInput | AnggaranKategoriPeriodeUpdateWithWhereUniqueWithoutPeriodeInput[]
    updateMany?: AnggaranKategoriPeriodeUpdateManyWithWhereWithoutPeriodeInput | AnggaranKategoriPeriodeUpdateManyWithWhereWithoutPeriodeInput[]
    deleteMany?: AnggaranKategoriPeriodeScalarWhereInput | AnggaranKategoriPeriodeScalarWhereInput[]
  }

  export type KategoriPaguCreateNestedOneWithoutTransaksiInput = {
    create?: XOR<KategoriPaguCreateWithoutTransaksiInput, KategoriPaguUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: KategoriPaguCreateOrConnectWithoutTransaksiInput
    connect?: KategoriPaguWhereUniqueInput
  }

  export type PeriodeAnggaranCreateNestedOneWithoutTransaksiInput = {
    create?: XOR<PeriodeAnggaranCreateWithoutTransaksiInput, PeriodeAnggaranUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: PeriodeAnggaranCreateOrConnectWithoutTransaksiInput
    connect?: PeriodeAnggaranWhereUniqueInput
  }

  export type KategoriPaguUpdateOneRequiredWithoutTransaksiNestedInput = {
    create?: XOR<KategoriPaguCreateWithoutTransaksiInput, KategoriPaguUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: KategoriPaguCreateOrConnectWithoutTransaksiInput
    upsert?: KategoriPaguUpsertWithoutTransaksiInput
    connect?: KategoriPaguWhereUniqueInput
    update?: XOR<XOR<KategoriPaguUpdateToOneWithWhereWithoutTransaksiInput, KategoriPaguUpdateWithoutTransaksiInput>, KategoriPaguUncheckedUpdateWithoutTransaksiInput>
  }

  export type PeriodeAnggaranUpdateOneRequiredWithoutTransaksiNestedInput = {
    create?: XOR<PeriodeAnggaranCreateWithoutTransaksiInput, PeriodeAnggaranUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: PeriodeAnggaranCreateOrConnectWithoutTransaksiInput
    upsert?: PeriodeAnggaranUpsertWithoutTransaksiInput
    connect?: PeriodeAnggaranWhereUniqueInput
    update?: XOR<XOR<PeriodeAnggaranUpdateToOneWithWhereWithoutTransaksiInput, PeriodeAnggaranUpdateWithoutTransaksiInput>, PeriodeAnggaranUncheckedUpdateWithoutTransaksiInput>
  }

  export type KategoriPaguCreateNestedOneWithoutAnggaranKategoriPeriodeInput = {
    create?: XOR<KategoriPaguCreateWithoutAnggaranKategoriPeriodeInput, KategoriPaguUncheckedCreateWithoutAnggaranKategoriPeriodeInput>
    connectOrCreate?: KategoriPaguCreateOrConnectWithoutAnggaranKategoriPeriodeInput
    connect?: KategoriPaguWhereUniqueInput
  }

  export type PeriodeAnggaranCreateNestedOneWithoutAnggaranKategoriPeriodeInput = {
    create?: XOR<PeriodeAnggaranCreateWithoutAnggaranKategoriPeriodeInput, PeriodeAnggaranUncheckedCreateWithoutAnggaranKategoriPeriodeInput>
    connectOrCreate?: PeriodeAnggaranCreateOrConnectWithoutAnggaranKategoriPeriodeInput
    connect?: PeriodeAnggaranWhereUniqueInput
  }

  export type KategoriPaguUpdateOneRequiredWithoutAnggaranKategoriPeriodeNestedInput = {
    create?: XOR<KategoriPaguCreateWithoutAnggaranKategoriPeriodeInput, KategoriPaguUncheckedCreateWithoutAnggaranKategoriPeriodeInput>
    connectOrCreate?: KategoriPaguCreateOrConnectWithoutAnggaranKategoriPeriodeInput
    upsert?: KategoriPaguUpsertWithoutAnggaranKategoriPeriodeInput
    connect?: KategoriPaguWhereUniqueInput
    update?: XOR<XOR<KategoriPaguUpdateToOneWithWhereWithoutAnggaranKategoriPeriodeInput, KategoriPaguUpdateWithoutAnggaranKategoriPeriodeInput>, KategoriPaguUncheckedUpdateWithoutAnggaranKategoriPeriodeInput>
  }

  export type PeriodeAnggaranUpdateOneRequiredWithoutAnggaranKategoriPeriodeNestedInput = {
    create?: XOR<PeriodeAnggaranCreateWithoutAnggaranKategoriPeriodeInput, PeriodeAnggaranUncheckedCreateWithoutAnggaranKategoriPeriodeInput>
    connectOrCreate?: PeriodeAnggaranCreateOrConnectWithoutAnggaranKategoriPeriodeInput
    upsert?: PeriodeAnggaranUpsertWithoutAnggaranKategoriPeriodeInput
    connect?: PeriodeAnggaranWhereUniqueInput
    update?: XOR<XOR<PeriodeAnggaranUpdateToOneWithWhereWithoutAnggaranKategoriPeriodeInput, PeriodeAnggaranUpdateWithoutAnggaranKategoriPeriodeInput>, PeriodeAnggaranUncheckedUpdateWithoutAnggaranKategoriPeriodeInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TransaksiCreateWithoutKategoriInput = {
    id?: string
    tanggal: Date | string
    deskripsi: string
    jumlah: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    periode: PeriodeAnggaranCreateNestedOneWithoutTransaksiInput
  }

  export type TransaksiUncheckedCreateWithoutKategoriInput = {
    id?: string
    tanggal: Date | string
    deskripsi: string
    jumlah: Decimal | DecimalJsLike | number | string
    periodeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransaksiCreateOrConnectWithoutKategoriInput = {
    where: TransaksiWhereUniqueInput
    create: XOR<TransaksiCreateWithoutKategoriInput, TransaksiUncheckedCreateWithoutKategoriInput>
  }

  export type TransaksiCreateManyKategoriInputEnvelope = {
    data: TransaksiCreateManyKategoriInput | TransaksiCreateManyKategoriInput[]
    skipDuplicates?: boolean
  }

  export type AnggaranKategoriPeriodeCreateWithoutKategoriInput = {
    id?: string
    anggaran: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    periode: PeriodeAnggaranCreateNestedOneWithoutAnggaranKategoriPeriodeInput
  }

  export type AnggaranKategoriPeriodeUncheckedCreateWithoutKategoriInput = {
    id?: string
    periodeId: string
    anggaran: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnggaranKategoriPeriodeCreateOrConnectWithoutKategoriInput = {
    where: AnggaranKategoriPeriodeWhereUniqueInput
    create: XOR<AnggaranKategoriPeriodeCreateWithoutKategoriInput, AnggaranKategoriPeriodeUncheckedCreateWithoutKategoriInput>
  }

  export type AnggaranKategoriPeriodeCreateManyKategoriInputEnvelope = {
    data: AnggaranKategoriPeriodeCreateManyKategoriInput | AnggaranKategoriPeriodeCreateManyKategoriInput[]
    skipDuplicates?: boolean
  }

  export type TransaksiUpsertWithWhereUniqueWithoutKategoriInput = {
    where: TransaksiWhereUniqueInput
    update: XOR<TransaksiUpdateWithoutKategoriInput, TransaksiUncheckedUpdateWithoutKategoriInput>
    create: XOR<TransaksiCreateWithoutKategoriInput, TransaksiUncheckedCreateWithoutKategoriInput>
  }

  export type TransaksiUpdateWithWhereUniqueWithoutKategoriInput = {
    where: TransaksiWhereUniqueInput
    data: XOR<TransaksiUpdateWithoutKategoriInput, TransaksiUncheckedUpdateWithoutKategoriInput>
  }

  export type TransaksiUpdateManyWithWhereWithoutKategoriInput = {
    where: TransaksiScalarWhereInput
    data: XOR<TransaksiUpdateManyMutationInput, TransaksiUncheckedUpdateManyWithoutKategoriInput>
  }

  export type TransaksiScalarWhereInput = {
    AND?: TransaksiScalarWhereInput | TransaksiScalarWhereInput[]
    OR?: TransaksiScalarWhereInput[]
    NOT?: TransaksiScalarWhereInput | TransaksiScalarWhereInput[]
    id?: StringFilter<"Transaksi"> | string
    tanggal?: DateTimeFilter<"Transaksi"> | Date | string
    deskripsi?: StringFilter<"Transaksi"> | string
    jumlah?: DecimalFilter<"Transaksi"> | Decimal | DecimalJsLike | number | string
    kategoriId?: StringFilter<"Transaksi"> | string
    periodeId?: StringFilter<"Transaksi"> | string
    createdAt?: DateTimeFilter<"Transaksi"> | Date | string
    updatedAt?: DateTimeFilter<"Transaksi"> | Date | string
  }

  export type AnggaranKategoriPeriodeUpsertWithWhereUniqueWithoutKategoriInput = {
    where: AnggaranKategoriPeriodeWhereUniqueInput
    update: XOR<AnggaranKategoriPeriodeUpdateWithoutKategoriInput, AnggaranKategoriPeriodeUncheckedUpdateWithoutKategoriInput>
    create: XOR<AnggaranKategoriPeriodeCreateWithoutKategoriInput, AnggaranKategoriPeriodeUncheckedCreateWithoutKategoriInput>
  }

  export type AnggaranKategoriPeriodeUpdateWithWhereUniqueWithoutKategoriInput = {
    where: AnggaranKategoriPeriodeWhereUniqueInput
    data: XOR<AnggaranKategoriPeriodeUpdateWithoutKategoriInput, AnggaranKategoriPeriodeUncheckedUpdateWithoutKategoriInput>
  }

  export type AnggaranKategoriPeriodeUpdateManyWithWhereWithoutKategoriInput = {
    where: AnggaranKategoriPeriodeScalarWhereInput
    data: XOR<AnggaranKategoriPeriodeUpdateManyMutationInput, AnggaranKategoriPeriodeUncheckedUpdateManyWithoutKategoriInput>
  }

  export type AnggaranKategoriPeriodeScalarWhereInput = {
    AND?: AnggaranKategoriPeriodeScalarWhereInput | AnggaranKategoriPeriodeScalarWhereInput[]
    OR?: AnggaranKategoriPeriodeScalarWhereInput[]
    NOT?: AnggaranKategoriPeriodeScalarWhereInput | AnggaranKategoriPeriodeScalarWhereInput[]
    id?: StringFilter<"AnggaranKategoriPeriode"> | string
    kategoriId?: StringFilter<"AnggaranKategoriPeriode"> | string
    periodeId?: StringFilter<"AnggaranKategoriPeriode"> | string
    anggaran?: DecimalFilter<"AnggaranKategoriPeriode"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"AnggaranKategoriPeriode"> | Date | string
    updatedAt?: DateTimeFilter<"AnggaranKategoriPeriode"> | Date | string
  }

  export type TransaksiCreateWithoutPeriodeInput = {
    id?: string
    tanggal: Date | string
    deskripsi: string
    jumlah: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    kategori: KategoriPaguCreateNestedOneWithoutTransaksiInput
  }

  export type TransaksiUncheckedCreateWithoutPeriodeInput = {
    id?: string
    tanggal: Date | string
    deskripsi: string
    jumlah: Decimal | DecimalJsLike | number | string
    kategoriId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransaksiCreateOrConnectWithoutPeriodeInput = {
    where: TransaksiWhereUniqueInput
    create: XOR<TransaksiCreateWithoutPeriodeInput, TransaksiUncheckedCreateWithoutPeriodeInput>
  }

  export type TransaksiCreateManyPeriodeInputEnvelope = {
    data: TransaksiCreateManyPeriodeInput | TransaksiCreateManyPeriodeInput[]
    skipDuplicates?: boolean
  }

  export type AnggaranKategoriPeriodeCreateWithoutPeriodeInput = {
    id?: string
    anggaran: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    kategori: KategoriPaguCreateNestedOneWithoutAnggaranKategoriPeriodeInput
  }

  export type AnggaranKategoriPeriodeUncheckedCreateWithoutPeriodeInput = {
    id?: string
    kategoriId: string
    anggaran: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnggaranKategoriPeriodeCreateOrConnectWithoutPeriodeInput = {
    where: AnggaranKategoriPeriodeWhereUniqueInput
    create: XOR<AnggaranKategoriPeriodeCreateWithoutPeriodeInput, AnggaranKategoriPeriodeUncheckedCreateWithoutPeriodeInput>
  }

  export type AnggaranKategoriPeriodeCreateManyPeriodeInputEnvelope = {
    data: AnggaranKategoriPeriodeCreateManyPeriodeInput | AnggaranKategoriPeriodeCreateManyPeriodeInput[]
    skipDuplicates?: boolean
  }

  export type TransaksiUpsertWithWhereUniqueWithoutPeriodeInput = {
    where: TransaksiWhereUniqueInput
    update: XOR<TransaksiUpdateWithoutPeriodeInput, TransaksiUncheckedUpdateWithoutPeriodeInput>
    create: XOR<TransaksiCreateWithoutPeriodeInput, TransaksiUncheckedCreateWithoutPeriodeInput>
  }

  export type TransaksiUpdateWithWhereUniqueWithoutPeriodeInput = {
    where: TransaksiWhereUniqueInput
    data: XOR<TransaksiUpdateWithoutPeriodeInput, TransaksiUncheckedUpdateWithoutPeriodeInput>
  }

  export type TransaksiUpdateManyWithWhereWithoutPeriodeInput = {
    where: TransaksiScalarWhereInput
    data: XOR<TransaksiUpdateManyMutationInput, TransaksiUncheckedUpdateManyWithoutPeriodeInput>
  }

  export type AnggaranKategoriPeriodeUpsertWithWhereUniqueWithoutPeriodeInput = {
    where: AnggaranKategoriPeriodeWhereUniqueInput
    update: XOR<AnggaranKategoriPeriodeUpdateWithoutPeriodeInput, AnggaranKategoriPeriodeUncheckedUpdateWithoutPeriodeInput>
    create: XOR<AnggaranKategoriPeriodeCreateWithoutPeriodeInput, AnggaranKategoriPeriodeUncheckedCreateWithoutPeriodeInput>
  }

  export type AnggaranKategoriPeriodeUpdateWithWhereUniqueWithoutPeriodeInput = {
    where: AnggaranKategoriPeriodeWhereUniqueInput
    data: XOR<AnggaranKategoriPeriodeUpdateWithoutPeriodeInput, AnggaranKategoriPeriodeUncheckedUpdateWithoutPeriodeInput>
  }

  export type AnggaranKategoriPeriodeUpdateManyWithWhereWithoutPeriodeInput = {
    where: AnggaranKategoriPeriodeScalarWhereInput
    data: XOR<AnggaranKategoriPeriodeUpdateManyMutationInput, AnggaranKategoriPeriodeUncheckedUpdateManyWithoutPeriodeInput>
  }

  export type KategoriPaguCreateWithoutTransaksiInput = {
    id?: string
    nama: string
    anggaranDasar?: Decimal | DecimalJsLike | number | string
    warna?: string | null
    ikon?: string | null
    urutan?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    anggaranKategoriPeriode?: AnggaranKategoriPeriodeCreateNestedManyWithoutKategoriInput
  }

  export type KategoriPaguUncheckedCreateWithoutTransaksiInput = {
    id?: string
    nama: string
    anggaranDasar?: Decimal | DecimalJsLike | number | string
    warna?: string | null
    ikon?: string | null
    urutan?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    anggaranKategoriPeriode?: AnggaranKategoriPeriodeUncheckedCreateNestedManyWithoutKategoriInput
  }

  export type KategoriPaguCreateOrConnectWithoutTransaksiInput = {
    where: KategoriPaguWhereUniqueInput
    create: XOR<KategoriPaguCreateWithoutTransaksiInput, KategoriPaguUncheckedCreateWithoutTransaksiInput>
  }

  export type PeriodeAnggaranCreateWithoutTransaksiInput = {
    id?: string
    nama?: string | null
    tanggalMulai: Date | string
    tanggalAkhir: Date | string
    isActive?: boolean
    templateType?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    anggaranKategoriPeriode?: AnggaranKategoriPeriodeCreateNestedManyWithoutPeriodeInput
  }

  export type PeriodeAnggaranUncheckedCreateWithoutTransaksiInput = {
    id?: string
    nama?: string | null
    tanggalMulai: Date | string
    tanggalAkhir: Date | string
    isActive?: boolean
    templateType?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    anggaranKategoriPeriode?: AnggaranKategoriPeriodeUncheckedCreateNestedManyWithoutPeriodeInput
  }

  export type PeriodeAnggaranCreateOrConnectWithoutTransaksiInput = {
    where: PeriodeAnggaranWhereUniqueInput
    create: XOR<PeriodeAnggaranCreateWithoutTransaksiInput, PeriodeAnggaranUncheckedCreateWithoutTransaksiInput>
  }

  export type KategoriPaguUpsertWithoutTransaksiInput = {
    update: XOR<KategoriPaguUpdateWithoutTransaksiInput, KategoriPaguUncheckedUpdateWithoutTransaksiInput>
    create: XOR<KategoriPaguCreateWithoutTransaksiInput, KategoriPaguUncheckedCreateWithoutTransaksiInput>
    where?: KategoriPaguWhereInput
  }

  export type KategoriPaguUpdateToOneWithWhereWithoutTransaksiInput = {
    where?: KategoriPaguWhereInput
    data: XOR<KategoriPaguUpdateWithoutTransaksiInput, KategoriPaguUncheckedUpdateWithoutTransaksiInput>
  }

  export type KategoriPaguUpdateWithoutTransaksiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    anggaranDasar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    warna?: NullableStringFieldUpdateOperationsInput | string | null
    ikon?: NullableStringFieldUpdateOperationsInput | string | null
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anggaranKategoriPeriode?: AnggaranKategoriPeriodeUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriPaguUncheckedUpdateWithoutTransaksiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    anggaranDasar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    warna?: NullableStringFieldUpdateOperationsInput | string | null
    ikon?: NullableStringFieldUpdateOperationsInput | string | null
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anggaranKategoriPeriode?: AnggaranKategoriPeriodeUncheckedUpdateManyWithoutKategoriNestedInput
  }

  export type PeriodeAnggaranUpsertWithoutTransaksiInput = {
    update: XOR<PeriodeAnggaranUpdateWithoutTransaksiInput, PeriodeAnggaranUncheckedUpdateWithoutTransaksiInput>
    create: XOR<PeriodeAnggaranCreateWithoutTransaksiInput, PeriodeAnggaranUncheckedCreateWithoutTransaksiInput>
    where?: PeriodeAnggaranWhereInput
  }

  export type PeriodeAnggaranUpdateToOneWithWhereWithoutTransaksiInput = {
    where?: PeriodeAnggaranWhereInput
    data: XOR<PeriodeAnggaranUpdateWithoutTransaksiInput, PeriodeAnggaranUncheckedUpdateWithoutTransaksiInput>
  }

  export type PeriodeAnggaranUpdateWithoutTransaksiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalAkhir?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    templateType?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anggaranKategoriPeriode?: AnggaranKategoriPeriodeUpdateManyWithoutPeriodeNestedInput
  }

  export type PeriodeAnggaranUncheckedUpdateWithoutTransaksiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalAkhir?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    templateType?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anggaranKategoriPeriode?: AnggaranKategoriPeriodeUncheckedUpdateManyWithoutPeriodeNestedInput
  }

  export type KategoriPaguCreateWithoutAnggaranKategoriPeriodeInput = {
    id?: string
    nama: string
    anggaranDasar?: Decimal | DecimalJsLike | number | string
    warna?: string | null
    ikon?: string | null
    urutan?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    transaksi?: TransaksiCreateNestedManyWithoutKategoriInput
  }

  export type KategoriPaguUncheckedCreateWithoutAnggaranKategoriPeriodeInput = {
    id?: string
    nama: string
    anggaranDasar?: Decimal | DecimalJsLike | number | string
    warna?: string | null
    ikon?: string | null
    urutan?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    transaksi?: TransaksiUncheckedCreateNestedManyWithoutKategoriInput
  }

  export type KategoriPaguCreateOrConnectWithoutAnggaranKategoriPeriodeInput = {
    where: KategoriPaguWhereUniqueInput
    create: XOR<KategoriPaguCreateWithoutAnggaranKategoriPeriodeInput, KategoriPaguUncheckedCreateWithoutAnggaranKategoriPeriodeInput>
  }

  export type PeriodeAnggaranCreateWithoutAnggaranKategoriPeriodeInput = {
    id?: string
    nama?: string | null
    tanggalMulai: Date | string
    tanggalAkhir: Date | string
    isActive?: boolean
    templateType?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transaksi?: TransaksiCreateNestedManyWithoutPeriodeInput
  }

  export type PeriodeAnggaranUncheckedCreateWithoutAnggaranKategoriPeriodeInput = {
    id?: string
    nama?: string | null
    tanggalMulai: Date | string
    tanggalAkhir: Date | string
    isActive?: boolean
    templateType?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transaksi?: TransaksiUncheckedCreateNestedManyWithoutPeriodeInput
  }

  export type PeriodeAnggaranCreateOrConnectWithoutAnggaranKategoriPeriodeInput = {
    where: PeriodeAnggaranWhereUniqueInput
    create: XOR<PeriodeAnggaranCreateWithoutAnggaranKategoriPeriodeInput, PeriodeAnggaranUncheckedCreateWithoutAnggaranKategoriPeriodeInput>
  }

  export type KategoriPaguUpsertWithoutAnggaranKategoriPeriodeInput = {
    update: XOR<KategoriPaguUpdateWithoutAnggaranKategoriPeriodeInput, KategoriPaguUncheckedUpdateWithoutAnggaranKategoriPeriodeInput>
    create: XOR<KategoriPaguCreateWithoutAnggaranKategoriPeriodeInput, KategoriPaguUncheckedCreateWithoutAnggaranKategoriPeriodeInput>
    where?: KategoriPaguWhereInput
  }

  export type KategoriPaguUpdateToOneWithWhereWithoutAnggaranKategoriPeriodeInput = {
    where?: KategoriPaguWhereInput
    data: XOR<KategoriPaguUpdateWithoutAnggaranKategoriPeriodeInput, KategoriPaguUncheckedUpdateWithoutAnggaranKategoriPeriodeInput>
  }

  export type KategoriPaguUpdateWithoutAnggaranKategoriPeriodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    anggaranDasar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    warna?: NullableStringFieldUpdateOperationsInput | string | null
    ikon?: NullableStringFieldUpdateOperationsInput | string | null
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaksi?: TransaksiUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriPaguUncheckedUpdateWithoutAnggaranKategoriPeriodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    anggaranDasar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    warna?: NullableStringFieldUpdateOperationsInput | string | null
    ikon?: NullableStringFieldUpdateOperationsInput | string | null
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaksi?: TransaksiUncheckedUpdateManyWithoutKategoriNestedInput
  }

  export type PeriodeAnggaranUpsertWithoutAnggaranKategoriPeriodeInput = {
    update: XOR<PeriodeAnggaranUpdateWithoutAnggaranKategoriPeriodeInput, PeriodeAnggaranUncheckedUpdateWithoutAnggaranKategoriPeriodeInput>
    create: XOR<PeriodeAnggaranCreateWithoutAnggaranKategoriPeriodeInput, PeriodeAnggaranUncheckedCreateWithoutAnggaranKategoriPeriodeInput>
    where?: PeriodeAnggaranWhereInput
  }

  export type PeriodeAnggaranUpdateToOneWithWhereWithoutAnggaranKategoriPeriodeInput = {
    where?: PeriodeAnggaranWhereInput
    data: XOR<PeriodeAnggaranUpdateWithoutAnggaranKategoriPeriodeInput, PeriodeAnggaranUncheckedUpdateWithoutAnggaranKategoriPeriodeInput>
  }

  export type PeriodeAnggaranUpdateWithoutAnggaranKategoriPeriodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalAkhir?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    templateType?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaksi?: TransaksiUpdateManyWithoutPeriodeNestedInput
  }

  export type PeriodeAnggaranUncheckedUpdateWithoutAnggaranKategoriPeriodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalAkhir?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    templateType?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaksi?: TransaksiUncheckedUpdateManyWithoutPeriodeNestedInput
  }

  export type TransaksiCreateManyKategoriInput = {
    id?: string
    tanggal: Date | string
    deskripsi: string
    jumlah: Decimal | DecimalJsLike | number | string
    periodeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnggaranKategoriPeriodeCreateManyKategoriInput = {
    id?: string
    periodeId: string
    anggaran: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransaksiUpdateWithoutKategoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jumlah?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    periode?: PeriodeAnggaranUpdateOneRequiredWithoutTransaksiNestedInput
  }

  export type TransaksiUncheckedUpdateWithoutKategoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jumlah?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiUncheckedUpdateManyWithoutKategoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jumlah?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnggaranKategoriPeriodeUpdateWithoutKategoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    anggaran?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    periode?: PeriodeAnggaranUpdateOneRequiredWithoutAnggaranKategoriPeriodeNestedInput
  }

  export type AnggaranKategoriPeriodeUncheckedUpdateWithoutKategoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodeId?: StringFieldUpdateOperationsInput | string
    anggaran?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnggaranKategoriPeriodeUncheckedUpdateManyWithoutKategoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodeId?: StringFieldUpdateOperationsInput | string
    anggaran?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiCreateManyPeriodeInput = {
    id?: string
    tanggal: Date | string
    deskripsi: string
    jumlah: Decimal | DecimalJsLike | number | string
    kategoriId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnggaranKategoriPeriodeCreateManyPeriodeInput = {
    id?: string
    kategoriId: string
    anggaran: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransaksiUpdateWithoutPeriodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jumlah?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategori?: KategoriPaguUpdateOneRequiredWithoutTransaksiNestedInput
  }

  export type TransaksiUncheckedUpdateWithoutPeriodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jumlah?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    kategoriId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiUncheckedUpdateManyWithoutPeriodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jumlah?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    kategoriId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnggaranKategoriPeriodeUpdateWithoutPeriodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    anggaran?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategori?: KategoriPaguUpdateOneRequiredWithoutAnggaranKategoriPeriodeNestedInput
  }

  export type AnggaranKategoriPeriodeUncheckedUpdateWithoutPeriodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    kategoriId?: StringFieldUpdateOperationsInput | string
    anggaran?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnggaranKategoriPeriodeUncheckedUpdateManyWithoutPeriodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    kategoriId?: StringFieldUpdateOperationsInput | string
    anggaran?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use KategoriPaguCountOutputTypeDefaultArgs instead
     */
    export type KategoriPaguCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KategoriPaguCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PeriodeAnggaranCountOutputTypeDefaultArgs instead
     */
    export type PeriodeAnggaranCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PeriodeAnggaranCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KategoriPaguDefaultArgs instead
     */
    export type KategoriPaguArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KategoriPaguDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PeriodeAnggaranDefaultArgs instead
     */
    export type PeriodeAnggaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PeriodeAnggaranDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransaksiDefaultArgs instead
     */
    export type TransaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransaksiDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnggaranKategoriPeriodeDefaultArgs instead
     */
    export type AnggaranKategoriPeriodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnggaranKategoriPeriodeDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}