// source: Chart.proto
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

goog.provide('proto.TimingPoint');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.TransitionColor');
goog.require('proto.TransitionPropertyFloat');

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
proto.TimingPoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.TimingPoint.repeatedFields_, null);
};
goog.inherits(proto.TimingPoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TimingPoint.displayName = 'proto.TimingPoint';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.TimingPoint.repeatedFields_ = [1];



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
proto.TimingPoint.prototype.toObject = function(opt_includeInstance) {
  return proto.TimingPoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TimingPoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TimingPoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    beatList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    speed: (f = msg.getSpeed()) && proto.TransitionPropertyFloat.toObject(includeInstance, f),
    tap: (f = msg.getTap()) && proto.TransitionColor.toObject(includeInstance, f),
    tapgrey: (f = msg.getTapgrey()) && proto.TransitionColor.toObject(includeInstance, f),
    flick: (f = msg.getFlick()) && proto.TransitionColor.toObject(includeInstance, f),
    slidetick: (f = msg.getSlidetick()) && proto.TransitionColor.toObject(includeInstance, f),
    slide: (f = msg.getSlide()) && proto.TransitionColor.toObject(includeInstance, f)
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
 * @return {!proto.TimingPoint}
 */
proto.TimingPoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TimingPoint;
  return proto.TimingPoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TimingPoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TimingPoint}
 */
proto.TimingPoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addBeat(values[i]);
      }
      break;
    case 2:
      var value = new proto.TransitionPropertyFloat;
      reader.readMessage(value,proto.TransitionPropertyFloat.deserializeBinaryFromReader);
      msg.setSpeed(value);
      break;
    case 3:
      var value = new proto.TransitionColor;
      reader.readMessage(value,proto.TransitionColor.deserializeBinaryFromReader);
      msg.setTap(value);
      break;
    case 4:
      var value = new proto.TransitionColor;
      reader.readMessage(value,proto.TransitionColor.deserializeBinaryFromReader);
      msg.setTapgrey(value);
      break;
    case 5:
      var value = new proto.TransitionColor;
      reader.readMessage(value,proto.TransitionColor.deserializeBinaryFromReader);
      msg.setFlick(value);
      break;
    case 6:
      var value = new proto.TransitionColor;
      reader.readMessage(value,proto.TransitionColor.deserializeBinaryFromReader);
      msg.setSlidetick(value);
      break;
    case 7:
      var value = new proto.TransitionColor;
      reader.readMessage(value,proto.TransitionColor.deserializeBinaryFromReader);
      msg.setSlide(value);
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
proto.TimingPoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TimingPoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TimingPoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TimingPoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBeatList();
  if (f.length > 0) {
    writer.writePackedInt32(
      1,
      f
    );
  }
  f = message.getSpeed();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.TransitionPropertyFloat.serializeBinaryToWriter
    );
  }
  f = message.getTap();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.TransitionColor.serializeBinaryToWriter
    );
  }
  f = message.getTapgrey();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.TransitionColor.serializeBinaryToWriter
    );
  }
  f = message.getFlick();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.TransitionColor.serializeBinaryToWriter
    );
  }
  f = message.getSlidetick();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.TransitionColor.serializeBinaryToWriter
    );
  }
  f = message.getSlide();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.TransitionColor.serializeBinaryToWriter
    );
  }
};


/**
 * repeated int32 beat = 1;
 * @return {!Array<number>}
 */
proto.TimingPoint.prototype.getBeatList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.TimingPoint} returns this
 */
proto.TimingPoint.prototype.setBeatList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.TimingPoint} returns this
 */
proto.TimingPoint.prototype.addBeat = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.TimingPoint} returns this
 */
proto.TimingPoint.prototype.clearBeatList = function() {
  return this.setBeatList([]);
};


/**
 * optional TransitionPropertyFloat speed = 2;
 * @return {?proto.TransitionPropertyFloat}
 */
proto.TimingPoint.prototype.getSpeed = function() {
  return /** @type{?proto.TransitionPropertyFloat} */ (
    jspb.Message.getWrapperField(this, proto.TransitionPropertyFloat, 2));
};


/**
 * @param {?proto.TransitionPropertyFloat|undefined} value
 * @return {!proto.TimingPoint} returns this
*/
proto.TimingPoint.prototype.setSpeed = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.TimingPoint} returns this
 */
proto.TimingPoint.prototype.clearSpeed = function() {
  return this.setSpeed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TimingPoint.prototype.hasSpeed = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TransitionColor tap = 3;
 * @return {?proto.TransitionColor}
 */
proto.TimingPoint.prototype.getTap = function() {
  return /** @type{?proto.TransitionColor} */ (
    jspb.Message.getWrapperField(this, proto.TransitionColor, 3));
};


/**
 * @param {?proto.TransitionColor|undefined} value
 * @return {!proto.TimingPoint} returns this
*/
proto.TimingPoint.prototype.setTap = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.TimingPoint} returns this
 */
proto.TimingPoint.prototype.clearTap = function() {
  return this.setTap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TimingPoint.prototype.hasTap = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TransitionColor tapGrey = 4;
 * @return {?proto.TransitionColor}
 */
proto.TimingPoint.prototype.getTapgrey = function() {
  return /** @type{?proto.TransitionColor} */ (
    jspb.Message.getWrapperField(this, proto.TransitionColor, 4));
};


/**
 * @param {?proto.TransitionColor|undefined} value
 * @return {!proto.TimingPoint} returns this
*/
proto.TimingPoint.prototype.setTapgrey = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.TimingPoint} returns this
 */
proto.TimingPoint.prototype.clearTapgrey = function() {
  return this.setTapgrey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TimingPoint.prototype.hasTapgrey = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional TransitionColor flick = 5;
 * @return {?proto.TransitionColor}
 */
proto.TimingPoint.prototype.getFlick = function() {
  return /** @type{?proto.TransitionColor} */ (
    jspb.Message.getWrapperField(this, proto.TransitionColor, 5));
};


/**
 * @param {?proto.TransitionColor|undefined} value
 * @return {!proto.TimingPoint} returns this
*/
proto.TimingPoint.prototype.setFlick = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.TimingPoint} returns this
 */
proto.TimingPoint.prototype.clearFlick = function() {
  return this.setFlick(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TimingPoint.prototype.hasFlick = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional TransitionColor slideTick = 6;
 * @return {?proto.TransitionColor}
 */
proto.TimingPoint.prototype.getSlidetick = function() {
  return /** @type{?proto.TransitionColor} */ (
    jspb.Message.getWrapperField(this, proto.TransitionColor, 6));
};


/**
 * @param {?proto.TransitionColor|undefined} value
 * @return {!proto.TimingPoint} returns this
*/
proto.TimingPoint.prototype.setSlidetick = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.TimingPoint} returns this
 */
proto.TimingPoint.prototype.clearSlidetick = function() {
  return this.setSlidetick(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TimingPoint.prototype.hasSlidetick = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional TransitionColor slide = 7;
 * @return {?proto.TransitionColor}
 */
proto.TimingPoint.prototype.getSlide = function() {
  return /** @type{?proto.TransitionColor} */ (
    jspb.Message.getWrapperField(this, proto.TransitionColor, 7));
};


/**
 * @param {?proto.TransitionColor|undefined} value
 * @return {!proto.TimingPoint} returns this
*/
proto.TimingPoint.prototype.setSlide = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.TimingPoint} returns this
 */
proto.TimingPoint.prototype.clearSlide = function() {
  return this.setSlide(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TimingPoint.prototype.hasSlide = function() {
  return jspb.Message.getField(this, 7) != null;
};


