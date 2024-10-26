export interface BugReportFilterOneInput {
  id: number;
}

export interface BugReportFilterManyInput {
  ids?: number[];
  reportingUserIDs?: number[];
  resolvingUserIDs?: number[];
  severity?: number[];
  urls?: string[];
  isOpen?: boolean;
  skip?: number;
  limit?: number;
}

export interface BugReportCreateInput {
  title: string;
  content: string;
  url: string;
}

export interface BugReportUpdateInput {
  title?: string;
  content?: string;
  url?: string;
  severity?: number;
}