/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "";

export enum Difficulty {
  Easy = 0,
  Normal = 1,
  Hard = 2,
  Expert = 3,
  Special = 4,
  UNRECOGNIZED = -1,
}

export function difficultyFromJSON(object: any): Difficulty {
  switch (object) {
    case 0:
    case "Easy":
      return Difficulty.Easy;
    case 1:
    case "Normal":
      return Difficulty.Normal;
    case 2:
    case "Hard":
      return Difficulty.Hard;
    case 3:
    case "Expert":
      return Difficulty.Expert;
    case 4:
    case "Special":
      return Difficulty.Special;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Difficulty.UNRECOGNIZED;
  }
}

export function difficultyToJSON(object: Difficulty): string {
  switch (object) {
    case Difficulty.Easy:
      return "Easy";
    case Difficulty.Normal:
      return "Normal";
    case Difficulty.Hard:
      return "Hard";
    case Difficulty.Expert:
      return "Expert";
    case Difficulty.Special:
      return "Special";
    default:
      return "UNKNOWN";
  }
}

export enum NoteType {
  BPM = 0,
  Single = 1,
  Flick = 2,
  SlideTick = 3,
  SlideTickEnd = 4,
  UNRECOGNIZED = -1,
}

export function noteTypeFromJSON(object: any): NoteType {
  switch (object) {
    case 0:
    case "BPM":
      return NoteType.BPM;
    case 1:
    case "Single":
      return NoteType.Single;
    case 2:
    case "Flick":
      return NoteType.Flick;
    case 3:
    case "SlideTick":
      return NoteType.SlideTick;
    case 4:
    case "SlideTickEnd":
      return NoteType.SlideTickEnd;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NoteType.UNRECOGNIZED;
  }
}

export function noteTypeToJSON(object: NoteType): string {
  switch (object) {
    case NoteType.BPM:
      return "BPM";
    case NoteType.Single:
      return "Single";
    case NoteType.Flick:
      return "Flick";
    case NoteType.SlideTick:
      return "SlideTick";
    case NoteType.SlideTickEnd:
      return "SlideTickEnd";
    default:
      return "UNKNOWN";
  }
}

export enum Transition {
  Constant = 0,
  Linear = 1,
  QuadraticEaseIn = 2,
  QuadraticEaseOut = 3,
  QuadraticEaseInOut = 4,
  CubicEaseIn = 5,
  CubicEaseOut = 6,
  CubicEaseInOut = 7,
  QuarticEaseIn = 8,
  QuarticEaseOut = 9,
  QuarticEaseInOut = 10,
  QuinticEaseIn = 11,
  QuinticEaseOut = 12,
  QuinticEaseInOut = 13,
  SineEaseIn = 14,
  SineEaseOut = 15,
  SineEaseInOut = 16,
  CircularEaseIn = 17,
  CircularEaseOut = 18,
  CircularEaseInOut = 19,
  ExponentialEaseIn = 20,
  ExponentialEaseOut = 21,
  ExponentialEaseInOut = 22,
  ElasticEaseIn = 23,
  ElasticEaseOut = 24,
  ElasticEaseInOut = 25,
  BackEaseIn = 26,
  BackEaseOut = 27,
  BackEaseInOut = 28,
  BounceEaseIn = 29,
  BounceEaseOut = 30,
  BounceEaseInOut = 31,
  UNRECOGNIZED = -1,
}

export function transitionFromJSON(object: any): Transition {
  switch (object) {
    case 0:
    case "Constant":
      return Transition.Constant;
    case 1:
    case "Linear":
      return Transition.Linear;
    case 2:
    case "QuadraticEaseIn":
      return Transition.QuadraticEaseIn;
    case 3:
    case "QuadraticEaseOut":
      return Transition.QuadraticEaseOut;
    case 4:
    case "QuadraticEaseInOut":
      return Transition.QuadraticEaseInOut;
    case 5:
    case "CubicEaseIn":
      return Transition.CubicEaseIn;
    case 6:
    case "CubicEaseOut":
      return Transition.CubicEaseOut;
    case 7:
    case "CubicEaseInOut":
      return Transition.CubicEaseInOut;
    case 8:
    case "QuarticEaseIn":
      return Transition.QuarticEaseIn;
    case 9:
    case "QuarticEaseOut":
      return Transition.QuarticEaseOut;
    case 10:
    case "QuarticEaseInOut":
      return Transition.QuarticEaseInOut;
    case 11:
    case "QuinticEaseIn":
      return Transition.QuinticEaseIn;
    case 12:
    case "QuinticEaseOut":
      return Transition.QuinticEaseOut;
    case 13:
    case "QuinticEaseInOut":
      return Transition.QuinticEaseInOut;
    case 14:
    case "SineEaseIn":
      return Transition.SineEaseIn;
    case 15:
    case "SineEaseOut":
      return Transition.SineEaseOut;
    case 16:
    case "SineEaseInOut":
      return Transition.SineEaseInOut;
    case 17:
    case "CircularEaseIn":
      return Transition.CircularEaseIn;
    case 18:
    case "CircularEaseOut":
      return Transition.CircularEaseOut;
    case 19:
    case "CircularEaseInOut":
      return Transition.CircularEaseInOut;
    case 20:
    case "ExponentialEaseIn":
      return Transition.ExponentialEaseIn;
    case 21:
    case "ExponentialEaseOut":
      return Transition.ExponentialEaseOut;
    case 22:
    case "ExponentialEaseInOut":
      return Transition.ExponentialEaseInOut;
    case 23:
    case "ElasticEaseIn":
      return Transition.ElasticEaseIn;
    case 24:
    case "ElasticEaseOut":
      return Transition.ElasticEaseOut;
    case 25:
    case "ElasticEaseInOut":
      return Transition.ElasticEaseInOut;
    case 26:
    case "BackEaseIn":
      return Transition.BackEaseIn;
    case 27:
    case "BackEaseOut":
      return Transition.BackEaseOut;
    case 28:
    case "BackEaseInOut":
      return Transition.BackEaseInOut;
    case 29:
    case "BounceEaseIn":
      return Transition.BounceEaseIn;
    case 30:
    case "BounceEaseOut":
      return Transition.BounceEaseOut;
    case 31:
    case "BounceEaseInOut":
      return Transition.BounceEaseInOut;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Transition.UNRECOGNIZED;
  }
}

export function transitionToJSON(object: Transition): string {
  switch (object) {
    case Transition.Constant:
      return "Constant";
    case Transition.Linear:
      return "Linear";
    case Transition.QuadraticEaseIn:
      return "QuadraticEaseIn";
    case Transition.QuadraticEaseOut:
      return "QuadraticEaseOut";
    case Transition.QuadraticEaseInOut:
      return "QuadraticEaseInOut";
    case Transition.CubicEaseIn:
      return "CubicEaseIn";
    case Transition.CubicEaseOut:
      return "CubicEaseOut";
    case Transition.CubicEaseInOut:
      return "CubicEaseInOut";
    case Transition.QuarticEaseIn:
      return "QuarticEaseIn";
    case Transition.QuarticEaseOut:
      return "QuarticEaseOut";
    case Transition.QuarticEaseInOut:
      return "QuarticEaseInOut";
    case Transition.QuinticEaseIn:
      return "QuinticEaseIn";
    case Transition.QuinticEaseOut:
      return "QuinticEaseOut";
    case Transition.QuinticEaseInOut:
      return "QuinticEaseInOut";
    case Transition.SineEaseIn:
      return "SineEaseIn";
    case Transition.SineEaseOut:
      return "SineEaseOut";
    case Transition.SineEaseInOut:
      return "SineEaseInOut";
    case Transition.CircularEaseIn:
      return "CircularEaseIn";
    case Transition.CircularEaseOut:
      return "CircularEaseOut";
    case Transition.CircularEaseInOut:
      return "CircularEaseInOut";
    case Transition.ExponentialEaseIn:
      return "ExponentialEaseIn";
    case Transition.ExponentialEaseOut:
      return "ExponentialEaseOut";
    case Transition.ExponentialEaseInOut:
      return "ExponentialEaseInOut";
    case Transition.ElasticEaseIn:
      return "ElasticEaseIn";
    case Transition.ElasticEaseOut:
      return "ElasticEaseOut";
    case Transition.ElasticEaseInOut:
      return "ElasticEaseInOut";
    case Transition.BackEaseIn:
      return "BackEaseIn";
    case Transition.BackEaseOut:
      return "BackEaseOut";
    case Transition.BackEaseInOut:
      return "BackEaseInOut";
    case Transition.BounceEaseIn:
      return "BounceEaseIn";
    case Transition.BounceEaseOut:
      return "BounceEaseOut";
    case Transition.BounceEaseInOut:
      return "BounceEaseInOut";
    default:
      return "UNKNOWN";
  }
}

export interface Chart {
  difficulty: Difficulty;
  level: number;
  offset: number;
  groups: TimingGroup[];
  bpm: ValuePoint[];
  version: number;
}

export interface TimingGroup {
  notes: Note[];
  points: TimingPoint[];
  flags: number;
}

export interface Note {
  type: NoteType;
  beat: number[];
  lane: number;
  tickStack: number;
  anims: NoteAnim[];
  x: number;
  y: number;
  flags: number;
}

export interface NoteAnim {
  beat: number[];
  pos: TransitionVector | undefined;
}

export interface TransitionVector {
  x: TransitionPropertyFloat | undefined;
  y: TransitionPropertyFloat | undefined;
}

/** 原本是泛型 现在只保留float实现 */
export interface TransitionPropertyFloat {
  value: number;
  transition: Transition;
}

export interface TimingPoint {
  beat: number[];
  speed: TransitionPropertyFloat | undefined;
  tap: TransitionColor | undefined;
  tapGrey: TransitionColor | undefined;
  flick: TransitionColor | undefined;
  slideTick: TransitionColor | undefined;
  slide: TransitionColor | undefined;
}

export interface TransitionColor {
  r: number;
  g: number;
  b: number;
  a: number;
  transition: Transition;
}

export interface ValuePoint {
  beat: number[];
  value: number;
}

const baseChart: object = { difficulty: 0, level: 0, offset: 0, version: 0 };

export const Chart = {
  encode(message: Chart, writer: Writer = Writer.create()): Writer {
    if (message.difficulty !== 0) {
      writer.uint32(8).int32(message.difficulty);
    }
    if (message.level !== 0) {
      writer.uint32(16).int32(message.level);
    }
    if (message.offset !== 0) {
      writer.uint32(24).int32(message.offset);
    }
    for (const v of message.groups) {
      TimingGroup.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.bpm) {
      ValuePoint.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.version !== 0) {
      writer.uint32(48).int32(message.version);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Chart {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChart } as Chart;
    message.groups = [];
    message.bpm = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.difficulty = reader.int32() as any;
          break;
        case 2:
          message.level = reader.int32();
          break;
        case 3:
          message.offset = reader.int32();
          break;
        case 4:
          message.groups.push(TimingGroup.decode(reader, reader.uint32()));
          break;
        case 5:
          message.bpm.push(ValuePoint.decode(reader, reader.uint32()));
          break;
        case 6:
          message.version = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Chart {
    const message = { ...baseChart } as Chart;
    message.groups = [];
    message.bpm = [];
    if (object.difficulty !== undefined && object.difficulty !== null) {
      message.difficulty = difficultyFromJSON(object.difficulty);
    } else {
      message.difficulty = 0;
    }
    if (object.level !== undefined && object.level !== null) {
      message.level = Number(object.level);
    } else {
      message.level = 0;
    }
    if (object.offset !== undefined && object.offset !== null) {
      message.offset = Number(object.offset);
    } else {
      message.offset = 0;
    }
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(TimingGroup.fromJSON(e));
      }
    }
    if (object.bpm !== undefined && object.bpm !== null) {
      for (const e of object.bpm) {
        message.bpm.push(ValuePoint.fromJSON(e));
      }
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = Number(object.version);
    } else {
      message.version = 0;
    }
    return message;
  },

  toJSON(message: Chart): unknown {
    const obj: any = {};
    message.difficulty !== undefined &&
      (obj.difficulty = difficultyToJSON(message.difficulty));
    message.level !== undefined && (obj.level = message.level);
    message.offset !== undefined && (obj.offset = message.offset);
    if (message.groups) {
      obj.groups = message.groups.map((e) =>
        e ? TimingGroup.toJSON(e) : undefined
      );
    } else {
      obj.groups = [];
    }
    if (message.bpm) {
      obj.bpm = message.bpm.map((e) => (e ? ValuePoint.toJSON(e) : undefined));
    } else {
      obj.bpm = [];
    }
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },

  fromPartial(object: DeepPartial<Chart>): Chart {
    const message = { ...baseChart } as Chart;
    message.groups = [];
    message.bpm = [];
    if (object.difficulty !== undefined && object.difficulty !== null) {
      message.difficulty = object.difficulty;
    } else {
      message.difficulty = 0;
    }
    if (object.level !== undefined && object.level !== null) {
      message.level = object.level;
    } else {
      message.level = 0;
    }
    if (object.offset !== undefined && object.offset !== null) {
      message.offset = object.offset;
    } else {
      message.offset = 0;
    }
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(TimingGroup.fromPartial(e));
      }
    }
    if (object.bpm !== undefined && object.bpm !== null) {
      for (const e of object.bpm) {
        message.bpm.push(ValuePoint.fromPartial(e));
      }
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = 0;
    }
    return message;
  },
};

const baseTimingGroup: object = { flags: 0 };

export const TimingGroup = {
  encode(message: TimingGroup, writer: Writer = Writer.create()): Writer {
    for (const v of message.notes) {
      Note.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.points) {
      TimingPoint.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.flags !== 0) {
      writer.uint32(24).uint32(message.flags);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TimingGroup {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTimingGroup } as TimingGroup;
    message.notes = [];
    message.points = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notes.push(Note.decode(reader, reader.uint32()));
          break;
        case 2:
          message.points.push(TimingPoint.decode(reader, reader.uint32()));
          break;
        case 3:
          message.flags = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TimingGroup {
    const message = { ...baseTimingGroup } as TimingGroup;
    message.notes = [];
    message.points = [];
    if (object.notes !== undefined && object.notes !== null) {
      for (const e of object.notes) {
        message.notes.push(Note.fromJSON(e));
      }
    }
    if (object.points !== undefined && object.points !== null) {
      for (const e of object.points) {
        message.points.push(TimingPoint.fromJSON(e));
      }
    }
    if (object.flags !== undefined && object.flags !== null) {
      message.flags = Number(object.flags);
    } else {
      message.flags = 0;
    }
    return message;
  },

  toJSON(message: TimingGroup): unknown {
    const obj: any = {};
    if (message.notes) {
      obj.notes = message.notes.map((e) => (e ? Note.toJSON(e) : undefined));
    } else {
      obj.notes = [];
    }
    if (message.points) {
      obj.points = message.points.map((e) =>
        e ? TimingPoint.toJSON(e) : undefined
      );
    } else {
      obj.points = [];
    }
    message.flags !== undefined && (obj.flags = message.flags);
    return obj;
  },

  fromPartial(object: DeepPartial<TimingGroup>): TimingGroup {
    const message = { ...baseTimingGroup } as TimingGroup;
    message.notes = [];
    message.points = [];
    if (object.notes !== undefined && object.notes !== null) {
      for (const e of object.notes) {
        message.notes.push(Note.fromPartial(e));
      }
    }
    if (object.points !== undefined && object.points !== null) {
      for (const e of object.points) {
        message.points.push(TimingPoint.fromPartial(e));
      }
    }
    if (object.flags !== undefined && object.flags !== null) {
      message.flags = object.flags;
    } else {
      message.flags = 0;
    }
    return message;
  },
};

const baseNote: object = {
  type: 0,
  beat: 0,
  lane: 0,
  tickStack: 0,
  x: 0,
  y: 0,
  flags: 0,
};

export const Note = {
  encode(message: Note, writer: Writer = Writer.create()): Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    writer.uint32(18).fork();
    for (const v of message.beat) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.lane !== 0) {
      writer.uint32(24).int32(message.lane);
    }
    if (message.tickStack !== 0) {
      writer.uint32(32).int32(message.tickStack);
    }
    for (const v of message.anims) {
      NoteAnim.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.x !== 0) {
      writer.uint32(53).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(61).float(message.y);
    }
    if (message.flags !== 0) {
      writer.uint32(64).uint32(message.flags);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Note {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNote } as Note;
    message.beat = [];
    message.anims = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.beat.push(reader.int32());
            }
          } else {
            message.beat.push(reader.int32());
          }
          break;
        case 3:
          message.lane = reader.int32();
          break;
        case 4:
          message.tickStack = reader.int32();
          break;
        case 5:
          message.anims.push(NoteAnim.decode(reader, reader.uint32()));
          break;
        case 6:
          message.x = reader.float();
          break;
        case 7:
          message.y = reader.float();
          break;
        case 8:
          message.flags = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Note {
    const message = { ...baseNote } as Note;
    message.beat = [];
    message.anims = [];
    if (object.type !== undefined && object.type !== null) {
      message.type = noteTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.beat !== undefined && object.beat !== null) {
      for (const e of object.beat) {
        message.beat.push(Number(e));
      }
    }
    if (object.lane !== undefined && object.lane !== null) {
      message.lane = Number(object.lane);
    } else {
      message.lane = 0;
    }
    if (object.tickStack !== undefined && object.tickStack !== null) {
      message.tickStack = Number(object.tickStack);
    } else {
      message.tickStack = 0;
    }
    if (object.anims !== undefined && object.anims !== null) {
      for (const e of object.anims) {
        message.anims.push(NoteAnim.fromJSON(e));
      }
    }
    if (object.x !== undefined && object.x !== null) {
      message.x = Number(object.x);
    } else {
      message.x = 0;
    }
    if (object.y !== undefined && object.y !== null) {
      message.y = Number(object.y);
    } else {
      message.y = 0;
    }
    if (object.flags !== undefined && object.flags !== null) {
      message.flags = Number(object.flags);
    } else {
      message.flags = 0;
    }
    return message;
  },

  toJSON(message: Note): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = noteTypeToJSON(message.type));
    if (message.beat) {
      obj.beat = message.beat.map((e) => e);
    } else {
      obj.beat = [];
    }
    message.lane !== undefined && (obj.lane = message.lane);
    message.tickStack !== undefined && (obj.tickStack = message.tickStack);
    if (message.anims) {
      obj.anims = message.anims.map((e) =>
        e ? NoteAnim.toJSON(e) : undefined
      );
    } else {
      obj.anims = [];
    }
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.flags !== undefined && (obj.flags = message.flags);
    return obj;
  },

  fromPartial(object: DeepPartial<Note>): Note {
    const message = { ...baseNote } as Note;
    message.beat = [];
    message.anims = [];
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.beat !== undefined && object.beat !== null) {
      for (const e of object.beat) {
        message.beat.push(e);
      }
    }
    if (object.lane !== undefined && object.lane !== null) {
      message.lane = object.lane;
    } else {
      message.lane = 0;
    }
    if (object.tickStack !== undefined && object.tickStack !== null) {
      message.tickStack = object.tickStack;
    } else {
      message.tickStack = 0;
    }
    if (object.anims !== undefined && object.anims !== null) {
      for (const e of object.anims) {
        message.anims.push(NoteAnim.fromPartial(e));
      }
    }
    if (object.x !== undefined && object.x !== null) {
      message.x = object.x;
    } else {
      message.x = 0;
    }
    if (object.y !== undefined && object.y !== null) {
      message.y = object.y;
    } else {
      message.y = 0;
    }
    if (object.flags !== undefined && object.flags !== null) {
      message.flags = object.flags;
    } else {
      message.flags = 0;
    }
    return message;
  },
};

const baseNoteAnim: object = { beat: 0 };

export const NoteAnim = {
  encode(message: NoteAnim, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).fork();
    for (const v of message.beat) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.pos !== undefined) {
      TransitionVector.encode(message.pos, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NoteAnim {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNoteAnim } as NoteAnim;
    message.beat = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.beat.push(reader.int32());
            }
          } else {
            message.beat.push(reader.int32());
          }
          break;
        case 2:
          message.pos = TransitionVector.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NoteAnim {
    const message = { ...baseNoteAnim } as NoteAnim;
    message.beat = [];
    if (object.beat !== undefined && object.beat !== null) {
      for (const e of object.beat) {
        message.beat.push(Number(e));
      }
    }
    if (object.pos !== undefined && object.pos !== null) {
      message.pos = TransitionVector.fromJSON(object.pos);
    } else {
      message.pos = undefined;
    }
    return message;
  },

  toJSON(message: NoteAnim): unknown {
    const obj: any = {};
    if (message.beat) {
      obj.beat = message.beat.map((e) => e);
    } else {
      obj.beat = [];
    }
    message.pos !== undefined &&
      (obj.pos = message.pos
        ? TransitionVector.toJSON(message.pos)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<NoteAnim>): NoteAnim {
    const message = { ...baseNoteAnim } as NoteAnim;
    message.beat = [];
    if (object.beat !== undefined && object.beat !== null) {
      for (const e of object.beat) {
        message.beat.push(e);
      }
    }
    if (object.pos !== undefined && object.pos !== null) {
      message.pos = TransitionVector.fromPartial(object.pos);
    } else {
      message.pos = undefined;
    }
    return message;
  },
};

const baseTransitionVector: object = {};

export const TransitionVector = {
  encode(message: TransitionVector, writer: Writer = Writer.create()): Writer {
    if (message.x !== undefined) {
      TransitionPropertyFloat.encode(
        message.x,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.y !== undefined) {
      TransitionPropertyFloat.encode(
        message.y,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TransitionVector {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTransitionVector } as TransitionVector;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = TransitionPropertyFloat.decode(reader, reader.uint32());
          break;
        case 2:
          message.y = TransitionPropertyFloat.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransitionVector {
    const message = { ...baseTransitionVector } as TransitionVector;
    if (object.x !== undefined && object.x !== null) {
      message.x = TransitionPropertyFloat.fromJSON(object.x);
    } else {
      message.x = undefined;
    }
    if (object.y !== undefined && object.y !== null) {
      message.y = TransitionPropertyFloat.fromJSON(object.y);
    } else {
      message.y = undefined;
    }
    return message;
  },

  toJSON(message: TransitionVector): unknown {
    const obj: any = {};
    message.x !== undefined &&
      (obj.x = message.x
        ? TransitionPropertyFloat.toJSON(message.x)
        : undefined);
    message.y !== undefined &&
      (obj.y = message.y
        ? TransitionPropertyFloat.toJSON(message.y)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TransitionVector>): TransitionVector {
    const message = { ...baseTransitionVector } as TransitionVector;
    if (object.x !== undefined && object.x !== null) {
      message.x = TransitionPropertyFloat.fromPartial(object.x);
    } else {
      message.x = undefined;
    }
    if (object.y !== undefined && object.y !== null) {
      message.y = TransitionPropertyFloat.fromPartial(object.y);
    } else {
      message.y = undefined;
    }
    return message;
  },
};

const baseTransitionPropertyFloat: object = { value: 0, transition: 0 };

export const TransitionPropertyFloat = {
  encode(
    message: TransitionPropertyFloat,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.value !== 0) {
      writer.uint32(13).float(message.value);
    }
    if (message.transition !== 0) {
      writer.uint32(16).int32(message.transition);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TransitionPropertyFloat {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTransitionPropertyFloat,
    } as TransitionPropertyFloat;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.float();
          break;
        case 2:
          message.transition = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransitionPropertyFloat {
    const message = {
      ...baseTransitionPropertyFloat,
    } as TransitionPropertyFloat;
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    if (object.transition !== undefined && object.transition !== null) {
      message.transition = transitionFromJSON(object.transition);
    } else {
      message.transition = 0;
    }
    return message;
  },

  toJSON(message: TransitionPropertyFloat): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.transition !== undefined &&
      (obj.transition = transitionToJSON(message.transition));
    return obj;
  },

  fromPartial(
    object: DeepPartial<TransitionPropertyFloat>
  ): TransitionPropertyFloat {
    const message = {
      ...baseTransitionPropertyFloat,
    } as TransitionPropertyFloat;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    if (object.transition !== undefined && object.transition !== null) {
      message.transition = object.transition;
    } else {
      message.transition = 0;
    }
    return message;
  },
};

const baseTimingPoint: object = { beat: 0 };

export const TimingPoint = {
  encode(message: TimingPoint, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).fork();
    for (const v of message.beat) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.speed !== undefined) {
      TransitionPropertyFloat.encode(
        message.speed,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.tap !== undefined) {
      TransitionColor.encode(message.tap, writer.uint32(26).fork()).ldelim();
    }
    if (message.tapGrey !== undefined) {
      TransitionColor.encode(
        message.tapGrey,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.flick !== undefined) {
      TransitionColor.encode(message.flick, writer.uint32(42).fork()).ldelim();
    }
    if (message.slideTick !== undefined) {
      TransitionColor.encode(
        message.slideTick,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.slide !== undefined) {
      TransitionColor.encode(message.slide, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TimingPoint {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTimingPoint } as TimingPoint;
    message.beat = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.beat.push(reader.int32());
            }
          } else {
            message.beat.push(reader.int32());
          }
          break;
        case 2:
          message.speed = TransitionPropertyFloat.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.tap = TransitionColor.decode(reader, reader.uint32());
          break;
        case 4:
          message.tapGrey = TransitionColor.decode(reader, reader.uint32());
          break;
        case 5:
          message.flick = TransitionColor.decode(reader, reader.uint32());
          break;
        case 6:
          message.slideTick = TransitionColor.decode(reader, reader.uint32());
          break;
        case 7:
          message.slide = TransitionColor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TimingPoint {
    const message = { ...baseTimingPoint } as TimingPoint;
    message.beat = [];
    if (object.beat !== undefined && object.beat !== null) {
      for (const e of object.beat) {
        message.beat.push(Number(e));
      }
    }
    if (object.speed !== undefined && object.speed !== null) {
      message.speed = TransitionPropertyFloat.fromJSON(object.speed);
    } else {
      message.speed = undefined;
    }
    if (object.tap !== undefined && object.tap !== null) {
      message.tap = TransitionColor.fromJSON(object.tap);
    } else {
      message.tap = undefined;
    }
    if (object.tapGrey !== undefined && object.tapGrey !== null) {
      message.tapGrey = TransitionColor.fromJSON(object.tapGrey);
    } else {
      message.tapGrey = undefined;
    }
    if (object.flick !== undefined && object.flick !== null) {
      message.flick = TransitionColor.fromJSON(object.flick);
    } else {
      message.flick = undefined;
    }
    if (object.slideTick !== undefined && object.slideTick !== null) {
      message.slideTick = TransitionColor.fromJSON(object.slideTick);
    } else {
      message.slideTick = undefined;
    }
    if (object.slide !== undefined && object.slide !== null) {
      message.slide = TransitionColor.fromJSON(object.slide);
    } else {
      message.slide = undefined;
    }
    return message;
  },

  toJSON(message: TimingPoint): unknown {
    const obj: any = {};
    if (message.beat) {
      obj.beat = message.beat.map((e) => e);
    } else {
      obj.beat = [];
    }
    message.speed !== undefined &&
      (obj.speed = message.speed
        ? TransitionPropertyFloat.toJSON(message.speed)
        : undefined);
    message.tap !== undefined &&
      (obj.tap = message.tap ? TransitionColor.toJSON(message.tap) : undefined);
    message.tapGrey !== undefined &&
      (obj.tapGrey = message.tapGrey
        ? TransitionColor.toJSON(message.tapGrey)
        : undefined);
    message.flick !== undefined &&
      (obj.flick = message.flick
        ? TransitionColor.toJSON(message.flick)
        : undefined);
    message.slideTick !== undefined &&
      (obj.slideTick = message.slideTick
        ? TransitionColor.toJSON(message.slideTick)
        : undefined);
    message.slide !== undefined &&
      (obj.slide = message.slide
        ? TransitionColor.toJSON(message.slide)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TimingPoint>): TimingPoint {
    const message = { ...baseTimingPoint } as TimingPoint;
    message.beat = [];
    if (object.beat !== undefined && object.beat !== null) {
      for (const e of object.beat) {
        message.beat.push(e);
      }
    }
    if (object.speed !== undefined && object.speed !== null) {
      message.speed = TransitionPropertyFloat.fromPartial(object.speed);
    } else {
      message.speed = undefined;
    }
    if (object.tap !== undefined && object.tap !== null) {
      message.tap = TransitionColor.fromPartial(object.tap);
    } else {
      message.tap = undefined;
    }
    if (object.tapGrey !== undefined && object.tapGrey !== null) {
      message.tapGrey = TransitionColor.fromPartial(object.tapGrey);
    } else {
      message.tapGrey = undefined;
    }
    if (object.flick !== undefined && object.flick !== null) {
      message.flick = TransitionColor.fromPartial(object.flick);
    } else {
      message.flick = undefined;
    }
    if (object.slideTick !== undefined && object.slideTick !== null) {
      message.slideTick = TransitionColor.fromPartial(object.slideTick);
    } else {
      message.slideTick = undefined;
    }
    if (object.slide !== undefined && object.slide !== null) {
      message.slide = TransitionColor.fromPartial(object.slide);
    } else {
      message.slide = undefined;
    }
    return message;
  },
};

const baseTransitionColor: object = { r: 0, g: 0, b: 0, a: 0, transition: 0 };

export const TransitionColor = {
  encode(message: TransitionColor, writer: Writer = Writer.create()): Writer {
    if (message.r !== 0) {
      writer.uint32(8).int32(message.r);
    }
    if (message.g !== 0) {
      writer.uint32(16).int32(message.g);
    }
    if (message.b !== 0) {
      writer.uint32(24).int32(message.b);
    }
    if (message.a !== 0) {
      writer.uint32(32).int32(message.a);
    }
    if (message.transition !== 0) {
      writer.uint32(40).int32(message.transition);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TransitionColor {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTransitionColor } as TransitionColor;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.r = reader.int32();
          break;
        case 2:
          message.g = reader.int32();
          break;
        case 3:
          message.b = reader.int32();
          break;
        case 4:
          message.a = reader.int32();
          break;
        case 5:
          message.transition = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransitionColor {
    const message = { ...baseTransitionColor } as TransitionColor;
    if (object.r !== undefined && object.r !== null) {
      message.r = Number(object.r);
    } else {
      message.r = 0;
    }
    if (object.g !== undefined && object.g !== null) {
      message.g = Number(object.g);
    } else {
      message.g = 0;
    }
    if (object.b !== undefined && object.b !== null) {
      message.b = Number(object.b);
    } else {
      message.b = 0;
    }
    if (object.a !== undefined && object.a !== null) {
      message.a = Number(object.a);
    } else {
      message.a = 0;
    }
    if (object.transition !== undefined && object.transition !== null) {
      message.transition = transitionFromJSON(object.transition);
    } else {
      message.transition = 0;
    }
    return message;
  },

  toJSON(message: TransitionColor): unknown {
    const obj: any = {};
    message.r !== undefined && (obj.r = message.r);
    message.g !== undefined && (obj.g = message.g);
    message.b !== undefined && (obj.b = message.b);
    message.a !== undefined && (obj.a = message.a);
    message.transition !== undefined &&
      (obj.transition = transitionToJSON(message.transition));
    return obj;
  },

  fromPartial(object: DeepPartial<TransitionColor>): TransitionColor {
    const message = { ...baseTransitionColor } as TransitionColor;
    if (object.r !== undefined && object.r !== null) {
      message.r = object.r;
    } else {
      message.r = 0;
    }
    if (object.g !== undefined && object.g !== null) {
      message.g = object.g;
    } else {
      message.g = 0;
    }
    if (object.b !== undefined && object.b !== null) {
      message.b = object.b;
    } else {
      message.b = 0;
    }
    if (object.a !== undefined && object.a !== null) {
      message.a = object.a;
    } else {
      message.a = 0;
    }
    if (object.transition !== undefined && object.transition !== null) {
      message.transition = object.transition;
    } else {
      message.transition = 0;
    }
    return message;
  },
};

const baseValuePoint: object = { beat: 0, value: 0 };

export const ValuePoint = {
  encode(message: ValuePoint, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).fork();
    for (const v of message.beat) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.value !== 0) {
      writer.uint32(21).float(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ValuePoint {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValuePoint } as ValuePoint;
    message.beat = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.beat.push(reader.int32());
            }
          } else {
            message.beat.push(reader.int32());
          }
          break;
        case 2:
          message.value = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValuePoint {
    const message = { ...baseValuePoint } as ValuePoint;
    message.beat = [];
    if (object.beat !== undefined && object.beat !== null) {
      for (const e of object.beat) {
        message.beat.push(Number(e));
      }
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: ValuePoint): unknown {
    const obj: any = {};
    if (message.beat) {
      obj.beat = message.beat.map((e) => e);
    } else {
      obj.beat = [];
    }
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<ValuePoint>): ValuePoint {
    const message = { ...baseValuePoint } as ValuePoint;
    message.beat = [];
    if (object.beat !== undefined && object.beat !== null) {
      for (const e of object.beat) {
        message.beat.push(e);
      }
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
