/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "";

export interface mHeader {
  mid: number;
  title: string;
  artist: string;
  preview: number[];
  bpm: number[];
  length: number;
}

const basemHeader: object = {
  mid: 0,
  title: "",
  artist: "",
  preview: 0,
  bpm: 0,
  length: 0,
};

export const mHeader = {
  encode(message: mHeader, writer: Writer = Writer.create()): Writer {
    if (message.mid !== 0) {
      writer.uint32(8).int32(message.mid);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.artist !== "") {
      writer.uint32(26).string(message.artist);
    }
    writer.uint32(34).fork();
    for (const v of message.preview) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(42).fork();
    for (const v of message.bpm) {
      writer.float(v);
    }
    writer.ldelim();
    if (message.length !== 0) {
      writer.uint32(53).float(message.length);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): mHeader {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basemHeader } as mHeader;
    message.preview = [];
    message.bpm = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mid = reader.int32();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.artist = reader.string();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.preview.push(reader.float());
            }
          } else {
            message.preview.push(reader.float());
          }
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.bpm.push(reader.float());
            }
          } else {
            message.bpm.push(reader.float());
          }
          break;
        case 6:
          message.length = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): mHeader {
    const message = { ...basemHeader } as mHeader;
    message.preview = [];
    message.bpm = [];
    if (object.mid !== undefined && object.mid !== null) {
      message.mid = Number(object.mid);
    } else {
      message.mid = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.artist !== undefined && object.artist !== null) {
      message.artist = String(object.artist);
    } else {
      message.artist = "";
    }
    if (object.preview !== undefined && object.preview !== null) {
      for (const e of object.preview) {
        message.preview.push(Number(e));
      }
    }
    if (object.bpm !== undefined && object.bpm !== null) {
      for (const e of object.bpm) {
        message.bpm.push(Number(e));
      }
    }
    if (object.length !== undefined && object.length !== null) {
      message.length = Number(object.length);
    } else {
      message.length = 0;
    }
    return message;
  },

  toJSON(message: mHeader): unknown {
    const obj: any = {};
    message.mid !== undefined && (obj.mid = message.mid);
    message.title !== undefined && (obj.title = message.title);
    message.artist !== undefined && (obj.artist = message.artist);
    if (message.preview) {
      obj.preview = message.preview.map((e) => e);
    } else {
      obj.preview = [];
    }
    if (message.bpm) {
      obj.bpm = message.bpm.map((e) => e);
    } else {
      obj.bpm = [];
    }
    message.length !== undefined && (obj.length = message.length);
    return obj;
  },

  fromPartial(object: DeepPartial<mHeader>): mHeader {
    const message = { ...basemHeader } as mHeader;
    message.preview = [];
    message.bpm = [];
    if (object.mid !== undefined && object.mid !== null) {
      message.mid = object.mid;
    } else {
      message.mid = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.artist !== undefined && object.artist !== null) {
      message.artist = object.artist;
    } else {
      message.artist = "";
    }
    if (object.preview !== undefined && object.preview !== null) {
      for (const e of object.preview) {
        message.preview.push(e);
      }
    }
    if (object.bpm !== undefined && object.bpm !== null) {
      for (const e of object.bpm) {
        message.bpm.push(e);
      }
    }
    if (object.length !== undefined && object.length !== null) {
      message.length = object.length;
    } else {
      message.length = 0;
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
