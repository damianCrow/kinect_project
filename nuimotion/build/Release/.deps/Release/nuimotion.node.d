cmd_Release/nuimotion.node := c++ -bundle -undefined dynamic_lookup -Wl,-search_paths_first -mmacosx-version-min=10.5 -arch x86_64 -L./Release  -o Release/nuimotion.node Release/obj.target/nuimotion/src/Main.o Release/obj.target/nuimotion/src/enums/EnumMapping.o Release/obj.target/nuimotion/src/gestures/GestureRecognizer.o Release/obj.target/nuimotion/src/gestures/Swipe.o Release/obj.target/nuimotion/src/gestures/Wave.o /Users/damianwhyte/Documents/Projects/Kinect/NodeV/OpenNI-MacOSX-x64-2.2/Tools/libOpenNI2.dylib /Users/damianwhyte/Documents/Projects/Kinect/NodeV/NiTE-MacOSX-x64-2.2/Redist/libNiTE2.dylib
