
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
 * Model Shoes
 * 
 */
export type Shoes = $Result.DefaultSelection<Prisma.$ShoesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Shoes
 * const shoes = await prisma.shoes.findMany()
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
   * // Fetch zero or more Shoes
   * const shoes = await prisma.shoes.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.shoes`: Exposes CRUD operations for the **Shoes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shoes
    * const shoes = await prisma.shoes.findMany()
    * ```
    */
  get shoes(): Prisma.ShoesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Shoes: 'Shoes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "shoes"
      txIsolationLevel: never
    }
    model: {
      Shoes: {
        payload: Prisma.$ShoesPayload<ExtArgs>
        fields: Prisma.ShoesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShoesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShoesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoesPayload>
          }
          findFirst: {
            args: Prisma.ShoesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShoesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoesPayload>
          }
          findMany: {
            args: Prisma.ShoesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoesPayload>[]
          }
          create: {
            args: Prisma.ShoesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoesPayload>
          }
          createMany: {
            args: Prisma.ShoesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShoesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoesPayload>
          }
          update: {
            args: Prisma.ShoesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoesPayload>
          }
          deleteMany: {
            args: Prisma.ShoesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShoesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShoesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoesPayload>
          }
          aggregate: {
            args: Prisma.ShoesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShoes>
          }
          groupBy: {
            args: Prisma.ShoesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShoesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ShoesFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ShoesAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ShoesCountArgs<ExtArgs>
            result: $Utils.Optional<ShoesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    shoes?: ShoesOmit
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
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model Shoes
   */

  export type AggregateShoes = {
    _count: ShoesCountAggregateOutputType | null
    _avg: ShoesAvgAggregateOutputType | null
    _sum: ShoesSumAggregateOutputType | null
    _min: ShoesMinAggregateOutputType | null
    _max: ShoesMaxAggregateOutputType | null
  }

  export type ShoesAvgAggregateOutputType = {
    price: number | null
    size: number | null
  }

  export type ShoesSumAggregateOutputType = {
    price: number | null
    size: number | null
  }

  export type ShoesMinAggregateOutputType = {
    id: string | null
    price: number | null
    name: string | null
    brand: string | null
    size: number | null
    photo: string | null
    color: string | null
    stock: boolean | null
  }

  export type ShoesMaxAggregateOutputType = {
    id: string | null
    price: number | null
    name: string | null
    brand: string | null
    size: number | null
    photo: string | null
    color: string | null
    stock: boolean | null
  }

  export type ShoesCountAggregateOutputType = {
    id: number
    price: number
    name: number
    brand: number
    size: number
    photo: number
    color: number
    stock: number
    _all: number
  }


  export type ShoesAvgAggregateInputType = {
    price?: true
    size?: true
  }

  export type ShoesSumAggregateInputType = {
    price?: true
    size?: true
  }

  export type ShoesMinAggregateInputType = {
    id?: true
    price?: true
    name?: true
    brand?: true
    size?: true
    photo?: true
    color?: true
    stock?: true
  }

  export type ShoesMaxAggregateInputType = {
    id?: true
    price?: true
    name?: true
    brand?: true
    size?: true
    photo?: true
    color?: true
    stock?: true
  }

  export type ShoesCountAggregateInputType = {
    id?: true
    price?: true
    name?: true
    brand?: true
    size?: true
    photo?: true
    color?: true
    stock?: true
    _all?: true
  }

  export type ShoesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shoes to aggregate.
     */
    where?: ShoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shoes to fetch.
     */
    orderBy?: ShoesOrderByWithRelationInput | ShoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shoes
    **/
    _count?: true | ShoesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShoesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShoesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShoesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShoesMaxAggregateInputType
  }

  export type GetShoesAggregateType<T extends ShoesAggregateArgs> = {
        [P in keyof T & keyof AggregateShoes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShoes[P]>
      : GetScalarType<T[P], AggregateShoes[P]>
  }




  export type ShoesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoesWhereInput
    orderBy?: ShoesOrderByWithAggregationInput | ShoesOrderByWithAggregationInput[]
    by: ShoesScalarFieldEnum[] | ShoesScalarFieldEnum
    having?: ShoesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShoesCountAggregateInputType | true
    _avg?: ShoesAvgAggregateInputType
    _sum?: ShoesSumAggregateInputType
    _min?: ShoesMinAggregateInputType
    _max?: ShoesMaxAggregateInputType
  }

  export type ShoesGroupByOutputType = {
    id: string
    price: number
    name: string
    brand: string
    size: number
    photo: string
    color: string
    stock: boolean
    _count: ShoesCountAggregateOutputType | null
    _avg: ShoesAvgAggregateOutputType | null
    _sum: ShoesSumAggregateOutputType | null
    _min: ShoesMinAggregateOutputType | null
    _max: ShoesMaxAggregateOutputType | null
  }

  type GetShoesGroupByPayload<T extends ShoesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShoesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShoesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShoesGroupByOutputType[P]>
            : GetScalarType<T[P], ShoesGroupByOutputType[P]>
        }
      >
    >


  export type ShoesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    name?: boolean
    brand?: boolean
    size?: boolean
    photo?: boolean
    color?: boolean
    stock?: boolean
  }, ExtArgs["result"]["shoes"]>



  export type ShoesSelectScalar = {
    id?: boolean
    price?: boolean
    name?: boolean
    brand?: boolean
    size?: boolean
    photo?: boolean
    color?: boolean
    stock?: boolean
  }

  export type ShoesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "price" | "name" | "brand" | "size" | "photo" | "color" | "stock", ExtArgs["result"]["shoes"]>

  export type $ShoesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shoes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      price: number
      name: string
      brand: string
      size: number
      photo: string
      color: string
      stock: boolean
    }, ExtArgs["result"]["shoes"]>
    composites: {}
  }

  type ShoesGetPayload<S extends boolean | null | undefined | ShoesDefaultArgs> = $Result.GetResult<Prisma.$ShoesPayload, S>

  type ShoesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShoesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShoesCountAggregateInputType | true
    }

  export interface ShoesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shoes'], meta: { name: 'Shoes' } }
    /**
     * Find zero or one Shoes that matches the filter.
     * @param {ShoesFindUniqueArgs} args - Arguments to find a Shoes
     * @example
     * // Get one Shoes
     * const shoes = await prisma.shoes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShoesFindUniqueArgs>(args: SelectSubset<T, ShoesFindUniqueArgs<ExtArgs>>): Prisma__ShoesClient<$Result.GetResult<Prisma.$ShoesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shoes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShoesFindUniqueOrThrowArgs} args - Arguments to find a Shoes
     * @example
     * // Get one Shoes
     * const shoes = await prisma.shoes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShoesFindUniqueOrThrowArgs>(args: SelectSubset<T, ShoesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShoesClient<$Result.GetResult<Prisma.$ShoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoesFindFirstArgs} args - Arguments to find a Shoes
     * @example
     * // Get one Shoes
     * const shoes = await prisma.shoes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShoesFindFirstArgs>(args?: SelectSubset<T, ShoesFindFirstArgs<ExtArgs>>): Prisma__ShoesClient<$Result.GetResult<Prisma.$ShoesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shoes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoesFindFirstOrThrowArgs} args - Arguments to find a Shoes
     * @example
     * // Get one Shoes
     * const shoes = await prisma.shoes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShoesFindFirstOrThrowArgs>(args?: SelectSubset<T, ShoesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShoesClient<$Result.GetResult<Prisma.$ShoesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shoes
     * const shoes = await prisma.shoes.findMany()
     * 
     * // Get first 10 Shoes
     * const shoes = await prisma.shoes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shoesWithIdOnly = await prisma.shoes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShoesFindManyArgs>(args?: SelectSubset<T, ShoesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shoes.
     * @param {ShoesCreateArgs} args - Arguments to create a Shoes.
     * @example
     * // Create one Shoes
     * const Shoes = await prisma.shoes.create({
     *   data: {
     *     // ... data to create a Shoes
     *   }
     * })
     * 
     */
    create<T extends ShoesCreateArgs>(args: SelectSubset<T, ShoesCreateArgs<ExtArgs>>): Prisma__ShoesClient<$Result.GetResult<Prisma.$ShoesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shoes.
     * @param {ShoesCreateManyArgs} args - Arguments to create many Shoes.
     * @example
     * // Create many Shoes
     * const shoes = await prisma.shoes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShoesCreateManyArgs>(args?: SelectSubset<T, ShoesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Shoes.
     * @param {ShoesDeleteArgs} args - Arguments to delete one Shoes.
     * @example
     * // Delete one Shoes
     * const Shoes = await prisma.shoes.delete({
     *   where: {
     *     // ... filter to delete one Shoes
     *   }
     * })
     * 
     */
    delete<T extends ShoesDeleteArgs>(args: SelectSubset<T, ShoesDeleteArgs<ExtArgs>>): Prisma__ShoesClient<$Result.GetResult<Prisma.$ShoesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shoes.
     * @param {ShoesUpdateArgs} args - Arguments to update one Shoes.
     * @example
     * // Update one Shoes
     * const shoes = await prisma.shoes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShoesUpdateArgs>(args: SelectSubset<T, ShoesUpdateArgs<ExtArgs>>): Prisma__ShoesClient<$Result.GetResult<Prisma.$ShoesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shoes.
     * @param {ShoesDeleteManyArgs} args - Arguments to filter Shoes to delete.
     * @example
     * // Delete a few Shoes
     * const { count } = await prisma.shoes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShoesDeleteManyArgs>(args?: SelectSubset<T, ShoesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shoes
     * const shoes = await prisma.shoes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShoesUpdateManyArgs>(args: SelectSubset<T, ShoesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shoes.
     * @param {ShoesUpsertArgs} args - Arguments to update or create a Shoes.
     * @example
     * // Update or create a Shoes
     * const shoes = await prisma.shoes.upsert({
     *   create: {
     *     // ... data to create a Shoes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shoes we want to update
     *   }
     * })
     */
    upsert<T extends ShoesUpsertArgs>(args: SelectSubset<T, ShoesUpsertArgs<ExtArgs>>): Prisma__ShoesClient<$Result.GetResult<Prisma.$ShoesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shoes that matches the filter.
     * @param {ShoesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const shoes = await prisma.shoes.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ShoesFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Shoes.
     * @param {ShoesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const shoes = await prisma.shoes.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ShoesAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Shoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoesCountArgs} args - Arguments to filter Shoes to count.
     * @example
     * // Count the number of Shoes
     * const count = await prisma.shoes.count({
     *   where: {
     *     // ... the filter for the Shoes we want to count
     *   }
     * })
    **/
    count<T extends ShoesCountArgs>(
      args?: Subset<T, ShoesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShoesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShoesAggregateArgs>(args: Subset<T, ShoesAggregateArgs>): Prisma.PrismaPromise<GetShoesAggregateType<T>>

    /**
     * Group by Shoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoesGroupByArgs} args - Group by arguments.
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
      T extends ShoesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShoesGroupByArgs['orderBy'] }
        : { orderBy?: ShoesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shoes model
   */
  readonly fields: ShoesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shoes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShoesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Shoes model
   */
  interface ShoesFieldRefs {
    readonly id: FieldRef<"Shoes", 'String'>
    readonly price: FieldRef<"Shoes", 'Float'>
    readonly name: FieldRef<"Shoes", 'String'>
    readonly brand: FieldRef<"Shoes", 'String'>
    readonly size: FieldRef<"Shoes", 'Int'>
    readonly photo: FieldRef<"Shoes", 'String'>
    readonly color: FieldRef<"Shoes", 'String'>
    readonly stock: FieldRef<"Shoes", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Shoes findUnique
   */
  export type ShoesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shoes
     */
    select?: ShoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shoes
     */
    omit?: ShoesOmit<ExtArgs> | null
    /**
     * Filter, which Shoes to fetch.
     */
    where: ShoesWhereUniqueInput
  }

  /**
   * Shoes findUniqueOrThrow
   */
  export type ShoesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shoes
     */
    select?: ShoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shoes
     */
    omit?: ShoesOmit<ExtArgs> | null
    /**
     * Filter, which Shoes to fetch.
     */
    where: ShoesWhereUniqueInput
  }

  /**
   * Shoes findFirst
   */
  export type ShoesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shoes
     */
    select?: ShoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shoes
     */
    omit?: ShoesOmit<ExtArgs> | null
    /**
     * Filter, which Shoes to fetch.
     */
    where?: ShoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shoes to fetch.
     */
    orderBy?: ShoesOrderByWithRelationInput | ShoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shoes.
     */
    cursor?: ShoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shoes.
     */
    distinct?: ShoesScalarFieldEnum | ShoesScalarFieldEnum[]
  }

  /**
   * Shoes findFirstOrThrow
   */
  export type ShoesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shoes
     */
    select?: ShoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shoes
     */
    omit?: ShoesOmit<ExtArgs> | null
    /**
     * Filter, which Shoes to fetch.
     */
    where?: ShoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shoes to fetch.
     */
    orderBy?: ShoesOrderByWithRelationInput | ShoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shoes.
     */
    cursor?: ShoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shoes.
     */
    distinct?: ShoesScalarFieldEnum | ShoesScalarFieldEnum[]
  }

  /**
   * Shoes findMany
   */
  export type ShoesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shoes
     */
    select?: ShoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shoes
     */
    omit?: ShoesOmit<ExtArgs> | null
    /**
     * Filter, which Shoes to fetch.
     */
    where?: ShoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shoes to fetch.
     */
    orderBy?: ShoesOrderByWithRelationInput | ShoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shoes.
     */
    cursor?: ShoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shoes.
     */
    skip?: number
    distinct?: ShoesScalarFieldEnum | ShoesScalarFieldEnum[]
  }

  /**
   * Shoes create
   */
  export type ShoesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shoes
     */
    select?: ShoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shoes
     */
    omit?: ShoesOmit<ExtArgs> | null
    /**
     * The data needed to create a Shoes.
     */
    data: XOR<ShoesCreateInput, ShoesUncheckedCreateInput>
  }

  /**
   * Shoes createMany
   */
  export type ShoesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shoes.
     */
    data: ShoesCreateManyInput | ShoesCreateManyInput[]
  }

  /**
   * Shoes update
   */
  export type ShoesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shoes
     */
    select?: ShoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shoes
     */
    omit?: ShoesOmit<ExtArgs> | null
    /**
     * The data needed to update a Shoes.
     */
    data: XOR<ShoesUpdateInput, ShoesUncheckedUpdateInput>
    /**
     * Choose, which Shoes to update.
     */
    where: ShoesWhereUniqueInput
  }

  /**
   * Shoes updateMany
   */
  export type ShoesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shoes.
     */
    data: XOR<ShoesUpdateManyMutationInput, ShoesUncheckedUpdateManyInput>
    /**
     * Filter which Shoes to update
     */
    where?: ShoesWhereInput
    /**
     * Limit how many Shoes to update.
     */
    limit?: number
  }

  /**
   * Shoes upsert
   */
  export type ShoesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shoes
     */
    select?: ShoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shoes
     */
    omit?: ShoesOmit<ExtArgs> | null
    /**
     * The filter to search for the Shoes to update in case it exists.
     */
    where: ShoesWhereUniqueInput
    /**
     * In case the Shoes found by the `where` argument doesn't exist, create a new Shoes with this data.
     */
    create: XOR<ShoesCreateInput, ShoesUncheckedCreateInput>
    /**
     * In case the Shoes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShoesUpdateInput, ShoesUncheckedUpdateInput>
  }

  /**
   * Shoes delete
   */
  export type ShoesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shoes
     */
    select?: ShoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shoes
     */
    omit?: ShoesOmit<ExtArgs> | null
    /**
     * Filter which Shoes to delete.
     */
    where: ShoesWhereUniqueInput
  }

  /**
   * Shoes deleteMany
   */
  export type ShoesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shoes to delete
     */
    where?: ShoesWhereInput
    /**
     * Limit how many Shoes to delete.
     */
    limit?: number
  }

  /**
   * Shoes findRaw
   */
  export type ShoesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Shoes aggregateRaw
   */
  export type ShoesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Shoes without action
   */
  export type ShoesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shoes
     */
    select?: ShoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shoes
     */
    omit?: ShoesOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const ShoesScalarFieldEnum: {
    id: 'id',
    price: 'price',
    name: 'name',
    brand: 'brand',
    size: 'size',
    photo: 'photo',
    color: 'color',
    stock: 'stock'
  };

  export type ShoesScalarFieldEnum = (typeof ShoesScalarFieldEnum)[keyof typeof ShoesScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type ShoesWhereInput = {
    AND?: ShoesWhereInput | ShoesWhereInput[]
    OR?: ShoesWhereInput[]
    NOT?: ShoesWhereInput | ShoesWhereInput[]
    id?: StringFilter<"Shoes"> | string
    price?: FloatFilter<"Shoes"> | number
    name?: StringFilter<"Shoes"> | string
    brand?: StringFilter<"Shoes"> | string
    size?: IntFilter<"Shoes"> | number
    photo?: StringFilter<"Shoes"> | string
    color?: StringFilter<"Shoes"> | string
    stock?: BoolFilter<"Shoes"> | boolean
  }

  export type ShoesOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    size?: SortOrder
    photo?: SortOrder
    color?: SortOrder
    stock?: SortOrder
  }

  export type ShoesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShoesWhereInput | ShoesWhereInput[]
    OR?: ShoesWhereInput[]
    NOT?: ShoesWhereInput | ShoesWhereInput[]
    price?: FloatFilter<"Shoes"> | number
    name?: StringFilter<"Shoes"> | string
    brand?: StringFilter<"Shoes"> | string
    size?: IntFilter<"Shoes"> | number
    photo?: StringFilter<"Shoes"> | string
    color?: StringFilter<"Shoes"> | string
    stock?: BoolFilter<"Shoes"> | boolean
  }, "id">

  export type ShoesOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    size?: SortOrder
    photo?: SortOrder
    color?: SortOrder
    stock?: SortOrder
    _count?: ShoesCountOrderByAggregateInput
    _avg?: ShoesAvgOrderByAggregateInput
    _max?: ShoesMaxOrderByAggregateInput
    _min?: ShoesMinOrderByAggregateInput
    _sum?: ShoesSumOrderByAggregateInput
  }

  export type ShoesScalarWhereWithAggregatesInput = {
    AND?: ShoesScalarWhereWithAggregatesInput | ShoesScalarWhereWithAggregatesInput[]
    OR?: ShoesScalarWhereWithAggregatesInput[]
    NOT?: ShoesScalarWhereWithAggregatesInput | ShoesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shoes"> | string
    price?: FloatWithAggregatesFilter<"Shoes"> | number
    name?: StringWithAggregatesFilter<"Shoes"> | string
    brand?: StringWithAggregatesFilter<"Shoes"> | string
    size?: IntWithAggregatesFilter<"Shoes"> | number
    photo?: StringWithAggregatesFilter<"Shoes"> | string
    color?: StringWithAggregatesFilter<"Shoes"> | string
    stock?: BoolWithAggregatesFilter<"Shoes"> | boolean
  }

  export type ShoesCreateInput = {
    id?: string
    price: number
    name: string
    brand: string
    size: number
    photo: string
    color: string
    stock: boolean
  }

  export type ShoesUncheckedCreateInput = {
    id?: string
    price: number
    name: string
    brand: string
    size: number
    photo: string
    color: string
    stock: boolean
  }

  export type ShoesUpdateInput = {
    price?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    photo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    stock?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShoesUncheckedUpdateInput = {
    price?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    photo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    stock?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShoesCreateManyInput = {
    id?: string
    price: number
    name: string
    brand: string
    size: number
    photo: string
    color: string
    stock: boolean
  }

  export type ShoesUpdateManyMutationInput = {
    price?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    photo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    stock?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShoesUncheckedUpdateManyInput = {
    price?: FloatFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    photo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    stock?: BoolFieldUpdateOperationsInput | boolean
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ShoesCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    size?: SortOrder
    photo?: SortOrder
    color?: SortOrder
    stock?: SortOrder
  }

  export type ShoesAvgOrderByAggregateInput = {
    price?: SortOrder
    size?: SortOrder
  }

  export type ShoesMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    size?: SortOrder
    photo?: SortOrder
    color?: SortOrder
    stock?: SortOrder
  }

  export type ShoesMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    size?: SortOrder
    photo?: SortOrder
    color?: SortOrder
    stock?: SortOrder
  }

  export type ShoesSumOrderByAggregateInput = {
    price?: SortOrder
    size?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



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