
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
 * Model Username
 * 
 */
export type Username = $Result.DefaultSelection<Prisma.$UsernamePayload>
/**
 * Model MetaData
 * 
 */
export type MetaData = $Result.DefaultSelection<Prisma.$MetaDataPayload>
/**
 * Model FAQ
 * 
 */
export type FAQ = $Result.DefaultSelection<Prisma.$FAQPayload>
/**
 * Model SERVICE
 * 
 */
export type SERVICE = $Result.DefaultSelection<Prisma.$SERVICEPayload>
/**
 * Model MY_WORK
 * 
 */
export type MY_WORK = $Result.DefaultSelection<Prisma.$MY_WORKPayload>
/**
 * Model CONTACTS
 * 
 */
export type CONTACTS = $Result.DefaultSelection<Prisma.$CONTACTSPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usernames
 * const usernames = await prisma.username.findMany()
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
   * // Fetch zero or more Usernames
   * const usernames = await prisma.username.findMany()
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
   * `prisma.username`: Exposes CRUD operations for the **Username** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usernames
    * const usernames = await prisma.username.findMany()
    * ```
    */
  get username(): Prisma.UsernameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metaData`: Exposes CRUD operations for the **MetaData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetaData
    * const metaData = await prisma.metaData.findMany()
    * ```
    */
  get metaData(): Prisma.MetaDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fAQ`: Exposes CRUD operations for the **FAQ** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FAQS
    * const fAQS = await prisma.fAQ.findMany()
    * ```
    */
  get fAQ(): Prisma.FAQDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sERVICE`: Exposes CRUD operations for the **SERVICE** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SERVICES
    * const sERVICES = await prisma.sERVICE.findMany()
    * ```
    */
  get sERVICE(): Prisma.SERVICEDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mY_WORK`: Exposes CRUD operations for the **MY_WORK** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MY_WORKS
    * const mY_WORKS = await prisma.mY_WORK.findMany()
    * ```
    */
  get mY_WORK(): Prisma.MY_WORKDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cONTACTS`: Exposes CRUD operations for the **CONTACTS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CONTACTS
    * const cONTACTS = await prisma.cONTACTS.findMany()
    * ```
    */
  get cONTACTS(): Prisma.CONTACTSDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    Username: 'Username',
    MetaData: 'MetaData',
    FAQ: 'FAQ',
    SERVICE: 'SERVICE',
    MY_WORK: 'MY_WORK',
    CONTACTS: 'CONTACTS'
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
      modelProps: "username" | "metaData" | "fAQ" | "sERVICE" | "mY_WORK" | "cONTACTS"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Username: {
        payload: Prisma.$UsernamePayload<ExtArgs>
        fields: Prisma.UsernameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsernameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsernameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamePayload>
          }
          findFirst: {
            args: Prisma.UsernameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsernameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamePayload>
          }
          findMany: {
            args: Prisma.UsernameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamePayload>[]
          }
          create: {
            args: Prisma.UsernameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamePayload>
          }
          createMany: {
            args: Prisma.UsernameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsernameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamePayload>
          }
          update: {
            args: Prisma.UsernameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamePayload>
          }
          deleteMany: {
            args: Prisma.UsernameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsernameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsernameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamePayload>
          }
          aggregate: {
            args: Prisma.UsernameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsername>
          }
          groupBy: {
            args: Prisma.UsernameGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsernameGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsernameCountArgs<ExtArgs>
            result: $Utils.Optional<UsernameCountAggregateOutputType> | number
          }
        }
      }
      MetaData: {
        payload: Prisma.$MetaDataPayload<ExtArgs>
        fields: Prisma.MetaDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetaDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetaDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload>
          }
          findFirst: {
            args: Prisma.MetaDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetaDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload>
          }
          findMany: {
            args: Prisma.MetaDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload>[]
          }
          create: {
            args: Prisma.MetaDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload>
          }
          createMany: {
            args: Prisma.MetaDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MetaDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload>
          }
          update: {
            args: Prisma.MetaDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload>
          }
          deleteMany: {
            args: Prisma.MetaDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetaDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MetaDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload>
          }
          aggregate: {
            args: Prisma.MetaDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetaData>
          }
          groupBy: {
            args: Prisma.MetaDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetaDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetaDataCountArgs<ExtArgs>
            result: $Utils.Optional<MetaDataCountAggregateOutputType> | number
          }
        }
      }
      FAQ: {
        payload: Prisma.$FAQPayload<ExtArgs>
        fields: Prisma.FAQFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FAQFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FAQFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          findFirst: {
            args: Prisma.FAQFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FAQFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          findMany: {
            args: Prisma.FAQFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>[]
          }
          create: {
            args: Prisma.FAQCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          createMany: {
            args: Prisma.FAQCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FAQDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          update: {
            args: Prisma.FAQUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          deleteMany: {
            args: Prisma.FAQDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FAQUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FAQUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          aggregate: {
            args: Prisma.FAQAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFAQ>
          }
          groupBy: {
            args: Prisma.FAQGroupByArgs<ExtArgs>
            result: $Utils.Optional<FAQGroupByOutputType>[]
          }
          count: {
            args: Prisma.FAQCountArgs<ExtArgs>
            result: $Utils.Optional<FAQCountAggregateOutputType> | number
          }
        }
      }
      SERVICE: {
        payload: Prisma.$SERVICEPayload<ExtArgs>
        fields: Prisma.SERVICEFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SERVICEFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SERVICEFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload>
          }
          findFirst: {
            args: Prisma.SERVICEFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SERVICEFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload>
          }
          findMany: {
            args: Prisma.SERVICEFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload>[]
          }
          create: {
            args: Prisma.SERVICECreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload>
          }
          createMany: {
            args: Prisma.SERVICECreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SERVICEDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload>
          }
          update: {
            args: Prisma.SERVICEUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload>
          }
          deleteMany: {
            args: Prisma.SERVICEDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SERVICEUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SERVICEUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload>
          }
          aggregate: {
            args: Prisma.SERVICEAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSERVICE>
          }
          groupBy: {
            args: Prisma.SERVICEGroupByArgs<ExtArgs>
            result: $Utils.Optional<SERVICEGroupByOutputType>[]
          }
          count: {
            args: Prisma.SERVICECountArgs<ExtArgs>
            result: $Utils.Optional<SERVICECountAggregateOutputType> | number
          }
        }
      }
      MY_WORK: {
        payload: Prisma.$MY_WORKPayload<ExtArgs>
        fields: Prisma.MY_WORKFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MY_WORKFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MY_WORKPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MY_WORKFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MY_WORKPayload>
          }
          findFirst: {
            args: Prisma.MY_WORKFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MY_WORKPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MY_WORKFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MY_WORKPayload>
          }
          findMany: {
            args: Prisma.MY_WORKFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MY_WORKPayload>[]
          }
          create: {
            args: Prisma.MY_WORKCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MY_WORKPayload>
          }
          createMany: {
            args: Prisma.MY_WORKCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MY_WORKDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MY_WORKPayload>
          }
          update: {
            args: Prisma.MY_WORKUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MY_WORKPayload>
          }
          deleteMany: {
            args: Prisma.MY_WORKDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MY_WORKUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MY_WORKUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MY_WORKPayload>
          }
          aggregate: {
            args: Prisma.MY_WORKAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMY_WORK>
          }
          groupBy: {
            args: Prisma.MY_WORKGroupByArgs<ExtArgs>
            result: $Utils.Optional<MY_WORKGroupByOutputType>[]
          }
          count: {
            args: Prisma.MY_WORKCountArgs<ExtArgs>
            result: $Utils.Optional<MY_WORKCountAggregateOutputType> | number
          }
        }
      }
      CONTACTS: {
        payload: Prisma.$CONTACTSPayload<ExtArgs>
        fields: Prisma.CONTACTSFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CONTACTSFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONTACTSPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CONTACTSFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONTACTSPayload>
          }
          findFirst: {
            args: Prisma.CONTACTSFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONTACTSPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CONTACTSFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONTACTSPayload>
          }
          findMany: {
            args: Prisma.CONTACTSFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONTACTSPayload>[]
          }
          create: {
            args: Prisma.CONTACTSCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONTACTSPayload>
          }
          createMany: {
            args: Prisma.CONTACTSCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CONTACTSDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONTACTSPayload>
          }
          update: {
            args: Prisma.CONTACTSUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONTACTSPayload>
          }
          deleteMany: {
            args: Prisma.CONTACTSDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CONTACTSUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CONTACTSUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONTACTSPayload>
          }
          aggregate: {
            args: Prisma.CONTACTSAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCONTACTS>
          }
          groupBy: {
            args: Prisma.CONTACTSGroupByArgs<ExtArgs>
            result: $Utils.Optional<CONTACTSGroupByOutputType>[]
          }
          count: {
            args: Prisma.CONTACTSCountArgs<ExtArgs>
            result: $Utils.Optional<CONTACTSCountAggregateOutputType> | number
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
    username?: UsernameOmit
    metaData?: MetaDataOmit
    fAQ?: FAQOmit
    sERVICE?: SERVICEOmit
    mY_WORK?: MY_WORKOmit
    cONTACTS?: CONTACTSOmit
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
   * Model Username
   */

  export type AggregateUsername = {
    _count: UsernameCountAggregateOutputType | null
    _avg: UsernameAvgAggregateOutputType | null
    _sum: UsernameSumAggregateOutputType | null
    _min: UsernameMinAggregateOutputType | null
    _max: UsernameMaxAggregateOutputType | null
  }

  export type UsernameAvgAggregateOutputType = {
    id: number | null
  }

  export type UsernameSumAggregateOutputType = {
    id: number | null
  }

  export type UsernameMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    twoFACode: string | null
    twoFACodeExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsernameMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    twoFACode: string | null
    twoFACodeExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsernameCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    twoFACode: number
    twoFACodeExpires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsernameAvgAggregateInputType = {
    id?: true
  }

  export type UsernameSumAggregateInputType = {
    id?: true
  }

  export type UsernameMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    twoFACode?: true
    twoFACodeExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsernameMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    twoFACode?: true
    twoFACodeExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsernameCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    twoFACode?: true
    twoFACodeExpires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsernameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Username to aggregate.
     */
    where?: UsernameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usernames to fetch.
     */
    orderBy?: UsernameOrderByWithRelationInput | UsernameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsernameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usernames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usernames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usernames
    **/
    _count?: true | UsernameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsernameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsernameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsernameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsernameMaxAggregateInputType
  }

  export type GetUsernameAggregateType<T extends UsernameAggregateArgs> = {
        [P in keyof T & keyof AggregateUsername]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsername[P]>
      : GetScalarType<T[P], AggregateUsername[P]>
  }




  export type UsernameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsernameWhereInput
    orderBy?: UsernameOrderByWithAggregationInput | UsernameOrderByWithAggregationInput[]
    by: UsernameScalarFieldEnum[] | UsernameScalarFieldEnum
    having?: UsernameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsernameCountAggregateInputType | true
    _avg?: UsernameAvgAggregateInputType
    _sum?: UsernameSumAggregateInputType
    _min?: UsernameMinAggregateInputType
    _max?: UsernameMaxAggregateInputType
  }

  export type UsernameGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    twoFACode: string | null
    twoFACodeExpires: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UsernameCountAggregateOutputType | null
    _avg: UsernameAvgAggregateOutputType | null
    _sum: UsernameSumAggregateOutputType | null
    _min: UsernameMinAggregateOutputType | null
    _max: UsernameMaxAggregateOutputType | null
  }

  type GetUsernameGroupByPayload<T extends UsernameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsernameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsernameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsernameGroupByOutputType[P]>
            : GetScalarType<T[P], UsernameGroupByOutputType[P]>
        }
      >
    >


  export type UsernameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    twoFACode?: boolean
    twoFACodeExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["username"]>



  export type UsernameSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    twoFACode?: boolean
    twoFACodeExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsernameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "twoFACode" | "twoFACodeExpires" | "createdAt" | "updatedAt", ExtArgs["result"]["username"]>

  export type $UsernamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Username"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: $Enums.Role
      twoFACode: string | null
      twoFACodeExpires: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["username"]>
    composites: {}
  }

  type UsernameGetPayload<S extends boolean | null | undefined | UsernameDefaultArgs> = $Result.GetResult<Prisma.$UsernamePayload, S>

  type UsernameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsernameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsernameCountAggregateInputType | true
    }

  export interface UsernameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Username'], meta: { name: 'Username' } }
    /**
     * Find zero or one Username that matches the filter.
     * @param {UsernameFindUniqueArgs} args - Arguments to find a Username
     * @example
     * // Get one Username
     * const username = await prisma.username.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsernameFindUniqueArgs>(args: SelectSubset<T, UsernameFindUniqueArgs<ExtArgs>>): Prisma__UsernameClient<$Result.GetResult<Prisma.$UsernamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Username that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsernameFindUniqueOrThrowArgs} args - Arguments to find a Username
     * @example
     * // Get one Username
     * const username = await prisma.username.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsernameFindUniqueOrThrowArgs>(args: SelectSubset<T, UsernameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsernameClient<$Result.GetResult<Prisma.$UsernamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Username that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsernameFindFirstArgs} args - Arguments to find a Username
     * @example
     * // Get one Username
     * const username = await prisma.username.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsernameFindFirstArgs>(args?: SelectSubset<T, UsernameFindFirstArgs<ExtArgs>>): Prisma__UsernameClient<$Result.GetResult<Prisma.$UsernamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Username that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsernameFindFirstOrThrowArgs} args - Arguments to find a Username
     * @example
     * // Get one Username
     * const username = await prisma.username.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsernameFindFirstOrThrowArgs>(args?: SelectSubset<T, UsernameFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsernameClient<$Result.GetResult<Prisma.$UsernamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usernames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsernameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usernames
     * const usernames = await prisma.username.findMany()
     * 
     * // Get first 10 Usernames
     * const usernames = await prisma.username.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usernameWithIdOnly = await prisma.username.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsernameFindManyArgs>(args?: SelectSubset<T, UsernameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsernamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Username.
     * @param {UsernameCreateArgs} args - Arguments to create a Username.
     * @example
     * // Create one Username
     * const Username = await prisma.username.create({
     *   data: {
     *     // ... data to create a Username
     *   }
     * })
     * 
     */
    create<T extends UsernameCreateArgs>(args: SelectSubset<T, UsernameCreateArgs<ExtArgs>>): Prisma__UsernameClient<$Result.GetResult<Prisma.$UsernamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usernames.
     * @param {UsernameCreateManyArgs} args - Arguments to create many Usernames.
     * @example
     * // Create many Usernames
     * const username = await prisma.username.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsernameCreateManyArgs>(args?: SelectSubset<T, UsernameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Username.
     * @param {UsernameDeleteArgs} args - Arguments to delete one Username.
     * @example
     * // Delete one Username
     * const Username = await prisma.username.delete({
     *   where: {
     *     // ... filter to delete one Username
     *   }
     * })
     * 
     */
    delete<T extends UsernameDeleteArgs>(args: SelectSubset<T, UsernameDeleteArgs<ExtArgs>>): Prisma__UsernameClient<$Result.GetResult<Prisma.$UsernamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Username.
     * @param {UsernameUpdateArgs} args - Arguments to update one Username.
     * @example
     * // Update one Username
     * const username = await prisma.username.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsernameUpdateArgs>(args: SelectSubset<T, UsernameUpdateArgs<ExtArgs>>): Prisma__UsernameClient<$Result.GetResult<Prisma.$UsernamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usernames.
     * @param {UsernameDeleteManyArgs} args - Arguments to filter Usernames to delete.
     * @example
     * // Delete a few Usernames
     * const { count } = await prisma.username.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsernameDeleteManyArgs>(args?: SelectSubset<T, UsernameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usernames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsernameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usernames
     * const username = await prisma.username.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsernameUpdateManyArgs>(args: SelectSubset<T, UsernameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Username.
     * @param {UsernameUpsertArgs} args - Arguments to update or create a Username.
     * @example
     * // Update or create a Username
     * const username = await prisma.username.upsert({
     *   create: {
     *     // ... data to create a Username
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Username we want to update
     *   }
     * })
     */
    upsert<T extends UsernameUpsertArgs>(args: SelectSubset<T, UsernameUpsertArgs<ExtArgs>>): Prisma__UsernameClient<$Result.GetResult<Prisma.$UsernamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usernames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsernameCountArgs} args - Arguments to filter Usernames to count.
     * @example
     * // Count the number of Usernames
     * const count = await prisma.username.count({
     *   where: {
     *     // ... the filter for the Usernames we want to count
     *   }
     * })
    **/
    count<T extends UsernameCountArgs>(
      args?: Subset<T, UsernameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsernameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Username.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsernameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsernameAggregateArgs>(args: Subset<T, UsernameAggregateArgs>): Prisma.PrismaPromise<GetUsernameAggregateType<T>>

    /**
     * Group by Username.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsernameGroupByArgs} args - Group by arguments.
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
      T extends UsernameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsernameGroupByArgs['orderBy'] }
        : { orderBy?: UsernameGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsernameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsernameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Username model
   */
  readonly fields: UsernameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Username.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsernameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Username model
   */
  interface UsernameFieldRefs {
    readonly id: FieldRef<"Username", 'Int'>
    readonly name: FieldRef<"Username", 'String'>
    readonly email: FieldRef<"Username", 'String'>
    readonly password: FieldRef<"Username", 'String'>
    readonly role: FieldRef<"Username", 'Role'>
    readonly twoFACode: FieldRef<"Username", 'String'>
    readonly twoFACodeExpires: FieldRef<"Username", 'DateTime'>
    readonly createdAt: FieldRef<"Username", 'DateTime'>
    readonly updatedAt: FieldRef<"Username", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Username findUnique
   */
  export type UsernameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Username
     */
    select?: UsernameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Username
     */
    omit?: UsernameOmit<ExtArgs> | null
    /**
     * Filter, which Username to fetch.
     */
    where: UsernameWhereUniqueInput
  }

  /**
   * Username findUniqueOrThrow
   */
  export type UsernameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Username
     */
    select?: UsernameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Username
     */
    omit?: UsernameOmit<ExtArgs> | null
    /**
     * Filter, which Username to fetch.
     */
    where: UsernameWhereUniqueInput
  }

  /**
   * Username findFirst
   */
  export type UsernameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Username
     */
    select?: UsernameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Username
     */
    omit?: UsernameOmit<ExtArgs> | null
    /**
     * Filter, which Username to fetch.
     */
    where?: UsernameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usernames to fetch.
     */
    orderBy?: UsernameOrderByWithRelationInput | UsernameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usernames.
     */
    cursor?: UsernameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usernames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usernames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usernames.
     */
    distinct?: UsernameScalarFieldEnum | UsernameScalarFieldEnum[]
  }

  /**
   * Username findFirstOrThrow
   */
  export type UsernameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Username
     */
    select?: UsernameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Username
     */
    omit?: UsernameOmit<ExtArgs> | null
    /**
     * Filter, which Username to fetch.
     */
    where?: UsernameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usernames to fetch.
     */
    orderBy?: UsernameOrderByWithRelationInput | UsernameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usernames.
     */
    cursor?: UsernameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usernames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usernames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usernames.
     */
    distinct?: UsernameScalarFieldEnum | UsernameScalarFieldEnum[]
  }

  /**
   * Username findMany
   */
  export type UsernameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Username
     */
    select?: UsernameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Username
     */
    omit?: UsernameOmit<ExtArgs> | null
    /**
     * Filter, which Usernames to fetch.
     */
    where?: UsernameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usernames to fetch.
     */
    orderBy?: UsernameOrderByWithRelationInput | UsernameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usernames.
     */
    cursor?: UsernameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usernames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usernames.
     */
    skip?: number
    distinct?: UsernameScalarFieldEnum | UsernameScalarFieldEnum[]
  }

  /**
   * Username create
   */
  export type UsernameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Username
     */
    select?: UsernameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Username
     */
    omit?: UsernameOmit<ExtArgs> | null
    /**
     * The data needed to create a Username.
     */
    data: XOR<UsernameCreateInput, UsernameUncheckedCreateInput>
  }

  /**
   * Username createMany
   */
  export type UsernameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usernames.
     */
    data: UsernameCreateManyInput | UsernameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Username update
   */
  export type UsernameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Username
     */
    select?: UsernameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Username
     */
    omit?: UsernameOmit<ExtArgs> | null
    /**
     * The data needed to update a Username.
     */
    data: XOR<UsernameUpdateInput, UsernameUncheckedUpdateInput>
    /**
     * Choose, which Username to update.
     */
    where: UsernameWhereUniqueInput
  }

  /**
   * Username updateMany
   */
  export type UsernameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usernames.
     */
    data: XOR<UsernameUpdateManyMutationInput, UsernameUncheckedUpdateManyInput>
    /**
     * Filter which Usernames to update
     */
    where?: UsernameWhereInput
    /**
     * Limit how many Usernames to update.
     */
    limit?: number
  }

  /**
   * Username upsert
   */
  export type UsernameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Username
     */
    select?: UsernameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Username
     */
    omit?: UsernameOmit<ExtArgs> | null
    /**
     * The filter to search for the Username to update in case it exists.
     */
    where: UsernameWhereUniqueInput
    /**
     * In case the Username found by the `where` argument doesn't exist, create a new Username with this data.
     */
    create: XOR<UsernameCreateInput, UsernameUncheckedCreateInput>
    /**
     * In case the Username was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsernameUpdateInput, UsernameUncheckedUpdateInput>
  }

  /**
   * Username delete
   */
  export type UsernameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Username
     */
    select?: UsernameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Username
     */
    omit?: UsernameOmit<ExtArgs> | null
    /**
     * Filter which Username to delete.
     */
    where: UsernameWhereUniqueInput
  }

  /**
   * Username deleteMany
   */
  export type UsernameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usernames to delete
     */
    where?: UsernameWhereInput
    /**
     * Limit how many Usernames to delete.
     */
    limit?: number
  }

  /**
   * Username without action
   */
  export type UsernameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Username
     */
    select?: UsernameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Username
     */
    omit?: UsernameOmit<ExtArgs> | null
  }


  /**
   * Model MetaData
   */

  export type AggregateMetaData = {
    _count: MetaDataCountAggregateOutputType | null
    _avg: MetaDataAvgAggregateOutputType | null
    _sum: MetaDataSumAggregateOutputType | null
    _min: MetaDataMinAggregateOutputType | null
    _max: MetaDataMaxAggregateOutputType | null
  }

  export type MetaDataAvgAggregateOutputType = {
    Id: number | null
  }

  export type MetaDataSumAggregateOutputType = {
    Id: number | null
  }

  export type MetaDataMinAggregateOutputType = {
    Id: number | null
    title: string | null
    description: string | null
    keywords: string | null
    author_name: string | null
    nataliaBase: string | null
    alternates: string | null
    openGraph_title: string | null
    openGraph_description: string | null
    openGraph_url: string | null
    openGraph_siteName: string | null
    themeColor: string | null
    icons_icon: string | null
    icons_shortcut: string | null
    icons_apple: string | null
    other_geo_region: string | null
    other_geo_placename: string | null
    other_geo_position: string | null
    other_ICBM: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetaDataMaxAggregateOutputType = {
    Id: number | null
    title: string | null
    description: string | null
    keywords: string | null
    author_name: string | null
    nataliaBase: string | null
    alternates: string | null
    openGraph_title: string | null
    openGraph_description: string | null
    openGraph_url: string | null
    openGraph_siteName: string | null
    themeColor: string | null
    icons_icon: string | null
    icons_shortcut: string | null
    icons_apple: string | null
    other_geo_region: string | null
    other_geo_placename: string | null
    other_geo_position: string | null
    other_ICBM: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetaDataCountAggregateOutputType = {
    Id: number
    title: number
    description: number
    keywords: number
    author_name: number
    nataliaBase: number
    alternates: number
    openGraph_title: number
    openGraph_description: number
    openGraph_url: number
    openGraph_siteName: number
    themeColor: number
    icons_icon: number
    icons_shortcut: number
    icons_apple: number
    other_geo_region: number
    other_geo_placename: number
    other_geo_position: number
    other_ICBM: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MetaDataAvgAggregateInputType = {
    Id?: true
  }

  export type MetaDataSumAggregateInputType = {
    Id?: true
  }

  export type MetaDataMinAggregateInputType = {
    Id?: true
    title?: true
    description?: true
    keywords?: true
    author_name?: true
    nataliaBase?: true
    alternates?: true
    openGraph_title?: true
    openGraph_description?: true
    openGraph_url?: true
    openGraph_siteName?: true
    themeColor?: true
    icons_icon?: true
    icons_shortcut?: true
    icons_apple?: true
    other_geo_region?: true
    other_geo_placename?: true
    other_geo_position?: true
    other_ICBM?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetaDataMaxAggregateInputType = {
    Id?: true
    title?: true
    description?: true
    keywords?: true
    author_name?: true
    nataliaBase?: true
    alternates?: true
    openGraph_title?: true
    openGraph_description?: true
    openGraph_url?: true
    openGraph_siteName?: true
    themeColor?: true
    icons_icon?: true
    icons_shortcut?: true
    icons_apple?: true
    other_geo_region?: true
    other_geo_placename?: true
    other_geo_position?: true
    other_ICBM?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetaDataCountAggregateInputType = {
    Id?: true
    title?: true
    description?: true
    keywords?: true
    author_name?: true
    nataliaBase?: true
    alternates?: true
    openGraph_title?: true
    openGraph_description?: true
    openGraph_url?: true
    openGraph_siteName?: true
    themeColor?: true
    icons_icon?: true
    icons_shortcut?: true
    icons_apple?: true
    other_geo_region?: true
    other_geo_placename?: true
    other_geo_position?: true
    other_ICBM?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MetaDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetaData to aggregate.
     */
    where?: MetaDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaData to fetch.
     */
    orderBy?: MetaDataOrderByWithRelationInput | MetaDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetaDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetaData
    **/
    _count?: true | MetaDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetaDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetaDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetaDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetaDataMaxAggregateInputType
  }

  export type GetMetaDataAggregateType<T extends MetaDataAggregateArgs> = {
        [P in keyof T & keyof AggregateMetaData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetaData[P]>
      : GetScalarType<T[P], AggregateMetaData[P]>
  }




  export type MetaDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetaDataWhereInput
    orderBy?: MetaDataOrderByWithAggregationInput | MetaDataOrderByWithAggregationInput[]
    by: MetaDataScalarFieldEnum[] | MetaDataScalarFieldEnum
    having?: MetaDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetaDataCountAggregateInputType | true
    _avg?: MetaDataAvgAggregateInputType
    _sum?: MetaDataSumAggregateInputType
    _min?: MetaDataMinAggregateInputType
    _max?: MetaDataMaxAggregateInputType
  }

  export type MetaDataGroupByOutputType = {
    Id: number
    title: string | null
    description: string | null
    keywords: string | null
    author_name: string | null
    nataliaBase: string | null
    alternates: string | null
    openGraph_title: string | null
    openGraph_description: string | null
    openGraph_url: string | null
    openGraph_siteName: string | null
    themeColor: string | null
    icons_icon: string | null
    icons_shortcut: string | null
    icons_apple: string | null
    other_geo_region: string | null
    other_geo_placename: string | null
    other_geo_position: string | null
    other_ICBM: string | null
    createdAt: Date
    updatedAt: Date
    _count: MetaDataCountAggregateOutputType | null
    _avg: MetaDataAvgAggregateOutputType | null
    _sum: MetaDataSumAggregateOutputType | null
    _min: MetaDataMinAggregateOutputType | null
    _max: MetaDataMaxAggregateOutputType | null
  }

  type GetMetaDataGroupByPayload<T extends MetaDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetaDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetaDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetaDataGroupByOutputType[P]>
            : GetScalarType<T[P], MetaDataGroupByOutputType[P]>
        }
      >
    >


  export type MetaDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    title?: boolean
    description?: boolean
    keywords?: boolean
    author_name?: boolean
    nataliaBase?: boolean
    alternates?: boolean
    openGraph_title?: boolean
    openGraph_description?: boolean
    openGraph_url?: boolean
    openGraph_siteName?: boolean
    themeColor?: boolean
    icons_icon?: boolean
    icons_shortcut?: boolean
    icons_apple?: boolean
    other_geo_region?: boolean
    other_geo_placename?: boolean
    other_geo_position?: boolean
    other_ICBM?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["metaData"]>



  export type MetaDataSelectScalar = {
    Id?: boolean
    title?: boolean
    description?: boolean
    keywords?: boolean
    author_name?: boolean
    nataliaBase?: boolean
    alternates?: boolean
    openGraph_title?: boolean
    openGraph_description?: boolean
    openGraph_url?: boolean
    openGraph_siteName?: boolean
    themeColor?: boolean
    icons_icon?: boolean
    icons_shortcut?: boolean
    icons_apple?: boolean
    other_geo_region?: boolean
    other_geo_placename?: boolean
    other_geo_position?: boolean
    other_ICBM?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MetaDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "title" | "description" | "keywords" | "author_name" | "nataliaBase" | "alternates" | "openGraph_title" | "openGraph_description" | "openGraph_url" | "openGraph_siteName" | "themeColor" | "icons_icon" | "icons_shortcut" | "icons_apple" | "other_geo_region" | "other_geo_placename" | "other_geo_position" | "other_ICBM" | "createdAt" | "updatedAt", ExtArgs["result"]["metaData"]>

  export type $MetaDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MetaData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      title: string | null
      description: string | null
      keywords: string | null
      author_name: string | null
      nataliaBase: string | null
      alternates: string | null
      openGraph_title: string | null
      openGraph_description: string | null
      openGraph_url: string | null
      openGraph_siteName: string | null
      themeColor: string | null
      icons_icon: string | null
      icons_shortcut: string | null
      icons_apple: string | null
      other_geo_region: string | null
      other_geo_placename: string | null
      other_geo_position: string | null
      other_ICBM: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["metaData"]>
    composites: {}
  }

  type MetaDataGetPayload<S extends boolean | null | undefined | MetaDataDefaultArgs> = $Result.GetResult<Prisma.$MetaDataPayload, S>

  type MetaDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetaDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetaDataCountAggregateInputType | true
    }

  export interface MetaDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MetaData'], meta: { name: 'MetaData' } }
    /**
     * Find zero or one MetaData that matches the filter.
     * @param {MetaDataFindUniqueArgs} args - Arguments to find a MetaData
     * @example
     * // Get one MetaData
     * const metaData = await prisma.metaData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetaDataFindUniqueArgs>(args: SelectSubset<T, MetaDataFindUniqueArgs<ExtArgs>>): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MetaData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetaDataFindUniqueOrThrowArgs} args - Arguments to find a MetaData
     * @example
     * // Get one MetaData
     * const metaData = await prisma.metaData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetaDataFindUniqueOrThrowArgs>(args: SelectSubset<T, MetaDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetaData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDataFindFirstArgs} args - Arguments to find a MetaData
     * @example
     * // Get one MetaData
     * const metaData = await prisma.metaData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetaDataFindFirstArgs>(args?: SelectSubset<T, MetaDataFindFirstArgs<ExtArgs>>): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetaData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDataFindFirstOrThrowArgs} args - Arguments to find a MetaData
     * @example
     * // Get one MetaData
     * const metaData = await prisma.metaData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetaDataFindFirstOrThrowArgs>(args?: SelectSubset<T, MetaDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MetaData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetaData
     * const metaData = await prisma.metaData.findMany()
     * 
     * // Get first 10 MetaData
     * const metaData = await prisma.metaData.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const metaDataWithIdOnly = await prisma.metaData.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends MetaDataFindManyArgs>(args?: SelectSubset<T, MetaDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MetaData.
     * @param {MetaDataCreateArgs} args - Arguments to create a MetaData.
     * @example
     * // Create one MetaData
     * const MetaData = await prisma.metaData.create({
     *   data: {
     *     // ... data to create a MetaData
     *   }
     * })
     * 
     */
    create<T extends MetaDataCreateArgs>(args: SelectSubset<T, MetaDataCreateArgs<ExtArgs>>): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MetaData.
     * @param {MetaDataCreateManyArgs} args - Arguments to create many MetaData.
     * @example
     * // Create many MetaData
     * const metaData = await prisma.metaData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetaDataCreateManyArgs>(args?: SelectSubset<T, MetaDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MetaData.
     * @param {MetaDataDeleteArgs} args - Arguments to delete one MetaData.
     * @example
     * // Delete one MetaData
     * const MetaData = await prisma.metaData.delete({
     *   where: {
     *     // ... filter to delete one MetaData
     *   }
     * })
     * 
     */
    delete<T extends MetaDataDeleteArgs>(args: SelectSubset<T, MetaDataDeleteArgs<ExtArgs>>): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MetaData.
     * @param {MetaDataUpdateArgs} args - Arguments to update one MetaData.
     * @example
     * // Update one MetaData
     * const metaData = await prisma.metaData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetaDataUpdateArgs>(args: SelectSubset<T, MetaDataUpdateArgs<ExtArgs>>): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MetaData.
     * @param {MetaDataDeleteManyArgs} args - Arguments to filter MetaData to delete.
     * @example
     * // Delete a few MetaData
     * const { count } = await prisma.metaData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetaDataDeleteManyArgs>(args?: SelectSubset<T, MetaDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetaData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetaData
     * const metaData = await prisma.metaData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetaDataUpdateManyArgs>(args: SelectSubset<T, MetaDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MetaData.
     * @param {MetaDataUpsertArgs} args - Arguments to update or create a MetaData.
     * @example
     * // Update or create a MetaData
     * const metaData = await prisma.metaData.upsert({
     *   create: {
     *     // ... data to create a MetaData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetaData we want to update
     *   }
     * })
     */
    upsert<T extends MetaDataUpsertArgs>(args: SelectSubset<T, MetaDataUpsertArgs<ExtArgs>>): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MetaData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDataCountArgs} args - Arguments to filter MetaData to count.
     * @example
     * // Count the number of MetaData
     * const count = await prisma.metaData.count({
     *   where: {
     *     // ... the filter for the MetaData we want to count
     *   }
     * })
    **/
    count<T extends MetaDataCountArgs>(
      args?: Subset<T, MetaDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetaDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetaData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetaDataAggregateArgs>(args: Subset<T, MetaDataAggregateArgs>): Prisma.PrismaPromise<GetMetaDataAggregateType<T>>

    /**
     * Group by MetaData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDataGroupByArgs} args - Group by arguments.
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
      T extends MetaDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetaDataGroupByArgs['orderBy'] }
        : { orderBy?: MetaDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MetaDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetaDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MetaData model
   */
  readonly fields: MetaDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MetaData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetaDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MetaData model
   */
  interface MetaDataFieldRefs {
    readonly Id: FieldRef<"MetaData", 'Int'>
    readonly title: FieldRef<"MetaData", 'String'>
    readonly description: FieldRef<"MetaData", 'String'>
    readonly keywords: FieldRef<"MetaData", 'String'>
    readonly author_name: FieldRef<"MetaData", 'String'>
    readonly nataliaBase: FieldRef<"MetaData", 'String'>
    readonly alternates: FieldRef<"MetaData", 'String'>
    readonly openGraph_title: FieldRef<"MetaData", 'String'>
    readonly openGraph_description: FieldRef<"MetaData", 'String'>
    readonly openGraph_url: FieldRef<"MetaData", 'String'>
    readonly openGraph_siteName: FieldRef<"MetaData", 'String'>
    readonly themeColor: FieldRef<"MetaData", 'String'>
    readonly icons_icon: FieldRef<"MetaData", 'String'>
    readonly icons_shortcut: FieldRef<"MetaData", 'String'>
    readonly icons_apple: FieldRef<"MetaData", 'String'>
    readonly other_geo_region: FieldRef<"MetaData", 'String'>
    readonly other_geo_placename: FieldRef<"MetaData", 'String'>
    readonly other_geo_position: FieldRef<"MetaData", 'String'>
    readonly other_ICBM: FieldRef<"MetaData", 'String'>
    readonly createdAt: FieldRef<"MetaData", 'DateTime'>
    readonly updatedAt: FieldRef<"MetaData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MetaData findUnique
   */
  export type MetaDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaData
     */
    omit?: MetaDataOmit<ExtArgs> | null
    /**
     * Filter, which MetaData to fetch.
     */
    where: MetaDataWhereUniqueInput
  }

  /**
   * MetaData findUniqueOrThrow
   */
  export type MetaDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaData
     */
    omit?: MetaDataOmit<ExtArgs> | null
    /**
     * Filter, which MetaData to fetch.
     */
    where: MetaDataWhereUniqueInput
  }

  /**
   * MetaData findFirst
   */
  export type MetaDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaData
     */
    omit?: MetaDataOmit<ExtArgs> | null
    /**
     * Filter, which MetaData to fetch.
     */
    where?: MetaDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaData to fetch.
     */
    orderBy?: MetaDataOrderByWithRelationInput | MetaDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetaData.
     */
    cursor?: MetaDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetaData.
     */
    distinct?: MetaDataScalarFieldEnum | MetaDataScalarFieldEnum[]
  }

  /**
   * MetaData findFirstOrThrow
   */
  export type MetaDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaData
     */
    omit?: MetaDataOmit<ExtArgs> | null
    /**
     * Filter, which MetaData to fetch.
     */
    where?: MetaDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaData to fetch.
     */
    orderBy?: MetaDataOrderByWithRelationInput | MetaDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetaData.
     */
    cursor?: MetaDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetaData.
     */
    distinct?: MetaDataScalarFieldEnum | MetaDataScalarFieldEnum[]
  }

  /**
   * MetaData findMany
   */
  export type MetaDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaData
     */
    omit?: MetaDataOmit<ExtArgs> | null
    /**
     * Filter, which MetaData to fetch.
     */
    where?: MetaDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaData to fetch.
     */
    orderBy?: MetaDataOrderByWithRelationInput | MetaDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetaData.
     */
    cursor?: MetaDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaData.
     */
    skip?: number
    distinct?: MetaDataScalarFieldEnum | MetaDataScalarFieldEnum[]
  }

  /**
   * MetaData create
   */
  export type MetaDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaData
     */
    omit?: MetaDataOmit<ExtArgs> | null
    /**
     * The data needed to create a MetaData.
     */
    data: XOR<MetaDataCreateInput, MetaDataUncheckedCreateInput>
  }

  /**
   * MetaData createMany
   */
  export type MetaDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MetaData.
     */
    data: MetaDataCreateManyInput | MetaDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MetaData update
   */
  export type MetaDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaData
     */
    omit?: MetaDataOmit<ExtArgs> | null
    /**
     * The data needed to update a MetaData.
     */
    data: XOR<MetaDataUpdateInput, MetaDataUncheckedUpdateInput>
    /**
     * Choose, which MetaData to update.
     */
    where: MetaDataWhereUniqueInput
  }

  /**
   * MetaData updateMany
   */
  export type MetaDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MetaData.
     */
    data: XOR<MetaDataUpdateManyMutationInput, MetaDataUncheckedUpdateManyInput>
    /**
     * Filter which MetaData to update
     */
    where?: MetaDataWhereInput
    /**
     * Limit how many MetaData to update.
     */
    limit?: number
  }

  /**
   * MetaData upsert
   */
  export type MetaDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaData
     */
    omit?: MetaDataOmit<ExtArgs> | null
    /**
     * The filter to search for the MetaData to update in case it exists.
     */
    where: MetaDataWhereUniqueInput
    /**
     * In case the MetaData found by the `where` argument doesn't exist, create a new MetaData with this data.
     */
    create: XOR<MetaDataCreateInput, MetaDataUncheckedCreateInput>
    /**
     * In case the MetaData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetaDataUpdateInput, MetaDataUncheckedUpdateInput>
  }

  /**
   * MetaData delete
   */
  export type MetaDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaData
     */
    omit?: MetaDataOmit<ExtArgs> | null
    /**
     * Filter which MetaData to delete.
     */
    where: MetaDataWhereUniqueInput
  }

  /**
   * MetaData deleteMany
   */
  export type MetaDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetaData to delete
     */
    where?: MetaDataWhereInput
    /**
     * Limit how many MetaData to delete.
     */
    limit?: number
  }

  /**
   * MetaData without action
   */
  export type MetaDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaData
     */
    omit?: MetaDataOmit<ExtArgs> | null
  }


  /**
   * Model FAQ
   */

  export type AggregateFAQ = {
    _count: FAQCountAggregateOutputType | null
    _avg: FAQAvgAggregateOutputType | null
    _sum: FAQSumAggregateOutputType | null
    _min: FAQMinAggregateOutputType | null
    _max: FAQMaxAggregateOutputType | null
  }

  export type FAQAvgAggregateOutputType = {
    Id: number | null
  }

  export type FAQSumAggregateOutputType = {
    Id: number | null
  }

  export type FAQMinAggregateOutputType = {
    Id: number | null
    question: string | null
    answers: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FAQMaxAggregateOutputType = {
    Id: number | null
    question: string | null
    answers: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FAQCountAggregateOutputType = {
    Id: number
    question: number
    answers: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FAQAvgAggregateInputType = {
    Id?: true
  }

  export type FAQSumAggregateInputType = {
    Id?: true
  }

  export type FAQMinAggregateInputType = {
    Id?: true
    question?: true
    answers?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FAQMaxAggregateInputType = {
    Id?: true
    question?: true
    answers?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FAQCountAggregateInputType = {
    Id?: true
    question?: true
    answers?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FAQAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FAQ to aggregate.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FAQS
    **/
    _count?: true | FAQCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FAQAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FAQSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FAQMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FAQMaxAggregateInputType
  }

  export type GetFAQAggregateType<T extends FAQAggregateArgs> = {
        [P in keyof T & keyof AggregateFAQ]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFAQ[P]>
      : GetScalarType<T[P], AggregateFAQ[P]>
  }




  export type FAQGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FAQWhereInput
    orderBy?: FAQOrderByWithAggregationInput | FAQOrderByWithAggregationInput[]
    by: FAQScalarFieldEnum[] | FAQScalarFieldEnum
    having?: FAQScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FAQCountAggregateInputType | true
    _avg?: FAQAvgAggregateInputType
    _sum?: FAQSumAggregateInputType
    _min?: FAQMinAggregateInputType
    _max?: FAQMaxAggregateInputType
  }

  export type FAQGroupByOutputType = {
    Id: number
    question: string | null
    answers: string | null
    createdAt: Date
    updatedAt: Date
    _count: FAQCountAggregateOutputType | null
    _avg: FAQAvgAggregateOutputType | null
    _sum: FAQSumAggregateOutputType | null
    _min: FAQMinAggregateOutputType | null
    _max: FAQMaxAggregateOutputType | null
  }

  type GetFAQGroupByPayload<T extends FAQGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FAQGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FAQGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FAQGroupByOutputType[P]>
            : GetScalarType<T[P], FAQGroupByOutputType[P]>
        }
      >
    >


  export type FAQSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    question?: boolean
    answers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fAQ"]>



  export type FAQSelectScalar = {
    Id?: boolean
    question?: boolean
    answers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FAQOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "question" | "answers" | "createdAt" | "updatedAt", ExtArgs["result"]["fAQ"]>

  export type $FAQPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FAQ"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      question: string | null
      answers: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fAQ"]>
    composites: {}
  }

  type FAQGetPayload<S extends boolean | null | undefined | FAQDefaultArgs> = $Result.GetResult<Prisma.$FAQPayload, S>

  type FAQCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FAQFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FAQCountAggregateInputType | true
    }

  export interface FAQDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FAQ'], meta: { name: 'FAQ' } }
    /**
     * Find zero or one FAQ that matches the filter.
     * @param {FAQFindUniqueArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FAQFindUniqueArgs>(args: SelectSubset<T, FAQFindUniqueArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FAQ that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FAQFindUniqueOrThrowArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FAQFindUniqueOrThrowArgs>(args: SelectSubset<T, FAQFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FAQ that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindFirstArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FAQFindFirstArgs>(args?: SelectSubset<T, FAQFindFirstArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FAQ that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindFirstOrThrowArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FAQFindFirstOrThrowArgs>(args?: SelectSubset<T, FAQFindFirstOrThrowArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FAQS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FAQS
     * const fAQS = await prisma.fAQ.findMany()
     * 
     * // Get first 10 FAQS
     * const fAQS = await prisma.fAQ.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const fAQWithIdOnly = await prisma.fAQ.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends FAQFindManyArgs>(args?: SelectSubset<T, FAQFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FAQ.
     * @param {FAQCreateArgs} args - Arguments to create a FAQ.
     * @example
     * // Create one FAQ
     * const FAQ = await prisma.fAQ.create({
     *   data: {
     *     // ... data to create a FAQ
     *   }
     * })
     * 
     */
    create<T extends FAQCreateArgs>(args: SelectSubset<T, FAQCreateArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FAQS.
     * @param {FAQCreateManyArgs} args - Arguments to create many FAQS.
     * @example
     * // Create many FAQS
     * const fAQ = await prisma.fAQ.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FAQCreateManyArgs>(args?: SelectSubset<T, FAQCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FAQ.
     * @param {FAQDeleteArgs} args - Arguments to delete one FAQ.
     * @example
     * // Delete one FAQ
     * const FAQ = await prisma.fAQ.delete({
     *   where: {
     *     // ... filter to delete one FAQ
     *   }
     * })
     * 
     */
    delete<T extends FAQDeleteArgs>(args: SelectSubset<T, FAQDeleteArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FAQ.
     * @param {FAQUpdateArgs} args - Arguments to update one FAQ.
     * @example
     * // Update one FAQ
     * const fAQ = await prisma.fAQ.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FAQUpdateArgs>(args: SelectSubset<T, FAQUpdateArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FAQS.
     * @param {FAQDeleteManyArgs} args - Arguments to filter FAQS to delete.
     * @example
     * // Delete a few FAQS
     * const { count } = await prisma.fAQ.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FAQDeleteManyArgs>(args?: SelectSubset<T, FAQDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FAQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FAQS
     * const fAQ = await prisma.fAQ.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FAQUpdateManyArgs>(args: SelectSubset<T, FAQUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FAQ.
     * @param {FAQUpsertArgs} args - Arguments to update or create a FAQ.
     * @example
     * // Update or create a FAQ
     * const fAQ = await prisma.fAQ.upsert({
     *   create: {
     *     // ... data to create a FAQ
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FAQ we want to update
     *   }
     * })
     */
    upsert<T extends FAQUpsertArgs>(args: SelectSubset<T, FAQUpsertArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FAQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQCountArgs} args - Arguments to filter FAQS to count.
     * @example
     * // Count the number of FAQS
     * const count = await prisma.fAQ.count({
     *   where: {
     *     // ... the filter for the FAQS we want to count
     *   }
     * })
    **/
    count<T extends FAQCountArgs>(
      args?: Subset<T, FAQCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FAQCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FAQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FAQAggregateArgs>(args: Subset<T, FAQAggregateArgs>): Prisma.PrismaPromise<GetFAQAggregateType<T>>

    /**
     * Group by FAQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQGroupByArgs} args - Group by arguments.
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
      T extends FAQGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FAQGroupByArgs['orderBy'] }
        : { orderBy?: FAQGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FAQGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFAQGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FAQ model
   */
  readonly fields: FAQFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FAQ.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FAQClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FAQ model
   */
  interface FAQFieldRefs {
    readonly Id: FieldRef<"FAQ", 'Int'>
    readonly question: FieldRef<"FAQ", 'String'>
    readonly answers: FieldRef<"FAQ", 'String'>
    readonly createdAt: FieldRef<"FAQ", 'DateTime'>
    readonly updatedAt: FieldRef<"FAQ", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FAQ findUnique
   */
  export type FAQFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ findUniqueOrThrow
   */
  export type FAQFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ findFirst
   */
  export type FAQFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FAQS.
     */
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ findFirstOrThrow
   */
  export type FAQFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FAQS.
     */
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ findMany
   */
  export type FAQFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Filter, which FAQS to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ create
   */
  export type FAQCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * The data needed to create a FAQ.
     */
    data: XOR<FAQCreateInput, FAQUncheckedCreateInput>
  }

  /**
   * FAQ createMany
   */
  export type FAQCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FAQS.
     */
    data: FAQCreateManyInput | FAQCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FAQ update
   */
  export type FAQUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * The data needed to update a FAQ.
     */
    data: XOR<FAQUpdateInput, FAQUncheckedUpdateInput>
    /**
     * Choose, which FAQ to update.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ updateMany
   */
  export type FAQUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FAQS.
     */
    data: XOR<FAQUpdateManyMutationInput, FAQUncheckedUpdateManyInput>
    /**
     * Filter which FAQS to update
     */
    where?: FAQWhereInput
    /**
     * Limit how many FAQS to update.
     */
    limit?: number
  }

  /**
   * FAQ upsert
   */
  export type FAQUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * The filter to search for the FAQ to update in case it exists.
     */
    where: FAQWhereUniqueInput
    /**
     * In case the FAQ found by the `where` argument doesn't exist, create a new FAQ with this data.
     */
    create: XOR<FAQCreateInput, FAQUncheckedCreateInput>
    /**
     * In case the FAQ was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FAQUpdateInput, FAQUncheckedUpdateInput>
  }

  /**
   * FAQ delete
   */
  export type FAQDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Filter which FAQ to delete.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ deleteMany
   */
  export type FAQDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FAQS to delete
     */
    where?: FAQWhereInput
    /**
     * Limit how many FAQS to delete.
     */
    limit?: number
  }

  /**
   * FAQ without action
   */
  export type FAQDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
  }


  /**
   * Model SERVICE
   */

  export type AggregateSERVICE = {
    _count: SERVICECountAggregateOutputType | null
    _avg: SERVICEAvgAggregateOutputType | null
    _sum: SERVICESumAggregateOutputType | null
    _min: SERVICEMinAggregateOutputType | null
    _max: SERVICEMaxAggregateOutputType | null
  }

  export type SERVICEAvgAggregateOutputType = {
    Id: number | null
  }

  export type SERVICESumAggregateOutputType = {
    Id: number | null
  }

  export type SERVICEMinAggregateOutputType = {
    Id: number | null
    service: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SERVICEMaxAggregateOutputType = {
    Id: number | null
    service: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SERVICECountAggregateOutputType = {
    Id: number
    service: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SERVICEAvgAggregateInputType = {
    Id?: true
  }

  export type SERVICESumAggregateInputType = {
    Id?: true
  }

  export type SERVICEMinAggregateInputType = {
    Id?: true
    service?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SERVICEMaxAggregateInputType = {
    Id?: true
    service?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SERVICECountAggregateInputType = {
    Id?: true
    service?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SERVICEAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SERVICE to aggregate.
     */
    where?: SERVICEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SERVICES to fetch.
     */
    orderBy?: SERVICEOrderByWithRelationInput | SERVICEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SERVICEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SERVICES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SERVICES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SERVICES
    **/
    _count?: true | SERVICECountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SERVICEAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SERVICESumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SERVICEMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SERVICEMaxAggregateInputType
  }

  export type GetSERVICEAggregateType<T extends SERVICEAggregateArgs> = {
        [P in keyof T & keyof AggregateSERVICE]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSERVICE[P]>
      : GetScalarType<T[P], AggregateSERVICE[P]>
  }




  export type SERVICEGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SERVICEWhereInput
    orderBy?: SERVICEOrderByWithAggregationInput | SERVICEOrderByWithAggregationInput[]
    by: SERVICEScalarFieldEnum[] | SERVICEScalarFieldEnum
    having?: SERVICEScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SERVICECountAggregateInputType | true
    _avg?: SERVICEAvgAggregateInputType
    _sum?: SERVICESumAggregateInputType
    _min?: SERVICEMinAggregateInputType
    _max?: SERVICEMaxAggregateInputType
  }

  export type SERVICEGroupByOutputType = {
    Id: number
    service: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: SERVICECountAggregateOutputType | null
    _avg: SERVICEAvgAggregateOutputType | null
    _sum: SERVICESumAggregateOutputType | null
    _min: SERVICEMinAggregateOutputType | null
    _max: SERVICEMaxAggregateOutputType | null
  }

  type GetSERVICEGroupByPayload<T extends SERVICEGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SERVICEGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SERVICEGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SERVICEGroupByOutputType[P]>
            : GetScalarType<T[P], SERVICEGroupByOutputType[P]>
        }
      >
    >


  export type SERVICESelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    service?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sERVICE"]>



  export type SERVICESelectScalar = {
    Id?: boolean
    service?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SERVICEOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "service" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["sERVICE"]>

  export type $SERVICEPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SERVICE"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      service: string | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sERVICE"]>
    composites: {}
  }

  type SERVICEGetPayload<S extends boolean | null | undefined | SERVICEDefaultArgs> = $Result.GetResult<Prisma.$SERVICEPayload, S>

  type SERVICECountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SERVICEFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SERVICECountAggregateInputType | true
    }

  export interface SERVICEDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SERVICE'], meta: { name: 'SERVICE' } }
    /**
     * Find zero or one SERVICE that matches the filter.
     * @param {SERVICEFindUniqueArgs} args - Arguments to find a SERVICE
     * @example
     * // Get one SERVICE
     * const sERVICE = await prisma.sERVICE.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SERVICEFindUniqueArgs>(args: SelectSubset<T, SERVICEFindUniqueArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SERVICE that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SERVICEFindUniqueOrThrowArgs} args - Arguments to find a SERVICE
     * @example
     * // Get one SERVICE
     * const sERVICE = await prisma.sERVICE.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SERVICEFindUniqueOrThrowArgs>(args: SelectSubset<T, SERVICEFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SERVICE that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SERVICEFindFirstArgs} args - Arguments to find a SERVICE
     * @example
     * // Get one SERVICE
     * const sERVICE = await prisma.sERVICE.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SERVICEFindFirstArgs>(args?: SelectSubset<T, SERVICEFindFirstArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SERVICE that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SERVICEFindFirstOrThrowArgs} args - Arguments to find a SERVICE
     * @example
     * // Get one SERVICE
     * const sERVICE = await prisma.sERVICE.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SERVICEFindFirstOrThrowArgs>(args?: SelectSubset<T, SERVICEFindFirstOrThrowArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SERVICES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SERVICEFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SERVICES
     * const sERVICES = await prisma.sERVICE.findMany()
     * 
     * // Get first 10 SERVICES
     * const sERVICES = await prisma.sERVICE.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const sERVICEWithIdOnly = await prisma.sERVICE.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends SERVICEFindManyArgs>(args?: SelectSubset<T, SERVICEFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SERVICE.
     * @param {SERVICECreateArgs} args - Arguments to create a SERVICE.
     * @example
     * // Create one SERVICE
     * const SERVICE = await prisma.sERVICE.create({
     *   data: {
     *     // ... data to create a SERVICE
     *   }
     * })
     * 
     */
    create<T extends SERVICECreateArgs>(args: SelectSubset<T, SERVICECreateArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SERVICES.
     * @param {SERVICECreateManyArgs} args - Arguments to create many SERVICES.
     * @example
     * // Create many SERVICES
     * const sERVICE = await prisma.sERVICE.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SERVICECreateManyArgs>(args?: SelectSubset<T, SERVICECreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SERVICE.
     * @param {SERVICEDeleteArgs} args - Arguments to delete one SERVICE.
     * @example
     * // Delete one SERVICE
     * const SERVICE = await prisma.sERVICE.delete({
     *   where: {
     *     // ... filter to delete one SERVICE
     *   }
     * })
     * 
     */
    delete<T extends SERVICEDeleteArgs>(args: SelectSubset<T, SERVICEDeleteArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SERVICE.
     * @param {SERVICEUpdateArgs} args - Arguments to update one SERVICE.
     * @example
     * // Update one SERVICE
     * const sERVICE = await prisma.sERVICE.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SERVICEUpdateArgs>(args: SelectSubset<T, SERVICEUpdateArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SERVICES.
     * @param {SERVICEDeleteManyArgs} args - Arguments to filter SERVICES to delete.
     * @example
     * // Delete a few SERVICES
     * const { count } = await prisma.sERVICE.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SERVICEDeleteManyArgs>(args?: SelectSubset<T, SERVICEDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SERVICES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SERVICEUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SERVICES
     * const sERVICE = await prisma.sERVICE.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SERVICEUpdateManyArgs>(args: SelectSubset<T, SERVICEUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SERVICE.
     * @param {SERVICEUpsertArgs} args - Arguments to update or create a SERVICE.
     * @example
     * // Update or create a SERVICE
     * const sERVICE = await prisma.sERVICE.upsert({
     *   create: {
     *     // ... data to create a SERVICE
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SERVICE we want to update
     *   }
     * })
     */
    upsert<T extends SERVICEUpsertArgs>(args: SelectSubset<T, SERVICEUpsertArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SERVICES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SERVICECountArgs} args - Arguments to filter SERVICES to count.
     * @example
     * // Count the number of SERVICES
     * const count = await prisma.sERVICE.count({
     *   where: {
     *     // ... the filter for the SERVICES we want to count
     *   }
     * })
    **/
    count<T extends SERVICECountArgs>(
      args?: Subset<T, SERVICECountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SERVICECountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SERVICE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SERVICEAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SERVICEAggregateArgs>(args: Subset<T, SERVICEAggregateArgs>): Prisma.PrismaPromise<GetSERVICEAggregateType<T>>

    /**
     * Group by SERVICE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SERVICEGroupByArgs} args - Group by arguments.
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
      T extends SERVICEGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SERVICEGroupByArgs['orderBy'] }
        : { orderBy?: SERVICEGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SERVICEGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSERVICEGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SERVICE model
   */
  readonly fields: SERVICEFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SERVICE.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SERVICEClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SERVICE model
   */
  interface SERVICEFieldRefs {
    readonly Id: FieldRef<"SERVICE", 'Int'>
    readonly service: FieldRef<"SERVICE", 'String'>
    readonly description: FieldRef<"SERVICE", 'String'>
    readonly createdAt: FieldRef<"SERVICE", 'DateTime'>
    readonly updatedAt: FieldRef<"SERVICE", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SERVICE findUnique
   */
  export type SERVICEFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Filter, which SERVICE to fetch.
     */
    where: SERVICEWhereUniqueInput
  }

  /**
   * SERVICE findUniqueOrThrow
   */
  export type SERVICEFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Filter, which SERVICE to fetch.
     */
    where: SERVICEWhereUniqueInput
  }

  /**
   * SERVICE findFirst
   */
  export type SERVICEFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Filter, which SERVICE to fetch.
     */
    where?: SERVICEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SERVICES to fetch.
     */
    orderBy?: SERVICEOrderByWithRelationInput | SERVICEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SERVICES.
     */
    cursor?: SERVICEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SERVICES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SERVICES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SERVICES.
     */
    distinct?: SERVICEScalarFieldEnum | SERVICEScalarFieldEnum[]
  }

  /**
   * SERVICE findFirstOrThrow
   */
  export type SERVICEFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Filter, which SERVICE to fetch.
     */
    where?: SERVICEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SERVICES to fetch.
     */
    orderBy?: SERVICEOrderByWithRelationInput | SERVICEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SERVICES.
     */
    cursor?: SERVICEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SERVICES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SERVICES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SERVICES.
     */
    distinct?: SERVICEScalarFieldEnum | SERVICEScalarFieldEnum[]
  }

  /**
   * SERVICE findMany
   */
  export type SERVICEFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Filter, which SERVICES to fetch.
     */
    where?: SERVICEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SERVICES to fetch.
     */
    orderBy?: SERVICEOrderByWithRelationInput | SERVICEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SERVICES.
     */
    cursor?: SERVICEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SERVICES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SERVICES.
     */
    skip?: number
    distinct?: SERVICEScalarFieldEnum | SERVICEScalarFieldEnum[]
  }

  /**
   * SERVICE create
   */
  export type SERVICECreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * The data needed to create a SERVICE.
     */
    data: XOR<SERVICECreateInput, SERVICEUncheckedCreateInput>
  }

  /**
   * SERVICE createMany
   */
  export type SERVICECreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SERVICES.
     */
    data: SERVICECreateManyInput | SERVICECreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SERVICE update
   */
  export type SERVICEUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * The data needed to update a SERVICE.
     */
    data: XOR<SERVICEUpdateInput, SERVICEUncheckedUpdateInput>
    /**
     * Choose, which SERVICE to update.
     */
    where: SERVICEWhereUniqueInput
  }

  /**
   * SERVICE updateMany
   */
  export type SERVICEUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SERVICES.
     */
    data: XOR<SERVICEUpdateManyMutationInput, SERVICEUncheckedUpdateManyInput>
    /**
     * Filter which SERVICES to update
     */
    where?: SERVICEWhereInput
    /**
     * Limit how many SERVICES to update.
     */
    limit?: number
  }

  /**
   * SERVICE upsert
   */
  export type SERVICEUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * The filter to search for the SERVICE to update in case it exists.
     */
    where: SERVICEWhereUniqueInput
    /**
     * In case the SERVICE found by the `where` argument doesn't exist, create a new SERVICE with this data.
     */
    create: XOR<SERVICECreateInput, SERVICEUncheckedCreateInput>
    /**
     * In case the SERVICE was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SERVICEUpdateInput, SERVICEUncheckedUpdateInput>
  }

  /**
   * SERVICE delete
   */
  export type SERVICEDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Filter which SERVICE to delete.
     */
    where: SERVICEWhereUniqueInput
  }

  /**
   * SERVICE deleteMany
   */
  export type SERVICEDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SERVICES to delete
     */
    where?: SERVICEWhereInput
    /**
     * Limit how many SERVICES to delete.
     */
    limit?: number
  }

  /**
   * SERVICE without action
   */
  export type SERVICEDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
  }


  /**
   * Model MY_WORK
   */

  export type AggregateMY_WORK = {
    _count: MY_WORKCountAggregateOutputType | null
    _avg: MY_WORKAvgAggregateOutputType | null
    _sum: MY_WORKSumAggregateOutputType | null
    _min: MY_WORKMinAggregateOutputType | null
    _max: MY_WORKMaxAggregateOutputType | null
  }

  export type MY_WORKAvgAggregateOutputType = {
    Id: number | null
  }

  export type MY_WORKSumAggregateOutputType = {
    Id: number | null
  }

  export type MY_WORKMinAggregateOutputType = {
    Id: number | null
    title: string | null
    square: string | null
    quantity: string | null
    time: string | null
    success_work: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MY_WORKMaxAggregateOutputType = {
    Id: number | null
    title: string | null
    square: string | null
    quantity: string | null
    time: string | null
    success_work: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MY_WORKCountAggregateOutputType = {
    Id: number
    title: number
    square: number
    quantity: number
    time: number
    success_work: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MY_WORKAvgAggregateInputType = {
    Id?: true
  }

  export type MY_WORKSumAggregateInputType = {
    Id?: true
  }

  export type MY_WORKMinAggregateInputType = {
    Id?: true
    title?: true
    square?: true
    quantity?: true
    time?: true
    success_work?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MY_WORKMaxAggregateInputType = {
    Id?: true
    title?: true
    square?: true
    quantity?: true
    time?: true
    success_work?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MY_WORKCountAggregateInputType = {
    Id?: true
    title?: true
    square?: true
    quantity?: true
    time?: true
    success_work?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MY_WORKAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MY_WORK to aggregate.
     */
    where?: MY_WORKWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MY_WORKS to fetch.
     */
    orderBy?: MY_WORKOrderByWithRelationInput | MY_WORKOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MY_WORKWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MY_WORKS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MY_WORKS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MY_WORKS
    **/
    _count?: true | MY_WORKCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MY_WORKAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MY_WORKSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MY_WORKMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MY_WORKMaxAggregateInputType
  }

  export type GetMY_WORKAggregateType<T extends MY_WORKAggregateArgs> = {
        [P in keyof T & keyof AggregateMY_WORK]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMY_WORK[P]>
      : GetScalarType<T[P], AggregateMY_WORK[P]>
  }




  export type MY_WORKGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MY_WORKWhereInput
    orderBy?: MY_WORKOrderByWithAggregationInput | MY_WORKOrderByWithAggregationInput[]
    by: MY_WORKScalarFieldEnum[] | MY_WORKScalarFieldEnum
    having?: MY_WORKScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MY_WORKCountAggregateInputType | true
    _avg?: MY_WORKAvgAggregateInputType
    _sum?: MY_WORKSumAggregateInputType
    _min?: MY_WORKMinAggregateInputType
    _max?: MY_WORKMaxAggregateInputType
  }

  export type MY_WORKGroupByOutputType = {
    Id: number
    title: string | null
    square: string | null
    quantity: string | null
    time: string | null
    success_work: string | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: MY_WORKCountAggregateOutputType | null
    _avg: MY_WORKAvgAggregateOutputType | null
    _sum: MY_WORKSumAggregateOutputType | null
    _min: MY_WORKMinAggregateOutputType | null
    _max: MY_WORKMaxAggregateOutputType | null
  }

  type GetMY_WORKGroupByPayload<T extends MY_WORKGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MY_WORKGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MY_WORKGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MY_WORKGroupByOutputType[P]>
            : GetScalarType<T[P], MY_WORKGroupByOutputType[P]>
        }
      >
    >


  export type MY_WORKSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    title?: boolean
    square?: boolean
    quantity?: boolean
    time?: boolean
    success_work?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mY_WORK"]>



  export type MY_WORKSelectScalar = {
    Id?: boolean
    title?: boolean
    square?: boolean
    quantity?: boolean
    time?: boolean
    success_work?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MY_WORKOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "title" | "square" | "quantity" | "time" | "success_work" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["mY_WORK"]>

  export type $MY_WORKPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MY_WORK"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      title: string | null
      square: string | null
      quantity: string | null
      time: string | null
      success_work: string | null
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mY_WORK"]>
    composites: {}
  }

  type MY_WORKGetPayload<S extends boolean | null | undefined | MY_WORKDefaultArgs> = $Result.GetResult<Prisma.$MY_WORKPayload, S>

  type MY_WORKCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MY_WORKFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MY_WORKCountAggregateInputType | true
    }

  export interface MY_WORKDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MY_WORK'], meta: { name: 'MY_WORK' } }
    /**
     * Find zero or one MY_WORK that matches the filter.
     * @param {MY_WORKFindUniqueArgs} args - Arguments to find a MY_WORK
     * @example
     * // Get one MY_WORK
     * const mY_WORK = await prisma.mY_WORK.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MY_WORKFindUniqueArgs>(args: SelectSubset<T, MY_WORKFindUniqueArgs<ExtArgs>>): Prisma__MY_WORKClient<$Result.GetResult<Prisma.$MY_WORKPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MY_WORK that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MY_WORKFindUniqueOrThrowArgs} args - Arguments to find a MY_WORK
     * @example
     * // Get one MY_WORK
     * const mY_WORK = await prisma.mY_WORK.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MY_WORKFindUniqueOrThrowArgs>(args: SelectSubset<T, MY_WORKFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MY_WORKClient<$Result.GetResult<Prisma.$MY_WORKPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MY_WORK that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MY_WORKFindFirstArgs} args - Arguments to find a MY_WORK
     * @example
     * // Get one MY_WORK
     * const mY_WORK = await prisma.mY_WORK.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MY_WORKFindFirstArgs>(args?: SelectSubset<T, MY_WORKFindFirstArgs<ExtArgs>>): Prisma__MY_WORKClient<$Result.GetResult<Prisma.$MY_WORKPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MY_WORK that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MY_WORKFindFirstOrThrowArgs} args - Arguments to find a MY_WORK
     * @example
     * // Get one MY_WORK
     * const mY_WORK = await prisma.mY_WORK.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MY_WORKFindFirstOrThrowArgs>(args?: SelectSubset<T, MY_WORKFindFirstOrThrowArgs<ExtArgs>>): Prisma__MY_WORKClient<$Result.GetResult<Prisma.$MY_WORKPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MY_WORKS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MY_WORKFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MY_WORKS
     * const mY_WORKS = await prisma.mY_WORK.findMany()
     * 
     * // Get first 10 MY_WORKS
     * const mY_WORKS = await prisma.mY_WORK.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const mY_WORKWithIdOnly = await prisma.mY_WORK.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends MY_WORKFindManyArgs>(args?: SelectSubset<T, MY_WORKFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MY_WORKPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MY_WORK.
     * @param {MY_WORKCreateArgs} args - Arguments to create a MY_WORK.
     * @example
     * // Create one MY_WORK
     * const MY_WORK = await prisma.mY_WORK.create({
     *   data: {
     *     // ... data to create a MY_WORK
     *   }
     * })
     * 
     */
    create<T extends MY_WORKCreateArgs>(args: SelectSubset<T, MY_WORKCreateArgs<ExtArgs>>): Prisma__MY_WORKClient<$Result.GetResult<Prisma.$MY_WORKPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MY_WORKS.
     * @param {MY_WORKCreateManyArgs} args - Arguments to create many MY_WORKS.
     * @example
     * // Create many MY_WORKS
     * const mY_WORK = await prisma.mY_WORK.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MY_WORKCreateManyArgs>(args?: SelectSubset<T, MY_WORKCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MY_WORK.
     * @param {MY_WORKDeleteArgs} args - Arguments to delete one MY_WORK.
     * @example
     * // Delete one MY_WORK
     * const MY_WORK = await prisma.mY_WORK.delete({
     *   where: {
     *     // ... filter to delete one MY_WORK
     *   }
     * })
     * 
     */
    delete<T extends MY_WORKDeleteArgs>(args: SelectSubset<T, MY_WORKDeleteArgs<ExtArgs>>): Prisma__MY_WORKClient<$Result.GetResult<Prisma.$MY_WORKPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MY_WORK.
     * @param {MY_WORKUpdateArgs} args - Arguments to update one MY_WORK.
     * @example
     * // Update one MY_WORK
     * const mY_WORK = await prisma.mY_WORK.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MY_WORKUpdateArgs>(args: SelectSubset<T, MY_WORKUpdateArgs<ExtArgs>>): Prisma__MY_WORKClient<$Result.GetResult<Prisma.$MY_WORKPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MY_WORKS.
     * @param {MY_WORKDeleteManyArgs} args - Arguments to filter MY_WORKS to delete.
     * @example
     * // Delete a few MY_WORKS
     * const { count } = await prisma.mY_WORK.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MY_WORKDeleteManyArgs>(args?: SelectSubset<T, MY_WORKDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MY_WORKS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MY_WORKUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MY_WORKS
     * const mY_WORK = await prisma.mY_WORK.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MY_WORKUpdateManyArgs>(args: SelectSubset<T, MY_WORKUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MY_WORK.
     * @param {MY_WORKUpsertArgs} args - Arguments to update or create a MY_WORK.
     * @example
     * // Update or create a MY_WORK
     * const mY_WORK = await prisma.mY_WORK.upsert({
     *   create: {
     *     // ... data to create a MY_WORK
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MY_WORK we want to update
     *   }
     * })
     */
    upsert<T extends MY_WORKUpsertArgs>(args: SelectSubset<T, MY_WORKUpsertArgs<ExtArgs>>): Prisma__MY_WORKClient<$Result.GetResult<Prisma.$MY_WORKPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MY_WORKS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MY_WORKCountArgs} args - Arguments to filter MY_WORKS to count.
     * @example
     * // Count the number of MY_WORKS
     * const count = await prisma.mY_WORK.count({
     *   where: {
     *     // ... the filter for the MY_WORKS we want to count
     *   }
     * })
    **/
    count<T extends MY_WORKCountArgs>(
      args?: Subset<T, MY_WORKCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MY_WORKCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MY_WORK.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MY_WORKAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MY_WORKAggregateArgs>(args: Subset<T, MY_WORKAggregateArgs>): Prisma.PrismaPromise<GetMY_WORKAggregateType<T>>

    /**
     * Group by MY_WORK.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MY_WORKGroupByArgs} args - Group by arguments.
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
      T extends MY_WORKGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MY_WORKGroupByArgs['orderBy'] }
        : { orderBy?: MY_WORKGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MY_WORKGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMY_WORKGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MY_WORK model
   */
  readonly fields: MY_WORKFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MY_WORK.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MY_WORKClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MY_WORK model
   */
  interface MY_WORKFieldRefs {
    readonly Id: FieldRef<"MY_WORK", 'Int'>
    readonly title: FieldRef<"MY_WORK", 'String'>
    readonly square: FieldRef<"MY_WORK", 'String'>
    readonly quantity: FieldRef<"MY_WORK", 'String'>
    readonly time: FieldRef<"MY_WORK", 'String'>
    readonly success_work: FieldRef<"MY_WORK", 'String'>
    readonly image: FieldRef<"MY_WORK", 'String'>
    readonly createdAt: FieldRef<"MY_WORK", 'DateTime'>
    readonly updatedAt: FieldRef<"MY_WORK", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MY_WORK findUnique
   */
  export type MY_WORKFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MY_WORK
     */
    select?: MY_WORKSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MY_WORK
     */
    omit?: MY_WORKOmit<ExtArgs> | null
    /**
     * Filter, which MY_WORK to fetch.
     */
    where: MY_WORKWhereUniqueInput
  }

  /**
   * MY_WORK findUniqueOrThrow
   */
  export type MY_WORKFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MY_WORK
     */
    select?: MY_WORKSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MY_WORK
     */
    omit?: MY_WORKOmit<ExtArgs> | null
    /**
     * Filter, which MY_WORK to fetch.
     */
    where: MY_WORKWhereUniqueInput
  }

  /**
   * MY_WORK findFirst
   */
  export type MY_WORKFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MY_WORK
     */
    select?: MY_WORKSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MY_WORK
     */
    omit?: MY_WORKOmit<ExtArgs> | null
    /**
     * Filter, which MY_WORK to fetch.
     */
    where?: MY_WORKWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MY_WORKS to fetch.
     */
    orderBy?: MY_WORKOrderByWithRelationInput | MY_WORKOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MY_WORKS.
     */
    cursor?: MY_WORKWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MY_WORKS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MY_WORKS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MY_WORKS.
     */
    distinct?: MY_WORKScalarFieldEnum | MY_WORKScalarFieldEnum[]
  }

  /**
   * MY_WORK findFirstOrThrow
   */
  export type MY_WORKFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MY_WORK
     */
    select?: MY_WORKSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MY_WORK
     */
    omit?: MY_WORKOmit<ExtArgs> | null
    /**
     * Filter, which MY_WORK to fetch.
     */
    where?: MY_WORKWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MY_WORKS to fetch.
     */
    orderBy?: MY_WORKOrderByWithRelationInput | MY_WORKOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MY_WORKS.
     */
    cursor?: MY_WORKWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MY_WORKS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MY_WORKS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MY_WORKS.
     */
    distinct?: MY_WORKScalarFieldEnum | MY_WORKScalarFieldEnum[]
  }

  /**
   * MY_WORK findMany
   */
  export type MY_WORKFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MY_WORK
     */
    select?: MY_WORKSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MY_WORK
     */
    omit?: MY_WORKOmit<ExtArgs> | null
    /**
     * Filter, which MY_WORKS to fetch.
     */
    where?: MY_WORKWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MY_WORKS to fetch.
     */
    orderBy?: MY_WORKOrderByWithRelationInput | MY_WORKOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MY_WORKS.
     */
    cursor?: MY_WORKWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MY_WORKS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MY_WORKS.
     */
    skip?: number
    distinct?: MY_WORKScalarFieldEnum | MY_WORKScalarFieldEnum[]
  }

  /**
   * MY_WORK create
   */
  export type MY_WORKCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MY_WORK
     */
    select?: MY_WORKSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MY_WORK
     */
    omit?: MY_WORKOmit<ExtArgs> | null
    /**
     * The data needed to create a MY_WORK.
     */
    data: XOR<MY_WORKCreateInput, MY_WORKUncheckedCreateInput>
  }

  /**
   * MY_WORK createMany
   */
  export type MY_WORKCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MY_WORKS.
     */
    data: MY_WORKCreateManyInput | MY_WORKCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MY_WORK update
   */
  export type MY_WORKUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MY_WORK
     */
    select?: MY_WORKSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MY_WORK
     */
    omit?: MY_WORKOmit<ExtArgs> | null
    /**
     * The data needed to update a MY_WORK.
     */
    data: XOR<MY_WORKUpdateInput, MY_WORKUncheckedUpdateInput>
    /**
     * Choose, which MY_WORK to update.
     */
    where: MY_WORKWhereUniqueInput
  }

  /**
   * MY_WORK updateMany
   */
  export type MY_WORKUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MY_WORKS.
     */
    data: XOR<MY_WORKUpdateManyMutationInput, MY_WORKUncheckedUpdateManyInput>
    /**
     * Filter which MY_WORKS to update
     */
    where?: MY_WORKWhereInput
    /**
     * Limit how many MY_WORKS to update.
     */
    limit?: number
  }

  /**
   * MY_WORK upsert
   */
  export type MY_WORKUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MY_WORK
     */
    select?: MY_WORKSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MY_WORK
     */
    omit?: MY_WORKOmit<ExtArgs> | null
    /**
     * The filter to search for the MY_WORK to update in case it exists.
     */
    where: MY_WORKWhereUniqueInput
    /**
     * In case the MY_WORK found by the `where` argument doesn't exist, create a new MY_WORK with this data.
     */
    create: XOR<MY_WORKCreateInput, MY_WORKUncheckedCreateInput>
    /**
     * In case the MY_WORK was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MY_WORKUpdateInput, MY_WORKUncheckedUpdateInput>
  }

  /**
   * MY_WORK delete
   */
  export type MY_WORKDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MY_WORK
     */
    select?: MY_WORKSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MY_WORK
     */
    omit?: MY_WORKOmit<ExtArgs> | null
    /**
     * Filter which MY_WORK to delete.
     */
    where: MY_WORKWhereUniqueInput
  }

  /**
   * MY_WORK deleteMany
   */
  export type MY_WORKDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MY_WORKS to delete
     */
    where?: MY_WORKWhereInput
    /**
     * Limit how many MY_WORKS to delete.
     */
    limit?: number
  }

  /**
   * MY_WORK without action
   */
  export type MY_WORKDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MY_WORK
     */
    select?: MY_WORKSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MY_WORK
     */
    omit?: MY_WORKOmit<ExtArgs> | null
  }


  /**
   * Model CONTACTS
   */

  export type AggregateCONTACTS = {
    _count: CONTACTSCountAggregateOutputType | null
    _avg: CONTACTSAvgAggregateOutputType | null
    _sum: CONTACTSSumAggregateOutputType | null
    _min: CONTACTSMinAggregateOutputType | null
    _max: CONTACTSMaxAggregateOutputType | null
  }

  export type CONTACTSAvgAggregateOutputType = {
    Id: number | null
  }

  export type CONTACTSSumAggregateOutputType = {
    Id: number | null
  }

  export type CONTACTSMinAggregateOutputType = {
    Id: number | null
    email: string | null
    tel: string | null
    address: string | null
    whatsapp: string | null
    telegram: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CONTACTSMaxAggregateOutputType = {
    Id: number | null
    email: string | null
    tel: string | null
    address: string | null
    whatsapp: string | null
    telegram: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CONTACTSCountAggregateOutputType = {
    Id: number
    email: number
    tel: number
    address: number
    whatsapp: number
    telegram: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CONTACTSAvgAggregateInputType = {
    Id?: true
  }

  export type CONTACTSSumAggregateInputType = {
    Id?: true
  }

  export type CONTACTSMinAggregateInputType = {
    Id?: true
    email?: true
    tel?: true
    address?: true
    whatsapp?: true
    telegram?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CONTACTSMaxAggregateInputType = {
    Id?: true
    email?: true
    tel?: true
    address?: true
    whatsapp?: true
    telegram?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CONTACTSCountAggregateInputType = {
    Id?: true
    email?: true
    tel?: true
    address?: true
    whatsapp?: true
    telegram?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CONTACTSAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CONTACTS to aggregate.
     */
    where?: CONTACTSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CONTACTS to fetch.
     */
    orderBy?: CONTACTSOrderByWithRelationInput | CONTACTSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CONTACTSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CONTACTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CONTACTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CONTACTS
    **/
    _count?: true | CONTACTSCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CONTACTSAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CONTACTSSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CONTACTSMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CONTACTSMaxAggregateInputType
  }

  export type GetCONTACTSAggregateType<T extends CONTACTSAggregateArgs> = {
        [P in keyof T & keyof AggregateCONTACTS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCONTACTS[P]>
      : GetScalarType<T[P], AggregateCONTACTS[P]>
  }




  export type CONTACTSGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CONTACTSWhereInput
    orderBy?: CONTACTSOrderByWithAggregationInput | CONTACTSOrderByWithAggregationInput[]
    by: CONTACTSScalarFieldEnum[] | CONTACTSScalarFieldEnum
    having?: CONTACTSScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CONTACTSCountAggregateInputType | true
    _avg?: CONTACTSAvgAggregateInputType
    _sum?: CONTACTSSumAggregateInputType
    _min?: CONTACTSMinAggregateInputType
    _max?: CONTACTSMaxAggregateInputType
  }

  export type CONTACTSGroupByOutputType = {
    Id: number
    email: string | null
    tel: string | null
    address: string | null
    whatsapp: string | null
    telegram: string | null
    createdAt: Date
    updatedAt: Date
    _count: CONTACTSCountAggregateOutputType | null
    _avg: CONTACTSAvgAggregateOutputType | null
    _sum: CONTACTSSumAggregateOutputType | null
    _min: CONTACTSMinAggregateOutputType | null
    _max: CONTACTSMaxAggregateOutputType | null
  }

  type GetCONTACTSGroupByPayload<T extends CONTACTSGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CONTACTSGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CONTACTSGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CONTACTSGroupByOutputType[P]>
            : GetScalarType<T[P], CONTACTSGroupByOutputType[P]>
        }
      >
    >


  export type CONTACTSSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    email?: boolean
    tel?: boolean
    address?: boolean
    whatsapp?: boolean
    telegram?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cONTACTS"]>



  export type CONTACTSSelectScalar = {
    Id?: boolean
    email?: boolean
    tel?: boolean
    address?: boolean
    whatsapp?: boolean
    telegram?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CONTACTSOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "email" | "tel" | "address" | "whatsapp" | "telegram" | "createdAt" | "updatedAt", ExtArgs["result"]["cONTACTS"]>

  export type $CONTACTSPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CONTACTS"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      email: string | null
      tel: string | null
      address: string | null
      whatsapp: string | null
      telegram: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cONTACTS"]>
    composites: {}
  }

  type CONTACTSGetPayload<S extends boolean | null | undefined | CONTACTSDefaultArgs> = $Result.GetResult<Prisma.$CONTACTSPayload, S>

  type CONTACTSCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CONTACTSFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CONTACTSCountAggregateInputType | true
    }

  export interface CONTACTSDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CONTACTS'], meta: { name: 'CONTACTS' } }
    /**
     * Find zero or one CONTACTS that matches the filter.
     * @param {CONTACTSFindUniqueArgs} args - Arguments to find a CONTACTS
     * @example
     * // Get one CONTACTS
     * const cONTACTS = await prisma.cONTACTS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CONTACTSFindUniqueArgs>(args: SelectSubset<T, CONTACTSFindUniqueArgs<ExtArgs>>): Prisma__CONTACTSClient<$Result.GetResult<Prisma.$CONTACTSPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CONTACTS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CONTACTSFindUniqueOrThrowArgs} args - Arguments to find a CONTACTS
     * @example
     * // Get one CONTACTS
     * const cONTACTS = await prisma.cONTACTS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CONTACTSFindUniqueOrThrowArgs>(args: SelectSubset<T, CONTACTSFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CONTACTSClient<$Result.GetResult<Prisma.$CONTACTSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CONTACTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONTACTSFindFirstArgs} args - Arguments to find a CONTACTS
     * @example
     * // Get one CONTACTS
     * const cONTACTS = await prisma.cONTACTS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CONTACTSFindFirstArgs>(args?: SelectSubset<T, CONTACTSFindFirstArgs<ExtArgs>>): Prisma__CONTACTSClient<$Result.GetResult<Prisma.$CONTACTSPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CONTACTS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONTACTSFindFirstOrThrowArgs} args - Arguments to find a CONTACTS
     * @example
     * // Get one CONTACTS
     * const cONTACTS = await prisma.cONTACTS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CONTACTSFindFirstOrThrowArgs>(args?: SelectSubset<T, CONTACTSFindFirstOrThrowArgs<ExtArgs>>): Prisma__CONTACTSClient<$Result.GetResult<Prisma.$CONTACTSPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CONTACTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONTACTSFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CONTACTS
     * const cONTACTS = await prisma.cONTACTS.findMany()
     * 
     * // Get first 10 CONTACTS
     * const cONTACTS = await prisma.cONTACTS.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const cONTACTSWithIdOnly = await prisma.cONTACTS.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends CONTACTSFindManyArgs>(args?: SelectSubset<T, CONTACTSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CONTACTSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CONTACTS.
     * @param {CONTACTSCreateArgs} args - Arguments to create a CONTACTS.
     * @example
     * // Create one CONTACTS
     * const CONTACTS = await prisma.cONTACTS.create({
     *   data: {
     *     // ... data to create a CONTACTS
     *   }
     * })
     * 
     */
    create<T extends CONTACTSCreateArgs>(args: SelectSubset<T, CONTACTSCreateArgs<ExtArgs>>): Prisma__CONTACTSClient<$Result.GetResult<Prisma.$CONTACTSPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CONTACTS.
     * @param {CONTACTSCreateManyArgs} args - Arguments to create many CONTACTS.
     * @example
     * // Create many CONTACTS
     * const cONTACTS = await prisma.cONTACTS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CONTACTSCreateManyArgs>(args?: SelectSubset<T, CONTACTSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CONTACTS.
     * @param {CONTACTSDeleteArgs} args - Arguments to delete one CONTACTS.
     * @example
     * // Delete one CONTACTS
     * const CONTACTS = await prisma.cONTACTS.delete({
     *   where: {
     *     // ... filter to delete one CONTACTS
     *   }
     * })
     * 
     */
    delete<T extends CONTACTSDeleteArgs>(args: SelectSubset<T, CONTACTSDeleteArgs<ExtArgs>>): Prisma__CONTACTSClient<$Result.GetResult<Prisma.$CONTACTSPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CONTACTS.
     * @param {CONTACTSUpdateArgs} args - Arguments to update one CONTACTS.
     * @example
     * // Update one CONTACTS
     * const cONTACTS = await prisma.cONTACTS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CONTACTSUpdateArgs>(args: SelectSubset<T, CONTACTSUpdateArgs<ExtArgs>>): Prisma__CONTACTSClient<$Result.GetResult<Prisma.$CONTACTSPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CONTACTS.
     * @param {CONTACTSDeleteManyArgs} args - Arguments to filter CONTACTS to delete.
     * @example
     * // Delete a few CONTACTS
     * const { count } = await prisma.cONTACTS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CONTACTSDeleteManyArgs>(args?: SelectSubset<T, CONTACTSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CONTACTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONTACTSUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CONTACTS
     * const cONTACTS = await prisma.cONTACTS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CONTACTSUpdateManyArgs>(args: SelectSubset<T, CONTACTSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CONTACTS.
     * @param {CONTACTSUpsertArgs} args - Arguments to update or create a CONTACTS.
     * @example
     * // Update or create a CONTACTS
     * const cONTACTS = await prisma.cONTACTS.upsert({
     *   create: {
     *     // ... data to create a CONTACTS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CONTACTS we want to update
     *   }
     * })
     */
    upsert<T extends CONTACTSUpsertArgs>(args: SelectSubset<T, CONTACTSUpsertArgs<ExtArgs>>): Prisma__CONTACTSClient<$Result.GetResult<Prisma.$CONTACTSPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CONTACTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONTACTSCountArgs} args - Arguments to filter CONTACTS to count.
     * @example
     * // Count the number of CONTACTS
     * const count = await prisma.cONTACTS.count({
     *   where: {
     *     // ... the filter for the CONTACTS we want to count
     *   }
     * })
    **/
    count<T extends CONTACTSCountArgs>(
      args?: Subset<T, CONTACTSCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CONTACTSCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CONTACTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONTACTSAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CONTACTSAggregateArgs>(args: Subset<T, CONTACTSAggregateArgs>): Prisma.PrismaPromise<GetCONTACTSAggregateType<T>>

    /**
     * Group by CONTACTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONTACTSGroupByArgs} args - Group by arguments.
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
      T extends CONTACTSGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CONTACTSGroupByArgs['orderBy'] }
        : { orderBy?: CONTACTSGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CONTACTSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCONTACTSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CONTACTS model
   */
  readonly fields: CONTACTSFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CONTACTS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CONTACTSClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CONTACTS model
   */
  interface CONTACTSFieldRefs {
    readonly Id: FieldRef<"CONTACTS", 'Int'>
    readonly email: FieldRef<"CONTACTS", 'String'>
    readonly tel: FieldRef<"CONTACTS", 'String'>
    readonly address: FieldRef<"CONTACTS", 'String'>
    readonly whatsapp: FieldRef<"CONTACTS", 'String'>
    readonly telegram: FieldRef<"CONTACTS", 'String'>
    readonly createdAt: FieldRef<"CONTACTS", 'DateTime'>
    readonly updatedAt: FieldRef<"CONTACTS", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CONTACTS findUnique
   */
  export type CONTACTSFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONTACTS
     */
    select?: CONTACTSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONTACTS
     */
    omit?: CONTACTSOmit<ExtArgs> | null
    /**
     * Filter, which CONTACTS to fetch.
     */
    where: CONTACTSWhereUniqueInput
  }

  /**
   * CONTACTS findUniqueOrThrow
   */
  export type CONTACTSFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONTACTS
     */
    select?: CONTACTSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONTACTS
     */
    omit?: CONTACTSOmit<ExtArgs> | null
    /**
     * Filter, which CONTACTS to fetch.
     */
    where: CONTACTSWhereUniqueInput
  }

  /**
   * CONTACTS findFirst
   */
  export type CONTACTSFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONTACTS
     */
    select?: CONTACTSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONTACTS
     */
    omit?: CONTACTSOmit<ExtArgs> | null
    /**
     * Filter, which CONTACTS to fetch.
     */
    where?: CONTACTSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CONTACTS to fetch.
     */
    orderBy?: CONTACTSOrderByWithRelationInput | CONTACTSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CONTACTS.
     */
    cursor?: CONTACTSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CONTACTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CONTACTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CONTACTS.
     */
    distinct?: CONTACTSScalarFieldEnum | CONTACTSScalarFieldEnum[]
  }

  /**
   * CONTACTS findFirstOrThrow
   */
  export type CONTACTSFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONTACTS
     */
    select?: CONTACTSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONTACTS
     */
    omit?: CONTACTSOmit<ExtArgs> | null
    /**
     * Filter, which CONTACTS to fetch.
     */
    where?: CONTACTSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CONTACTS to fetch.
     */
    orderBy?: CONTACTSOrderByWithRelationInput | CONTACTSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CONTACTS.
     */
    cursor?: CONTACTSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CONTACTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CONTACTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CONTACTS.
     */
    distinct?: CONTACTSScalarFieldEnum | CONTACTSScalarFieldEnum[]
  }

  /**
   * CONTACTS findMany
   */
  export type CONTACTSFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONTACTS
     */
    select?: CONTACTSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONTACTS
     */
    omit?: CONTACTSOmit<ExtArgs> | null
    /**
     * Filter, which CONTACTS to fetch.
     */
    where?: CONTACTSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CONTACTS to fetch.
     */
    orderBy?: CONTACTSOrderByWithRelationInput | CONTACTSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CONTACTS.
     */
    cursor?: CONTACTSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CONTACTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CONTACTS.
     */
    skip?: number
    distinct?: CONTACTSScalarFieldEnum | CONTACTSScalarFieldEnum[]
  }

  /**
   * CONTACTS create
   */
  export type CONTACTSCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONTACTS
     */
    select?: CONTACTSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONTACTS
     */
    omit?: CONTACTSOmit<ExtArgs> | null
    /**
     * The data needed to create a CONTACTS.
     */
    data: XOR<CONTACTSCreateInput, CONTACTSUncheckedCreateInput>
  }

  /**
   * CONTACTS createMany
   */
  export type CONTACTSCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CONTACTS.
     */
    data: CONTACTSCreateManyInput | CONTACTSCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CONTACTS update
   */
  export type CONTACTSUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONTACTS
     */
    select?: CONTACTSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONTACTS
     */
    omit?: CONTACTSOmit<ExtArgs> | null
    /**
     * The data needed to update a CONTACTS.
     */
    data: XOR<CONTACTSUpdateInput, CONTACTSUncheckedUpdateInput>
    /**
     * Choose, which CONTACTS to update.
     */
    where: CONTACTSWhereUniqueInput
  }

  /**
   * CONTACTS updateMany
   */
  export type CONTACTSUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CONTACTS.
     */
    data: XOR<CONTACTSUpdateManyMutationInput, CONTACTSUncheckedUpdateManyInput>
    /**
     * Filter which CONTACTS to update
     */
    where?: CONTACTSWhereInput
    /**
     * Limit how many CONTACTS to update.
     */
    limit?: number
  }

  /**
   * CONTACTS upsert
   */
  export type CONTACTSUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONTACTS
     */
    select?: CONTACTSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONTACTS
     */
    omit?: CONTACTSOmit<ExtArgs> | null
    /**
     * The filter to search for the CONTACTS to update in case it exists.
     */
    where: CONTACTSWhereUniqueInput
    /**
     * In case the CONTACTS found by the `where` argument doesn't exist, create a new CONTACTS with this data.
     */
    create: XOR<CONTACTSCreateInput, CONTACTSUncheckedCreateInput>
    /**
     * In case the CONTACTS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CONTACTSUpdateInput, CONTACTSUncheckedUpdateInput>
  }

  /**
   * CONTACTS delete
   */
  export type CONTACTSDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONTACTS
     */
    select?: CONTACTSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONTACTS
     */
    omit?: CONTACTSOmit<ExtArgs> | null
    /**
     * Filter which CONTACTS to delete.
     */
    where: CONTACTSWhereUniqueInput
  }

  /**
   * CONTACTS deleteMany
   */
  export type CONTACTSDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CONTACTS to delete
     */
    where?: CONTACTSWhereInput
    /**
     * Limit how many CONTACTS to delete.
     */
    limit?: number
  }

  /**
   * CONTACTS without action
   */
  export type CONTACTSDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONTACTS
     */
    select?: CONTACTSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONTACTS
     */
    omit?: CONTACTSOmit<ExtArgs> | null
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


  export const UsernameScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    twoFACode: 'twoFACode',
    twoFACodeExpires: 'twoFACodeExpires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsernameScalarFieldEnum = (typeof UsernameScalarFieldEnum)[keyof typeof UsernameScalarFieldEnum]


  export const MetaDataScalarFieldEnum: {
    Id: 'Id',
    title: 'title',
    description: 'description',
    keywords: 'keywords',
    author_name: 'author_name',
    nataliaBase: 'nataliaBase',
    alternates: 'alternates',
    openGraph_title: 'openGraph_title',
    openGraph_description: 'openGraph_description',
    openGraph_url: 'openGraph_url',
    openGraph_siteName: 'openGraph_siteName',
    themeColor: 'themeColor',
    icons_icon: 'icons_icon',
    icons_shortcut: 'icons_shortcut',
    icons_apple: 'icons_apple',
    other_geo_region: 'other_geo_region',
    other_geo_placename: 'other_geo_placename',
    other_geo_position: 'other_geo_position',
    other_ICBM: 'other_ICBM',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MetaDataScalarFieldEnum = (typeof MetaDataScalarFieldEnum)[keyof typeof MetaDataScalarFieldEnum]


  export const FAQScalarFieldEnum: {
    Id: 'Id',
    question: 'question',
    answers: 'answers',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FAQScalarFieldEnum = (typeof FAQScalarFieldEnum)[keyof typeof FAQScalarFieldEnum]


  export const SERVICEScalarFieldEnum: {
    Id: 'Id',
    service: 'service',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SERVICEScalarFieldEnum = (typeof SERVICEScalarFieldEnum)[keyof typeof SERVICEScalarFieldEnum]


  export const MY_WORKScalarFieldEnum: {
    Id: 'Id',
    title: 'title',
    square: 'square',
    quantity: 'quantity',
    time: 'time',
    success_work: 'success_work',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MY_WORKScalarFieldEnum = (typeof MY_WORKScalarFieldEnum)[keyof typeof MY_WORKScalarFieldEnum]


  export const CONTACTSScalarFieldEnum: {
    Id: 'Id',
    email: 'email',
    tel: 'tel',
    address: 'address',
    whatsapp: 'whatsapp',
    telegram: 'telegram',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CONTACTSScalarFieldEnum = (typeof CONTACTSScalarFieldEnum)[keyof typeof CONTACTSScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UsernameOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    twoFACode: 'twoFACode'
  };

  export type UsernameOrderByRelevanceFieldEnum = (typeof UsernameOrderByRelevanceFieldEnum)[keyof typeof UsernameOrderByRelevanceFieldEnum]


  export const MetaDataOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    keywords: 'keywords',
    author_name: 'author_name',
    nataliaBase: 'nataliaBase',
    alternates: 'alternates',
    openGraph_title: 'openGraph_title',
    openGraph_description: 'openGraph_description',
    openGraph_url: 'openGraph_url',
    openGraph_siteName: 'openGraph_siteName',
    themeColor: 'themeColor',
    icons_icon: 'icons_icon',
    icons_shortcut: 'icons_shortcut',
    icons_apple: 'icons_apple',
    other_geo_region: 'other_geo_region',
    other_geo_placename: 'other_geo_placename',
    other_geo_position: 'other_geo_position',
    other_ICBM: 'other_ICBM'
  };

  export type MetaDataOrderByRelevanceFieldEnum = (typeof MetaDataOrderByRelevanceFieldEnum)[keyof typeof MetaDataOrderByRelevanceFieldEnum]


  export const FAQOrderByRelevanceFieldEnum: {
    question: 'question',
    answers: 'answers'
  };

  export type FAQOrderByRelevanceFieldEnum = (typeof FAQOrderByRelevanceFieldEnum)[keyof typeof FAQOrderByRelevanceFieldEnum]


  export const SERVICEOrderByRelevanceFieldEnum: {
    service: 'service',
    description: 'description'
  };

  export type SERVICEOrderByRelevanceFieldEnum = (typeof SERVICEOrderByRelevanceFieldEnum)[keyof typeof SERVICEOrderByRelevanceFieldEnum]


  export const MY_WORKOrderByRelevanceFieldEnum: {
    title: 'title',
    square: 'square',
    quantity: 'quantity',
    time: 'time',
    success_work: 'success_work',
    image: 'image'
  };

  export type MY_WORKOrderByRelevanceFieldEnum = (typeof MY_WORKOrderByRelevanceFieldEnum)[keyof typeof MY_WORKOrderByRelevanceFieldEnum]


  export const CONTACTSOrderByRelevanceFieldEnum: {
    email: 'email',
    tel: 'tel',
    address: 'address',
    whatsapp: 'whatsapp',
    telegram: 'telegram'
  };

  export type CONTACTSOrderByRelevanceFieldEnum = (typeof CONTACTSOrderByRelevanceFieldEnum)[keyof typeof CONTACTSOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsernameWhereInput = {
    AND?: UsernameWhereInput | UsernameWhereInput[]
    OR?: UsernameWhereInput[]
    NOT?: UsernameWhereInput | UsernameWhereInput[]
    id?: IntFilter<"Username"> | number
    name?: StringFilter<"Username"> | string
    email?: StringFilter<"Username"> | string
    password?: StringFilter<"Username"> | string
    role?: EnumRoleFilter<"Username"> | $Enums.Role
    twoFACode?: StringNullableFilter<"Username"> | string | null
    twoFACodeExpires?: DateTimeNullableFilter<"Username"> | Date | string | null
    createdAt?: DateTimeFilter<"Username"> | Date | string
    updatedAt?: DateTimeFilter<"Username"> | Date | string
  }

  export type UsernameOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    twoFACode?: SortOrderInput | SortOrder
    twoFACodeExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: UsernameOrderByRelevanceInput
  }

  export type UsernameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsernameWhereInput | UsernameWhereInput[]
    OR?: UsernameWhereInput[]
    NOT?: UsernameWhereInput | UsernameWhereInput[]
    name?: StringFilter<"Username"> | string
    password?: StringFilter<"Username"> | string
    role?: EnumRoleFilter<"Username"> | $Enums.Role
    twoFACode?: StringNullableFilter<"Username"> | string | null
    twoFACodeExpires?: DateTimeNullableFilter<"Username"> | Date | string | null
    createdAt?: DateTimeFilter<"Username"> | Date | string
    updatedAt?: DateTimeFilter<"Username"> | Date | string
  }, "id" | "email">

  export type UsernameOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    twoFACode?: SortOrderInput | SortOrder
    twoFACodeExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsernameCountOrderByAggregateInput
    _avg?: UsernameAvgOrderByAggregateInput
    _max?: UsernameMaxOrderByAggregateInput
    _min?: UsernameMinOrderByAggregateInput
    _sum?: UsernameSumOrderByAggregateInput
  }

  export type UsernameScalarWhereWithAggregatesInput = {
    AND?: UsernameScalarWhereWithAggregatesInput | UsernameScalarWhereWithAggregatesInput[]
    OR?: UsernameScalarWhereWithAggregatesInput[]
    NOT?: UsernameScalarWhereWithAggregatesInput | UsernameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Username"> | number
    name?: StringWithAggregatesFilter<"Username"> | string
    email?: StringWithAggregatesFilter<"Username"> | string
    password?: StringWithAggregatesFilter<"Username"> | string
    role?: EnumRoleWithAggregatesFilter<"Username"> | $Enums.Role
    twoFACode?: StringNullableWithAggregatesFilter<"Username"> | string | null
    twoFACodeExpires?: DateTimeNullableWithAggregatesFilter<"Username"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Username"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Username"> | Date | string
  }

  export type MetaDataWhereInput = {
    AND?: MetaDataWhereInput | MetaDataWhereInput[]
    OR?: MetaDataWhereInput[]
    NOT?: MetaDataWhereInput | MetaDataWhereInput[]
    Id?: IntFilter<"MetaData"> | number
    title?: StringNullableFilter<"MetaData"> | string | null
    description?: StringNullableFilter<"MetaData"> | string | null
    keywords?: StringNullableFilter<"MetaData"> | string | null
    author_name?: StringNullableFilter<"MetaData"> | string | null
    nataliaBase?: StringNullableFilter<"MetaData"> | string | null
    alternates?: StringNullableFilter<"MetaData"> | string | null
    openGraph_title?: StringNullableFilter<"MetaData"> | string | null
    openGraph_description?: StringNullableFilter<"MetaData"> | string | null
    openGraph_url?: StringNullableFilter<"MetaData"> | string | null
    openGraph_siteName?: StringNullableFilter<"MetaData"> | string | null
    themeColor?: StringNullableFilter<"MetaData"> | string | null
    icons_icon?: StringNullableFilter<"MetaData"> | string | null
    icons_shortcut?: StringNullableFilter<"MetaData"> | string | null
    icons_apple?: StringNullableFilter<"MetaData"> | string | null
    other_geo_region?: StringNullableFilter<"MetaData"> | string | null
    other_geo_placename?: StringNullableFilter<"MetaData"> | string | null
    other_geo_position?: StringNullableFilter<"MetaData"> | string | null
    other_ICBM?: StringNullableFilter<"MetaData"> | string | null
    createdAt?: DateTimeFilter<"MetaData"> | Date | string
    updatedAt?: DateTimeFilter<"MetaData"> | Date | string
  }

  export type MetaDataOrderByWithRelationInput = {
    Id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    author_name?: SortOrderInput | SortOrder
    nataliaBase?: SortOrderInput | SortOrder
    alternates?: SortOrderInput | SortOrder
    openGraph_title?: SortOrderInput | SortOrder
    openGraph_description?: SortOrderInput | SortOrder
    openGraph_url?: SortOrderInput | SortOrder
    openGraph_siteName?: SortOrderInput | SortOrder
    themeColor?: SortOrderInput | SortOrder
    icons_icon?: SortOrderInput | SortOrder
    icons_shortcut?: SortOrderInput | SortOrder
    icons_apple?: SortOrderInput | SortOrder
    other_geo_region?: SortOrderInput | SortOrder
    other_geo_placename?: SortOrderInput | SortOrder
    other_geo_position?: SortOrderInput | SortOrder
    other_ICBM?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: MetaDataOrderByRelevanceInput
  }

  export type MetaDataWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: MetaDataWhereInput | MetaDataWhereInput[]
    OR?: MetaDataWhereInput[]
    NOT?: MetaDataWhereInput | MetaDataWhereInput[]
    title?: StringNullableFilter<"MetaData"> | string | null
    description?: StringNullableFilter<"MetaData"> | string | null
    keywords?: StringNullableFilter<"MetaData"> | string | null
    author_name?: StringNullableFilter<"MetaData"> | string | null
    nataliaBase?: StringNullableFilter<"MetaData"> | string | null
    alternates?: StringNullableFilter<"MetaData"> | string | null
    openGraph_title?: StringNullableFilter<"MetaData"> | string | null
    openGraph_description?: StringNullableFilter<"MetaData"> | string | null
    openGraph_url?: StringNullableFilter<"MetaData"> | string | null
    openGraph_siteName?: StringNullableFilter<"MetaData"> | string | null
    themeColor?: StringNullableFilter<"MetaData"> | string | null
    icons_icon?: StringNullableFilter<"MetaData"> | string | null
    icons_shortcut?: StringNullableFilter<"MetaData"> | string | null
    icons_apple?: StringNullableFilter<"MetaData"> | string | null
    other_geo_region?: StringNullableFilter<"MetaData"> | string | null
    other_geo_placename?: StringNullableFilter<"MetaData"> | string | null
    other_geo_position?: StringNullableFilter<"MetaData"> | string | null
    other_ICBM?: StringNullableFilter<"MetaData"> | string | null
    createdAt?: DateTimeFilter<"MetaData"> | Date | string
    updatedAt?: DateTimeFilter<"MetaData"> | Date | string
  }, "Id">

  export type MetaDataOrderByWithAggregationInput = {
    Id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    author_name?: SortOrderInput | SortOrder
    nataliaBase?: SortOrderInput | SortOrder
    alternates?: SortOrderInput | SortOrder
    openGraph_title?: SortOrderInput | SortOrder
    openGraph_description?: SortOrderInput | SortOrder
    openGraph_url?: SortOrderInput | SortOrder
    openGraph_siteName?: SortOrderInput | SortOrder
    themeColor?: SortOrderInput | SortOrder
    icons_icon?: SortOrderInput | SortOrder
    icons_shortcut?: SortOrderInput | SortOrder
    icons_apple?: SortOrderInput | SortOrder
    other_geo_region?: SortOrderInput | SortOrder
    other_geo_placename?: SortOrderInput | SortOrder
    other_geo_position?: SortOrderInput | SortOrder
    other_ICBM?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MetaDataCountOrderByAggregateInput
    _avg?: MetaDataAvgOrderByAggregateInput
    _max?: MetaDataMaxOrderByAggregateInput
    _min?: MetaDataMinOrderByAggregateInput
    _sum?: MetaDataSumOrderByAggregateInput
  }

  export type MetaDataScalarWhereWithAggregatesInput = {
    AND?: MetaDataScalarWhereWithAggregatesInput | MetaDataScalarWhereWithAggregatesInput[]
    OR?: MetaDataScalarWhereWithAggregatesInput[]
    NOT?: MetaDataScalarWhereWithAggregatesInput | MetaDataScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"MetaData"> | number
    title?: StringNullableWithAggregatesFilter<"MetaData"> | string | null
    description?: StringNullableWithAggregatesFilter<"MetaData"> | string | null
    keywords?: StringNullableWithAggregatesFilter<"MetaData"> | string | null
    author_name?: StringNullableWithAggregatesFilter<"MetaData"> | string | null
    nataliaBase?: StringNullableWithAggregatesFilter<"MetaData"> | string | null
    alternates?: StringNullableWithAggregatesFilter<"MetaData"> | string | null
    openGraph_title?: StringNullableWithAggregatesFilter<"MetaData"> | string | null
    openGraph_description?: StringNullableWithAggregatesFilter<"MetaData"> | string | null
    openGraph_url?: StringNullableWithAggregatesFilter<"MetaData"> | string | null
    openGraph_siteName?: StringNullableWithAggregatesFilter<"MetaData"> | string | null
    themeColor?: StringNullableWithAggregatesFilter<"MetaData"> | string | null
    icons_icon?: StringNullableWithAggregatesFilter<"MetaData"> | string | null
    icons_shortcut?: StringNullableWithAggregatesFilter<"MetaData"> | string | null
    icons_apple?: StringNullableWithAggregatesFilter<"MetaData"> | string | null
    other_geo_region?: StringNullableWithAggregatesFilter<"MetaData"> | string | null
    other_geo_placename?: StringNullableWithAggregatesFilter<"MetaData"> | string | null
    other_geo_position?: StringNullableWithAggregatesFilter<"MetaData"> | string | null
    other_ICBM?: StringNullableWithAggregatesFilter<"MetaData"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MetaData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MetaData"> | Date | string
  }

  export type FAQWhereInput = {
    AND?: FAQWhereInput | FAQWhereInput[]
    OR?: FAQWhereInput[]
    NOT?: FAQWhereInput | FAQWhereInput[]
    Id?: IntFilter<"FAQ"> | number
    question?: StringNullableFilter<"FAQ"> | string | null
    answers?: StringNullableFilter<"FAQ"> | string | null
    createdAt?: DateTimeFilter<"FAQ"> | Date | string
    updatedAt?: DateTimeFilter<"FAQ"> | Date | string
  }

  export type FAQOrderByWithRelationInput = {
    Id?: SortOrder
    question?: SortOrderInput | SortOrder
    answers?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: FAQOrderByRelevanceInput
  }

  export type FAQWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: FAQWhereInput | FAQWhereInput[]
    OR?: FAQWhereInput[]
    NOT?: FAQWhereInput | FAQWhereInput[]
    question?: StringNullableFilter<"FAQ"> | string | null
    answers?: StringNullableFilter<"FAQ"> | string | null
    createdAt?: DateTimeFilter<"FAQ"> | Date | string
    updatedAt?: DateTimeFilter<"FAQ"> | Date | string
  }, "Id">

  export type FAQOrderByWithAggregationInput = {
    Id?: SortOrder
    question?: SortOrderInput | SortOrder
    answers?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FAQCountOrderByAggregateInput
    _avg?: FAQAvgOrderByAggregateInput
    _max?: FAQMaxOrderByAggregateInput
    _min?: FAQMinOrderByAggregateInput
    _sum?: FAQSumOrderByAggregateInput
  }

  export type FAQScalarWhereWithAggregatesInput = {
    AND?: FAQScalarWhereWithAggregatesInput | FAQScalarWhereWithAggregatesInput[]
    OR?: FAQScalarWhereWithAggregatesInput[]
    NOT?: FAQScalarWhereWithAggregatesInput | FAQScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"FAQ"> | number
    question?: StringNullableWithAggregatesFilter<"FAQ"> | string | null
    answers?: StringNullableWithAggregatesFilter<"FAQ"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FAQ"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FAQ"> | Date | string
  }

  export type SERVICEWhereInput = {
    AND?: SERVICEWhereInput | SERVICEWhereInput[]
    OR?: SERVICEWhereInput[]
    NOT?: SERVICEWhereInput | SERVICEWhereInput[]
    Id?: IntFilter<"SERVICE"> | number
    service?: StringNullableFilter<"SERVICE"> | string | null
    description?: StringNullableFilter<"SERVICE"> | string | null
    createdAt?: DateTimeFilter<"SERVICE"> | Date | string
    updatedAt?: DateTimeFilter<"SERVICE"> | Date | string
  }

  export type SERVICEOrderByWithRelationInput = {
    Id?: SortOrder
    service?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: SERVICEOrderByRelevanceInput
  }

  export type SERVICEWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: SERVICEWhereInput | SERVICEWhereInput[]
    OR?: SERVICEWhereInput[]
    NOT?: SERVICEWhereInput | SERVICEWhereInput[]
    service?: StringNullableFilter<"SERVICE"> | string | null
    description?: StringNullableFilter<"SERVICE"> | string | null
    createdAt?: DateTimeFilter<"SERVICE"> | Date | string
    updatedAt?: DateTimeFilter<"SERVICE"> | Date | string
  }, "Id">

  export type SERVICEOrderByWithAggregationInput = {
    Id?: SortOrder
    service?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SERVICECountOrderByAggregateInput
    _avg?: SERVICEAvgOrderByAggregateInput
    _max?: SERVICEMaxOrderByAggregateInput
    _min?: SERVICEMinOrderByAggregateInput
    _sum?: SERVICESumOrderByAggregateInput
  }

  export type SERVICEScalarWhereWithAggregatesInput = {
    AND?: SERVICEScalarWhereWithAggregatesInput | SERVICEScalarWhereWithAggregatesInput[]
    OR?: SERVICEScalarWhereWithAggregatesInput[]
    NOT?: SERVICEScalarWhereWithAggregatesInput | SERVICEScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"SERVICE"> | number
    service?: StringNullableWithAggregatesFilter<"SERVICE"> | string | null
    description?: StringNullableWithAggregatesFilter<"SERVICE"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SERVICE"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SERVICE"> | Date | string
  }

  export type MY_WORKWhereInput = {
    AND?: MY_WORKWhereInput | MY_WORKWhereInput[]
    OR?: MY_WORKWhereInput[]
    NOT?: MY_WORKWhereInput | MY_WORKWhereInput[]
    Id?: IntFilter<"MY_WORK"> | number
    title?: StringNullableFilter<"MY_WORK"> | string | null
    square?: StringNullableFilter<"MY_WORK"> | string | null
    quantity?: StringNullableFilter<"MY_WORK"> | string | null
    time?: StringNullableFilter<"MY_WORK"> | string | null
    success_work?: StringNullableFilter<"MY_WORK"> | string | null
    image?: StringNullableFilter<"MY_WORK"> | string | null
    createdAt?: DateTimeFilter<"MY_WORK"> | Date | string
    updatedAt?: DateTimeFilter<"MY_WORK"> | Date | string
  }

  export type MY_WORKOrderByWithRelationInput = {
    Id?: SortOrder
    title?: SortOrderInput | SortOrder
    square?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    success_work?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: MY_WORKOrderByRelevanceInput
  }

  export type MY_WORKWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: MY_WORKWhereInput | MY_WORKWhereInput[]
    OR?: MY_WORKWhereInput[]
    NOT?: MY_WORKWhereInput | MY_WORKWhereInput[]
    title?: StringNullableFilter<"MY_WORK"> | string | null
    square?: StringNullableFilter<"MY_WORK"> | string | null
    quantity?: StringNullableFilter<"MY_WORK"> | string | null
    time?: StringNullableFilter<"MY_WORK"> | string | null
    success_work?: StringNullableFilter<"MY_WORK"> | string | null
    image?: StringNullableFilter<"MY_WORK"> | string | null
    createdAt?: DateTimeFilter<"MY_WORK"> | Date | string
    updatedAt?: DateTimeFilter<"MY_WORK"> | Date | string
  }, "Id">

  export type MY_WORKOrderByWithAggregationInput = {
    Id?: SortOrder
    title?: SortOrderInput | SortOrder
    square?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    success_work?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MY_WORKCountOrderByAggregateInput
    _avg?: MY_WORKAvgOrderByAggregateInput
    _max?: MY_WORKMaxOrderByAggregateInput
    _min?: MY_WORKMinOrderByAggregateInput
    _sum?: MY_WORKSumOrderByAggregateInput
  }

  export type MY_WORKScalarWhereWithAggregatesInput = {
    AND?: MY_WORKScalarWhereWithAggregatesInput | MY_WORKScalarWhereWithAggregatesInput[]
    OR?: MY_WORKScalarWhereWithAggregatesInput[]
    NOT?: MY_WORKScalarWhereWithAggregatesInput | MY_WORKScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"MY_WORK"> | number
    title?: StringNullableWithAggregatesFilter<"MY_WORK"> | string | null
    square?: StringNullableWithAggregatesFilter<"MY_WORK"> | string | null
    quantity?: StringNullableWithAggregatesFilter<"MY_WORK"> | string | null
    time?: StringNullableWithAggregatesFilter<"MY_WORK"> | string | null
    success_work?: StringNullableWithAggregatesFilter<"MY_WORK"> | string | null
    image?: StringNullableWithAggregatesFilter<"MY_WORK"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MY_WORK"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MY_WORK"> | Date | string
  }

  export type CONTACTSWhereInput = {
    AND?: CONTACTSWhereInput | CONTACTSWhereInput[]
    OR?: CONTACTSWhereInput[]
    NOT?: CONTACTSWhereInput | CONTACTSWhereInput[]
    Id?: IntFilter<"CONTACTS"> | number
    email?: StringNullableFilter<"CONTACTS"> | string | null
    tel?: StringNullableFilter<"CONTACTS"> | string | null
    address?: StringNullableFilter<"CONTACTS"> | string | null
    whatsapp?: StringNullableFilter<"CONTACTS"> | string | null
    telegram?: StringNullableFilter<"CONTACTS"> | string | null
    createdAt?: DateTimeFilter<"CONTACTS"> | Date | string
    updatedAt?: DateTimeFilter<"CONTACTS"> | Date | string
  }

  export type CONTACTSOrderByWithRelationInput = {
    Id?: SortOrder
    email?: SortOrderInput | SortOrder
    tel?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    telegram?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: CONTACTSOrderByRelevanceInput
  }

  export type CONTACTSWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: CONTACTSWhereInput | CONTACTSWhereInput[]
    OR?: CONTACTSWhereInput[]
    NOT?: CONTACTSWhereInput | CONTACTSWhereInput[]
    email?: StringNullableFilter<"CONTACTS"> | string | null
    tel?: StringNullableFilter<"CONTACTS"> | string | null
    address?: StringNullableFilter<"CONTACTS"> | string | null
    whatsapp?: StringNullableFilter<"CONTACTS"> | string | null
    telegram?: StringNullableFilter<"CONTACTS"> | string | null
    createdAt?: DateTimeFilter<"CONTACTS"> | Date | string
    updatedAt?: DateTimeFilter<"CONTACTS"> | Date | string
  }, "Id">

  export type CONTACTSOrderByWithAggregationInput = {
    Id?: SortOrder
    email?: SortOrderInput | SortOrder
    tel?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    telegram?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CONTACTSCountOrderByAggregateInput
    _avg?: CONTACTSAvgOrderByAggregateInput
    _max?: CONTACTSMaxOrderByAggregateInput
    _min?: CONTACTSMinOrderByAggregateInput
    _sum?: CONTACTSSumOrderByAggregateInput
  }

  export type CONTACTSScalarWhereWithAggregatesInput = {
    AND?: CONTACTSScalarWhereWithAggregatesInput | CONTACTSScalarWhereWithAggregatesInput[]
    OR?: CONTACTSScalarWhereWithAggregatesInput[]
    NOT?: CONTACTSScalarWhereWithAggregatesInput | CONTACTSScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"CONTACTS"> | number
    email?: StringNullableWithAggregatesFilter<"CONTACTS"> | string | null
    tel?: StringNullableWithAggregatesFilter<"CONTACTS"> | string | null
    address?: StringNullableWithAggregatesFilter<"CONTACTS"> | string | null
    whatsapp?: StringNullableWithAggregatesFilter<"CONTACTS"> | string | null
    telegram?: StringNullableWithAggregatesFilter<"CONTACTS"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CONTACTS"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CONTACTS"> | Date | string
  }

  export type UsernameCreateInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    twoFACode?: string | null
    twoFACodeExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsernameUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    twoFACode?: string | null
    twoFACodeExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsernameUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    twoFACode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFACodeExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsernameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    twoFACode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFACodeExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsernameCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    twoFACode?: string | null
    twoFACodeExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsernameUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    twoFACode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFACodeExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsernameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    twoFACode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFACodeExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaDataCreateInput = {
    title?: string | null
    description?: string | null
    keywords?: string | null
    author_name?: string | null
    nataliaBase?: string | null
    alternates?: string | null
    openGraph_title?: string | null
    openGraph_description?: string | null
    openGraph_url?: string | null
    openGraph_siteName?: string | null
    themeColor?: string | null
    icons_icon?: string | null
    icons_shortcut?: string | null
    icons_apple?: string | null
    other_geo_region?: string | null
    other_geo_placename?: string | null
    other_geo_position?: string | null
    other_ICBM?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetaDataUncheckedCreateInput = {
    Id?: number
    title?: string | null
    description?: string | null
    keywords?: string | null
    author_name?: string | null
    nataliaBase?: string | null
    alternates?: string | null
    openGraph_title?: string | null
    openGraph_description?: string | null
    openGraph_url?: string | null
    openGraph_siteName?: string | null
    themeColor?: string | null
    icons_icon?: string | null
    icons_shortcut?: string | null
    icons_apple?: string | null
    other_geo_region?: string | null
    other_geo_placename?: string | null
    other_geo_position?: string | null
    other_ICBM?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetaDataUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    nataliaBase?: NullableStringFieldUpdateOperationsInput | string | null
    alternates?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_title?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_description?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_url?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_siteName?: NullableStringFieldUpdateOperationsInput | string | null
    themeColor?: NullableStringFieldUpdateOperationsInput | string | null
    icons_icon?: NullableStringFieldUpdateOperationsInput | string | null
    icons_shortcut?: NullableStringFieldUpdateOperationsInput | string | null
    icons_apple?: NullableStringFieldUpdateOperationsInput | string | null
    other_geo_region?: NullableStringFieldUpdateOperationsInput | string | null
    other_geo_placename?: NullableStringFieldUpdateOperationsInput | string | null
    other_geo_position?: NullableStringFieldUpdateOperationsInput | string | null
    other_ICBM?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaDataUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    nataliaBase?: NullableStringFieldUpdateOperationsInput | string | null
    alternates?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_title?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_description?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_url?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_siteName?: NullableStringFieldUpdateOperationsInput | string | null
    themeColor?: NullableStringFieldUpdateOperationsInput | string | null
    icons_icon?: NullableStringFieldUpdateOperationsInput | string | null
    icons_shortcut?: NullableStringFieldUpdateOperationsInput | string | null
    icons_apple?: NullableStringFieldUpdateOperationsInput | string | null
    other_geo_region?: NullableStringFieldUpdateOperationsInput | string | null
    other_geo_placename?: NullableStringFieldUpdateOperationsInput | string | null
    other_geo_position?: NullableStringFieldUpdateOperationsInput | string | null
    other_ICBM?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaDataCreateManyInput = {
    Id?: number
    title?: string | null
    description?: string | null
    keywords?: string | null
    author_name?: string | null
    nataliaBase?: string | null
    alternates?: string | null
    openGraph_title?: string | null
    openGraph_description?: string | null
    openGraph_url?: string | null
    openGraph_siteName?: string | null
    themeColor?: string | null
    icons_icon?: string | null
    icons_shortcut?: string | null
    icons_apple?: string | null
    other_geo_region?: string | null
    other_geo_placename?: string | null
    other_geo_position?: string | null
    other_ICBM?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetaDataUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    nataliaBase?: NullableStringFieldUpdateOperationsInput | string | null
    alternates?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_title?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_description?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_url?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_siteName?: NullableStringFieldUpdateOperationsInput | string | null
    themeColor?: NullableStringFieldUpdateOperationsInput | string | null
    icons_icon?: NullableStringFieldUpdateOperationsInput | string | null
    icons_shortcut?: NullableStringFieldUpdateOperationsInput | string | null
    icons_apple?: NullableStringFieldUpdateOperationsInput | string | null
    other_geo_region?: NullableStringFieldUpdateOperationsInput | string | null
    other_geo_placename?: NullableStringFieldUpdateOperationsInput | string | null
    other_geo_position?: NullableStringFieldUpdateOperationsInput | string | null
    other_ICBM?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaDataUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    nataliaBase?: NullableStringFieldUpdateOperationsInput | string | null
    alternates?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_title?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_description?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_url?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_siteName?: NullableStringFieldUpdateOperationsInput | string | null
    themeColor?: NullableStringFieldUpdateOperationsInput | string | null
    icons_icon?: NullableStringFieldUpdateOperationsInput | string | null
    icons_shortcut?: NullableStringFieldUpdateOperationsInput | string | null
    icons_apple?: NullableStringFieldUpdateOperationsInput | string | null
    other_geo_region?: NullableStringFieldUpdateOperationsInput | string | null
    other_geo_placename?: NullableStringFieldUpdateOperationsInput | string | null
    other_geo_position?: NullableStringFieldUpdateOperationsInput | string | null
    other_ICBM?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQCreateInput = {
    question?: string | null
    answers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FAQUncheckedCreateInput = {
    Id?: number
    question?: string | null
    answers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FAQUpdateInput = {
    question?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    question?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQCreateManyInput = {
    Id?: number
    question?: string | null
    answers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FAQUpdateManyMutationInput = {
    question?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    question?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SERVICECreateInput = {
    service?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SERVICEUncheckedCreateInput = {
    Id?: number
    service?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SERVICEUpdateInput = {
    service?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SERVICEUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    service?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SERVICECreateManyInput = {
    Id?: number
    service?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SERVICEUpdateManyMutationInput = {
    service?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SERVICEUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    service?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MY_WORKCreateInput = {
    title?: string | null
    square?: string | null
    quantity?: string | null
    time?: string | null
    success_work?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MY_WORKUncheckedCreateInput = {
    Id?: number
    title?: string | null
    square?: string | null
    quantity?: string | null
    time?: string | null
    success_work?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MY_WORKUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    square?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    success_work?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MY_WORKUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    square?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    success_work?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MY_WORKCreateManyInput = {
    Id?: number
    title?: string | null
    square?: string | null
    quantity?: string | null
    time?: string | null
    success_work?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MY_WORKUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    square?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    success_work?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MY_WORKUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    square?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    success_work?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CONTACTSCreateInput = {
    email?: string | null
    tel?: string | null
    address?: string | null
    whatsapp?: string | null
    telegram?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CONTACTSUncheckedCreateInput = {
    Id?: number
    email?: string | null
    tel?: string | null
    address?: string | null
    whatsapp?: string | null
    telegram?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CONTACTSUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CONTACTSUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CONTACTSCreateManyInput = {
    Id?: number
    email?: string | null
    tel?: string | null
    address?: string | null
    whatsapp?: string | null
    telegram?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CONTACTSUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CONTACTSUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsernameOrderByRelevanceInput = {
    fields: UsernameOrderByRelevanceFieldEnum | UsernameOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsernameCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    twoFACode?: SortOrder
    twoFACodeExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsernameAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsernameMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    twoFACode?: SortOrder
    twoFACodeExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsernameMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    twoFACode?: SortOrder
    twoFACodeExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsernameSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MetaDataOrderByRelevanceInput = {
    fields: MetaDataOrderByRelevanceFieldEnum | MetaDataOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MetaDataCountOrderByAggregateInput = {
    Id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    keywords?: SortOrder
    author_name?: SortOrder
    nataliaBase?: SortOrder
    alternates?: SortOrder
    openGraph_title?: SortOrder
    openGraph_description?: SortOrder
    openGraph_url?: SortOrder
    openGraph_siteName?: SortOrder
    themeColor?: SortOrder
    icons_icon?: SortOrder
    icons_shortcut?: SortOrder
    icons_apple?: SortOrder
    other_geo_region?: SortOrder
    other_geo_placename?: SortOrder
    other_geo_position?: SortOrder
    other_ICBM?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetaDataAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type MetaDataMaxOrderByAggregateInput = {
    Id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    keywords?: SortOrder
    author_name?: SortOrder
    nataliaBase?: SortOrder
    alternates?: SortOrder
    openGraph_title?: SortOrder
    openGraph_description?: SortOrder
    openGraph_url?: SortOrder
    openGraph_siteName?: SortOrder
    themeColor?: SortOrder
    icons_icon?: SortOrder
    icons_shortcut?: SortOrder
    icons_apple?: SortOrder
    other_geo_region?: SortOrder
    other_geo_placename?: SortOrder
    other_geo_position?: SortOrder
    other_ICBM?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetaDataMinOrderByAggregateInput = {
    Id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    keywords?: SortOrder
    author_name?: SortOrder
    nataliaBase?: SortOrder
    alternates?: SortOrder
    openGraph_title?: SortOrder
    openGraph_description?: SortOrder
    openGraph_url?: SortOrder
    openGraph_siteName?: SortOrder
    themeColor?: SortOrder
    icons_icon?: SortOrder
    icons_shortcut?: SortOrder
    icons_apple?: SortOrder
    other_geo_region?: SortOrder
    other_geo_placename?: SortOrder
    other_geo_position?: SortOrder
    other_ICBM?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetaDataSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type FAQOrderByRelevanceInput = {
    fields: FAQOrderByRelevanceFieldEnum | FAQOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FAQCountOrderByAggregateInput = {
    Id?: SortOrder
    question?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FAQAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type FAQMaxOrderByAggregateInput = {
    Id?: SortOrder
    question?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FAQMinOrderByAggregateInput = {
    Id?: SortOrder
    question?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FAQSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type SERVICEOrderByRelevanceInput = {
    fields: SERVICEOrderByRelevanceFieldEnum | SERVICEOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SERVICECountOrderByAggregateInput = {
    Id?: SortOrder
    service?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SERVICEAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type SERVICEMaxOrderByAggregateInput = {
    Id?: SortOrder
    service?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SERVICEMinOrderByAggregateInput = {
    Id?: SortOrder
    service?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SERVICESumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type MY_WORKOrderByRelevanceInput = {
    fields: MY_WORKOrderByRelevanceFieldEnum | MY_WORKOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MY_WORKCountOrderByAggregateInput = {
    Id?: SortOrder
    title?: SortOrder
    square?: SortOrder
    quantity?: SortOrder
    time?: SortOrder
    success_work?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MY_WORKAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type MY_WORKMaxOrderByAggregateInput = {
    Id?: SortOrder
    title?: SortOrder
    square?: SortOrder
    quantity?: SortOrder
    time?: SortOrder
    success_work?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MY_WORKMinOrderByAggregateInput = {
    Id?: SortOrder
    title?: SortOrder
    square?: SortOrder
    quantity?: SortOrder
    time?: SortOrder
    success_work?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MY_WORKSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type CONTACTSOrderByRelevanceInput = {
    fields: CONTACTSOrderByRelevanceFieldEnum | CONTACTSOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CONTACTSCountOrderByAggregateInput = {
    Id?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    address?: SortOrder
    whatsapp?: SortOrder
    telegram?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CONTACTSAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type CONTACTSMaxOrderByAggregateInput = {
    Id?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    address?: SortOrder
    whatsapp?: SortOrder
    telegram?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CONTACTSMinOrderByAggregateInput = {
    Id?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    address?: SortOrder
    whatsapp?: SortOrder
    telegram?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CONTACTSSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
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