import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

export type SignInInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SignInOutput = {
  __typename?: 'SignInOutput';
  accessToken: Scalars['String'];
  userId?: Maybe<Scalars['uuid']>;
};

export type SignupInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SignupOutput = {
  __typename?: 'SignupOutput';
  accessToken: Scalars['String'];
  userId?: Maybe<Scalars['uuid']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "auth" */
export type Auth = {
  __typename?: 'auth';
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['uuid'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  username: Scalars['String'];
};

/** aggregated selection of "auth" */
export type Auth_Aggregate = {
  __typename?: 'auth_aggregate';
  aggregate?: Maybe<Auth_Aggregate_Fields>;
  nodes: Array<Auth>;
};

/** aggregate fields of "auth" */
export type Auth_Aggregate_Fields = {
  __typename?: 'auth_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Max_Fields>;
  min?: Maybe<Auth_Min_Fields>;
};


/** aggregate fields of "auth" */
export type Auth_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth". All fields are combined with a logical 'AND'. */
export type Auth_Bool_Exp = {
  _and?: Maybe<Array<Auth_Bool_Exp>>;
  _not?: Maybe<Auth_Bool_Exp>;
  _or?: Maybe<Array<Auth_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  firstName?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  lastName?: Maybe<String_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth" */
export enum Auth_Constraint {
  /** unique or primary key constraint */
  AuthEmailKey = 'auth_email_key',
  /** unique or primary key constraint */
  AuthPkey = 'auth_pkey',
  /** unique or primary key constraint */
  AuthUsernameKey = 'auth_username_key'
}

/** input type for inserting data into table "auth" */
export type Auth_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_Max_Fields = {
  __typename?: 'auth_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auth_Min_Fields = {
  __typename?: 'auth_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth" */
export type Auth_Mutation_Response = {
  __typename?: 'auth_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth>;
};

/** on conflict condition type for table "auth" */
export type Auth_On_Conflict = {
  constraint: Auth_Constraint;
  update_columns?: Array<Auth_Update_Column>;
  where?: Maybe<Auth_Bool_Exp>;
};

/** Ordering options when selecting data from "auth". */
export type Auth_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: auth */
export type Auth_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth" */
export enum Auth_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "auth" */
export type Auth_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** update columns of table "auth" */
export enum Auth_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

export type Checkusername_Args = {
  username?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "auth" */
  delete_auth?: Maybe<Auth_Mutation_Response>;
  /** delete single row from the table: "auth" */
  delete_auth_by_pk?: Maybe<Auth>;
  /** insert data into the table: "auth" */
  insert_auth?: Maybe<Auth_Mutation_Response>;
  /** insert a single row into the table: "auth" */
  insert_auth_one?: Maybe<Auth>;
  signIn?: Maybe<SignInOutput>;
  signUp?: Maybe<SignupOutput>;
  /** update data of the table: "auth" */
  update_auth?: Maybe<Auth_Mutation_Response>;
  /** update single row of the table: "auth" */
  update_auth_by_pk?: Maybe<Auth>;
};


/** mutation root */
export type Mutation_RootDelete_AuthArgs = {
  where: Auth_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AuthArgs = {
  objects: Array<Auth_Insert_Input>;
  on_conflict?: Maybe<Auth_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_OneArgs = {
  object: Auth_Insert_Input;
  on_conflict?: Maybe<Auth_On_Conflict>;
};


/** mutation root */
export type Mutation_RootSignInArgs = {
  signInArgs: SignInInput;
};


/** mutation root */
export type Mutation_RootSignUpArgs = {
  signUpArgs: SignupInput;
};


/** mutation root */
export type Mutation_RootUpdate_AuthArgs = {
  _set?: Maybe<Auth_Set_Input>;
  where: Auth_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_By_PkArgs = {
  _set?: Maybe<Auth_Set_Input>;
  pk_columns: Auth_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth" */
  auth: Array<Auth>;
  /** fetch aggregated fields from the table: "auth" */
  auth_aggregate: Auth_Aggregate;
  /** fetch data from the table: "auth" using primary key columns */
  auth_by_pk?: Maybe<Auth>;
  /** execute function "checkusername" which returns "auth" */
  checkusername: Array<Auth>;
  /** execute function "checkusername" and query aggregates on result of table type "auth" */
  checkusername_aggregate: Auth_Aggregate;
};


export type Query_RootAuthArgs = {
  distinct_on?: Maybe<Array<Auth_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Order_By>>;
  where?: Maybe<Auth_Bool_Exp>;
};


export type Query_RootAuth_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Order_By>>;
  where?: Maybe<Auth_Bool_Exp>;
};


export type Query_RootAuth_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCheckusernameArgs = {
  args: Checkusername_Args;
  distinct_on?: Maybe<Array<Auth_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Order_By>>;
  where?: Maybe<Auth_Bool_Exp>;
};


export type Query_RootCheckusername_AggregateArgs = {
  args: Checkusername_Args;
  distinct_on?: Maybe<Array<Auth_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Order_By>>;
  where?: Maybe<Auth_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth" */
  auth: Array<Auth>;
  /** fetch aggregated fields from the table: "auth" */
  auth_aggregate: Auth_Aggregate;
  /** fetch data from the table: "auth" using primary key columns */
  auth_by_pk?: Maybe<Auth>;
  /** execute function "checkusername" which returns "auth" */
  checkusername: Array<Auth>;
  /** execute function "checkusername" and query aggregates on result of table type "auth" */
  checkusername_aggregate: Auth_Aggregate;
};


export type Subscription_RootAuthArgs = {
  distinct_on?: Maybe<Array<Auth_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Order_By>>;
  where?: Maybe<Auth_Bool_Exp>;
};


export type Subscription_RootAuth_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Order_By>>;
  where?: Maybe<Auth_Bool_Exp>;
};


export type Subscription_RootAuth_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCheckusernameArgs = {
  args: Checkusername_Args;
  distinct_on?: Maybe<Array<Auth_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Order_By>>;
  where?: Maybe<Auth_Bool_Exp>;
};


export type Subscription_RootCheckusername_AggregateArgs = {
  args: Checkusername_Args;
  distinct_on?: Maybe<Array<Auth_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Order_By>>;
  where?: Maybe<Auth_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  SignInInput: SignInInput;
  SignInOutput: ResolverTypeWrapper<SignInOutput>;
  SignupInput: SignupInput;
  SignupOutput: ResolverTypeWrapper<SignupOutput>;
  String: ResolverTypeWrapper<Scalars['String']>;
  String_comparison_exp: String_Comparison_Exp;
  auth: ResolverTypeWrapper<Auth>;
  auth_aggregate: ResolverTypeWrapper<Auth_Aggregate>;
  auth_aggregate_fields: ResolverTypeWrapper<Auth_Aggregate_Fields>;
  auth_bool_exp: Auth_Bool_Exp;
  auth_constraint: Auth_Constraint;
  auth_insert_input: Auth_Insert_Input;
  auth_max_fields: ResolverTypeWrapper<Auth_Max_Fields>;
  auth_min_fields: ResolverTypeWrapper<Auth_Min_Fields>;
  auth_mutation_response: ResolverTypeWrapper<Auth_Mutation_Response>;
  auth_on_conflict: Auth_On_Conflict;
  auth_order_by: Auth_Order_By;
  auth_pk_columns_input: Auth_Pk_Columns_Input;
  auth_select_column: Auth_Select_Column;
  auth_set_input: Auth_Set_Input;
  auth_update_column: Auth_Update_Column;
  checkusername_args: Checkusername_Args;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
  subscription_root: ResolverTypeWrapper<{}>;
  timestamptz: ResolverTypeWrapper<Scalars['timestamptz']>;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  uuid: ResolverTypeWrapper<Scalars['uuid']>;
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Int: Scalars['Int'];
  SignInInput: SignInInput;
  SignInOutput: SignInOutput;
  SignupInput: SignupInput;
  SignupOutput: SignupOutput;
  String: Scalars['String'];
  String_comparison_exp: String_Comparison_Exp;
  auth: Auth;
  auth_aggregate: Auth_Aggregate;
  auth_aggregate_fields: Auth_Aggregate_Fields;
  auth_bool_exp: Auth_Bool_Exp;
  auth_insert_input: Auth_Insert_Input;
  auth_max_fields: Auth_Max_Fields;
  auth_min_fields: Auth_Min_Fields;
  auth_mutation_response: Auth_Mutation_Response;
  auth_on_conflict: Auth_On_Conflict;
  auth_order_by: Auth_Order_By;
  auth_pk_columns_input: Auth_Pk_Columns_Input;
  auth_set_input: Auth_Set_Input;
  checkusername_args: Checkusername_Args;
  mutation_root: {};
  query_root: {};
  subscription_root: {};
  timestamptz: Scalars['timestamptz'];
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  uuid: Scalars['uuid'];
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

export type CachedDirectiveArgs = {
  refresh?: Scalars['Boolean'];
  ttl?: Scalars['Int'];
};

export type CachedDirectiveResolver<Result, Parent, ContextType = any, Args = CachedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type SignInOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignInOutput'] = ResolversParentTypes['SignInOutput']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignupOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignupOutput'] = ResolversParentTypes['SignupOutput']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthResolvers<ContextType = any, ParentType extends ResolversParentTypes['auth'] = ResolversParentTypes['auth']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auth_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['auth_aggregate'] = ResolversParentTypes['auth_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['auth_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['auth']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auth_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['auth_aggregate_fields'] = ResolversParentTypes['auth_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Auth_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['auth_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['auth_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auth_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['auth_max_fields'] = ResolversParentTypes['auth_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auth_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['auth_min_fields'] = ResolversParentTypes['auth_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auth_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['auth_mutation_response'] = ResolversParentTypes['auth_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['auth']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = {
  delete_auth?: Resolver<Maybe<ResolversTypes['auth_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_AuthArgs, 'where'>>;
  delete_auth_by_pk?: Resolver<Maybe<ResolversTypes['auth']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Auth_By_PkArgs, 'id'>>;
  insert_auth?: Resolver<Maybe<ResolversTypes['auth_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_AuthArgs, 'objects'>>;
  insert_auth_one?: Resolver<Maybe<ResolversTypes['auth']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Auth_OneArgs, 'object'>>;
  signIn?: Resolver<Maybe<ResolversTypes['SignInOutput']>, ParentType, ContextType, RequireFields<Mutation_RootSignInArgs, 'signInArgs'>>;
  signUp?: Resolver<Maybe<ResolversTypes['SignupOutput']>, ParentType, ContextType, RequireFields<Mutation_RootSignUpArgs, 'signUpArgs'>>;
  update_auth?: Resolver<Maybe<ResolversTypes['auth_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_AuthArgs, 'where'>>;
  update_auth_by_pk?: Resolver<Maybe<ResolversTypes['auth']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Auth_By_PkArgs, 'pk_columns'>>;
};

export type Query_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']> = {
  auth?: Resolver<Array<ResolversTypes['auth']>, ParentType, ContextType, RequireFields<Query_RootAuthArgs, never>>;
  auth_aggregate?: Resolver<ResolversTypes['auth_aggregate'], ParentType, ContextType, RequireFields<Query_RootAuth_AggregateArgs, never>>;
  auth_by_pk?: Resolver<Maybe<ResolversTypes['auth']>, ParentType, ContextType, RequireFields<Query_RootAuth_By_PkArgs, 'id'>>;
  checkusername?: Resolver<Array<ResolversTypes['auth']>, ParentType, ContextType, RequireFields<Query_RootCheckusernameArgs, 'args'>>;
  checkusername_aggregate?: Resolver<ResolversTypes['auth_aggregate'], ParentType, ContextType, RequireFields<Query_RootCheckusername_AggregateArgs, 'args'>>;
};

export type Subscription_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']> = {
  auth?: SubscriptionResolver<Array<ResolversTypes['auth']>, "auth", ParentType, ContextType, RequireFields<Subscription_RootAuthArgs, never>>;
  auth_aggregate?: SubscriptionResolver<ResolversTypes['auth_aggregate'], "auth_aggregate", ParentType, ContextType, RequireFields<Subscription_RootAuth_AggregateArgs, never>>;
  auth_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['auth']>, "auth_by_pk", ParentType, ContextType, RequireFields<Subscription_RootAuth_By_PkArgs, 'id'>>;
  checkusername?: SubscriptionResolver<Array<ResolversTypes['auth']>, "checkusername", ParentType, ContextType, RequireFields<Subscription_RootCheckusernameArgs, 'args'>>;
  checkusername_aggregate?: SubscriptionResolver<ResolversTypes['auth_aggregate'], "checkusername_aggregate", ParentType, ContextType, RequireFields<Subscription_RootCheckusername_AggregateArgs, 'args'>>;
};

export interface TimestamptzScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamptz'], any> {
  name: 'timestamptz';
}

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uuid'], any> {
  name: 'uuid';
}

export type Resolvers<ContextType = any> = {
  SignInOutput?: SignInOutputResolvers<ContextType>;
  SignupOutput?: SignupOutputResolvers<ContextType>;
  auth?: AuthResolvers<ContextType>;
  auth_aggregate?: Auth_AggregateResolvers<ContextType>;
  auth_aggregate_fields?: Auth_Aggregate_FieldsResolvers<ContextType>;
  auth_max_fields?: Auth_Max_FieldsResolvers<ContextType>;
  auth_min_fields?: Auth_Min_FieldsResolvers<ContextType>;
  auth_mutation_response?: Auth_Mutation_ResponseResolvers<ContextType>;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  timestamptz?: GraphQLScalarType;
  uuid?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  cached?: CachedDirectiveResolver<any, any, ContextType>;
};

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', insert_auth_one?: { __typename?: 'auth', email: string, firstName: string, lastName: string, id: any, username: string } | null | undefined };

export type GetUserInfoQueryVariables = Exact<{
  id?: Maybe<Scalars['uuid']>;
}>;


export type GetUserInfoQuery = { __typename?: 'query_root', auth: Array<{ __typename?: 'auth', email: string, firstName: string, lastName: string, created_at: any, updated_at: any }> };

export type GetUserByUserNameOrEmailQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetUserByUserNameOrEmailQuery = { __typename?: 'query_root', checkusername: Array<{ __typename?: 'auth', created_at: any, email: string, firstName: string, id: any, lastName: string, password: string, updated_at: any, username: string }> };


export const CreateUserDocument = gql`
    mutation CreateUser($email: String!, $firstName: String!, $lastName: String!, $password: String!, $username: String!) {
  insert_auth_one(
    object: {email: $email, firstName: $firstName, lastName: $lastName, password: $password, username: $username}
  ) {
    email
    firstName
    lastName
    id
    username
  }
}
    `;
export const GetUserInfoDocument = gql`
    query GetUserInfo($id: uuid) {
  auth(where: {id: {_eq: $id}}) {
    email
    firstName
    lastName
    created_at
    updated_at
  }
}
    `;
export const GetUserByUserNameOrEmailDocument = gql`
    query GetUserByUserNameOrEmail($username: String!) {
  checkusername(args: {username: $username}) {
    created_at
    email
    firstName
    id
    lastName
    password
    updated_at
    username
  }
}
    `;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    CreateUser(variables: CreateUserMutationVariables, options?: C): Promise<CreateUserMutation> {
      return requester<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, variables, options);
    },
    GetUserInfo(variables?: GetUserInfoQueryVariables, options?: C): Promise<GetUserInfoQuery> {
      return requester<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, variables, options);
    },
    GetUserByUserNameOrEmail(variables: GetUserByUserNameOrEmailQueryVariables, options?: C): Promise<GetUserByUserNameOrEmailQuery> {
      return requester<GetUserByUserNameOrEmailQuery, GetUserByUserNameOrEmailQueryVariables>(GetUserByUserNameOrEmailDocument, variables, options);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;