/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "";

export interface cHeader {
  version: number;
  sid: number;
  mid: number;
  author: string;
  authorNick: string;
  backgroundFile: BackgroundFile | undefined;
  preview: number[];
  tag: string[];
}

export interface BackgroundFile {
  pic: string;
  vid: string;
}

const basecHeader: object = {
  version: 0,
  sid: 0,
  mid: 0,
  author: "",
  authorNick: "",
  preview: 0,
  tag: "",
};

export const cHeader = {
  encode(message: cHeader, writer: Writer = Writer.create()): Writer {
    if (message.version !== 0) {
      writer.uint32(8).int32(message.version);
    }
    if (message.sid !== 0) {
      writer.uint32(16).int32(message.sid);
    }
    if (message.mid !== 0) {
      writer.uint32(24).int32(message.mid);
    }
    if (message.author !== "") {
      writer.uint32(34).string(message.author);
    }
    if (message.authorNick !== "") {
      writer.uint32(42).string(message.authorNick);
    }
    if (message.backgroundFile !== undefined) {
      BackgroundFile.encode(
        message.backgroundFile,
        writer.uint32(50).fork()
      ).ldelim();
    }
    writer.uint32(58).fork();
    for (const v of message.preview) {
      writer.float(v);
    }
    writer.ldelim();
    for (const v of message.tag) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): cHeader {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basecHeader } as cHeader;
    message.preview = [];
    message.tag = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int32();
          break;
        case 2:
          message.sid = reader.int32();
          break;
        case 3:
          message.mid = reader.int32();
          break;
        case 4:
          message.author = reader.string();
          break;
        case 5:
          message.authorNick = reader.string();
          break;
        case 6:
          message.backgroundFile = BackgroundFile.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.preview.push(reader.float());
            }
          } else {
            message.preview.push(reader.float());
          }
          break;
        case 8:
          message.tag.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): cHeader {
    const message = { ...basecHeader } as cHeader;
    message.preview = [];
    message.tag = [];
    if (object.version !== undefined && object.version !== null) {
      message.version = Number(object.version);
    } else {
      message.version = 0;
    }
    if (object.sid !== undefined && object.sid !== null) {
      message.sid = Number(object.sid);
    } else {
      message.sid = 0;
    }
    if (object.mid !== undefined && object.mid !== null) {
      message.mid = Number(object.mid);
    } else {
      message.mid = 0;
    }
    if (object.author !== undefined && object.author !== null) {
      message.author = String(object.author);
    } else {
      message.author = "";
    }
    if (object.authorNick !== undefined && object.authorNick !== null) {
      message.authorNick = String(object.authorNick);
    } else {
      message.authorNick = "";
    }
    if (object.backgroundFile !== undefined && object.backgroundFile !== null) {
      message.backgroundFile = BackgroundFile.fromJSON(object.backgroundFile);
    } else {
      message.backgroundFile = undefined;
    }
    if (object.preview !== undefined && object.preview !== null) {
      for (const e of object.preview) {
        message.preview.push(Number(e));
      }
    }
    if (object.tag !== undefined && object.tag !== null) {
      for (const e of object.tag) {
        message.tag.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: cHeader): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.sid !== undefined && (obj.sid = message.sid);
    message.mid !== undefined && (obj.mid = message.mid);
    message.author !== undefined && (obj.author = message.author);
    message.authorNick !== undefined && (obj.authorNick = message.authorNick);
    message.backgroundFile !== undefined &&
      (obj.backgroundFile = message.backgroundFile
        ? BackgroundFile.toJSON(message.backgroundFile)
        : undefined);
    if (message.preview) {
      obj.preview = message.preview.map((e) => e);
    } else {
      obj.preview = [];
    }
    if (message.tag) {
      obj.tag = message.tag.map((e) => e);
    } else {
      obj.tag = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<cHeader>): cHeader {
    const message = { ...basecHeader } as cHeader;
    message.preview = [];
    message.tag = [];
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = 0;
    }
    if (object.sid !== undefined && object.sid !== null) {
      message.sid = object.sid;
    } else {
      message.sid = 0;
    }
    if (object.mid !== undefined && object.mid !== null) {
      message.mid = object.mid;
    } else {
      message.mid = 0;
    }
    if (object.author !== undefined && object.author !== null) {
      message.author = object.author;
    } else {
      message.author = "";
    }
    if (object.authorNick !== undefined && object.authorNick !== null) {
      message.authorNick = object.authorNick;
    } else {
      message.authorNick = "";
    }
    if (object.backgroundFile !== undefined && object.backgroundFile !== null) {
      message.backgroundFile = BackgroundFile.fromPartial(
        object.backgroundFile
      );
    } else {
      message.backgroundFile = undefined;
    }
    if (object.preview !== undefined && object.preview !== null) {
      for (const e of object.preview) {
        message.preview.push(e);
      }
    }
    if (object.tag !== undefined && object.tag !== null) {
      for (const e of object.tag) {
        message.tag.push(e);
      }
    }
    return message;
  },
};

const baseBackgroundFile: object = { pic: "", vid: "" };

export const BackgroundFile = {
  encode(message: BackgroundFile, writer: Writer = Writer.create()): Writer {
    if (message.pic !== "") {
      writer.uint32(10).string(message.pic);
    }
    if (message.vid !== "") {
      writer.uint32(18).string(message.vid);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BackgroundFile {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBackgroundFile } as BackgroundFile;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pic = reader.string();
          break;
        case 2:
          message.vid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BackgroundFile {
    const message = { ...baseBackgroundFile } as BackgroundFile;
    if (object.pic !== undefined && object.pic !== null) {
      message.pic = String(object.pic);
    } else {
      message.pic = "";
    }
    if (object.vid !== undefined && object.vid !== null) {
      message.vid = String(object.vid);
    } else {
      message.vid = "";
    }
    return message;
  },

  toJSON(message: BackgroundFile): unknown {
    const obj: any = {};
    message.pic !== undefined && (obj.pic = message.pic);
    message.vid !== undefined && (obj.vid = message.vid);
    return obj;
  },

  fromPartial(object: DeepPartial<BackgroundFile>): BackgroundFile {
    const message = { ...baseBackgroundFile } as BackgroundFile;
    if (object.pic !== undefined && object.pic !== null) {
      message.pic = object.pic;
    } else {
      message.pic = "";
    }
    if (object.vid !== undefined && object.vid !== null) {
      message.vid = object.vid;
    } else {
      message.vid = "";
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
