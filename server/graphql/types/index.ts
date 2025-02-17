import { StrapiGraphQLContext } from "../../../types";

import Id from "./id";
import Comment from "./comment";
import CommentNested from "./comment-nested";
import CommentAuthor from "./comment-author";
import CreateComment from "./create-comment";
import CreateCommentAuthor from "./create-comment-author";
import UpdateComment from "./update-comment";
import RemoveComment from "./remove-comment";
import IdentifyCommentAuthor from "./identify-comment-author";
import Report from "./report";
import ReportReason from "./report-reason";
import CreateReport from "./create-report";
import ResponsePagination from "./response-pagination";
import ResponseMeta from "./response-meta";
import ResponseFindAll from "./response-find-all";

const typesFactories = [
  Id,
  Comment,
  CommentNested,
  CommentAuthor,
  CreateComment,
  CreateCommentAuthor,
  UpdateComment,
  RemoveComment,
  IdentifyCommentAuthor,
  Report,
  ReportReason,
  CreateReport,
  ResponsePagination,
  ResponseMeta,
  ResponseFindAll,
];

export = (context: StrapiGraphQLContext) =>
  typesFactories.map((factory) => factory(context));
