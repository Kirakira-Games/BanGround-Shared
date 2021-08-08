/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Difficulty, difficultyFromJSON, difficultyToJSON } from "./Chart";

export const protobufPackage = "";

export interface ReplayTouchState {
  time: number;
  touchId: number;
  screenPos: PVector2 | undefined;
  pos: PVector2 | undefined;
  phase: number;
}

export interface PVector2 {
  x: number;
  y: number;
}

export interface PVector3 {
  x: number;
  y: number;
  z: number;
}

export interface ReplayFrame {
  judgeTime: number;
  events: ReplayTouchState[];
}

export interface FileChecksum {
  file: string;
  checksum: Uint8Array;
}

export interface ReplayFile {
  uid: number;
  sid: number;
  difficulty: Difficulty;
  mods: number;
  checksums: FileChecksum[];
  frames: ReplayFrame[];
}

const baseReplayTouchState: object = { time: 0, touchId: 0, phase: 0 };

export const ReplayTouchState = {
  encode(message: ReplayTouchState, writer: Writer = Writer.create()): Writer {
    if (message.time !== 0) {
      writer.uint32(8).int32(message.time);
    }
    if (message.touchId !== 0) {
      writer.uint32(16).int32(message.touchId);
    }
    if (message.screenPos !== undefined) {
      PVector2.encode(message.screenPos, writer.uint32(26).fork()).ldelim();
    }
    if (message.pos !== undefined) {
      PVector2.encode(message.pos, writer.uint32(34).fork()).ldelim();
    }
    if (message.phase !== 0) {
      writer.uint32(40).int32(message.phase);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ReplayTouchState {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReplayTouchState } as ReplayTouchState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = reader.int32();
          break;
        case 2:
          message.touchId = reader.int32();
          break;
        case 3:
          message.screenPos = PVector2.decode(reader, reader.uint32());
          break;
        case 4:
          message.pos = PVector2.decode(reader, reader.uint32());
          break;
        case 5:
          message.phase = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReplayTouchState {
    const message = { ...baseReplayTouchState } as ReplayTouchState;
    if (object.time !== undefined && object.time !== null) {
      message.time = Number(object.time);
    } else {
      message.time = 0;
    }
    if (object.touchId !== undefined && object.touchId !== null) {
      message.touchId = Number(object.touchId);
    } else {
      message.touchId = 0;
    }
    if (object.screenPos !== undefined && object.screenPos !== null) {
      message.screenPos = PVector2.fromJSON(object.screenPos);
    } else {
      message.screenPos = undefined;
    }
    if (object.pos !== undefined && object.pos !== null) {
      message.pos = PVector2.fromJSON(object.pos);
    } else {
      message.pos = undefined;
    }
    if (object.phase !== undefined && object.phase !== null) {
      message.phase = Number(object.phase);
    } else {
      message.phase = 0;
    }
    return message;
  },

  toJSON(message: ReplayTouchState): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time);
    message.touchId !== undefined && (obj.touchId = message.touchId);
    message.screenPos !== undefined &&
      (obj.screenPos = message.screenPos
        ? PVector2.toJSON(message.screenPos)
        : undefined);
    message.pos !== undefined &&
      (obj.pos = message.pos ? PVector2.toJSON(message.pos) : undefined);
    message.phase !== undefined && (obj.phase = message.phase);
    return obj;
  },

  fromPartial(object: DeepPartial<ReplayTouchState>): ReplayTouchState {
    const message = { ...baseReplayTouchState } as ReplayTouchState;
    if (object.time !== undefined && object.time !== null) {
      message.time = object.time;
    } else {
      message.time = 0;
    }
    if (object.touchId !== undefined && object.touchId !== null) {
      message.touchId = object.touchId;
    } else {
      message.touchId = 0;
    }
    if (object.screenPos !== undefined && object.screenPos !== null) {
      message.screenPos = PVector2.fromPartial(object.screenPos);
    } else {
      message.screenPos = undefined;
    }
    if (object.pos !== undefined && object.pos !== null) {
      message.pos = PVector2.fromPartial(object.pos);
    } else {
      message.pos = undefined;
    }
    if (object.phase !== undefined && object.phase !== null) {
      message.phase = object.phase;
    } else {
      message.phase = 0;
    }
    return message;
  },
};

const basePVector2: object = { x: 0, y: 0 };

export const PVector2 = {
  encode(message: PVector2, writer: Writer = Writer.create()): Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PVector2 {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePVector2 } as PVector2;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.float();
          break;
        case 2:
          message.y = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PVector2 {
    const message = { ...basePVector2 } as PVector2;
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
    return message;
  },

  toJSON(message: PVector2): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    return obj;
  },

  fromPartial(object: DeepPartial<PVector2>): PVector2 {
    const message = { ...basePVector2 } as PVector2;
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
    return message;
  },
};

const basePVector3: object = { x: 0, y: 0, z: 0 };

export const PVector3 = {
  encode(message: PVector3, writer: Writer = Writer.create()): Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(29).float(message.z);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PVector3 {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePVector3 } as PVector3;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.float();
          break;
        case 2:
          message.y = reader.float();
          break;
        case 3:
          message.z = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PVector3 {
    const message = { ...basePVector3 } as PVector3;
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
    if (object.z !== undefined && object.z !== null) {
      message.z = Number(object.z);
    } else {
      message.z = 0;
    }
    return message;
  },

  toJSON(message: PVector3): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.z !== undefined && (obj.z = message.z);
    return obj;
  },

  fromPartial(object: DeepPartial<PVector3>): PVector3 {
    const message = { ...basePVector3 } as PVector3;
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
    if (object.z !== undefined && object.z !== null) {
      message.z = object.z;
    } else {
      message.z = 0;
    }
    return message;
  },
};

const baseReplayFrame: object = { judgeTime: 0 };

export const ReplayFrame = {
  encode(message: ReplayFrame, writer: Writer = Writer.create()): Writer {
    if (message.judgeTime !== 0) {
      writer.uint32(8).int32(message.judgeTime);
    }
    for (const v of message.events) {
      ReplayTouchState.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ReplayFrame {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReplayFrame } as ReplayFrame;
    message.events = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.judgeTime = reader.int32();
          break;
        case 2:
          message.events.push(ReplayTouchState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReplayFrame {
    const message = { ...baseReplayFrame } as ReplayFrame;
    message.events = [];
    if (object.judgeTime !== undefined && object.judgeTime !== null) {
      message.judgeTime = Number(object.judgeTime);
    } else {
      message.judgeTime = 0;
    }
    if (object.events !== undefined && object.events !== null) {
      for (const e of object.events) {
        message.events.push(ReplayTouchState.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ReplayFrame): unknown {
    const obj: any = {};
    message.judgeTime !== undefined && (obj.judgeTime = message.judgeTime);
    if (message.events) {
      obj.events = message.events.map((e) =>
        e ? ReplayTouchState.toJSON(e) : undefined
      );
    } else {
      obj.events = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ReplayFrame>): ReplayFrame {
    const message = { ...baseReplayFrame } as ReplayFrame;
    message.events = [];
    if (object.judgeTime !== undefined && object.judgeTime !== null) {
      message.judgeTime = object.judgeTime;
    } else {
      message.judgeTime = 0;
    }
    if (object.events !== undefined && object.events !== null) {
      for (const e of object.events) {
        message.events.push(ReplayTouchState.fromPartial(e));
      }
    }
    return message;
  },
};

const baseFileChecksum: object = { file: "" };

export const FileChecksum = {
  encode(message: FileChecksum, writer: Writer = Writer.create()): Writer {
    if (message.file !== "") {
      writer.uint32(10).string(message.file);
    }
    if (message.checksum.length !== 0) {
      writer.uint32(18).bytes(message.checksum);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FileChecksum {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFileChecksum } as FileChecksum;
    message.checksum = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.file = reader.string();
          break;
        case 2:
          message.checksum = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileChecksum {
    const message = { ...baseFileChecksum } as FileChecksum;
    message.checksum = new Uint8Array();
    if (object.file !== undefined && object.file !== null) {
      message.file = String(object.file);
    } else {
      message.file = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = bytesFromBase64(object.checksum);
    }
    return message;
  },

  toJSON(message: FileChecksum): unknown {
    const obj: any = {};
    message.file !== undefined && (obj.file = message.file);
    message.checksum !== undefined &&
      (obj.checksum = base64FromBytes(
        message.checksum !== undefined ? message.checksum : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<FileChecksum>): FileChecksum {
    const message = { ...baseFileChecksum } as FileChecksum;
    if (object.file !== undefined && object.file !== null) {
      message.file = object.file;
    } else {
      message.file = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = new Uint8Array();
    }
    return message;
  },
};

const baseReplayFile: object = { uid: 0, sid: 0, difficulty: 0, mods: 0 };

export const ReplayFile = {
  encode(message: ReplayFile, writer: Writer = Writer.create()): Writer {
    if (message.uid !== 0) {
      writer.uint32(8).uint32(message.uid);
    }
    if (message.sid !== 0) {
      writer.uint32(16).int32(message.sid);
    }
    if (message.difficulty !== 0) {
      writer.uint32(24).int32(message.difficulty);
    }
    if (message.mods !== 0) {
      writer.uint32(32).uint64(message.mods);
    }
    for (const v of message.checksums) {
      FileChecksum.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.frames) {
      ReplayFrame.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ReplayFile {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReplayFile } as ReplayFile;
    message.checksums = [];
    message.frames = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uid = reader.uint32();
          break;
        case 2:
          message.sid = reader.int32();
          break;
        case 3:
          message.difficulty = reader.int32() as any;
          break;
        case 4:
          message.mods = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.checksums.push(FileChecksum.decode(reader, reader.uint32()));
          break;
        case 6:
          message.frames.push(ReplayFrame.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReplayFile {
    const message = { ...baseReplayFile } as ReplayFile;
    message.checksums = [];
    message.frames = [];
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = Number(object.uid);
    } else {
      message.uid = 0;
    }
    if (object.sid !== undefined && object.sid !== null) {
      message.sid = Number(object.sid);
    } else {
      message.sid = 0;
    }
    if (object.difficulty !== undefined && object.difficulty !== null) {
      message.difficulty = difficultyFromJSON(object.difficulty);
    } else {
      message.difficulty = 0;
    }
    if (object.mods !== undefined && object.mods !== null) {
      message.mods = Number(object.mods);
    } else {
      message.mods = 0;
    }
    if (object.checksums !== undefined && object.checksums !== null) {
      for (const e of object.checksums) {
        message.checksums.push(FileChecksum.fromJSON(e));
      }
    }
    if (object.frames !== undefined && object.frames !== null) {
      for (const e of object.frames) {
        message.frames.push(ReplayFrame.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ReplayFile): unknown {
    const obj: any = {};
    message.uid !== undefined && (obj.uid = message.uid);
    message.sid !== undefined && (obj.sid = message.sid);
    message.difficulty !== undefined &&
      (obj.difficulty = difficultyToJSON(message.difficulty));
    message.mods !== undefined && (obj.mods = message.mods);
    if (message.checksums) {
      obj.checksums = message.checksums.map((e) =>
        e ? FileChecksum.toJSON(e) : undefined
      );
    } else {
      obj.checksums = [];
    }
    if (message.frames) {
      obj.frames = message.frames.map((e) =>
        e ? ReplayFrame.toJSON(e) : undefined
      );
    } else {
      obj.frames = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ReplayFile>): ReplayFile {
    const message = { ...baseReplayFile } as ReplayFile;
    message.checksums = [];
    message.frames = [];
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = object.uid;
    } else {
      message.uid = 0;
    }
    if (object.sid !== undefined && object.sid !== null) {
      message.sid = object.sid;
    } else {
      message.sid = 0;
    }
    if (object.difficulty !== undefined && object.difficulty !== null) {
      message.difficulty = object.difficulty;
    } else {
      message.difficulty = 0;
    }
    if (object.mods !== undefined && object.mods !== null) {
      message.mods = object.mods;
    } else {
      message.mods = 0;
    }
    if (object.checksums !== undefined && object.checksums !== null) {
      for (const e of object.checksums) {
        message.checksums.push(FileChecksum.fromPartial(e));
      }
    }
    if (object.frames !== undefined && object.frames !== null) {
      for (const e of object.frames) {
        message.frames.push(ReplayFrame.fromPartial(e));
      }
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
