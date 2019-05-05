// Code generated by Prisma (prisma@1.31.1). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateProject {
  count: Int!
}

type AggregateSubproject {
  count: Int!
}

type AggregateTask {
  count: Int!
}

type AggregateTimelog {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createProject(data: ProjectCreateInput!): Project!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updateManyProjects(data: ProjectUpdateManyMutationInput!, where: ProjectWhereInput): BatchPayload!
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
  createSubproject(data: SubprojectCreateInput!): Subproject!
  updateSubproject(data: SubprojectUpdateInput!, where: SubprojectWhereUniqueInput!): Subproject
  updateManySubprojects(data: SubprojectUpdateManyMutationInput!, where: SubprojectWhereInput): BatchPayload!
  upsertSubproject(where: SubprojectWhereUniqueInput!, create: SubprojectCreateInput!, update: SubprojectUpdateInput!): Subproject!
  deleteSubproject(where: SubprojectWhereUniqueInput!): Subproject
  deleteManySubprojects(where: SubprojectWhereInput): BatchPayload!
  createTask(data: TaskCreateInput!): Task!
  updateTask(data: TaskUpdateInput!, where: TaskWhereUniqueInput!): Task
  updateManyTasks(data: TaskUpdateManyMutationInput!, where: TaskWhereInput): BatchPayload!
  upsertTask(where: TaskWhereUniqueInput!, create: TaskCreateInput!, update: TaskUpdateInput!): Task!
  deleteTask(where: TaskWhereUniqueInput!): Task
  deleteManyTasks(where: TaskWhereInput): BatchPayload!
  createTimelog(data: TimelogCreateInput!): Timelog!
  updateTimelog(data: TimelogUpdateInput!, where: TimelogWhereUniqueInput!): Timelog
  updateManyTimelogs(data: TimelogUpdateManyMutationInput!, where: TimelogWhereInput): BatchPayload!
  upsertTimelog(where: TimelogWhereUniqueInput!, create: TimelogCreateInput!, update: TimelogUpdateInput!): Timelog!
  deleteTimelog(where: TimelogWhereUniqueInput!): Timelog
  deleteManyTimelogs(where: TimelogWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Project {
  id: Int!
  name: String!
  subprojects(where: SubprojectWhereInput, orderBy: SubprojectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Subproject!]
}

type ProjectConnection {
  pageInfo: PageInfo!
  edges: [ProjectEdge]!
  aggregate: AggregateProject!
}

input ProjectCreateInput {
  id: Int
  name: String!
  subprojects: SubprojectCreateManyWithoutProjectInput
}

input ProjectCreateOneWithoutSubprojectsInput {
  create: ProjectCreateWithoutSubprojectsInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateWithoutSubprojectsInput {
  id: Int
  name: String!
}

type ProjectEdge {
  node: Project!
  cursor: String!
}

enum ProjectOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type ProjectPreviousValues {
  id: Int!
  name: String!
}

type ProjectSubscriptionPayload {
  mutation: MutationType!
  node: Project
  updatedFields: [String!]
  previousValues: ProjectPreviousValues
}

input ProjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProjectWhereInput
  AND: [ProjectSubscriptionWhereInput!]
  OR: [ProjectSubscriptionWhereInput!]
  NOT: [ProjectSubscriptionWhereInput!]
}

input ProjectUpdateInput {
  name: String
  subprojects: SubprojectUpdateManyWithoutProjectInput
}

input ProjectUpdateManyMutationInput {
  name: String
}

input ProjectUpdateOneRequiredWithoutSubprojectsInput {
  create: ProjectCreateWithoutSubprojectsInput
  update: ProjectUpdateWithoutSubprojectsDataInput
  upsert: ProjectUpsertWithoutSubprojectsInput
  connect: ProjectWhereUniqueInput
}

input ProjectUpdateWithoutSubprojectsDataInput {
  name: String
}

input ProjectUpsertWithoutSubprojectsInput {
  update: ProjectUpdateWithoutSubprojectsDataInput!
  create: ProjectCreateWithoutSubprojectsInput!
}

input ProjectWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  subprojects_every: SubprojectWhereInput
  subprojects_some: SubprojectWhereInput
  subprojects_none: SubprojectWhereInput
  AND: [ProjectWhereInput!]
  OR: [ProjectWhereInput!]
  NOT: [ProjectWhereInput!]
}

input ProjectWhereUniqueInput {
  id: Int
}

type Query {
  project(where: ProjectWhereUniqueInput!): Project
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  subproject(where: SubprojectWhereUniqueInput!): Subproject
  subprojects(where: SubprojectWhereInput, orderBy: SubprojectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Subproject]!
  subprojectsConnection(where: SubprojectWhereInput, orderBy: SubprojectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SubprojectConnection!
  task(where: TaskWhereUniqueInput!): Task
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task]!
  tasksConnection(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TaskConnection!
  timelog(where: TimelogWhereUniqueInput!): Timelog
  timelogs(where: TimelogWhereInput, orderBy: TimelogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Timelog]!
  timelogsConnection(where: TimelogWhereInput, orderBy: TimelogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TimelogConnection!
  node(id: ID!): Node
}

type Subproject {
  id: Int!
  name: String!
  project: Project!
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task!]
}

type SubprojectConnection {
  pageInfo: PageInfo!
  edges: [SubprojectEdge]!
  aggregate: AggregateSubproject!
}

input SubprojectCreateInput {
  id: Int
  name: String!
  project: ProjectCreateOneWithoutSubprojectsInput!
  tasks: TaskCreateManyWithoutSubprojectInput
}

input SubprojectCreateManyWithoutProjectInput {
  create: [SubprojectCreateWithoutProjectInput!]
  connect: [SubprojectWhereUniqueInput!]
}

input SubprojectCreateOneWithoutTasksInput {
  create: SubprojectCreateWithoutTasksInput
  connect: SubprojectWhereUniqueInput
}

input SubprojectCreateWithoutProjectInput {
  id: Int
  name: String!
  tasks: TaskCreateManyWithoutSubprojectInput
}

input SubprojectCreateWithoutTasksInput {
  id: Int
  name: String!
  project: ProjectCreateOneWithoutSubprojectsInput!
}

type SubprojectEdge {
  node: Subproject!
  cursor: String!
}

enum SubprojectOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type SubprojectPreviousValues {
  id: Int!
  name: String!
}

input SubprojectScalarWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [SubprojectScalarWhereInput!]
  OR: [SubprojectScalarWhereInput!]
  NOT: [SubprojectScalarWhereInput!]
}

type SubprojectSubscriptionPayload {
  mutation: MutationType!
  node: Subproject
  updatedFields: [String!]
  previousValues: SubprojectPreviousValues
}

input SubprojectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SubprojectWhereInput
  AND: [SubprojectSubscriptionWhereInput!]
  OR: [SubprojectSubscriptionWhereInput!]
  NOT: [SubprojectSubscriptionWhereInput!]
}

input SubprojectUpdateInput {
  name: String
  project: ProjectUpdateOneRequiredWithoutSubprojectsInput
  tasks: TaskUpdateManyWithoutSubprojectInput
}

input SubprojectUpdateManyDataInput {
  name: String
}

input SubprojectUpdateManyMutationInput {
  name: String
}

input SubprojectUpdateManyWithoutProjectInput {
  create: [SubprojectCreateWithoutProjectInput!]
  delete: [SubprojectWhereUniqueInput!]
  connect: [SubprojectWhereUniqueInput!]
  set: [SubprojectWhereUniqueInput!]
  disconnect: [SubprojectWhereUniqueInput!]
  update: [SubprojectUpdateWithWhereUniqueWithoutProjectInput!]
  upsert: [SubprojectUpsertWithWhereUniqueWithoutProjectInput!]
  deleteMany: [SubprojectScalarWhereInput!]
  updateMany: [SubprojectUpdateManyWithWhereNestedInput!]
}

input SubprojectUpdateManyWithWhereNestedInput {
  where: SubprojectScalarWhereInput!
  data: SubprojectUpdateManyDataInput!
}

input SubprojectUpdateOneWithoutTasksInput {
  create: SubprojectCreateWithoutTasksInput
  update: SubprojectUpdateWithoutTasksDataInput
  upsert: SubprojectUpsertWithoutTasksInput
  delete: Boolean
  disconnect: Boolean
  connect: SubprojectWhereUniqueInput
}

input SubprojectUpdateWithoutProjectDataInput {
  name: String
  tasks: TaskUpdateManyWithoutSubprojectInput
}

input SubprojectUpdateWithoutTasksDataInput {
  name: String
  project: ProjectUpdateOneRequiredWithoutSubprojectsInput
}

input SubprojectUpdateWithWhereUniqueWithoutProjectInput {
  where: SubprojectWhereUniqueInput!
  data: SubprojectUpdateWithoutProjectDataInput!
}

input SubprojectUpsertWithoutTasksInput {
  update: SubprojectUpdateWithoutTasksDataInput!
  create: SubprojectCreateWithoutTasksInput!
}

input SubprojectUpsertWithWhereUniqueWithoutProjectInput {
  where: SubprojectWhereUniqueInput!
  update: SubprojectUpdateWithoutProjectDataInput!
  create: SubprojectCreateWithoutProjectInput!
}

input SubprojectWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  project: ProjectWhereInput
  tasks_every: TaskWhereInput
  tasks_some: TaskWhereInput
  tasks_none: TaskWhereInput
  AND: [SubprojectWhereInput!]
  OR: [SubprojectWhereInput!]
  NOT: [SubprojectWhereInput!]
}

input SubprojectWhereUniqueInput {
  id: Int
}

type Subscription {
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
  subproject(where: SubprojectSubscriptionWhereInput): SubprojectSubscriptionPayload
  task(where: TaskSubscriptionWhereInput): TaskSubscriptionPayload
  timelog(where: TimelogSubscriptionWhereInput): TimelogSubscriptionPayload
}

type Task {
  id: Int!
  name: String!
  priority: String
  comments: String
  repeat: Int
  estimateTime: String
  plannedTime: String
  plannedDate: DateTime
  finishDate: DateTime
  deadlineDate: DateTime
  completed: Boolean!
  subproject: Subproject
  timelogs(where: TimelogWhereInput, orderBy: TimelogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Timelog!]
}

type TaskConnection {
  pageInfo: PageInfo!
  edges: [TaskEdge]!
  aggregate: AggregateTask!
}

input TaskCreateInput {
  id: Int
  name: String!
  priority: String
  comments: String
  repeat: Int
  estimateTime: String
  plannedTime: String
  plannedDate: DateTime
  finishDate: DateTime
  deadlineDate: DateTime
  completed: Boolean
  subproject: SubprojectCreateOneWithoutTasksInput
  timelogs: TimelogCreateManyWithoutTaskInput
}

input TaskCreateManyWithoutSubprojectInput {
  create: [TaskCreateWithoutSubprojectInput!]
  connect: [TaskWhereUniqueInput!]
}

input TaskCreateOneWithoutTimelogsInput {
  create: TaskCreateWithoutTimelogsInput
  connect: TaskWhereUniqueInput
}

input TaskCreateWithoutSubprojectInput {
  id: Int
  name: String!
  priority: String
  comments: String
  repeat: Int
  estimateTime: String
  plannedTime: String
  plannedDate: DateTime
  finishDate: DateTime
  deadlineDate: DateTime
  completed: Boolean
  timelogs: TimelogCreateManyWithoutTaskInput
}

input TaskCreateWithoutTimelogsInput {
  id: Int
  name: String!
  priority: String
  comments: String
  repeat: Int
  estimateTime: String
  plannedTime: String
  plannedDate: DateTime
  finishDate: DateTime
  deadlineDate: DateTime
  completed: Boolean
  subproject: SubprojectCreateOneWithoutTasksInput
}

type TaskEdge {
  node: Task!
  cursor: String!
}

enum TaskOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  priority_ASC
  priority_DESC
  comments_ASC
  comments_DESC
  repeat_ASC
  repeat_DESC
  estimateTime_ASC
  estimateTime_DESC
  plannedTime_ASC
  plannedTime_DESC
  plannedDate_ASC
  plannedDate_DESC
  finishDate_ASC
  finishDate_DESC
  deadlineDate_ASC
  deadlineDate_DESC
  completed_ASC
  completed_DESC
}

type TaskPreviousValues {
  id: Int!
  name: String!
  priority: String
  comments: String
  repeat: Int
  estimateTime: String
  plannedTime: String
  plannedDate: DateTime
  finishDate: DateTime
  deadlineDate: DateTime
  completed: Boolean!
}

input TaskScalarWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  priority: String
  priority_not: String
  priority_in: [String!]
  priority_not_in: [String!]
  priority_lt: String
  priority_lte: String
  priority_gt: String
  priority_gte: String
  priority_contains: String
  priority_not_contains: String
  priority_starts_with: String
  priority_not_starts_with: String
  priority_ends_with: String
  priority_not_ends_with: String
  comments: String
  comments_not: String
  comments_in: [String!]
  comments_not_in: [String!]
  comments_lt: String
  comments_lte: String
  comments_gt: String
  comments_gte: String
  comments_contains: String
  comments_not_contains: String
  comments_starts_with: String
  comments_not_starts_with: String
  comments_ends_with: String
  comments_not_ends_with: String
  repeat: Int
  repeat_not: Int
  repeat_in: [Int!]
  repeat_not_in: [Int!]
  repeat_lt: Int
  repeat_lte: Int
  repeat_gt: Int
  repeat_gte: Int
  estimateTime: String
  estimateTime_not: String
  estimateTime_in: [String!]
  estimateTime_not_in: [String!]
  estimateTime_lt: String
  estimateTime_lte: String
  estimateTime_gt: String
  estimateTime_gte: String
  estimateTime_contains: String
  estimateTime_not_contains: String
  estimateTime_starts_with: String
  estimateTime_not_starts_with: String
  estimateTime_ends_with: String
  estimateTime_not_ends_with: String
  plannedTime: String
  plannedTime_not: String
  plannedTime_in: [String!]
  plannedTime_not_in: [String!]
  plannedTime_lt: String
  plannedTime_lte: String
  plannedTime_gt: String
  plannedTime_gte: String
  plannedTime_contains: String
  plannedTime_not_contains: String
  plannedTime_starts_with: String
  plannedTime_not_starts_with: String
  plannedTime_ends_with: String
  plannedTime_not_ends_with: String
  plannedDate: DateTime
  plannedDate_not: DateTime
  plannedDate_in: [DateTime!]
  plannedDate_not_in: [DateTime!]
  plannedDate_lt: DateTime
  plannedDate_lte: DateTime
  plannedDate_gt: DateTime
  plannedDate_gte: DateTime
  finishDate: DateTime
  finishDate_not: DateTime
  finishDate_in: [DateTime!]
  finishDate_not_in: [DateTime!]
  finishDate_lt: DateTime
  finishDate_lte: DateTime
  finishDate_gt: DateTime
  finishDate_gte: DateTime
  deadlineDate: DateTime
  deadlineDate_not: DateTime
  deadlineDate_in: [DateTime!]
  deadlineDate_not_in: [DateTime!]
  deadlineDate_lt: DateTime
  deadlineDate_lte: DateTime
  deadlineDate_gt: DateTime
  deadlineDate_gte: DateTime
  completed: Boolean
  completed_not: Boolean
  AND: [TaskScalarWhereInput!]
  OR: [TaskScalarWhereInput!]
  NOT: [TaskScalarWhereInput!]
}

type TaskSubscriptionPayload {
  mutation: MutationType!
  node: Task
  updatedFields: [String!]
  previousValues: TaskPreviousValues
}

input TaskSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TaskWhereInput
  AND: [TaskSubscriptionWhereInput!]
  OR: [TaskSubscriptionWhereInput!]
  NOT: [TaskSubscriptionWhereInput!]
}

input TaskUpdateInput {
  name: String
  priority: String
  comments: String
  repeat: Int
  estimateTime: String
  plannedTime: String
  plannedDate: DateTime
  finishDate: DateTime
  deadlineDate: DateTime
  completed: Boolean
  subproject: SubprojectUpdateOneWithoutTasksInput
  timelogs: TimelogUpdateManyWithoutTaskInput
}

input TaskUpdateManyDataInput {
  name: String
  priority: String
  comments: String
  repeat: Int
  estimateTime: String
  plannedTime: String
  plannedDate: DateTime
  finishDate: DateTime
  deadlineDate: DateTime
  completed: Boolean
}

input TaskUpdateManyMutationInput {
  name: String
  priority: String
  comments: String
  repeat: Int
  estimateTime: String
  plannedTime: String
  plannedDate: DateTime
  finishDate: DateTime
  deadlineDate: DateTime
  completed: Boolean
}

input TaskUpdateManyWithoutSubprojectInput {
  create: [TaskCreateWithoutSubprojectInput!]
  delete: [TaskWhereUniqueInput!]
  connect: [TaskWhereUniqueInput!]
  set: [TaskWhereUniqueInput!]
  disconnect: [TaskWhereUniqueInput!]
  update: [TaskUpdateWithWhereUniqueWithoutSubprojectInput!]
  upsert: [TaskUpsertWithWhereUniqueWithoutSubprojectInput!]
  deleteMany: [TaskScalarWhereInput!]
  updateMany: [TaskUpdateManyWithWhereNestedInput!]
}

input TaskUpdateManyWithWhereNestedInput {
  where: TaskScalarWhereInput!
  data: TaskUpdateManyDataInput!
}

input TaskUpdateOneRequiredWithoutTimelogsInput {
  create: TaskCreateWithoutTimelogsInput
  update: TaskUpdateWithoutTimelogsDataInput
  upsert: TaskUpsertWithoutTimelogsInput
  connect: TaskWhereUniqueInput
}

input TaskUpdateWithoutSubprojectDataInput {
  name: String
  priority: String
  comments: String
  repeat: Int
  estimateTime: String
  plannedTime: String
  plannedDate: DateTime
  finishDate: DateTime
  deadlineDate: DateTime
  completed: Boolean
  timelogs: TimelogUpdateManyWithoutTaskInput
}

input TaskUpdateWithoutTimelogsDataInput {
  name: String
  priority: String
  comments: String
  repeat: Int
  estimateTime: String
  plannedTime: String
  plannedDate: DateTime
  finishDate: DateTime
  deadlineDate: DateTime
  completed: Boolean
  subproject: SubprojectUpdateOneWithoutTasksInput
}

input TaskUpdateWithWhereUniqueWithoutSubprojectInput {
  where: TaskWhereUniqueInput!
  data: TaskUpdateWithoutSubprojectDataInput!
}

input TaskUpsertWithoutTimelogsInput {
  update: TaskUpdateWithoutTimelogsDataInput!
  create: TaskCreateWithoutTimelogsInput!
}

input TaskUpsertWithWhereUniqueWithoutSubprojectInput {
  where: TaskWhereUniqueInput!
  update: TaskUpdateWithoutSubprojectDataInput!
  create: TaskCreateWithoutSubprojectInput!
}

input TaskWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  priority: String
  priority_not: String
  priority_in: [String!]
  priority_not_in: [String!]
  priority_lt: String
  priority_lte: String
  priority_gt: String
  priority_gte: String
  priority_contains: String
  priority_not_contains: String
  priority_starts_with: String
  priority_not_starts_with: String
  priority_ends_with: String
  priority_not_ends_with: String
  comments: String
  comments_not: String
  comments_in: [String!]
  comments_not_in: [String!]
  comments_lt: String
  comments_lte: String
  comments_gt: String
  comments_gte: String
  comments_contains: String
  comments_not_contains: String
  comments_starts_with: String
  comments_not_starts_with: String
  comments_ends_with: String
  comments_not_ends_with: String
  repeat: Int
  repeat_not: Int
  repeat_in: [Int!]
  repeat_not_in: [Int!]
  repeat_lt: Int
  repeat_lte: Int
  repeat_gt: Int
  repeat_gte: Int
  estimateTime: String
  estimateTime_not: String
  estimateTime_in: [String!]
  estimateTime_not_in: [String!]
  estimateTime_lt: String
  estimateTime_lte: String
  estimateTime_gt: String
  estimateTime_gte: String
  estimateTime_contains: String
  estimateTime_not_contains: String
  estimateTime_starts_with: String
  estimateTime_not_starts_with: String
  estimateTime_ends_with: String
  estimateTime_not_ends_with: String
  plannedTime: String
  plannedTime_not: String
  plannedTime_in: [String!]
  plannedTime_not_in: [String!]
  plannedTime_lt: String
  plannedTime_lte: String
  plannedTime_gt: String
  plannedTime_gte: String
  plannedTime_contains: String
  plannedTime_not_contains: String
  plannedTime_starts_with: String
  plannedTime_not_starts_with: String
  plannedTime_ends_with: String
  plannedTime_not_ends_with: String
  plannedDate: DateTime
  plannedDate_not: DateTime
  plannedDate_in: [DateTime!]
  plannedDate_not_in: [DateTime!]
  plannedDate_lt: DateTime
  plannedDate_lte: DateTime
  plannedDate_gt: DateTime
  plannedDate_gte: DateTime
  finishDate: DateTime
  finishDate_not: DateTime
  finishDate_in: [DateTime!]
  finishDate_not_in: [DateTime!]
  finishDate_lt: DateTime
  finishDate_lte: DateTime
  finishDate_gt: DateTime
  finishDate_gte: DateTime
  deadlineDate: DateTime
  deadlineDate_not: DateTime
  deadlineDate_in: [DateTime!]
  deadlineDate_not_in: [DateTime!]
  deadlineDate_lt: DateTime
  deadlineDate_lte: DateTime
  deadlineDate_gt: DateTime
  deadlineDate_gte: DateTime
  completed: Boolean
  completed_not: Boolean
  subproject: SubprojectWhereInput
  timelogs_every: TimelogWhereInput
  timelogs_some: TimelogWhereInput
  timelogs_none: TimelogWhereInput
  AND: [TaskWhereInput!]
  OR: [TaskWhereInput!]
  NOT: [TaskWhereInput!]
}

input TaskWhereUniqueInput {
  id: Int
}

type Timelog {
  id: Int!
  startDate: DateTime
  finishDate: DateTime
  task: Task!
}

type TimelogConnection {
  pageInfo: PageInfo!
  edges: [TimelogEdge]!
  aggregate: AggregateTimelog!
}

input TimelogCreateInput {
  id: Int
  startDate: DateTime
  finishDate: DateTime
  task: TaskCreateOneWithoutTimelogsInput!
}

input TimelogCreateManyWithoutTaskInput {
  create: [TimelogCreateWithoutTaskInput!]
  connect: [TimelogWhereUniqueInput!]
}

input TimelogCreateWithoutTaskInput {
  id: Int
  startDate: DateTime
  finishDate: DateTime
}

type TimelogEdge {
  node: Timelog!
  cursor: String!
}

enum TimelogOrderByInput {
  id_ASC
  id_DESC
  startDate_ASC
  startDate_DESC
  finishDate_ASC
  finishDate_DESC
}

type TimelogPreviousValues {
  id: Int!
  startDate: DateTime
  finishDate: DateTime
}

input TimelogScalarWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  startDate: DateTime
  startDate_not: DateTime
  startDate_in: [DateTime!]
  startDate_not_in: [DateTime!]
  startDate_lt: DateTime
  startDate_lte: DateTime
  startDate_gt: DateTime
  startDate_gte: DateTime
  finishDate: DateTime
  finishDate_not: DateTime
  finishDate_in: [DateTime!]
  finishDate_not_in: [DateTime!]
  finishDate_lt: DateTime
  finishDate_lte: DateTime
  finishDate_gt: DateTime
  finishDate_gte: DateTime
  AND: [TimelogScalarWhereInput!]
  OR: [TimelogScalarWhereInput!]
  NOT: [TimelogScalarWhereInput!]
}

type TimelogSubscriptionPayload {
  mutation: MutationType!
  node: Timelog
  updatedFields: [String!]
  previousValues: TimelogPreviousValues
}

input TimelogSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TimelogWhereInput
  AND: [TimelogSubscriptionWhereInput!]
  OR: [TimelogSubscriptionWhereInput!]
  NOT: [TimelogSubscriptionWhereInput!]
}

input TimelogUpdateInput {
  startDate: DateTime
  finishDate: DateTime
  task: TaskUpdateOneRequiredWithoutTimelogsInput
}

input TimelogUpdateManyDataInput {
  startDate: DateTime
  finishDate: DateTime
}

input TimelogUpdateManyMutationInput {
  startDate: DateTime
  finishDate: DateTime
}

input TimelogUpdateManyWithoutTaskInput {
  create: [TimelogCreateWithoutTaskInput!]
  delete: [TimelogWhereUniqueInput!]
  connect: [TimelogWhereUniqueInput!]
  set: [TimelogWhereUniqueInput!]
  disconnect: [TimelogWhereUniqueInput!]
  update: [TimelogUpdateWithWhereUniqueWithoutTaskInput!]
  upsert: [TimelogUpsertWithWhereUniqueWithoutTaskInput!]
  deleteMany: [TimelogScalarWhereInput!]
  updateMany: [TimelogUpdateManyWithWhereNestedInput!]
}

input TimelogUpdateManyWithWhereNestedInput {
  where: TimelogScalarWhereInput!
  data: TimelogUpdateManyDataInput!
}

input TimelogUpdateWithoutTaskDataInput {
  startDate: DateTime
  finishDate: DateTime
}

input TimelogUpdateWithWhereUniqueWithoutTaskInput {
  where: TimelogWhereUniqueInput!
  data: TimelogUpdateWithoutTaskDataInput!
}

input TimelogUpsertWithWhereUniqueWithoutTaskInput {
  where: TimelogWhereUniqueInput!
  update: TimelogUpdateWithoutTaskDataInput!
  create: TimelogCreateWithoutTaskInput!
}

input TimelogWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  startDate: DateTime
  startDate_not: DateTime
  startDate_in: [DateTime!]
  startDate_not_in: [DateTime!]
  startDate_lt: DateTime
  startDate_lte: DateTime
  startDate_gt: DateTime
  startDate_gte: DateTime
  finishDate: DateTime
  finishDate_not: DateTime
  finishDate_in: [DateTime!]
  finishDate_not_in: [DateTime!]
  finishDate_lt: DateTime
  finishDate_lte: DateTime
  finishDate_gt: DateTime
  finishDate_gte: DateTime
  task: TaskWhereInput
  AND: [TimelogWhereInput!]
  OR: [TimelogWhereInput!]
  NOT: [TimelogWhereInput!]
}

input TimelogWhereUniqueInput {
  id: Int
}
`