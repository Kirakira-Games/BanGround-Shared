// <auto-generated>
//   This file was generated by a tool; you should avoid making direct changes.
//   Consider using 'partial classes' to extend these types
//   Input: Chart.proto
// </auto-generated>

#region Designer generated code
#pragma warning disable CS0612, CS0618, CS1591, CS3021, IDE0079, IDE1006, RCS1036, RCS1057, RCS1085, RCS1192
namespace V2
{

    [global::ProtoBuf.ProtoContract()]
    public partial class Chart : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
            => global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);

        [global::ProtoBuf.ProtoMember(1)]
        public Difficulty difficulty { get; set; }

        [global::ProtoBuf.ProtoMember(2)]
        public int level { get; set; }

        [global::ProtoBuf.ProtoMember(3)]
        public int offset { get; set; }

        [global::ProtoBuf.ProtoMember(4)]
        public global::System.Collections.Generic.List<TimingGroup> groups { get; } = new global::System.Collections.Generic.List<TimingGroup>();

        [global::ProtoBuf.ProtoMember(5)]
        public global::System.Collections.Generic.List<ValuePoint> bpm { get; } = new global::System.Collections.Generic.List<ValuePoint>();

        [global::ProtoBuf.ProtoMember(6)]
        public int version { get; set; }

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class TimingGroup : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
            => global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);

        [global::ProtoBuf.ProtoMember(1)]
        public global::System.Collections.Generic.List<Note> notes { get; } = new global::System.Collections.Generic.List<Note>();

        [global::ProtoBuf.ProtoMember(2)]
        public global::System.Collections.Generic.List<TimingPoint> points { get; } = new global::System.Collections.Generic.List<TimingPoint>();

        [global::ProtoBuf.ProtoMember(3)]
        public uint flags { get; set; }

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class Note : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
            => global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);

        [global::ProtoBuf.ProtoMember(1)]
        public NoteType type { get; set; }

        [global::ProtoBuf.ProtoMember(2, IsPacked = true)]
        public int[] beat { get; set; }

        [global::ProtoBuf.ProtoMember(3)]
        public int lane { get; set; }

        [global::ProtoBuf.ProtoMember(4)]
        public int tickStack { get; set; }

        [global::ProtoBuf.ProtoMember(5)]
        public global::System.Collections.Generic.List<NoteAnim> anims { get; } = new global::System.Collections.Generic.List<NoteAnim>();

        [global::ProtoBuf.ProtoMember(6)]
        public float x { get; set; }

        [global::ProtoBuf.ProtoMember(7)]
        public float y { get; set; }

        [global::ProtoBuf.ProtoMember(8)]
        public uint flags { get; set; }

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class NoteAnim : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
            => global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);

        [global::ProtoBuf.ProtoMember(1, IsPacked = true)]
        public int[] beat { get; set; }

        [global::ProtoBuf.ProtoMember(2)]
        public TransitionVector pos { get; set; }

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class TransitionVector : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
            => global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);

        [global::ProtoBuf.ProtoMember(1)]
        public TransitionPropertyFloat x { get; set; }

        [global::ProtoBuf.ProtoMember(2)]
        public TransitionPropertyFloat y { get; set; }

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class TransitionPropertyFloat : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
            => global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);

        [global::ProtoBuf.ProtoMember(1)]
        public float value { get; set; }

        [global::ProtoBuf.ProtoMember(2)]
        public Transition transition { get; set; }

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class TimingPoint : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
            => global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);

        [global::ProtoBuf.ProtoMember(1, IsPacked = true)]
        public int[] beat { get; set; }

        [global::ProtoBuf.ProtoMember(2)]
        public TransitionPropertyFloat speed { get; set; }

        [global::ProtoBuf.ProtoMember(3)]
        public TransitionColor tap { get; set; }

        [global::ProtoBuf.ProtoMember(4)]
        public TransitionColor tapGrey { get; set; }

        [global::ProtoBuf.ProtoMember(5)]
        public TransitionColor flick { get; set; }

        [global::ProtoBuf.ProtoMember(6)]
        public TransitionColor slideTick { get; set; }

        [global::ProtoBuf.ProtoMember(7)]
        public TransitionColor slide { get; set; }

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class TransitionColor : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
            => global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);

        [global::ProtoBuf.ProtoMember(1)]
        public int r { get; set; }

        [global::ProtoBuf.ProtoMember(2)]
        public int g { get; set; }

        [global::ProtoBuf.ProtoMember(3)]
        public int b { get; set; }

        [global::ProtoBuf.ProtoMember(4)]
        public int a { get; set; }

        [global::ProtoBuf.ProtoMember(5)]
        public Transition transition { get; set; }

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class ValuePoint : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
            => global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);

        [global::ProtoBuf.ProtoMember(1, IsPacked = true)]
        public int[] beat { get; set; }

        [global::ProtoBuf.ProtoMember(2)]
        public float value { get; set; }

    }

    [global::ProtoBuf.ProtoContract()]
    [Newtonsoft.Json.JsonConverter(typeof(Newtonsoft.Json.Converters.StringEnumConverter))]\n    public enum Difficulty
    {
        Easy = 0,
        Normal = 1,
        Hard = 2,
        Expert = 3,
        Special = 4,
    }

    [global::ProtoBuf.ProtoContract()]
    [Newtonsoft.Json.JsonConverter(typeof(Newtonsoft.Json.Converters.StringEnumConverter))]\n    public enum NoteType
    {
        BPM = 0,
        Single = 1,
        Flick = 2,
        SlideTick = 3,
        SlideTickEnd = 4,
    }

    [global::ProtoBuf.ProtoContract()]
    [Newtonsoft.Json.JsonConverter(typeof(Newtonsoft.Json.Converters.StringEnumConverter))]\n    public enum Transition
    {
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
    }

}

#pragma warning restore CS0612, CS0618, CS1591, CS3021, IDE0079, IDE1006, RCS1036, RCS1057, RCS1085, RCS1192
#endregion
