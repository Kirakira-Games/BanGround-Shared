// source: mHeader.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.mHeader');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mHeader.repeatedFields_, null);
};
goog.inherits(proto.mHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mHeader.displayName = 'proto.mHeader';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mHeader.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mHeader.prototype.toObject = function(opt_includeInstance) {
  return proto.mHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mHeader} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
    mid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    artist: jspb.Message.getFieldWithDefault(msg, 3, ""),
    previewList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 4)) == null ? undefined : f,
    bpmList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 5)) == null ? undefined : f,
    length: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mHeader}
 */
proto.mHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mHeader;
  return proto.mHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mHeader}
 */
proto.mHeader.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setArtist(value);
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPreview(values[i]);
      }
      break;
    case 5:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addBpm(values[i]);
      }
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLength(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mHeader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mHeader.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getArtist();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPreviewList();
  if (f.length > 0) {
    writer.writePackedFloat(
      4,
      f
    );
  }
  f = message.getBpmList();
  if (f.length > 0) {
    writer.writePackedFloat(
      5,
      f
    );
  }
  f = message.getLength();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
};


/**
 * optional int32 mid = 1;
 * @return {number}
 */
proto.mHeader.prototype.getMid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mHeader} returns this
 */
proto.mHeader.prototype.setMid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.mHeader.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mHeader} returns this
 */
proto.mHeader.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string artist = 3;
 * @return {string}
 */
proto.mHeader.prototype.getArtist = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.mHeader} returns this
 */
proto.mHeader.prototype.setArtist = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated float preview = 4;
 * @return {!Array<number>}
 */
proto.mHeader.prototype.getPreviewList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.mHeader} returns this
 */
proto.mHeader.prototype.setPreviewList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.mHeader} returns this
 */
proto.mHeader.prototype.addPreview = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mHeader} returns this
 */
proto.mHeader.prototype.clearPreviewList = function() {
  return this.setPreviewList([]);
};


/**
 * repeated float bpm = 5;
 * @return {!Array<number>}
 */
proto.mHeader.prototype.getBpmList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.mHeader} returns this
 */
proto.mHeader.prototype.setBpmList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.mHeader} returns this
 */
proto.mHeader.prototype.addBpm = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mHeader} returns this
 */
proto.mHeader.prototype.clearBpmList = function() {
  return this.setBpmList([]);
};


/**
 * optional float length = 6;
 * @return {number}
 */
proto.mHeader.prototype.getLength = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mHeader} returns this
 */
proto.mHeader.prototype.setLength = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


