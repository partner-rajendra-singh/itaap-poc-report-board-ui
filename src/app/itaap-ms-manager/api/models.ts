export interface Error {
  errorCode?: number;
  errorDesc?: string;
}

export interface Users {
  id?: number;
  email?: string;
  name?: string;
  role?: string;
  avatar?: string;
  joiningDate?: Date;
  designation?: string;
  accepted?: boolean;
}

export interface Comments {
  id?: number;
  givenBy?: Users;
  givenByUserId?: number;
  comments?: string;
  timestamp?: Date;
}

export interface TaskList {
  completedByUserId?: number;
  taskDetails?: string;
  addedOn?: Date;
  completedBy?: Users;
  completedOn?: Date;
  isCompleted?: boolean;
}

export interface Task {
  id?: number;
  progress?: number;
  priority?: string;
  completedTasks?: number;
  taskTitle?: string;
  taskDesc?: string;
  status?: string;
  assignees?: Users[];
  assignedUsers?: number[];
  comments?: Comments[];
  taskLists?: TaskList[];
  createdByUserID?: number;
  acceptedByUserID?: number;
  microserviceID?: number;
  createdBy?: Users;
  dueDate?: Date;
  createdDate?: Date;
  startDate?: Date;
  modifiedDate?: Date;
  completedDate?: Date;
  notes?: string;
  impediments?: string
  attachments?: any;
  rejectionReason?: string;
  microservices?: Microservices;
}

export interface Microservices {
  id?: number;
  name?: string;
  status?: string;
  targetCompletionDate?: Date;
  tgl?: Date;
  bgl?: Date;
  techLeadID?: number;
  developerID?: number;
  backupID?: number;
  scrumMasterID?: number;
  pocID?: number;
  deploymentID?: number;
  signOffID?: number;
  documentsID?: number;
  techLead?: Users;
  developer?: Users;
  backup?: Users;
  scrumMaster?: Users;
  poc?: Users;
  deployment?: Deployment;
  pipelineID?: number;
}
export interface Documents {
  id?: number;
  iq?: string;
  piq?: string;
  azureVariables?: string;
  signOffKt?: Date;
  signOffSit?: Date;
  signOffUat?: Date;
  signOffPt?: Date;
  signOffSt?: Date;
}
export interface Deployment {
  deploymentDev?: NonProd;
  deploymentTest?: NonProd;
  deploymentAcc?: AccProd[];
  deploymentProd?: AccProd[];
  tgl?: Date;
  bgl?: Date;
  postmanCollection?: string;
  itd?: string;
}
export interface NonProd {
  id?: number;
  stage?: number;
  microserviceID?: number;
  buildNumber?: string;
  deploymentDate?: Date;
  state?: string;
  buildId?: number
}
export interface AccProd {
  id?: number;
  stage?: number;
  documents?: Documents;
  buildNumber?: string;
  deploymentDate?: Date;
  state?: string;
  buildId?: number
  fileTag?: string;
  fileData?: string;
  fileName?: string;
  pipelineID?: number;
}

export interface Timeline {
  id: string,
  type: string,
  name: string,
  state: string,
  result: string,
  order: number,
  icon: string,
  color: string,
  identifier: string
}

export interface Connection {
  host: string,
  port: number
}