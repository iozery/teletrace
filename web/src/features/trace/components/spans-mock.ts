import { RawSpan } from "@/types/span";

export type Span = {
  span: RawSpan;
  spanAction: string;
  spanDuration: string;
  spanDateTime: string;
};

export const SPANS_MOCK: Span[] = [
  {
    span: {
      spanId: "spanId",
      traceId: "traceId",
      name: "name",
      kind: 1,
      status: { message: "message", code: 12 },
      startTimeUnixNano: 5,
      endTimeUnixNano: 6,
      traceState: "traceState",
      attributes: { string: "string", number: 1, bool: true },
      droppedAttributesCount: 8,
      droppedEventsCount: 0,
      droppedLinksCount: 0,
    },
    spanAction: "Execute",
    spanDuration: "192.45",
    spanDateTime: "1:36.12.610 - Jan 24, 2022",
  },
  {
    span: {
      spanId: "spanId1",
      traceId: "traceId",
      name: "name",
      kind: 1,
      status: { message: "message", code: 12 },
      startTimeUnixNano: 5,
      endTimeUnixNano: 6,
      traceState: "traceState",
      attributes: { string: "string", number: 1, bool: true },
      droppedAttributesCount: 8,
      droppedEventsCount: 0,
      droppedLinksCount: 0,
    },
    spanAction: "Execute",
    spanDuration: "192.45",
    spanDateTime: "1:36.12.610 - Jan 24, 2022",
  },
  {
    span: {
      spanId: "spanId2",
      traceId: "traceId",
      name: "name",
      kind: 1,
      status: { message: "message", code: 12 },
      startTimeUnixNano: 5,
      endTimeUnixNano: 6,
      traceState: "traceState",
      attributes: { string: "string", number: 1, bool: true },
      droppedAttributesCount: 8,
      droppedEventsCount: 0,
      droppedLinksCount: 0,
    },
    spanAction: "Execute",
    spanDuration: "192.45",
    spanDateTime: "1:36.12.610 - Jan 24, 2022",
  },
];