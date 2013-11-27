#include <node.h>
#include <v8.h>

using namespace v8;

Handle<Value> ThisMethodHere(const Arguments& args) {
  HandleScope scope;
  return scope.Close(String::New("world"));
}

void init(Handle<Object> exports) {
  exports->Set(
    String::NewSymbol("hello"),  // "hello" is the exported name
    FunctionTemplate::New(ThisMethodHere)->GetFunction()  // "hello" points to ThisMethodHere, as a function
  );
}

NODE_MODULE(hello, init) // hello matches filename
