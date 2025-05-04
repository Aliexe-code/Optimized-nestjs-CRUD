
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
 * Model Sword
 * 
 */
export type Sword = $Result.DefaultSelection<Prisma.$SwordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Rarity: {
  COMMON: 'COMMON',
  UNCOMMON: 'UNCOMMON',
  RARE: 'RARE',
  EPIC: 'EPIC',
  LEGENDARY: 'LEGENDARY'
};

export type Rarity = (typeof Rarity)[keyof typeof Rarity]

}

export type Rarity = $Enums.Rarity

export const Rarity: typeof $Enums.Rarity

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Swords
 * const swords = await prisma.sword.findMany()
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
   * // Fetch zero or more Swords
   * const swords = await prisma.sword.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.sword`: Exposes CRUD operations for the **Sword** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Swords
    * const swords = await prisma.sword.findMany()
    * ```
    */
  get sword(): Prisma.SwordDelegate<ExtArgs, ClientOptions>;
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
    Sword: 'Sword'
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
      modelProps: "sword"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Sword: {
        payload: Prisma.$SwordPayload<ExtArgs>
        fields: Prisma.SwordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SwordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SwordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwordPayload>
          }
          findFirst: {
            args: Prisma.SwordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SwordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwordPayload>
          }
          findMany: {
            args: Prisma.SwordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwordPayload>[]
          }
          create: {
            args: Prisma.SwordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwordPayload>
          }
          createMany: {
            args: Prisma.SwordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SwordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwordPayload>[]
          }
          delete: {
            args: Prisma.SwordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwordPayload>
          }
          update: {
            args: Prisma.SwordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwordPayload>
          }
          deleteMany: {
            args: Prisma.SwordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SwordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SwordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwordPayload>[]
          }
          upsert: {
            args: Prisma.SwordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwordPayload>
          }
          aggregate: {
            args: Prisma.SwordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSword>
          }
          groupBy: {
            args: Prisma.SwordGroupByArgs<ExtArgs>
            result: $Utils.Optional<SwordGroupByOutputType>[]
          }
          count: {
            args: Prisma.SwordCountArgs<ExtArgs>
            result: $Utils.Optional<SwordCountAggregateOutputType> | number
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
    sword?: SwordOmit
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
   * Model Sword
   */

  export type AggregateSword = {
    _count: SwordCountAggregateOutputType | null
    _avg: SwordAvgAggregateOutputType | null
    _sum: SwordSumAggregateOutputType | null
    _min: SwordMinAggregateOutputType | null
    _max: SwordMaxAggregateOutputType | null
  }

  export type SwordAvgAggregateOutputType = {
    damage: number | null
  }

  export type SwordSumAggregateOutputType = {
    damage: number | null
  }

  export type SwordMinAggregateOutputType = {
    id: string | null
    name: string | null
    damage: number | null
    rarity: $Enums.Rarity | null
    isMagic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SwordMaxAggregateOutputType = {
    id: string | null
    name: string | null
    damage: number | null
    rarity: $Enums.Rarity | null
    isMagic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SwordCountAggregateOutputType = {
    id: number
    name: number
    damage: number
    rarity: number
    isMagic: number
    enchantments: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SwordAvgAggregateInputType = {
    damage?: true
  }

  export type SwordSumAggregateInputType = {
    damage?: true
  }

  export type SwordMinAggregateInputType = {
    id?: true
    name?: true
    damage?: true
    rarity?: true
    isMagic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SwordMaxAggregateInputType = {
    id?: true
    name?: true
    damage?: true
    rarity?: true
    isMagic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SwordCountAggregateInputType = {
    id?: true
    name?: true
    damage?: true
    rarity?: true
    isMagic?: true
    enchantments?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SwordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sword to aggregate.
     */
    where?: SwordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Swords to fetch.
     */
    orderBy?: SwordOrderByWithRelationInput | SwordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SwordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Swords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Swords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Swords
    **/
    _count?: true | SwordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SwordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SwordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SwordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SwordMaxAggregateInputType
  }

  export type GetSwordAggregateType<T extends SwordAggregateArgs> = {
        [P in keyof T & keyof AggregateSword]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSword[P]>
      : GetScalarType<T[P], AggregateSword[P]>
  }




  export type SwordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwordWhereInput
    orderBy?: SwordOrderByWithAggregationInput | SwordOrderByWithAggregationInput[]
    by: SwordScalarFieldEnum[] | SwordScalarFieldEnum
    having?: SwordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SwordCountAggregateInputType | true
    _avg?: SwordAvgAggregateInputType
    _sum?: SwordSumAggregateInputType
    _min?: SwordMinAggregateInputType
    _max?: SwordMaxAggregateInputType
  }

  export type SwordGroupByOutputType = {
    id: string
    name: string
    damage: number
    rarity: $Enums.Rarity
    isMagic: boolean
    enchantments: string[]
    createdAt: Date
    updatedAt: Date
    _count: SwordCountAggregateOutputType | null
    _avg: SwordAvgAggregateOutputType | null
    _sum: SwordSumAggregateOutputType | null
    _min: SwordMinAggregateOutputType | null
    _max: SwordMaxAggregateOutputType | null
  }

  type GetSwordGroupByPayload<T extends SwordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SwordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SwordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SwordGroupByOutputType[P]>
            : GetScalarType<T[P], SwordGroupByOutputType[P]>
        }
      >
    >


  export type SwordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    damage?: boolean
    rarity?: boolean
    isMagic?: boolean
    enchantments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sword"]>

  export type SwordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    damage?: boolean
    rarity?: boolean
    isMagic?: boolean
    enchantments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sword"]>

  export type SwordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    damage?: boolean
    rarity?: boolean
    isMagic?: boolean
    enchantments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sword"]>

  export type SwordSelectScalar = {
    id?: boolean
    name?: boolean
    damage?: boolean
    rarity?: boolean
    isMagic?: boolean
    enchantments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SwordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "damage" | "rarity" | "isMagic" | "enchantments" | "createdAt" | "updatedAt", ExtArgs["result"]["sword"]>

  export type $SwordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sword"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      damage: number
      rarity: $Enums.Rarity
      isMagic: boolean
      enchantments: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sword"]>
    composites: {}
  }

  type SwordGetPayload<S extends boolean | null | undefined | SwordDefaultArgs> = $Result.GetResult<Prisma.$SwordPayload, S>

  type SwordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SwordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SwordCountAggregateInputType | true
    }

  export interface SwordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sword'], meta: { name: 'Sword' } }
    /**
     * Find zero or one Sword that matches the filter.
     * @param {SwordFindUniqueArgs} args - Arguments to find a Sword
     * @example
     * // Get one Sword
     * const sword = await prisma.sword.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SwordFindUniqueArgs>(args: SelectSubset<T, SwordFindUniqueArgs<ExtArgs>>): Prisma__SwordClient<$Result.GetResult<Prisma.$SwordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sword that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SwordFindUniqueOrThrowArgs} args - Arguments to find a Sword
     * @example
     * // Get one Sword
     * const sword = await prisma.sword.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SwordFindUniqueOrThrowArgs>(args: SelectSubset<T, SwordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SwordClient<$Result.GetResult<Prisma.$SwordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sword that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwordFindFirstArgs} args - Arguments to find a Sword
     * @example
     * // Get one Sword
     * const sword = await prisma.sword.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SwordFindFirstArgs>(args?: SelectSubset<T, SwordFindFirstArgs<ExtArgs>>): Prisma__SwordClient<$Result.GetResult<Prisma.$SwordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sword that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwordFindFirstOrThrowArgs} args - Arguments to find a Sword
     * @example
     * // Get one Sword
     * const sword = await prisma.sword.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SwordFindFirstOrThrowArgs>(args?: SelectSubset<T, SwordFindFirstOrThrowArgs<ExtArgs>>): Prisma__SwordClient<$Result.GetResult<Prisma.$SwordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Swords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Swords
     * const swords = await prisma.sword.findMany()
     * 
     * // Get first 10 Swords
     * const swords = await prisma.sword.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const swordWithIdOnly = await prisma.sword.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SwordFindManyArgs>(args?: SelectSubset<T, SwordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sword.
     * @param {SwordCreateArgs} args - Arguments to create a Sword.
     * @example
     * // Create one Sword
     * const Sword = await prisma.sword.create({
     *   data: {
     *     // ... data to create a Sword
     *   }
     * })
     * 
     */
    create<T extends SwordCreateArgs>(args: SelectSubset<T, SwordCreateArgs<ExtArgs>>): Prisma__SwordClient<$Result.GetResult<Prisma.$SwordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Swords.
     * @param {SwordCreateManyArgs} args - Arguments to create many Swords.
     * @example
     * // Create many Swords
     * const sword = await prisma.sword.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SwordCreateManyArgs>(args?: SelectSubset<T, SwordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Swords and returns the data saved in the database.
     * @param {SwordCreateManyAndReturnArgs} args - Arguments to create many Swords.
     * @example
     * // Create many Swords
     * const sword = await prisma.sword.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Swords and only return the `id`
     * const swordWithIdOnly = await prisma.sword.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SwordCreateManyAndReturnArgs>(args?: SelectSubset<T, SwordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sword.
     * @param {SwordDeleteArgs} args - Arguments to delete one Sword.
     * @example
     * // Delete one Sword
     * const Sword = await prisma.sword.delete({
     *   where: {
     *     // ... filter to delete one Sword
     *   }
     * })
     * 
     */
    delete<T extends SwordDeleteArgs>(args: SelectSubset<T, SwordDeleteArgs<ExtArgs>>): Prisma__SwordClient<$Result.GetResult<Prisma.$SwordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sword.
     * @param {SwordUpdateArgs} args - Arguments to update one Sword.
     * @example
     * // Update one Sword
     * const sword = await prisma.sword.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SwordUpdateArgs>(args: SelectSubset<T, SwordUpdateArgs<ExtArgs>>): Prisma__SwordClient<$Result.GetResult<Prisma.$SwordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Swords.
     * @param {SwordDeleteManyArgs} args - Arguments to filter Swords to delete.
     * @example
     * // Delete a few Swords
     * const { count } = await prisma.sword.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SwordDeleteManyArgs>(args?: SelectSubset<T, SwordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Swords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Swords
     * const sword = await prisma.sword.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SwordUpdateManyArgs>(args: SelectSubset<T, SwordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Swords and returns the data updated in the database.
     * @param {SwordUpdateManyAndReturnArgs} args - Arguments to update many Swords.
     * @example
     * // Update many Swords
     * const sword = await prisma.sword.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Swords and only return the `id`
     * const swordWithIdOnly = await prisma.sword.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SwordUpdateManyAndReturnArgs>(args: SelectSubset<T, SwordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sword.
     * @param {SwordUpsertArgs} args - Arguments to update or create a Sword.
     * @example
     * // Update or create a Sword
     * const sword = await prisma.sword.upsert({
     *   create: {
     *     // ... data to create a Sword
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sword we want to update
     *   }
     * })
     */
    upsert<T extends SwordUpsertArgs>(args: SelectSubset<T, SwordUpsertArgs<ExtArgs>>): Prisma__SwordClient<$Result.GetResult<Prisma.$SwordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Swords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwordCountArgs} args - Arguments to filter Swords to count.
     * @example
     * // Count the number of Swords
     * const count = await prisma.sword.count({
     *   where: {
     *     // ... the filter for the Swords we want to count
     *   }
     * })
    **/
    count<T extends SwordCountArgs>(
      args?: Subset<T, SwordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SwordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SwordAggregateArgs>(args: Subset<T, SwordAggregateArgs>): Prisma.PrismaPromise<GetSwordAggregateType<T>>

    /**
     * Group by Sword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwordGroupByArgs} args - Group by arguments.
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
      T extends SwordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SwordGroupByArgs['orderBy'] }
        : { orderBy?: SwordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SwordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSwordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sword model
   */
  readonly fields: SwordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sword.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SwordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Sword model
   */
  interface SwordFieldRefs {
    readonly id: FieldRef<"Sword", 'String'>
    readonly name: FieldRef<"Sword", 'String'>
    readonly damage: FieldRef<"Sword", 'Int'>
    readonly rarity: FieldRef<"Sword", 'Rarity'>
    readonly isMagic: FieldRef<"Sword", 'Boolean'>
    readonly enchantments: FieldRef<"Sword", 'String[]'>
    readonly createdAt: FieldRef<"Sword", 'DateTime'>
    readonly updatedAt: FieldRef<"Sword", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sword findUnique
   */
  export type SwordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sword
     */
    select?: SwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sword
     */
    omit?: SwordOmit<ExtArgs> | null
    /**
     * Filter, which Sword to fetch.
     */
    where: SwordWhereUniqueInput
  }

  /**
   * Sword findUniqueOrThrow
   */
  export type SwordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sword
     */
    select?: SwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sword
     */
    omit?: SwordOmit<ExtArgs> | null
    /**
     * Filter, which Sword to fetch.
     */
    where: SwordWhereUniqueInput
  }

  /**
   * Sword findFirst
   */
  export type SwordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sword
     */
    select?: SwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sword
     */
    omit?: SwordOmit<ExtArgs> | null
    /**
     * Filter, which Sword to fetch.
     */
    where?: SwordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Swords to fetch.
     */
    orderBy?: SwordOrderByWithRelationInput | SwordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Swords.
     */
    cursor?: SwordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Swords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Swords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Swords.
     */
    distinct?: SwordScalarFieldEnum | SwordScalarFieldEnum[]
  }

  /**
   * Sword findFirstOrThrow
   */
  export type SwordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sword
     */
    select?: SwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sword
     */
    omit?: SwordOmit<ExtArgs> | null
    /**
     * Filter, which Sword to fetch.
     */
    where?: SwordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Swords to fetch.
     */
    orderBy?: SwordOrderByWithRelationInput | SwordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Swords.
     */
    cursor?: SwordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Swords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Swords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Swords.
     */
    distinct?: SwordScalarFieldEnum | SwordScalarFieldEnum[]
  }

  /**
   * Sword findMany
   */
  export type SwordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sword
     */
    select?: SwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sword
     */
    omit?: SwordOmit<ExtArgs> | null
    /**
     * Filter, which Swords to fetch.
     */
    where?: SwordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Swords to fetch.
     */
    orderBy?: SwordOrderByWithRelationInput | SwordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Swords.
     */
    cursor?: SwordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Swords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Swords.
     */
    skip?: number
    distinct?: SwordScalarFieldEnum | SwordScalarFieldEnum[]
  }

  /**
   * Sword create
   */
  export type SwordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sword
     */
    select?: SwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sword
     */
    omit?: SwordOmit<ExtArgs> | null
    /**
     * The data needed to create a Sword.
     */
    data: XOR<SwordCreateInput, SwordUncheckedCreateInput>
  }

  /**
   * Sword createMany
   */
  export type SwordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Swords.
     */
    data: SwordCreateManyInput | SwordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sword createManyAndReturn
   */
  export type SwordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sword
     */
    select?: SwordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sword
     */
    omit?: SwordOmit<ExtArgs> | null
    /**
     * The data used to create many Swords.
     */
    data: SwordCreateManyInput | SwordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sword update
   */
  export type SwordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sword
     */
    select?: SwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sword
     */
    omit?: SwordOmit<ExtArgs> | null
    /**
     * The data needed to update a Sword.
     */
    data: XOR<SwordUpdateInput, SwordUncheckedUpdateInput>
    /**
     * Choose, which Sword to update.
     */
    where: SwordWhereUniqueInput
  }

  /**
   * Sword updateMany
   */
  export type SwordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Swords.
     */
    data: XOR<SwordUpdateManyMutationInput, SwordUncheckedUpdateManyInput>
    /**
     * Filter which Swords to update
     */
    where?: SwordWhereInput
    /**
     * Limit how many Swords to update.
     */
    limit?: number
  }

  /**
   * Sword updateManyAndReturn
   */
  export type SwordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sword
     */
    select?: SwordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sword
     */
    omit?: SwordOmit<ExtArgs> | null
    /**
     * The data used to update Swords.
     */
    data: XOR<SwordUpdateManyMutationInput, SwordUncheckedUpdateManyInput>
    /**
     * Filter which Swords to update
     */
    where?: SwordWhereInput
    /**
     * Limit how many Swords to update.
     */
    limit?: number
  }

  /**
   * Sword upsert
   */
  export type SwordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sword
     */
    select?: SwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sword
     */
    omit?: SwordOmit<ExtArgs> | null
    /**
     * The filter to search for the Sword to update in case it exists.
     */
    where: SwordWhereUniqueInput
    /**
     * In case the Sword found by the `where` argument doesn't exist, create a new Sword with this data.
     */
    create: XOR<SwordCreateInput, SwordUncheckedCreateInput>
    /**
     * In case the Sword was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SwordUpdateInput, SwordUncheckedUpdateInput>
  }

  /**
   * Sword delete
   */
  export type SwordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sword
     */
    select?: SwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sword
     */
    omit?: SwordOmit<ExtArgs> | null
    /**
     * Filter which Sword to delete.
     */
    where: SwordWhereUniqueInput
  }

  /**
   * Sword deleteMany
   */
  export type SwordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Swords to delete
     */
    where?: SwordWhereInput
    /**
     * Limit how many Swords to delete.
     */
    limit?: number
  }

  /**
   * Sword without action
   */
  export type SwordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sword
     */
    select?: SwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sword
     */
    omit?: SwordOmit<ExtArgs> | null
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


  export const SwordScalarFieldEnum: {
    id: 'id',
    name: 'name',
    damage: 'damage',
    rarity: 'rarity',
    isMagic: 'isMagic',
    enchantments: 'enchantments',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SwordScalarFieldEnum = (typeof SwordScalarFieldEnum)[keyof typeof SwordScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Rarity'
   */
  export type EnumRarityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rarity'>
    


  /**
   * Reference to a field of type 'Rarity[]'
   */
  export type ListEnumRarityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rarity[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type SwordWhereInput = {
    AND?: SwordWhereInput | SwordWhereInput[]
    OR?: SwordWhereInput[]
    NOT?: SwordWhereInput | SwordWhereInput[]
    id?: StringFilter<"Sword"> | string
    name?: StringFilter<"Sword"> | string
    damage?: IntFilter<"Sword"> | number
    rarity?: EnumRarityFilter<"Sword"> | $Enums.Rarity
    isMagic?: BoolFilter<"Sword"> | boolean
    enchantments?: StringNullableListFilter<"Sword">
    createdAt?: DateTimeFilter<"Sword"> | Date | string
    updatedAt?: DateTimeFilter<"Sword"> | Date | string
  }

  export type SwordOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    damage?: SortOrder
    rarity?: SortOrder
    isMagic?: SortOrder
    enchantments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SwordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SwordWhereInput | SwordWhereInput[]
    OR?: SwordWhereInput[]
    NOT?: SwordWhereInput | SwordWhereInput[]
    name?: StringFilter<"Sword"> | string
    damage?: IntFilter<"Sword"> | number
    rarity?: EnumRarityFilter<"Sword"> | $Enums.Rarity
    isMagic?: BoolFilter<"Sword"> | boolean
    enchantments?: StringNullableListFilter<"Sword">
    createdAt?: DateTimeFilter<"Sword"> | Date | string
    updatedAt?: DateTimeFilter<"Sword"> | Date | string
  }, "id">

  export type SwordOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    damage?: SortOrder
    rarity?: SortOrder
    isMagic?: SortOrder
    enchantments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SwordCountOrderByAggregateInput
    _avg?: SwordAvgOrderByAggregateInput
    _max?: SwordMaxOrderByAggregateInput
    _min?: SwordMinOrderByAggregateInput
    _sum?: SwordSumOrderByAggregateInput
  }

  export type SwordScalarWhereWithAggregatesInput = {
    AND?: SwordScalarWhereWithAggregatesInput | SwordScalarWhereWithAggregatesInput[]
    OR?: SwordScalarWhereWithAggregatesInput[]
    NOT?: SwordScalarWhereWithAggregatesInput | SwordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sword"> | string
    name?: StringWithAggregatesFilter<"Sword"> | string
    damage?: IntWithAggregatesFilter<"Sword"> | number
    rarity?: EnumRarityWithAggregatesFilter<"Sword"> | $Enums.Rarity
    isMagic?: BoolWithAggregatesFilter<"Sword"> | boolean
    enchantments?: StringNullableListFilter<"Sword">
    createdAt?: DateTimeWithAggregatesFilter<"Sword"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sword"> | Date | string
  }

  export type SwordCreateInput = {
    id?: string
    name: string
    damage: number
    rarity: $Enums.Rarity
    isMagic?: boolean
    enchantments?: SwordCreateenchantmentsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SwordUncheckedCreateInput = {
    id?: string
    name: string
    damage: number
    rarity: $Enums.Rarity
    isMagic?: boolean
    enchantments?: SwordCreateenchantmentsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SwordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    damage?: IntFieldUpdateOperationsInput | number
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    isMagic?: BoolFieldUpdateOperationsInput | boolean
    enchantments?: SwordUpdateenchantmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    damage?: IntFieldUpdateOperationsInput | number
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    isMagic?: BoolFieldUpdateOperationsInput | boolean
    enchantments?: SwordUpdateenchantmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwordCreateManyInput = {
    id?: string
    name: string
    damage: number
    rarity: $Enums.Rarity
    isMagic?: boolean
    enchantments?: SwordCreateenchantmentsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SwordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    damage?: IntFieldUpdateOperationsInput | number
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    isMagic?: BoolFieldUpdateOperationsInput | boolean
    enchantments?: SwordUpdateenchantmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    damage?: IntFieldUpdateOperationsInput | number
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    isMagic?: BoolFieldUpdateOperationsInput | boolean
    enchantments?: SwordUpdateenchantmentsInput | string[]
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

  export type EnumRarityFilter<$PrismaModel = never> = {
    equals?: $Enums.Rarity | EnumRarityFieldRefInput<$PrismaModel>
    in?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    not?: NestedEnumRarityFilter<$PrismaModel> | $Enums.Rarity
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type SwordCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    damage?: SortOrder
    rarity?: SortOrder
    isMagic?: SortOrder
    enchantments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SwordAvgOrderByAggregateInput = {
    damage?: SortOrder
  }

  export type SwordMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    damage?: SortOrder
    rarity?: SortOrder
    isMagic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SwordMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    damage?: SortOrder
    rarity?: SortOrder
    isMagic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SwordSumOrderByAggregateInput = {
    damage?: SortOrder
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

  export type EnumRarityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rarity | EnumRarityFieldRefInput<$PrismaModel>
    in?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    not?: NestedEnumRarityWithAggregatesFilter<$PrismaModel> | $Enums.Rarity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRarityFilter<$PrismaModel>
    _max?: NestedEnumRarityFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type SwordCreateenchantmentsInput = {
    set: string[]
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

  export type EnumRarityFieldUpdateOperationsInput = {
    set?: $Enums.Rarity
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SwordUpdateenchantmentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NestedEnumRarityFilter<$PrismaModel = never> = {
    equals?: $Enums.Rarity | EnumRarityFieldRefInput<$PrismaModel>
    in?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    not?: NestedEnumRarityFilter<$PrismaModel> | $Enums.Rarity
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumRarityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rarity | EnumRarityFieldRefInput<$PrismaModel>
    in?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    not?: NestedEnumRarityWithAggregatesFilter<$PrismaModel> | $Enums.Rarity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRarityFilter<$PrismaModel>
    _max?: NestedEnumRarityFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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